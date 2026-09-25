---
title: Gravity UIのデザイントークンを再利用する理由
translation_key: gravity-tokens
tags: [デザイン, gravity-ui]
---

Perigeeはカラーシステムをゼロから作り直すことはしません。`@gravity-ui/uikit` の `--g-*` カスタム
プロパティをそのままコピーしているため、ライト・ダーク両テーマで、カラーパレット、スペーシング、
タイポグラフィがgravity-ui.comと正確に一致します。

この同期は小さなNodeスクリプト（`scripts/sync-vendor.mjs`）によって行われますが、これが必要なのは
テーマの*開発者*だけです — このgemの上に構築されたサイトは、ビルド時にNodeを一切必要としません。
