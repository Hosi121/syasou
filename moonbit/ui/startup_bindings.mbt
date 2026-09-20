///|
// A class is required by React's error-boundary protocol. State decisions and
// error recovery stay in startup.mbt; this adapter implements that protocol.
extern "js" fn boundary_class(component : @js.Any) -> @js.Any =
  #| Component => class extends Component {
  #|   state = {failed:false};
  #|   static getDerivedStateFromError() {return {failed:true}}
  #|   componentDidCatch() {this.props.onError()}
  #|   render() {return this.state.failed ? null : this.props.children}
  #| }

///|
let boundary_type : Ref[@js.Any?] = Ref(None)

///|
fn world_boundary(
  on_error : () -> Unit,
  child : @react.Element,
) -> @react.Element {
  if boundary_type.val is None {
    boundary_type.val = Some(
      boundary_class(components.val.unwrap()._get("react")._get("Component")),
    )
  }
  make_node(boundary_type.val.unwrap(), [p("onError", on_error)], [child])
}

///|
// Keep the source module boundary: Vite can split the world, and a failed world
// download reaches the title's error boundary rather than preventing its mount.
extern "js" fn load_world() -> @js.Promise[@js.Any] =
  #| () => import('../../App.tsx').then(async module => {await module.prepareUi();return {default:module.default}})

///|
let lazy_world : (AppProps) -> @react.Element = @react.lazy_(load_world)
