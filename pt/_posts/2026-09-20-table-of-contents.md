---
title: Um índice, sem precisar de plugin
translation_key: toc-demo
tags: [jekyll, guia]
---

O índice do Perigee usa o marcador nativo `{:toc}` do kramdown — sem plugin Ruby, funcionando em
qualquer hospedagem capaz de rodar `jekyll build`.

* TOC
{:toc}

## Adicionando a uma publicação

Coloque isto logo após o parágrafo de introdução:

```markdown
* TOC
{:toc}
```

## Como é estilizado

Um pequeno script em `assets/js/perigee.js` encontra a lista gerada pelo kramdown e a envolve em um
elemento `<details>` recolhível, no estilo do tema.

## Sem JavaScript

A lista aninhada simples ainda aparece — só não é recolhível.
