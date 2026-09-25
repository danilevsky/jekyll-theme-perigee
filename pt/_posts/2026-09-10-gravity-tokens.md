---
title: Por que reaproveitamos os tokens de design do Gravity UI
translation_key: gravity-tokens
tags: [design, gravity-ui]
---

O Perigee não reinventa um sistema de cores do zero. Ele copia diretamente as propriedades
personalizadas `--g-*` do `@gravity-ui/uikit`, para que a paleta, a escala de espaçamento e a tipografia
correspondam exatamente ao gravity-ui.com, tanto no tema claro quanto no escuro.

A sincronização acontece por meio de um pequeno script Node (`scripts/sync-vendor.mjs`), necessário
apenas para *desenvolvedores* do tema — sites construídos sobre o gem nunca precisam de Node para compilar.
