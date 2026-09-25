# Perigee

A multilingual Jekyll theme for blogs and portfolios, inspired by the [Gravity UI](https://gravity-ui.com/) design system.

- Gravity UI design tokens, typography and icons — plain HTML/SCSS, no React, no Node at build time
- Light, dark and system color themes without a flash on load
- Built-in localization: UI strings, per-language URLs, language switcher, `hreflang` — 9 languages included (en, ru, es, fr, de, pt, ko, ja, zh)
- A home layout built from reusable sections (hero, latest posts, cards, features, CTA)
- Blog with an archive, tags, related posts, prior/next navigation, RSS and sitemap — no plugins required
- A table of contents via kramdown's native `{:toc}`, syntax highlighting themed to match, copy-to-clipboard code blocks
- Self-hosted Inter font with Latin and Cyrillic subsets

> Perigee is an independent project and is not affiliated with the Gravity UI team. See [NOTICE](NOTICE).

Live demo: once GitHub Pages is enabled for this repo (Settings → Pages → Source: GitHub Actions), it's published
at `https://danilevsky.github.io/jekyll-theme-perigee/` (English and Russian); browse `/styleguide/` there for every component.

## Installation

Perigee requires Jekyll 4.3+. It isn't published to RubyGems — install it straight from this repo, one of two ways.

**Option A — `remote_theme` (simplest, no Gemfile changes needed):**

```yaml
# _config.yml
remote_theme: danilevsky/jekyll-theme-perigee
```

Add the plugin so it works with `bundle exec jekyll build` too, not just GitHub's own Pages build:

```ruby
# Gemfile
group :jekyll_plugins do
  gem "jekyll-remote-theme"
end
```

Pin to a release instead of always tracking `main` with `remote_theme: danilevsky/jekyll-theme-perigee@v0.1.0`
(once a tag exists).

**Option B — Bundler, installed from git:**

```ruby
# Gemfile
gem "jekyll-theme-perigee", git: "https://github.com/danilevsky/jekyll-theme-perigee", tag: "v0.1.0"
```

```yaml
# _config.yml
theme: jekyll-theme-perigee
```

## Configuration

```yaml
title: My site
description: What the site is about.

languages: [en, ru]   # order of the language switcher
default_lang: en      # served from /, other languages from /<lang>/

perigee:
  palette: warm                # optional, see "Palettes" below
  logo: /assets/logo.svg       # optional
  logo_text: My site           # defaults to the site title
  copyright: Jane Doe          # footer text, defaults to the site title
  social:
    - icon: logo-github        # any file in _includes/icons/
      url: https://github.com/jane
      label: GitHub

defaults:
  - scope: { path: "" }
    values: { layout: page, lang: en }
  - scope: { path: "", type: posts }
    values: { layout: post }
  - scope: { path: "ru" }
    values: { lang: ru }
  - scope: { path: "ru", type: posts }
    values: { lang: ru, permalink: /ru/blog/:title/ }
```

Header navigation lives in `_data/navigation.yml`, one list per language, plus an optional `footer` key for
footer link columns:

```yaml
en:
  - title: Blog
    url: /blog/
ru:
  - title: Блог
    url: /ru/blog/

footer:
  en:
    - title: Site
      links:
        - { title: Home, url: / }
        - { title: Blog, url: /blog/ }
  ru:
    - title: Сайт
      links:
        - { title: Главная, url: /ru/ }
```

## The home page

Set `layout: home` on a page and describe it as a list of sections in front matter — no Markdown body needed:

```yaml
---
layout: home
sections:
  - type: hero
    title: Welcome
    text: What this site is about.
    badges: [Open source, MIT licensed]
    actions:
      - { title: Read the blog, url: /blog/, view: action }
  - type: posts        # latest posts in the page's language
    title: Latest posts
    limit: 3
  - type: cards         # a literal list, or `collection: <name>` (see below)
    title: Services
    items:
      - { title: Consulting, text: "...", url: /services/consulting/, icon: check }
  - type: features
    title: Why us
    items:
      - { icon: display, title: Fast, text: "..." }
  - type: cta
    title: Get in touch
    action: { title: Contact us, url: /contact/ }
---
```

Section types live in `_includes/sections/*.html`; add your own by creating `_includes/sections/<type>.html`
and using `type: <type>` in front matter. `type: content` renders the page's own Markdown body as a section,
for a plain freeform block mixed in with the others.

## Blog

Posts work like standard Jekyll posts; the `post` layout adds a table of contents (see below), reading time,
tags, related posts (by shared tag) and previous/next links — all scoped to the post's own language.

- `/blog/` (layout `blog`): latest posts as cards, then a full chronological archive.
- `/blog/tags/` (layout `tags`): every tag used by posts in that language, each with its matching posts.
- `/feed.xml` (layout `feed`) and `/sitemap.xml` (layout `sitemap`): create one small stub page per language,
  e.g. `feed.xml` with `layout: feed` at the root, `ru/feed.xml` with `layout: feed` and `lang: ru`. The
  sitemap covers every language automatically and needs only one file at the site root.
- A page is left out of the sitemap with `sitemap: false` in its front matter (already set on the feed,
  sitemap and 404 pages themselves, and on `assets/css/main.scss`).

### Table of contents

Add kramdown's native TOC marker anywhere in a post — no plugin needed:

```markdown
* TOC
{:toc}
```

A small script finds the generated list and turns it into a collapsible, styled block; without JavaScript it
still renders as a plain nested list.

### Collections (e.g. "projects")

Jekyll only reads a custom collection from a single top-level `_<name>` directory — unlike `_posts`, it does
**not** also look in `<lang>/_<name>/`. A multilingual collection therefore needs one collection per language,
named `<name>` for the default language and `<name>_<lang>` for the others:

```yaml
# _config.yml
collections:
  projects:
    output: true
    permalink: /projects/:name/
  projects_ru:
    output: true
    permalink: /ru/projects/:name/

defaults:
  - scope: { path: "", type: projects }
    values: { layout: project }
  - scope: { path: "", type: projects_ru }
    values: { layout: project, lang: ru }
```

Files then live in `_projects/` and `_projects_ru/` at the site root (not under `ru/`). The `projects` /
`project` layouts and the `cards` section resolve the right collection for the current language automatically.
Give an item `translation_key: same-value` in both languages to link its translations.

The `/projects/` gallery (the `projects` layout) lays cards out as a "bento" grid — one large featured tile
plus smaller ones, in the style of gravity-ui.com's "Our libraries" — using the `card.html` include's
`view="media"` cards (see [Images](#images) below and `/styleguide/`). Mark one project `featured: true` to
make it the large tile; with none flagged, the first project in the collection is used.

### Images

- **Cover image** (post or project): set `image: /assets/images/whatever.jpg` (and `image_alt: ...` for
  accessibility) in front matter. It's shown above the content on the post/project page, and as the card
  thumbnail wherever that post or project appears in a listing (blog index, latest-posts section, related
  posts, the projects gallery).
- **Project gallery badge:** a project can also set `badge: "2026"` (any short text) and, optionally,
  `badge_icon: calendar` (any icon from `_includes/icons/`) — shown as a small pill over the cover image in
  the `/projects/` bento grid.
- **Inline images in a post/project body:** plain Markdown, `![alt text](/assets/images/whatever.jpg)` — it's
  automatically rounded and scaled to the content width by `_sass/perigee/_prose.scss`.
- **With a caption:** `{% include figure.html src="/assets/images/whatever.jpg" alt="..." caption="..." %}`
  inside the body, instead of plain Markdown.
- There's no required folder for images; `assets/images/` in your own site (not the theme's) is a reasonable
  default. Keep them next to your other site assets, not inside the theme's own `assets/`.

## Localization

- **Content.** Put pages for extra languages under `/<lang>/` and posts under `<lang>/_posts/` (posts, unlike
  other collections, *are* read recursively — see above). The `defaults` above assign `lang` by path.
- **Linking translations.** Give translations of the same page a shared `translation_key` in front matter.
  The language switcher and `hreflang` tags use it; pages without a translation link to the other language's home page.
- **UI strings.** The theme ships translated UI strings for English, Russian, Spanish, French, German,
  Portuguese, Korean, Japanese and Chinese (`_data/i18n/{en,ru,es,fr,de,pt,ko,ja,zh}.yml`) — add any of them to
  `languages:` in your site's `_config.yml` and it just works. Override single keys, or add a language of your
  own, by creating `_data/i18n/<lang>.yml` in your site. Set `site_title` and `site_description` there to
  localize them.
- **In templates.** `{% include t.html key="read_more" %}`, `{% include t.html key="min_read" n=5 %}`,
  `{% include date.html date=page.date %}`.

## Components

Buttons, cards (including the image-led `media` card used by the projects gallery), labels/badges, alerts,
tabs, breadcrumbs, tables and more — see `/styleguide/` on the demo site for every component with
copy-pasteable markup, or browse `_sass/perigee/components/` and the matching `_includes/*.html`.

When embedding `card.html` (or anything else rendered as `<a>...</a>`) directly inside a Markdown post or
page, wrap it in a block element — `<div class="pg-grid">{% raw %}{% include card.html ... %}{% endraw %}</div>`
— otherwise kramdown mis-parses the lone `<a>` line and its real closing tag ends up as visible text.

## Customization

| What | How |
|------|-----|
| Colors, spacing, fonts | Override `--g-*` / `--pg-*` custom properties in `_sass/perigee-custom.scss` |
| Extra `<head>` tags (analytics, favicons) | Create `_includes/head-custom.html` |
| Icons | Add `_includes/icons/<name>.svg` (any icon from [@gravity-ui/icons](https://gravity-ui.com/icons)) and use `{% include icon.html name="<name>" %}` |
| Home page sections | Add `_includes/sections/<type>.html` |
| Any layout or include | Copy it from the theme into your site and edit |

### Palettes

By default Perigee uses Gravity UI's own colors. The theme also ships optional palettes, off unless you
turn one on:

| Palette | Look |
|---------|------|
| `warm` | Warm off-white background (`#faf9f7`), near-black warm text, a single amber accent (`#ffbe5c`) in both themes, darker amber links in the light theme for readable contrast, and an ambient amber glow on every page — two soft spots at the top-left and top-right of the window that stay in place while the page scrolls (the same effect as xonagdev.ru). Used by this demo site. |

To enable one, add it to `_config.yml` and rebuild:

```yaml
perigee:
  palette: warm
```

Remove the line (or leave it empty) to go back to Gravity UI's colors. The palette loads before your own
`_sass/perigee-custom.scss`, so you can still tweak any of its values there, for example
`:root { --g-color-base-brand: #5282ff; }`.

If your site overrides `assets/css/main.scss` itself, the config option has no effect — add the palette
there directly, between the theme and your customizations:

```scss
@use "perigee";
@use "perigee/palettes/warm";
@use "perigee-custom";
```

To make your own palette, copy `_sass/perigee/palettes/_warm.scss` from the theme into your site's
`_sass/perigee/palettes/<name>.scss`, change the values and set `palette: <name>`. Keep light-theme link
colors at a 4.5:1 contrast ratio or better against the background — a bright accent that works for
buttons is usually too pale for text.

## Development

```sh
bundle install
bundle exec jekyll serve      # demo site at http://localhost:4000
```

Tokens, icons and fonts are generated from npm packages. To update them, bump versions in `package.json`, then run:

```sh
npm install
npm run sync
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full workflow.

## License

[MIT](LICENSE). Bundled third-party assets are listed in [NOTICE](NOTICE).
