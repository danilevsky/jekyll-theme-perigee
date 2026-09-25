---
title: Perigee
layout: home
translation_key: home
sections:
  - type: hero
    title: 一个受 Gravity UI 启发的 Jekyll 主题
    text: 浅色、深色和跟随系统的配色主题，内置多语言支持，以及与 gravity-ui.com 相同的设计令牌 — 无需 React。
    badges: [浅色与深色主题, 支持多语言, 构建时无需 Node]
    actions:
      - { title: 阅读博客, url: /zh/blog/, view: action }
      - { title: 关于主题, url: /zh/about/, view: outlined }
  - type: posts
    title: 最新文章
    limit: 3
  - type: cards
    title: 项目
    collection: projects
    limit: 3
    cols: 3
    all_title: 全部项目
    all_url: /zh/projects/
  - type: features
    title: 包含的功能
    items:
      - icon: display
        title: 配色主题
        text: 浅色、深色和跟随系统的主题，加载时不会闪烁。
      - icon: globe
        title: 多语言支持
        text: 界面文案、按语言划分的 URL 以及 hreflang，无需插件。
      - icon: code
        title: 纯 HTML 与 SCSS
        text: 无需 React，运行网站也不需要构建步骤。
  - type: cta
    title: 准备好试试了吗？
    text: Perigee 是基于 MIT 许可证的免费开源项目。
    action: { title: 在 GitHub 上查看, url: "https://github.com/danilevsky/jekyll-theme-perigee" }
---
