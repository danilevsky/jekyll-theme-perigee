# Changelog

All notable changes to this project are documented here.
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project uses [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added
- Initial theme: Gravity UI design tokens (light/dark/system), self-hosted Inter font, base layout, header/footer.
- Built-in localization: per-language URLs, `_data/i18n`, language switcher, `hreflang`.
- Bundled UI-string translations: English, Russian, Spanish, French, German, Portuguese, Korean, Japanese, Chinese.
- Full demo content (home, about, blog with 3 posts, projects) in all 9 bundled languages, cross-linked via `translation_key`.
- Components: button, card, label, badge, alert, tabs, breadcrumbs, pagination, table, dropdown.
- `home` layout built from reusable sections (`hero`, `posts`, `cards`, `features`, `cta`, `content`).
- Blog: `blog` and `tags` layouts, post layout with table of contents (kramdown `{:toc}`), reading time,
  related posts, previous/next navigation, RSS feed and sitemap layouts.
- `project` / `projects` layouts for portfolio-style collections, with the `<name>_<lang>` convention for
  multilingual collections.
- `/styleguide/` demo page documenting every component.
- `card.html`'s `view="media"` and a `pg-grid_bento` gallery grid for the `/projects/` page, in the style of
  gravity-ui.com's "Our libraries" (one large featured tile plus smaller ones, via `featured`/`badge` front matter).
- Image support: `image`/`image_alt` front matter for post/project cover images and card thumbnails, and a
  `figure.html` include for captioned inline images.
- Optional `warm` palette (warm off-white, near-black text, amber accent, and a fixed ambient glow on
  every page that stays in place while scrolling), enabled with `perigee.palette: warm` in `_config.yml`; the demo site uses it. Gravity UI's colors stay the default.

### Fixed
- Light-theme links in the warm palette use a darker amber (5.1:1 contrast instead of ~1.6:1).
- The palette's glow no longer causes horizontal scrolling on viewports narrower than ~1280px.
- Project badges now show on home-page `cards` sections, not only on `/projects/`.
- Image `alt` text is HTML-escaped, so quotes in `image_alt` no longer break the markup.
- Breadcrumb links on post and project pages no longer double the `baseurl` (broken on GitHub Pages
  project sites such as `/jekyll-theme-perigee/`).
- CI: htmlproofer now accounts for the Pages `baseurl` instead of reporting every internal link as missing.
