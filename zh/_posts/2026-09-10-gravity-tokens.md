---
title: 为什么我们复用 Gravity UI 的设计令牌
translation_key: gravity-tokens
tags: [设计, gravity-ui]
---

Perigee 并没有从零开始重新设计一套配色系统，而是直接从 `@gravity-ui/uikit` 复制 `--g-*` 自定义属性，
因此无论浅色还是深色主题，色板、间距体系和排版都与 gravity-ui.com 完全一致。

这个同步过程通过一个小型 Node 脚本（`scripts/sync-vendor.mjs`）完成，只有主题的*开发者*需要用到它 —
基于该 gem 构建的网站在构建时完全不需要 Node。
