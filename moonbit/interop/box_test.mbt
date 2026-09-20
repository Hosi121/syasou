///|
test "heterogeneous slots preserve values, closures and mutable references" {
  let reference = Ref(4)
  let callback = (value : Int) => value + reference.val
  let slots = [
    @interop.box(42),
    @interop.box("車窓🚃"),
    @interop.box(reference),
    @interop.box(callback),
    @interop.box((None : Double?)),
  ]
  assert_eq((@interop.unbox(slots[0]) : Int), 42)
  assert_eq((@interop.unbox(slots[1]) : String), "車窓🚃")
  let retained : Ref[Int] = @interop.unbox(slots[2])
  retained.val = 9
  assert_eq(reference.val, 9)
  let restored : (Int) -> Int = @interop.unbox(slots[3])
  assert_true(physical_equal(callback, restored))
  assert_eq(restored(3), 12)
  assert_true((@interop.unbox(slots[4]) : Double?) is None)
}
