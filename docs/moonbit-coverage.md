# MoonBit 化の範囲

**アプリの制御ロジックと開発 CLI は MoonBit で実装しています。リポジトリ全体が 100% MoonBit という意味ではありません。**

画面・旅・切符・保存検証・描画・音声合成は `wasm-gc`、Wasm のローダーと最初の通信エラー検知は `js` ターゲットです。配信する JS は MoonBit のコンパイル結果と型付き FFI の生成結果です。

## 互換層の廃止

旧公開 API の `src/lib/` 11 モジュール、`bridge.js` とその型宣言、凍結した旧 TypeScript / React 実装、公開型の比較、期待値を再採取するツールを削除しました。専用だった `clsx`・`tailwind-merge` と TypeScript コンパイラも依存から外しています。

アプリで利用する旧セーブデータの読み込みは維持しています。`moonbit/bridge/` は画面・保存データの内部変換に使いますが、外部向けの JS API は出力しません。採取済みの期待値と MoonBit の単体テストは、ゲームの回帰テストとして維持します。

## 残っているもの

| 範囲 | 現状 |
| --- | --- |
| 開発 CLI | 手書き JS 8 ファイルを削除。実装は `moonbit/dev/`、Node 用生成物は `scripts/generated/dev.js` |
| `tests/wasm/` の 9 ファイル | Node 上の Wasm 回帰テストと模擬ブラウザ API |
| `tests/` 直下の 8 ファイル | Playwright のシナリオとヘルパー。残る TypeScript はこの範囲 |
| 設定 3 ファイル | Vite / Playwright の JS 設定。本番モジュールの判定ロジックは MoonBit |
| `src/generated/moonbit/` と `scripts/generated/` の JS | MoonBit / FFI からの生成物 |
| HTML / CSS / GLSL / 画像・フォント | ブラウザと GPU に渡す文書・表現・素材 |

FFI 宣言にはブラウザ API と、開発 CLI 用の Node / Playwright API を呼ぶ JS の式が残ります。「配信 JS が 0 bytes」にはなりません。GitHub の言語比率も、生成物・テスト・開発ツールを含むため、アプリの実装元とは別の指標です。

## 本番コードの検査

`moonbit/runtime_policy/` が Vite の解決済みモジュール一覧を検査します。生成された `bootstrap.js` と `browser-host.js`、Vite の仮想モジュール、非コード資産を許可し、それ以外の JS / TS を拒否します。

`npm run check:generated` は MoonBit ソースから JS・Wasm・HTML 内の起動検知コードを再現します。通常の `npm run build` もソースと生成物のハッシュを照合するため、MoonBit をインストールしない Vercel でも更新漏れを検出できます。

測定範囲とブラウザの既知の制限は [Wasm 配信の検証記録](wasm-runtime.md) を参照してください。

開発 CLI の移行では、アプリの Wasm・ブラウザ接続・起動 JS は同一です。紙の粒子はコミット済みの画像と、アイコンとフォントは同じツール環境で旧 JS の出力とバイト単位で一致しています。素材とテストの期待値は変更していません。
