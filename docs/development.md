# 車窓の開発

Node.js 22.12 以降と Bash・curl を使用します。CI は Node.js 24.13.0 です。Windows では WSL を使用してください。

```sh
npm ci
npm run dev
```

初回起動時に `.moon-version` の固定コンパイラを自動で用意し、MoonBit から JS・Wasm を生成します。PATH 上に同じバージョンがあれば利用し、なければ公式インストーラで `.cache/moon/` にインストールします。初回はダウンロードが必要です。

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
| `moonbit/runtime_policy/` | 本番バンドルの検査と HTML への起動ガード挿入 |
| `src/generated/moonbit/` | ビルド時に生成する Wasm・接続 JS・起動 JS・検査 JS・ハッシュ manifest。Git 管理外 |
| `src/*.css`、`public/` | スタイル、画像、フォント |
| `tests/wasm/`、`tests/fixtures/` | Wasm の回帰テスト、模擬ブラウザ API、採取済みの期待値 |
| `moonbit/wasm_contract/` | 回帰テスト用の Wasm 入口。配信しない |
| `tests/*.spec.ts` | 手動で実行する Playwright シナリオ |
| `moonbit/dev/` | ビルド・生成物照合・FFI 生成・素材整備を行う MoonBit CLI |
| `scripts/moon.sh` | 固定コンパイラの準備と起動だけを行う Bash スクリプト |
| `_build/` | 開発 CLI とテスト用 Wasm を含むコンパイル結果。Git 管理外 |

画面・操作・旅・切符・保存・WebGL・音声合成は MoonBit で実装しています。ブラウザ API の呼び出しは型付き FFI を介して行います。React と旧 TypeScript 公開 API は廃止しました。`bridge` は現在の画面と保存データが使う内部変換で、外部向け JS ライブラリとしては公開しません。

Vite は生成された `bootstrap.js` と `browser-host.js` だけをアプリの実行用 JS として許可します。手書き JS / TS や npm ランタイムの混入はビルドエラーになります。詳しくは [MoonBit 化の範囲](moonbit-coverage.md) と [Wasm 配信](wasm-runtime.md) を参照してください。

## MoonBit の変更

コンパイラのバージョンは [`.moon-version`](../.moon-version) に集約しています。`npm run moon -- <引数>` は固定バージョンを準備・確認して MoonBit CLI を実行します。既存のインストール先を指定する場合は `MOON_BIN=/path/to/moon` を使用します。標準ライブラリのみを利用するため、`moon update` は不要です。

```sh
npm run build:moonbit
npm run moon -- info
npm run check:moonbit
npm test
npm run build
```

`build:moonbit` は `moon run` で開発 CLI 自身をコンパイルしてから、FFI の生成・整形、Wasm / JS のコンパイルを行います。検証用 Wasm も `_build/` に出力します。**生成 JS・Wasm はコミットしません。** `index.html` にも生成 JS を保存せず、Vite が開発サーバーと本番ビルドで起動ガードを挿入します。

`npm run dev` は起動前に生成します。起動中に MoonBit を編集したら、別のターミナルで `npm run build:moonbit` を実行してください。生成ファイルが更新されると Vite が再読み込みします。ブラウザテストの前には生成を完了させてください。

| コマンド | 用途 |
| --- | --- |
| `npm run check:moonbit` | 警告をエラーにした型検査、整形の確認 |
| `npm test` | 生成、MoonBit 単体テスト、Wasm の回帰テスト。ブラウザ不要 |
| `npm run test:moonbit` | MoonBit 単体テストのみ |
| `npm run test:wasm` | ビルド済み Wasm の回帰テスト。先に `build:moonbit` が必要 |
| `npm run build` | MoonBit の生成から Vite の本番ビルドまで |
| `npm run tools -- check` | ローカルの生成物と MoonBit ソースのハッシュ照合 |

コミット済み生成物との照合コマンド `check:generated` は廃止しました。Wasm テストではソースとローカル生成物のハッシュを照合し、古い生成物による検証を防ぎます。

開発処理は `moonbit/dev/` にあります。ファイル・プロセス・暗号・圧縮・正規表現・Playwright の呼び出しには Node API のバインディングを使います。Bash は、MoonBit 自身をまだ実行できない段階でコンパイラを用意するために使います。

旧実装の再採取コマンド・型互換検査・JS 版の重複検証は廃止しました。期待値と MoonBit の単体テストは回帰テストとして維持します。期待値の由来と更新方針は [テスト資料](../tests/fixtures/README.md) にあります。

## CI とブラウザ検証

通常の push / PR では、型検査・整形、ソースからの本番ビルド、MoonBit 単体テスト、Wasm の回帰テストを 1 ジョブで確認します。ビルド結果をテストでも使い、npm のインストールとコンパイラの準備を重複させません。ビルド後には追跡済みソースが書き換わっていないことも確認します。純粋な `domain` は native でも、外部参照を扱う `interop` は Wasm でも検証します。E2E は通常 CI に含めません。

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

設定は [`vercel.json`](../vercel.json)、アップロード対象外のファイルは [`.vercelignore`](../.vercelignore) にあります。Vercel 上でも `npm run build` が固定コンパイラを用意し、MoonBit ソースから `dist/` を生成して静的配信します。ローカルの生成物・コンパイラ・キャッシュはアップロードしません。Wasm は `application/wasm` として配信し、ブラウザで実行します。

## 素材の整備

| コマンド | 内容・必要なツール |
| --- | --- |
| `npm run assets:fonts` | MoonBit ソースから日本語フォントをサブセット化。Python の `fonttools[woff]` が必要 |
| `npm run assets:icons` | 既存の列車マークからアイコンを生成。Playwright の Chromium が必要 |
| `npm run assets:grain` | 紙の粒子を再生成 |

フォントは Shippori Mincho と DM Mono をローカル配信します。日本語 UI を変更したらフォントの更新を確認してください。メモの未収録文字は OS のフォントにフォールバックします。ライセンスは [`public/fonts/Shippori-Mincho-LICENSE.txt`](../public/fonts/Shippori-Mincho-LICENSE.txt) と各フォントパッケージにあります。

空・雪原・列車の素材については [素材メモ](../public/scenery/README.md) を参照してください。Lucide の SVG 図形は [ライセンス](licenses/lucide.txt) を付けて利用しています。
