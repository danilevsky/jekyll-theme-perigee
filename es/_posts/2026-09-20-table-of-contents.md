---
title: Un índice, sin necesidad de plugin
translation_key: toc-demo
tags: [jekyll, guía]
---

El índice de Perigee usa el marcador `{:toc}` integrado en kramdown — sin plugin de Ruby, por lo que
funciona en cualquier servidor capaz de ejecutar `jekyll build`.

* TOC
{:toc}

## Cómo añadirlo a una entrada

Coloca esto justo después de tu párrafo introductorio:

```markdown
* TOC
{:toc}
```

## Cómo está estilizado

Un pequeño script en `assets/js/perigee.js` encuentra la lista generada por kramdown y la envuelve en un
elemento `<details>` plegable con el estilo del tema.

## Sin JavaScript

La lista anidada simple sigue apareciendo — solo que no es plegable.
