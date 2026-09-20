# 回帰テストの期待値

このディレクトリは、MoonBit 移行前に採取したゲームの挙動を保存しています。旧 TypeScript 公開 API の提供・型互換性の保証は終了しました。現在は MoonBit の単体テストと `tests/wasm/` の回帰テストに使います。旧実装、型宣言、再採取スクリプトは Git 履歴の [b253332](https://github.com/Hosi121/syasou/tree/b2533320966c0cc0b481f29687902f99e76e15a8/tests/contract) に残っています。

## 実行

```sh
npm run build:moonbit
npm test
```

`npm test` は MoonBit 単体テストと Node の Wasm テストを実行します。ブラウザは起動しません。`npm run test:wasm` は後半のみを実行します。実画面は `npm run test:browser` または `npm run test:browser:mobile` で確認します。

検証用の `moonbit/wasm_contract/` は、本番と同じパッケージをコンパイルし、テストで呼ぶ入口だけを追加した Wasm です。本番へは配信しません。この入口の名前はテスト内部のもので、外部向け API の互換性を保証するものではありません。

## 期待値の由来

採取時の環境は Node.js 24.13.0 と当時の npm lockfile です。

| ファイル | 件数 | 検証内容・採取元 |
| --- | ---: | --- |
| `fixtures.json` | 207 | 旅・切符の遷移、戻り値、入力の非変更、参照共有。`a79a3f5` の TypeScript |
| `validation-fixtures.json` | 435 | 保存データの検証。`a79a3f5` の各 validator と App 内の判定 |
| `interaction-fixtures.json` | 437 | 切符の操作・番号、旧セーブ変換、サンプル切符。`84f571e` の実装・コンポーネントから抽出 |
| `browser-fixtures.json` | 15 | WebGL / 音 / 保存 API の呼び出し、音声サンプルのハッシュ、失敗時の処理。移行前のブラウザ処理 |
| `ui-fixtures.json` | 21 | タイトル・設定・切符・景色・路線図・列車マークの意味的 HTML。`aaffee3` の TSX |
| `ui-helpers-fixtures.json` | 25 | 時間表記、demo パラメーター、保存キー、初期値、眺め一覧。`aaffee3` の helper |

使われなくなった `cn` の 5 ケースだけを削除しました。他の期待値は変更していません。MoonBit の `domain/*fixtures_wbtest.mbt` も、移行時に採取した値を直接検証するテストとして維持します。これらの生成器は [同じ履歴](https://github.com/Hosi121/syasou/tree/b2533320966c0cc0b481f29687902f99e76e15a8/scripts) にあります。

新しい不具合には対象の MoonBit パッケージへ小さな回帰テストを追加してください。ブラウザ API 境界の不具合は `tests/wasm/` に追加します。既存の期待値は、意図した仕様変更を説明できる場合に更新します。現在の実装の出力で一括上書きするコマンドはありません。

## 比較の範囲

JSON の `$value` タグは undefined、NaN、Infinity、負のゼロを失わずに保存するためのものです。`tests/wasm/fixtures.mjs` が復元します。入力の非変更や参照共有も比較し、UI の不要な更新につながる変化を検出します。

HTML は UTC で描画し、文言、構造、属性、SVG、スタイルを比較します。採取元の React / Radix / Motion に由来する preload、collection marker、初期 radio tab stop、恒等変換の表記、SSR に存在しない spring の回転だけを正規化します。フォーカスや回転の操作は Playwright 側で確認します。

ブラウザ API の模擬処理は GPU や音声デバイスそのものを再現しません。null の保存と fallback を検証する `tests/wasm/storage.test.mjs` は、固定コンパイラで発生した nullable externref の問題への回帰テストです。

数値は epoch 時刻や小数を保つ `Double`、文字列は UTF-16 として扱います。既存の切符番号・文字数制限・セーブ形式に関係する挙動を維持しています。旧公開 API の廃止に伴ってゲーム内の記録形式を変更したわけではありません。

## ブラウザ検証の記録

移行時はデスクトップ Chromium 42 件、Android 相当 8 件が通過しています。WebKit の画面回転は旧 JS 版でも再現する既知の失敗です。詳細と起動失敗からの復帰検証は [Wasm 配信](../../docs/wasm-runtime.md) にあります。

過去の CI では景色の再開テストが 30 秒のタイムアウトに達した記録があります（[実行ログ](https://github.com/Hosi121/syasou/actions/runs/35463902474)）。同じテストはローカルで通過しました。E2E の手動化によってこのタイムアウトが解決したとは扱いません。
