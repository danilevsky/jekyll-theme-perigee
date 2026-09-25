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
