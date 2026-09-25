---
title: Warum wir die Design-Tokens von Gravity UI wiederverwenden
translation_key: gravity-tokens
tags: [design, gravity-ui]
---

Perigee erfindet kein Farbsystem von Grund auf neu. Es übernimmt die `--g-*`-Custom-Properties direkt aus
`@gravity-ui/uikit`, sodass Farbpalette, Abstandsskala und Typografie exakt mit gravity-ui.com
übereinstimmen — im hellen wie im dunklen Theme.

Die Synchronisierung erfolgt über ein kleines Node-Skript (`scripts/sync-vendor.mjs`), das nur von
Theme-*Entwicklern* benötigt wird — Websites, die auf dem Gem aufbauen, brauchen zum Bauen niemals Node.
