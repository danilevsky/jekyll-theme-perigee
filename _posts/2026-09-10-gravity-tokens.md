---
title: Why we reuse Gravity UI's design tokens
translation_key: gravity-tokens
tags: [design, gravity-ui]
---

Perigee doesn't reimplement a color system from scratch. It copies the `--g-*` custom properties
straight from `@gravity-ui/uikit`, so the palette, spacing scale and type ramp match gravity-ui.com exactly,
in both light and dark themes.

The sync happens through a small Node script (`scripts/sync-vendor.mjs`) that's only needed by theme
*developers* — sites built on top of the gem never need Node to build.
