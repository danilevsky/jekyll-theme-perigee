---
title: 플러그인 없는 목차
translation_key: toc-demo
tags: [jekyll, 가이드]
---

Perigee의 목차는 kramdown에 내장된 `{:toc}` 마커를 사용합니다 — Ruby 플러그인이 필요 없으므로
`jekyll build`를 실행할 수 있는 모든 호스팅에서 작동합니다.

* TOC
{:toc}

## 글에 추가하기

도입 문단 바로 뒤에 다음을 넣으세요:

```markdown
* TOC
{:toc}
```

## 스타일이 적용되는 방식

`assets/js/perigee.js`의 작은 스크립트가 kramdown이 생성한 목록을 찾아 테마 스타일이 적용된
접이식 `<details>` 요소로 감쌉니다.

## JavaScript 없이

JavaScript가 없어도 단순한 중첩 목록은 그대로 표시됩니다 — 다만 접을 수 없을 뿐입니다.
