# 車窓の開発ガイド

[ゲーム紹介に戻る](../README.md)

## ローカルで起動する

Node.js 22.12 以降を使用します。CI では 24.13.0 に固定しています。

```sh
npm ci
npm run dev
```

`http://localhost:5173` を開きます。`npm run build` で型チェックと本番ビルド、`npm run preview` で生成した `dist/` を確認できます。

`?demo=1` は動作確認用の保存領域です。localStorage / sessionStorage のキー末尾に `.demo` を付け、サンプル切符を初回に三枚用意します。通常プレイのデータと分離され、サンプルへの編集も保存されます。

## 構成

| 場所 | 役割 |
| --- | --- |
| `moonbit/ui/` | 全画面・起動処理・手帳と切符の操作 |
| `moonbit/view/` | DOM 差分更新、状態と副作用の寿命、spring、Web Animations、標準 dialog とポップオーバーの操作 |
| `moonbit/wasm/` | タイトルと本体を一つの Wasm インスタンスで動かす入口 |
| `moonbit/interop/`、`moonbit/host_*/` | JS 値の型付き変換、Promise、DOM・保存・時刻などの接続 |
| `src/main.tsx`、`src/wasm.ts`、`src/App.tsx` | Wasm の取得と起動、CSS の読み込み |
| `moonbit/domain/` | 旅・切符・旧セーブ変換・残り時間・保存検証・切符操作と番号・サンプル生成・音や移動量の計算。JS に依存しない型付きコア |
| `moonbit/browser/` | localStorage、WebGL 描画とシェーダー、Web Audio 合成・スケジューラ、リソース管理 |
| `moonbit/bridge/`、`src/lib/` | MoonBit と既存の TypeScript API の変換・呼び出し |
| `moonbit/webgl/`、`moonbit/webaudio/` | ブラウザ API の型付きバインディング |
| `src/generated/moonbit/` | 配信用 Wasm、生成したブラウザ接続 JS、旧 API 用 ESM と型定義、ハッシュ |
| `moonbit/wasm_contract/` | Wasm に同じ契約テストを適用する、配信しない検証用の入口 |
| `moonbit/ui/snow.mbt`、`src/scenery.css` | 空・雪原・列車の素材を合成する景色 |
| `tests/contract/` | 凍結した移行前の実装、API 型、期待値、ブラウザ API の比較用ハーネス |
| `tests/*.spec.ts` | 実際の画面・描画・入力を確認する Playwright シナリオ |

UI はアプリ専用の `view` パッケージで DOM を更新します。画面・状態・操作・保存・描画・音の処理は Wasm 内で実行し、DOM / WebGL / Web Audio の呼び出しを型付き FFI でブラウザへ渡します。FFI 宣言の JS 本体から、Wasm が実際に参照する接続コードだけを `scripts/generate-browser-ffi.mjs` と `scripts/build-wasm.mjs` で生成します。React / ReactDOM / Motion / Radix / Lucide React と `mizchi/npm_typed` への依存はありません。Lucide の図形データだけをライセンス付きで利用しています。

以前使っていた `mizchi/js` 系の DOM・Promise パッケージは JS 専用だったため、必要な API を `host_*` と `interop` に揃えています。JS ターゲットは旧公開 API と互換性テスト用として残し、通常配信する画面は `wasm-gc` ターゲットです。既定の `moon test` は JS で動きます。[Wasm 配信の詳細](wasm-runtime.md)と [upstream contribution 候補](upstream-bindings.md)を参照してください。

切符の持ち上げ・ドラッグ・めくり判定・キャンセル時の角度は MoonBit で計算します。ポインター取得、入力欄の除外、イベント購読、MoonBit の spring への反映も MoonBit のコンポーネントで行います。旧セーブの変換では、ID と現在時刻を必要な場合だけ取得する順序も維持しています。

残る TypeScript は Vite の入口、既存公開 API の型と委譲処理、開発設定とテストです。CSS・GLSL、フォントとビルド用 npm パッケージは引き続き使います。旧 TypeScript API の検証・利用に必要な `bridge.js` は残していますが、本番の画面からは読み込みません。旧 API の `cn` 互換性検証用に clsx / tailwind-merge を開発依存として残していますが、画面からは呼ばず、本番バンドルにも入りません。GitHub の言語比率には生成物や検証用の旧ソースも含まれるため、アプリの移行率とは一致しません。

本番の実行コードは Wasm 205,337 bytes + JS 15,580 bytes、Node の `gzipSync` では合計 89,953 bytes です。直前の MoonBit→JS 版は 59,699 bytes なので、転送量は増えています。CSS・画像・フォントはこの比較に含めていません。React 除去時の測定は [当時の検証記録](react-removal.md)に残しています。

タイトルと本体のコードを一つの Wasm に含めます。`src/App.tsx` は景色の CSS を遅延読み込みする境界です。その失敗は MoonBit の起動状態で受け取り、再試行を表示します。Wasm 自体の取得・初期化に失敗した場合は、静的 HTML の再読み込みリンクを表示します。

## MoonBit を変更する

通常の起動・Vercel ビルドでは、コミット済みの生成物を使います。MoonBit ソースを変更する場合は `0.10.13+cbb11c36f` を使用してください。

