///|
// Only the ticket stack uses a keyed, single-child exit-before-enter transition.
// Keep the latest requested card while the old paper leaves the tray.
fn patch_presence(
  mounted : Mounted,
  children : Array[Element],
  context : Context,
) -> Unit {
  if mounted.exiting {
    return
  }
  if mounted.children.length() == 1 &&
    children.length() == 1 &&
    !compatible(mounted.children[0].tree, children[0]) {
    let old = mounted.children[0]
    let exit_style = style_map(old.props._get("exit"))
    let transition = old.props._get("transition")
    let duration = if @js.is_nullish(transition) {
      300.0
    } else {
      number_option(transition, "duration", 0.3) * 1000.0
    }
    if !exit_style.is_empty() && duration > 0.0 {
      mounted.exiting = true
      if old.animation is Some(animation) {
        animation.cancel()
      }
      let from = current_style(
        old.first,
        [
          for name in exit_style.keys() => name
        ],
      )
      apply_style(old.first, exit_style)
      old.animation = Some(
        animate(
          old.first,
          from,
          map_object(exit_style),
          duration,
          0.0,
          "ease-out",
          () => {
            if mounted.scope.alive {
              dispose(old)
              mounted.children = []
              mounted.exiting = false
              patch(mounted, mounted.tree, mounted.context, false)
              flush_effects()
            }
          },
        ),
      )
      return
    }
  }
  mounted.children = reconcile(
    mounted.parent,
    mounted.children,
    children,
    Some(mounted.last),
    context,
    mounted.svg,
  )
}
