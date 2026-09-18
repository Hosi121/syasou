import type { Ticket } from './tickets'

export function sampleTickets(now: number): Ticket[] {
  const samples = [
    { title: '読みかけの本を、ひと章', note: '気になっていた本の続きを読んだ。\n次は、折り目をつけたページから。', speed: 'local', scene: 'mist', minutes: 25 },
    { title: '企画のラフを描く', note: '浮かんだアイデアを三つ、紙に描いた。\nまだ途中だけれど、形が見えてきた。', speed: 'express', scene: 'dawn', minutes: 45 },
    { title: '明日のことを手帳に', note: '気にかかっていたことを、ひとつずつ書き出した。\n明日は、自分のペースで。', speed: 'rapid', scene: 'night', minutes: 15 },
  ] as const
  return samples.map((sample, i) => {
    const arrivedAt = now - (i + 1) * 86_400_000
    return {
      id: `sample-v1-${i + 1}`, kind: 'sample', title: sample.title, note: sample.note,
      speed: sample.speed, scene: sample.scene, arrivedAt, startedAt: arrivedAt - sample.minutes * 60_000,
    }
  })
}
