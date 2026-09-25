---
title: Pourquoi nous réutilisons les tokens de design de Gravity UI
translation_key: gravity-tokens
tags: [design, gravity-ui]
---

Perigee ne réinvente pas un système de couleurs à partir de zéro. Il copie directement les propriétés
personnalisées `--g-*` de `@gravity-ui/uikit`, afin que la palette, l'échelle d'espacement et la
typographie correspondent exactement à gravity-ui.com, dans les thèmes clair comme sombre.

La synchronisation se fait via un petit script Node (`scripts/sync-vendor.mjs`), utile uniquement aux
*développeurs* du thème — les sites construits sur le gem n'ont jamais besoin de Node pour la compilation.
