---
title: A table of contents, no plugin required
translation_key: toc-demo
tags: [jekyll, guide]
---

Perigee's table of contents uses kramdown's built-in `{:toc}` marker — no Ruby plugin, so it works
on any host that can run `jekyll build`.

* TOC
{:toc}

## Adding it to a post

Drop this right after your intro paragraph:

```markdown
* TOC
{:toc}
```

## How it's styled

A small script in `assets/js/perigee.js` finds kramdown's generated list and wraps it in a
collapsible `<details>` element styled to match the rest of the theme.

## Without JavaScript

The plain nested list still renders — it just isn't collapsible.
