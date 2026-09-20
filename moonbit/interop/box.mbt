// Both variants retain the compiler's common enum representation. Unboxing
// requires exactly the type used to box; hook positions enforce that invariant.

///|
pub enum Box[T] {
  Value(T)
  Empty
}

///|
pub fn[T] box(value : T) -> Box[Unit] {
  identity(Box::Value(value))
}

///|
pub fn[T] unbox(value : Box[Unit]) -> T {
  let typed : Box[T] = identity(value)
  match typed {
    Value(value) => value
    Empty => panic()
  }
}

///|
let handoff : Ref[Box[Unit]] = Ref(Box::Empty)
// Capsules retain MoonBit values through a GC-traced closure. No registry or
// finalizers are needed, and no application fields are copied into JavaScript.

///|
pub fn[T] capsule(value : T) -> Any {
  let stored = box(value)
  let out = new_object()
  out._set("_read", from_fn0(() => handoff.val = stored))
  out
}

///|
pub fn[T] uncapsule(value : Any) -> T {
  value._call("_read", []) |> ignore
  let stored = handoff.val
  handoff.val = Box::Empty
  unbox(stored)
}
