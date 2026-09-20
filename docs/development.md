# 車窓の開発

Node.js 22.12 以降を使用します。CI は 24.13.0 です。

```sh
npm ci
npm run dev
```

コミット済みの MoonBit 生成物を使うので、起動と本番ビルドに MoonBit のインストールは不要です。

```sh
npm run build
npm run preview
```

## 構成

| 場所 | 役割 |
| --- | --- |
| `moonbit/domain/` | 旅・切符・保存データ検証・音の計算。ブラウザに依存しない型付きロジック |
| `moonbit/ui/`、`moonbit/view/` | 画面、DOM 更新、状態、イベント、spring、フォーカス |
| `moonbit/browser/` | WebGL 描画、音声合成、ブラウザ保存 |
| `moonbit/bridge/`、`moonbit/interop/`、`moonbit/host_*/` | アプリ内部の値変換とブラウザ API 接続 |
| `moonbit/wasm/` | 本番 Wasm の入口。公開する関数は `start` のみ |
| `moonbit/bootstrap/`、`moonbit/boot_guard/` | Wasm の初期化と取得失敗からの復帰。JS へコンパイル |
| `moonbit/runtime_policy/` | 本番バンドルへ入るモジュールの検査 |
| `src/generated/moonbit/` | 配信する Wasm・接続 JS・起動 JS、ビルド用の検査 JS、ハッシュ manifest |
| `src/*.css`、`public/` | スタイル、画像、フォント |
| `tests/wasm/`、`tests/fixtures/` | Wasm の回帰テスト、模擬ブラウザ API、採取済みの期待値 |
| `moonbit/wasm_contract/` | 回帰テスト用の Wasm 入口。配信しない |
| `tests/*.spec.ts` | 手動で実行する Playwright シナリオ |
| `moonbit/dev/` | ビルド・生成物照合・FFI 生成・素材整備を行う MoonBit CLI |
| `scripts/generated/dev.js` | Node 上で動く、コミット済みの開発 CLI 生成物 |

画面・操作・旅・切符・保存・WebGL・音声合成は MoonBit で実装しています。ブラウザ API の呼び出しは型付き FFI を介して行います。React と旧 TypeScript 公開 API は廃止しました。`bridge` は現在の画面と保存データが使う内部変換で、外部向け JS ライブラリとしては公開しません。

Vite は生成された `bootstrap.js` と `browser-host.js` だけをアプリの実行用 JS として許可します。手書き JS / TS や npm ランタイムの混入はビルドエラーになります。詳しくは [MoonBit 化の範囲](moonbit-coverage.md) と [Wasm 配信](wasm-runtime.md) を参照してください。

## MoonBit の変更

固定バージョン `0.10.13+cbb11c36f` を使用します。

```sh
curl -fsSL https://cli.moonbitlang.com/install/unix.sh -o /tmp/install-moonbit.sh
bash /tmp/install-moonbit.sh '0.10.13+cbb11c36f'
export PATH="$HOME/.moon/bin:$PATH"
```

MoonBit は標準ライブラリのみを利用するため、依存インデックスを取得する `moon update` は不要です。`npm run moon -- <引数>` はバージョンを確認して MoonBit CLI を実行します。インストール先を指定する場合は `MOON_BIN=/path/to/moon` を使用します。

```sh
# ソースを変更したら生成してからテストする
npm run build:moonbit
npm run moon -- info
npm run check:moonbit
npm test
npm run build
```

`build:moonbit` は最初に開発 CLI 自身をコンパイルし、その新しい CLI で FFI の生成・整形、Wasm / JS のコンパイル、生成物と HTML の起動ガードの更新を行います。検証用 Wasm も `_build/` に出力します。生成物は直接編集せず、`src/generated/moonbit/` と `scripts/generated/dev.js` をソースと一緒にコミットしてください。`check:generated` は CLI 自身も再現できるか照合し、コミット済みの CLI を上書きしません。

生成済み CLI が壊れた場合は、固定コンパイラから再生成できます。

```sh
moon build moonbit/dev --target js --release
node _build/js/release/build/dev/dev.js build
```

