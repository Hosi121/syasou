///|
#external
pub type Promise[T]

///|
pub async fn[T, E : Error] suspend(
  f : ((T) -> Unit, (E) -> Unit) -> Unit,
) -> T raise E = "%async.suspend"

///|
pub fn run_async(f : async () -> Unit noraise) -> Unit = "%async.run"

///|
#cfg(target="js")
extern "js" fn promise_new(executor : (Any, Any) -> Unit) -> Any =
  #| executor => new Promise(executor)

///|
#cfg(target="js")
extern "js" fn promise_wait(
  promise : Any,
  ok : (Any) -> Unit,
  error : (Any) -> Unit,
) -> Unit =
  #| (promise,ok,error) => {promise.then(ok,error)}

///|
#cfg(target="js")
extern "js" fn promise_resolve(value : Any) -> Any =
  #| value => Promise.resolve(value)

///|
#cfg(target="js")
extern "js" fn promise_all(values : Any) -> Promise[Unit] =
  #| values => Promise.all(values).then(() => {})

///|
#cfg(target="js")
extern "js" fn promise_settle(values : Any) -> Promise[Unit] =
  #| values => Promise.allSettled(values).then(() => {})

///|
pub fn[T] Promise::to_any(self : Promise[T]) -> Any = "%identity"

///|
pub impl[T] ToJs for Promise[T] with fn to_js(self) {
  self.to_any()
}

///|
pub impl[T] FromJs for Promise[T] with fn from_js(value) {
  identity(value)
}

///|
pub fn[T : ToJs] Promise::resolve(value : T) -> Promise[T] {
  identity(promise_resolve(any(value)))
}

///|
pub fn Promise::all(values : Array[Promise[Unit]]) -> Promise[Unit] {
  promise_all(any(values))
}

///|
pub fn Promise::allSettled(values : Array[Promise[Unit]]) -> Promise[Unit] {
  promise_settle(any(values))
}

///|
pub async fn[T : FromJs] Promise::wait(self : Promise[T]) -> T {
  suspend((ok, error) => {
    promise_wait(self.to_any(), value => ok(value.cast()), value => {
      error(HostError(value))
    })
  })
}

///|
pub fn[T : ToJs] promisify0(task : async () -> T) -> () -> Promise[T] {
  () => {
    identity(
      promise_new((ok, error) => {
        run_async(async fn() noraise {
          try ok._invoke([any(task())]) |> ignore catch {
            _ => error._invoke([any("MoonBit operation failed")]) |> ignore
          }
        })
      }),
    )
  }
}

///|
pub fn[A : FromJs, B] Promise::then(
  self : Promise[A],
  f : (A) -> Promise[B],
) -> Promise[B] {
  identity(self.to_any()._call("then", [from_fn1(f)]))
}

///|
pub fn[A] Promise::catch_(
  self : Promise[A],
  f : (Any) -> Promise[A],
) -> Promise[A] {
  identity(self.to_any()._call("catch", [from_fn1(f)]))
}
