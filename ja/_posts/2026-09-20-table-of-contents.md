---
title: プラグイン不要の目次
translation_key: toc-demo
tags: [jekyll, ガイド]
---

Perigeeの目次は、kramdownに組み込まれた `{:toc}` マーカーを使用します — Rubyプラグインが不要なので、
`jekyll build` を実行できるホストであればどこでも動作します。

* TOC
{:toc}

## 記事に追加する方法

導入段落の直後に、次のように記述します。

```markdown
* TOC
{:toc}
```

## スタイルの仕組み

`assets/js/perigee.js` 内の小さなスクリプトが、kramdownが生成したリストを見つけて、テーマに合わせた
折りたたみ可能な `<details>` 要素でラップします。

## JavaScriptなしの場合

シンプルな入れ子リストとしてそのまま表示されます — 折りたためないだけです。
