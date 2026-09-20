# MoonBit の Wasm 配信

アプリ本体は MoonBit の `wasm-gc` ターゲットで生成します。Vercel は Vite の `dist/` を静的配信し、ブラウザが Wasm を実行します。

```text
moonbit/ui + view + domain + browser
                 ↓ moon build --target wasm-gc --release
              app.wasm
                 ↕ 生成した型付き FFI
          DOM / WebGL / Web Audio / Storage
```

`src/wasm.ts` は Wasm の取得・初期化とコールバックの接続を担当します。`browser-host.js` には Wasm が参照するブラウザ API の呼び出しだけを生成します。旅・切符・保存検証・画面更新・アニメーション・音声合成の処理は MoonBit にあります。シェーダーは従来どおり GPU で GLSL として実行します。

## 起動と配信

- 静的 HTML のタイトルを表示している間に、ハッシュ付き `.wasm` を取得します。
- 一つの Wasm インスタンスがタイトルと本体を保持します。`src/App.tsx` は景色の CSS を遅延読み込みする入口です。
- CSS や景色の失敗は MoonBit の既存の再試行表示に接続します。Wasm 自体の取得・初期化・初回描画に失敗すると、静的 HTML のタイトルを復元して再読み込みリンクを表示します。
- Vercel の設定は `npm run build` と `dist/` のままです。配信ビルドに MoonBit コンパイラは不要です。
- Wasm-GC と JS string builtins をサポートするブラウザが必要です。これは以前の JS 版より新しいブラウザ機能への依存です。

配信される実行コードは Wasm 205,337 bytes と JS 15,580 bytes。Node.js 24.13.0 の `gzipSync` ではそれぞれ 84,877 / 5,076 bytes、合計 89,953 bytes です。直前の JS 版の 59,699 bytes より約 51% 大きくなっています。CSS・画像・フォントは含みません。今回の変更は実行基盤の移行であり、転送量削減を目的にしたものではありません。

## 境界の扱い

`interop.ToJs` / `FromJs` で数値・真偽値・文字列・配列を変換します。Wasm の Bool は i32 なので、ブラウザ関数の引数は生成コードで JS の boolean に変換します。DOM などの外部参照同士だけにゼロコストの型変換を使います。

画面の状態と参照は MoonBit 側に保持します。異種の hook slot は内部の `Box[T]` で格納し、同じ slot を同じ型で読むという不変条件で取り出します。この箇所は固定コンパイラの enum 表現に依存します。コンパイラ更新時には Wasm の実行検証も必須です。コンポーネントは明示的な名前で識別し、異なる props 型を持つ関数をキャストして比較しません。

音や spring をブラウザ用の辞書に入れる場合は、MoonBit 値を保持するクロージャーをカプセルとして渡します。登録表や FinalizationRegistry は使わず、JS / Wasm-GC の参照追跡に寿命を任せます。イベント購読にはキャッシュしたコールバックを渡し、解除時にも同じ関数を使います。

固定バージョン `0.10.13+cbb11c36f` では、nullable な外部参照をクロージャーに捕捉すると読み出し時に失敗するケースがありました。保存読み込みでは fallback を捕捉せず、保存書き込みでは値を外部オブジェクトに包む形で回避しています。`scripts/wasm-boundary-test.mjs` が null fallback と null の保存を検証します。

## 検証

`npm run build:domain` で FFI・Wasm・旧公開 API 用 ESM を再生成します。`npm run check:domain` は固定コンパイラによるバイナリを含む再現性を確認します。`npm run test:wasm` は凍結済みの期待値に対して、値、参照共有、保存検証、入力の非変更、音・WebGL の呼び出し、HTML を比較します。検証用の `wasm_contract` は配信しません。

通常の CI はブラウザを起動しません。実画面の既存 Playwright シナリオはローカルまたは手動ワークフローで確認します。直前の JS 版は `ac87522` です。

移行時の Chromium はデスクトップ 42 / Android 相当 8 ケースに合格しました。WebKit は 6 ケースに合格、Chromium 専用のタッチ注入 1 ケースをスキップ、画面回転 1 ケースで失敗しました。この回転の失敗は直前の JS 版 `ac87522` でも同じ寸法（期待幅 844、実測右端 472.8359375）で再現しています。iPhone 実機の確認は含みません。

本番ビルドでは Wasm の通信失敗・不正バイナリ・遅延 CSS の通信失敗・初回描画例外・本体描画例外を注入し、再試行後に通常画面へ進めることと `application/wasm` での配信を確認しました。
