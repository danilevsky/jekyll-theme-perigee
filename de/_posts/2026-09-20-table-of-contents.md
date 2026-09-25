---
title: Ein Inhaltsverzeichnis ganz ohne Plugin
translation_key: toc-demo
tags: [jekyll, anleitung]
---

Das Inhaltsverzeichnis von Perigee nutzt den nativen `{:toc}`-Marker von kramdown — ohne Ruby-Plugin,
funktioniert es also auf jedem Host, der `jekyll build` ausführen kann.

* TOC
{:toc}

## Zu einem Beitrag hinzufügen

Fügen Sie dies direkt nach Ihrem einleitenden Absatz ein:

```markdown
* TOC
{:toc}
```

## Wie es gestylt ist

Ein kleines Skript in `assets/js/perigee.js` findet die von kramdown erzeugte Liste und verpackt sie in
ein einklappbares `<details>`-Element im Stil des Themes.

## Ohne JavaScript

Die einfache verschachtelte Liste wird trotzdem angezeigt — sie lässt sich nur nicht einklappen.