| コマンド | 用途 |
| --- | --- |
| `npm run check:moonbit` | 警告をエラーにした型検査、整形の確認 |
| `npm run check:generated` | 固定コンパイラで再生成し、コミット済みの生成物と照合 |
| `npm test` | MoonBit 単体テストと Wasm の回帰テスト。ブラウザ不要 |
| `npm run test:moonbit` | MoonBit 単体テストのみ |
| `npm run test:wasm` | ビルド済み Wasm の回帰テストのみ。先に `build:moonbit` が必要 |
| `npm run build` | コンパイラ不要のハッシュ照合と Vite 本番ビルド |

生成処理は、実行中の開発サーバーを再読み込みさせることがあります。ブラウザテストの実行前に完了させてください。

手書きの開発 JS スクリプトは廃止し、処理を `moonbit/dev/` に集約しました。ファイル・プロセス・暗号・圧縮・正規表現・Playwright の呼び出しは、小さな Node API バインディングを介します。生成・照合の方針や素材のアルゴリズムは MoonBit にあります。Vercel では生成 CLI を使うので、コンパイラは不要です。

旧実装の再採取コマンド・型互換検査・JS 版の重複検証は廃止しました。期待値と MoonBit の単体テストは回帰テストとして維持します。期待値の由来と更新方針は [テスト資料](../tests/fixtures/README.md) にあります。

## CI とブラウザ検証

通常の push / PR では、型検査・整形、生成物の再現性、MoonBit 単体テスト、Wasm の回帰テスト、本番ビルドを確認します。純粋な `domain` は native でも、外部参照を扱う `interop` は Wasm でも検証します。本番ビルドは MoonBit をインストールしない別ジョブで実行し、Vercel と同じ条件を保ちます。E2E は通常 CI に含めません。

画面・描画・音・入力方法を変更したときは、必要なブラウザテストをローカル、または手動の **Browser verification** ワークフローで実行します。

```sh
npx playwright install chromium
npm run test:browser

# Android 相当の Chromium と iPhone 相当の WebKit
npx playwright install --with-deps chromium webkit
npm run test:browser:mobile

# GitHub Actions では all / desktop / mobile を選択できる
# 診断時だけ trace=true を指定する
gh workflow run browser.yml -f suite=desktop
gh workflow run browser.yml -f suite=mobile -f trace=true
```

既存の Chromium は `CHROMIUM_PATH=/path/to/chromium` で指定できます。手動ワークフローは失敗時の資料を 7 日間保存します。既知の WebKit の画面回転問題と過去の検証結果は [Wasm 配信の記録](wasm-runtime.md) にあります。実機のソフトウェアキーボードやホーム画面追加は、端末上でも確認してください。

## Vercel へのデプロイ

公開先は `https://syasou.vercel.app`、プロジェクトは `hosi121s-projects/syasou` です。

```sh
npx vercel deploy --prod --scope hosi121s-projects
```

設定は [`vercel.json`](../vercel.json)、アップロード対象外のファイルは [`.vercelignore`](../.vercelignore) にあります。`npm run build` → `dist/` の静的配信です。Wasm は `application/wasm` として配信し、ブラウザで実行します。

## 素材の整備

| コマンド | 内容・必要なツール |
| --- | --- |
| `npm run assets:fonts` | MoonBit ソースから日本語フォントをサブセット化。Python の `fonttools[woff]` が必要 |
| `npm run assets:icons` | 既存の列車マークからアイコンを生成。Playwright の Chromium が必要 |
| `npm run assets:grain` | 紙の粒子を再生成。Node のみ |

フォントは Shippori Mincho と DM Mono をローカル配信します。日本語 UI を変更したらフォントの更新を確認してください。メモの未収録文字は OS のフォントにフォールバックします。ライセンスは [`public/fonts/Shippori-Mincho-LICENSE.txt`](../public/fonts/Shippori-Mincho-LICENSE.txt) と各フォントパッケージにあります。

空・雪原・列車の素材については [素材メモ](../public/scenery/README.md) を参照してください。Lucide の SVG 図形は [ライセンス](licenses/lucide.txt) を付けて利用しています。
