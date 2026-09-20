///|
fn crc32(data : Bytes) -> UInt {
  let mut crc = 0xffffffffU
  for byte in data {
    crc = crc ^ byte.to_uint()
    for _ in 0..<8 {
      crc = (crc >> 1) ^ (0xedb88320U & (0U - (crc & 1)))
    }
  }
  crc ^ 0xffffffffU
}

///|
fn big_endian(value : UInt) -> Bytes {
  Bytes::from_array([
    (value >> 24).to_byte(),
    (value >> 16).to_byte(),
    (value >> 8).to_byte(),
    value.to_byte(),
  ])
}

///|
fn png_chunk(name : String, data : Bytes) -> Bytes {
  let payload = @utf8.encode(name) + data
  big_endian(data.length().reinterpret_as_uint()) +
  payload +
  big_endian(crc32(payload))
}

///|
fn grain_png() -> Bytes {
  let size = 512
  let pixels = Array::make(size * (1 + size * 4), b'\x00')
  let mut state = 927163U
  let random = () => {
    state = state ^ (state << 13)
    state = state ^ (state >> 17)
    state = state ^ (state << 5)
    state.to_double() / 4294967296.0
  }
  for y in 0..<size {
    for x in 0..<size {
      let offset = y * (1 + size * 4) + 1 + x * 4
      let n = random()
      let alpha = if n < 0.024 {
        195.0
      } else if n < 0.22 {
        30.0 + random() * 105.0
      } else {
        random() * 12.0
      }
      pixels[offset + 3] = alpha.to_int().to_byte()
    }
  }
  let header = big_endian(size.reinterpret_as_uint()) +
    big_endian(size.reinterpret_as_uint()) +
    b"\x08\x06\x00\x00\x00"
  b"\x89PNG\x0d\x0a\x1a\x0a" +
  png_chunk("IHDR", header) +
  png_chunk("IDAT", deflate(Bytes::from_array(pixels[:]))) +
  png_chunk("IEND", b"")
}
