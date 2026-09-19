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
| `src/Startup.tsx`、`src/components/Opening.tsx` | 読み込み、タイトル、入場時の表示 |
| `src/App.tsx`、`src/components/`、`src/hooks/` | React の画面、手帳・切符の操作、状態と UI の接続 |
| `moonbit/domain/` | 旅・切符・保存データの検証・音や移動量の計算。JS に依存しない型付きコア |
| `moonbit/browser/` | localStorage、WebGL 描画とシェーダー、Web Audio 合成・スケジューラ、リソース管理 |
| `moonbit/bridge/`、`src/lib/` | MoonBit と既存の TypeScript API の変換・呼び出し |
| `moonbit/webgl/`、`moonbit/webaudio/` | ブラウザ API の型付きバインディング |
| `src/generated/moonbit/` | コミットする ESM・コンパイラ生成型定義・ハッシュ |
| `src/components/SnowScenery.tsx`、`src/scenery.css` | 空・雪原・列車の素材を合成する景色 |
| `tests/contract/` | 凍結した移行前の実装、API 型、期待値、ブラウザ API の比較用ハーネス |
| `tests/*.spec.ts` | 実際の画面・描画・入力を確認する Playwright シナリオ |

DOM・保存・Promise には `mizchi/js` 系の既存パッケージを使っています。未提供の WebGL / Web Audio API はローカルの独立したバインディングにまとめています。詳しくは [upstream contribution 候補](upstream-bindings.md) を参照してください。

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
npm run build
```

生成された JavaScript・型定義は直接編集せず、MoonBit ソースから再生成します。`npm run build` はソースと生成物のハッシュを照合し、更新漏れがあれば失敗します。CI では固定バージョンのコンパイラによる再生成結果も比較します。

`npm run fixtures:domain` は、凍結した TypeScript 実装から期待値と MoonBit の直接テストを生成します。互換性テストは、値、入力の非変更、オブジェクト参照、保存検証、ブラウザ API の呼び出し、音声サンプル、失敗時の挙動を比較します。型や UTF-16、数値などの扱いは [移行契約](../tests/contract/README.md) に記録しています。

## CI とブラウザ検証

通常の push / PR では、MoonBit の単体テスト（JS / native）、互換性、公開型、生成物の再現性、本番ビルドを検証します。タイマー・切符・保存検証の正しさは UI を起動せずに確認します。

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

プロジェクトのルートで実行します。ビルド設定は [`vercel.json`](../vercel.json)、アップロード対象外のファイルは [`.vercelignore`](../.vercelignore) にあります。`npm run build` → `dist/` の静的配信で、Vercel 側への MoonBit インストールは不要です。

## 素材とフォント

- フォントは Shippori Mincho と DM Mono をローカル配信します。ライセンスは [`public/fonts/Shippori-Mincho-LICENSE.txt`](../public/fonts/Shippori-Mincho-LICENSE.txt) と各フォントパッケージにあります。
- 日本語 UI の変更後は、必要に応じて Python の `fonttools[woff]` を用意し、`npm run fonts` でサブセットを再生成します。入力メモで含まれない文字は OS のフォントへフォールバックします。
- アプリアイコンは既存の列車マークから `npm run icons` で生成します。実行には Playwright の Chromium が必要です。
- 紙の粒子は `node scripts/create-grain.mjs` で再生成できます。
- 空・雪原・列車は提供された画像を使用しています。元画像の領域と合成方法は [素材メモ](../public/scenery/README.md) にあります。切符の箱も提供された `public/ticket-tray.png` を使用しています。
- ホーム画面追加の設定は `public/manifest.webmanifest` と `index.html` にあります。保存領域はブラウザ・端末ごとで、起動・再読み込みには通信が必要です。
