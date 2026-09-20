///|
test "Wasm callbacks retain identity for the same function and capture" {
  let cache = WeakMap()
  let callback = @js.from_fn2((capture : @js.Any, argument : Int) => {
    (capture._get("offset").cast() : Int) + argument
  })
  let first = @js.new_object()
  first._set("offset", @js.any(7))
  let second = @js.new_object()
  second._set("offset", @js.any(12))
  let a = make_closure(cache, callback, first)
  let b = make_closure(cache, callback, first)
  let c = make_closure(cache, callback, second)
  assert_true(@js.same_host(a, b))
  assert_false(@js.same_host(a, c))
  assert_eq((a._invoke([@js.any(3)]).cast() : Int), 10)
  assert_eq((c._invoke([@js.any(3)]).cast() : Int), 15)
  let other = @js.from_fn2((capture : @js.Any, argument : Int) => {
    (capture._get("offset").cast() : Int) - argument
  })
  let d = make_closure(cache, other, first)
  assert_false(@js.same_host(a, d))
  assert_eq((d._invoke([@js.any(3)]).cast() : Int), 4)
}
