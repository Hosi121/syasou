import { writeFileSync } from 'node:fs'
import { deflateSync } from 'node:zlib'

// Deterministic, code-drawn ink speckles; no photographic texture is used.
const size = 512
const pixels = Buffer.alloc(size * (1 + size * 4))
let state = 927163
function random() { state ^= state << 13; state ^= state >>> 17; state ^= state << 5; return (state >>> 0) / 4294967296 }
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    const offset = y * (1 + size * 4) + 1 + x * 4
    const n = random()
    pixels[offset + 3] = n < .024 ? 195 : n < .22 ? 30 + random() * 105 : random() * 12
  }
}
function crc32(data) {
  let c = 0xffffffff
  for (const byte of data) {
    c ^= byte
    for (let i = 0; i < 8; i++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1))
  }
  return (c ^ 0xffffffff) >>> 0
}
function chunk(name, data) {
  const type = Buffer.from(name)
  const length = Buffer.alloc(4); length.writeUInt32BE(data.length)
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(Buffer.concat([type, data])))
  return Buffer.concat([length, type, data, crc])
}
const header = Buffer.alloc(13)
header.writeUInt32BE(size, 0); header.writeUInt32BE(size, 4); header[8] = 8; header[9] = 6
writeFileSync(new URL('../../public/paper-grain.png', import.meta.url), Buffer.concat([
  Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', header), chunk('IDAT', deflateSync(pixels)), chunk('IEND', Buffer.alloc(0)),
]))
