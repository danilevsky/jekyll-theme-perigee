---
title: Un sommaire, sans plugin
translation_key: toc-demo
tags: [jekyll, guide]
---

Le sommaire de Perigee utilise le marqueur natif `{:toc}` de kramdown — sans plugin Ruby, il fonctionne
donc sur n'importe quel hébergeur capable d'exécuter `jekyll build`.

* TOC
{:toc}

## L'ajouter à un article

Placez ceci juste après votre paragraphe d'introduction :

```markdown
* TOC
{:toc}
```

## Comment c'est stylé

Un petit script dans `assets/js/perigee.js` trouve la liste générée par kramdown et l'enveloppe dans un
élément `<details>` repliable, avec le style du thème.

## Sans JavaScript

La simple liste imbriquée s'affiche quand même — elle n'est juste pas repliable.
