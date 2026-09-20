///|
pub fn sample_tickets(now : Double) -> Array[Ticket] {
  let samples = [
    (
      "読みかけの本を、ひと章", "気になっていた本の続きを読んだ。\n次は、折り目をつけたページから。",
      "local", "mist", 25.0,
    ),
    (
      "企画のラフを描く", "浮かんだアイデアを三つ、紙に描いた。\nまだ途中だけれど、形が見えてきた。",
      "express", "dawn", 45.0,
    ),
    (
      "明日のことを手帳に", "気にかかっていたことを、ひとつずつ書き出した。\n明日は、自分のペースで。",
      "rapid", "night", 15.0,
    ),
  ]
  samples.mapi((i, sample) => {
    let (title, note, speed, scene, minutes) = sample
    let arrived_at = now - (i + 1).to_double() * 86400000.0
    {
      id: "sample-v1-\{i + 1}",
      kind: Some("sample"),
      title,
      note,
      speed,
      scene,
      arrived_at,
      started_at: arrived_at - minutes * 60000.0,
    }
  })
}
