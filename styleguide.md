---
title: Styleguide
lead: Every component the theme ships, in both color themes.
---

## Buttons

<p>
  <a class="pg-button pg-button_view_action" href="#">Action</a>
  <a class="pg-button pg-button_view_outlined" href="#">Outlined</a>
  <a class="pg-button pg-button_view_flat" href="#">Flat</a>
</p>
<p>
  <a class="pg-button pg-button_view_action pg-button_size_m" href="#">Size m</a>
  <a class="pg-button pg-button_view_action" href="#">Size l (default)</a>
  <a class="pg-button pg-button_view_action pg-button_size_xl" href="#">Size xl</a>
</p>

## Labels & badges

<p>
  <span class="pg-label">Label</span>
  <span class="pg-badge">Badge</span>
  <span class="pg-badge pg-badge_view_brand">Brand badge</span>
</p>

## Cards

{% assign pg_example_tags = "Tag 1,Tag 2" | split: "," %}
{% include card.html title="Card title" text="Supporting text for the card." tags=pg_example_tags url="/blog/" %}

## Alerts

Add classes to a blockquote with a kramdown IAL:

> This is an info alert.
{: .pg-alert .pg-alert_theme_info}

> This is a success alert.
{: .pg-alert .pg-alert_theme_success}

> This is a warning alert.
{: .pg-alert .pg-alert_theme_warning}

> This is a danger alert.
{: .pg-alert .pg-alert_theme_danger}

## Tabs

{% include tabs.html id="demo" tabs=site.data.styleguide.tabs %}

## Breadcrumbs

{% include breadcrumbs.html parent_title="Blog" parent_url="/blog/" title="Current page" %}

## Table

<div class="pg-table-wrap">
  <table class="pg-table pg-table_striped">
    <thead><tr><th>Token</th><th>Purpose</th></tr></thead>
    <tbody>
      <tr><td><code>--g-color-base-brand</code></td><td>Accent color</td></tr>
      <tr><td><code>--g-color-text-primary</code></td><td>Main text</td></tr>
      <tr><td><code>--g-color-line-generic</code></td><td>Borders and dividers</td></tr>
    </tbody>
  </table>
</div>

## Icons

Any icon from `_includes/icons/` can be used with `{% raw %}{% include icon.html name="sun" %}{% endraw %}`:

<p>
  {% include icon.html name="sun" %}
  {% include icon.html name="moon" %}
  {% include icon.html name="display" %}
  {% include icon.html name="globe" %}
  {% include icon.html name="calendar" %}
  {% include icon.html name="tag" %}
  {% include icon.html name="check" %}
</p>