```sh
curl -fsSL https://cli.moonbitlang.com/install/unix.sh -o /tmp/install-moonbit.sh
bash /tmp/install-moonbit.sh '0.10.13+cbb11c36f'
export PATH="$HOME/.moon/bin:$PATH"
moon update
```

インストール先を指定する場合は `MOON_BIN=/path/to/moon` を使用できます。

```sh
node scripts/moon-command.mjs fmt
node scripts/moon-command.mjs info
node scripts/moon-command.mjs check --deny-warn
npm run test:moonbit
node scripts/moon-command.mjs test moonbit/domain --target native
npm run build:domain
npm run check:domain
npm run test:domain
npm run test:wasm
npm run build
```

生成された Wasm・ブラウザ接続 JS・型定義は直接編集せず、`npm run build:domain` で再生成します。`npm run build` はソースと生成物のハッシュを照合し、更新漏れがあれば失敗します。CI では固定バージョンのコンパイラによる再生成結果も比較します。

`npm run fixtures:domain` は、凍結した TypeScript 実装から期待値と MoonBit の直接テストを生成します。互換性テストは、値、入力の非変更、オブジェクト参照、保存検証、ブラウザ API の呼び出し、音声サンプル、失敗時の挙動を比較します。UI は移行前の TSX から採取した 21 パターンの HTML の意味的な比較（文言、属性、SVG、スタイル）、表示・設定・保存キーは 30 パターンの旧実装出力とも比較します。これらはブラウザを起動せず Node で実行します。React 固有のサーバー描画メタデータだけを比較から除き、操作は既存のブラウザテストで確認します。旧 TSX からの再採取だけは `npm ci --prefix tests/contract/oracle/ui` で隔離した旧依存を用意してから行います。通常の `npm ci` と CI には React が入りません。型や UTF-16、数値などの扱いは [移行契約](../tests/contract/README.md) に記録しています。

## CI とブラウザ検証

通常の push / PR では、MoonBit の単体テスト（JS / native）、JS と Wasm の互換性、公開型、生成物の再現性、本番ビルドを検証します。タイマー・切符・保存検証の正しさは UI を起動せずに確認します。

画面・描画・音・入力方法を変更したときは、該当する E2E をローカル、または手動の **Browser verification** ワークフローから実行します。

```sh
npx playwright install chromium
npm test

# モバイル：Android 相当の Chromium と iPhone 相当の WebKit
npx playwright install --with-deps chromium webkit
npm run test:mobile

# GitHub Actions：all / desktop / mobile を選択
# トレースは診断時に有効化する

gh workflow run browser.yml -f suite=desktop
gh workflow run browser.yml -f suite=mobile -f trace=true
```

既存の Chromium を使う場合は `CHROMIUM_PATH=/path/to/chromium` を指定します。手動ワークフローでは失敗時のスクリーンショット・エラー情報を 7 日間保存します。観測済みの E2E タイムアウトは [移行契約](../tests/contract/README.md) を参照してください。

Playwright は初回案内、保存・復元、切符の発行・編集、キーボードとタッチ操作、アクセシビリティ、描画の停止・再開、WebGL 未対応時の表示を確認します。実機のソフトウェアキーボードやホーム画面への追加は、端末上でも確認してください。

## Vercel へのデプロイ

公開先は `https://syasou.vercel.app`、Vercel プロジェクトは `hosi121s-projects/syasou` です。

```sh
npx vercel deploy --prod --scope hosi121s-projects
```

プロジェクトのルートで実行します。ビルド設定は [`vercel.json`](../vercel.json)、アップロード対象外のファイルは [`.vercelignore`](../.vercelignore) にあります。`npm run build` → `dist/` の静的配信で、Vercel 側への MoonBit インストールは不要です。Vite がハッシュ付き `.wasm` を出力し、ブラウザが `application/wasm` として取得します。サーバー上で MoonBit を動かす処理はありません。

## 素材とフォント

- フォントは Shippori Mincho と DM Mono をローカル配信します。ライセンスは [`public/fonts/Shippori-Mincho-LICENSE.txt`](../public/fonts/Shippori-Mincho-LICENSE.txt) と各フォントパッケージにあります。
- 日本語 UI の文字列は `moonbit/ui/` にあります。フォント生成は MoonBit ソースも読み取ります。日本語 UI の変更後は、必要に応じて Python の `fonttools[woff]` を用意し、`npm run fonts` でサブセットを再生成します。入力メモで含まれない文字は OS のフォントへフォールバックします。
- アプリアイコンは既存の列車マークから `npm run icons` で生成します。実行には Playwright の Chromium が必要です。
- 紙の粒子は `node scripts/create-grain.mjs` で再生成できます。
- 空・雪原・列車は提供された画像を使用しています。元画像の領域と合成方法は [素材メモ](../public/scenery/README.md) にあります。切符の箱も提供された `public/ticket-tray.png` を使用しています。
- ホーム画面追加の設定は `public/manifest.webmanifest` と `index.html` にあります。保存領域はブラウザ・端末ごとで、起動・再読み込みには通信が必要です。

Lucide の SVG 図形のライセンスは [docs/licenses/lucide.txt](licenses/lucide.txt) にあります。
