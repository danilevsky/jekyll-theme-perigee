# Contributing

## Setup

```sh
bundle install
bundle exec jekyll serve   # demo site at http://localhost:4000
```

On Windows, `--detach` doesn't work (`fork()` is unimplemented) — run `jekyll serve` in the background instead.

## Project layout

Only `_layouts/`, `_includes/`, `_sass/`, `assets/` and `_data/i18n/*.yml` ship in the gem (see `files` in
`jekyll-theme-perigee.gemspec`). Everything else at the repo root (`index.md`, `ru/`, `_posts/`, `styleguide.md`,
`_data/navigation.yml`, `_config.yml`, ...) is the demo/documentation site, published to GitHub Pages.

## Updating vendored tokens, icons and fonts

`_sass/perigee/tokens/*`, `_sass/perigee/_fonts.scss`, `_includes/icons/*.svg` and `assets/fonts/inter/*` are
generated — don't edit them by hand. To pull a newer version of Gravity UI or Inter:

1. Bump the version in `package.json`.
2. `npm install && npm run sync`
3. Rebuild and check the diff (`bundle exec jekyll build`).

To add an icon, add its name to the `ICONS` list in `scripts/sync-vendor.mjs`, then re-run the sync.

## Adding a component

1. SCSS in `_sass/perigee/components/_<name>.scss`, added to `_sass/perigee/_index.scss`.
2. An include in `_includes/<name>.html` if it needs markup, documented with a `{%- comment -%}` usage line.
3. A demo in `styleguide.md`.
4. Follow the existing naming: `pg-<block>`, `pg-<block>__<element>`, `pg-<block>_<modifier>_<value>`.

## A scoping gotcha

Jekyll's `{% include %}` shares the caller's Liquid scope (it isn't isolated like `{% render %}`). An
`{% assign %}` inside an include can silently overwrite a same-named variable in whatever template included
it — including a `for` loop's own loop variable. This has caused real bugs here (e.g. an include using
`pg_year` internally broke a caller's `{% for pg_year in ... %}`).

Prefix internal variables in shared includes/layouts uniquely (`pg_d_*` in `date.html`, `pg_s_*` in
`sections/posts.html`, etc.) rather than generic names like `pg_year`, `pg_item` or `pg_tag` that a caller is
likely to use as its own loop variable.

## Testing changes

There's no automated test suite. Verify by building and checking the output:

```sh
bundle exec jekyll build
bundle exec htmlproofer _site --disable-external --checks Links,Images,Scripts
gem build jekyll-theme-perigee.gemspec             # sanity-check what ships in the gem
```

`htmlproofer` also runs in CI on every push/PR. On Windows it currently fails to even load
(`Could not open library 'libcurl'` — a missing native dependency of its external-link checker, `ethon`/`typhoeus`,
unrelated to this theme) even with `--disable-external`; Linux and macOS are unaffected. If you're on Windows,
rely on the CI run for this check.

For visual changes, check both color themes and a narrow (≤ 390px) viewport.

## Pull requests

Keep changes focused. Update `CHANGELOG.md` under `[Unreleased]` for anything user-facing.
