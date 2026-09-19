///|
extern "js" fn sample_buffer() -> Samples =
  #| () => new Float32Array([0.125, -0.25])

///|
test "audio samples preserve fractional reads and writes" {
  let samples = sample_buffer()
  assert_eq(samples.length(), 2)
  assert_eq(samples.get(0), 0.125)
  assert_eq(samples.get(1), -0.25)
  samples.set(0, 0.375)
  assert_eq(samples.get(0), 0.375)
}
