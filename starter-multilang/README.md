# My Site (en, ru, es, fr, de, pt, ko, ja, zh)

Multilingual starter (all 9 languages) for [jekyll-theme-perigee](https://github.com/danilevsky/jekyll-theme-perigee).

```sh
bundle install
bundle exec jekyll serve      # http://localhost:4000 (English), /ru/, /es/, /fr/, /de/, /pt/, /ko/, /ja/, /zh/
```

- English lives at the site root, every other language under `<lang>/` (pages in `<lang>/`, posts in `<lang>/_posts/`).
- Translations of the same page share a `translation_key` — the language switcher and `hreflang` use it.
- Menus: `_data/navigation.yml`. Languages and site settings: `_config.yml`.
- Dropping a language: see the comment at the top of `_config.yml`.
- Push to GitHub with Pages source "GitHub Actions" to deploy.
