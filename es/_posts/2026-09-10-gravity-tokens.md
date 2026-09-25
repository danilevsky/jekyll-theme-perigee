---
title: Por qué reutilizamos los tokens de diseño de Gravity UI
translation_key: gravity-tokens
tags: [diseño, gravity-ui]
---

Perigee no reinventa un sistema de color desde cero. Copia directamente las propiedades personalizadas
`--g-*` de `@gravity-ui/uikit`, de modo que la paleta, la escala de espaciado y la tipografía coinciden
exactamente con gravity-ui.com, tanto en el tema claro como en el oscuro.

La sincronización ocurre mediante un pequeño script de Node (`scripts/sync-vendor.mjs`) que solo necesitan
los *desarrolladores* del tema — los sitios construidos sobre el gem nunca necesitan Node para compilar.
