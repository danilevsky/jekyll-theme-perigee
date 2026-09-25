---
title: 无需插件的目录
translation_key: toc-demo
tags: [jekyll, 指南]
---

Perigee 的目录使用 kramdown 内置的 `{:toc}` 标记 — 不需要 Ruby 插件，因此可以在任何能运行
`jekyll build` 的主机上使用。

* TOC
{:toc}

## 添加到文章中

只需在引言段落之后加入：

```markdown
* TOC
{:toc}
```

## 样式是如何实现的

`assets/js/perigee.js` 中的一小段脚本会找到 kramdown 生成的列表，并将其包装成符合主题样式的
可折叠 `<details>` 元素。

## 没有 JavaScript 时

普通的嵌套列表仍会正常显示 — 只是无法折叠。
