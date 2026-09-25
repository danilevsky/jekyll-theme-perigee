---
title: Gravity UI의 디자인 토큰을 재사용하는 이유
translation_key: gravity-tokens
tags: [디자인, gravity-ui]
---

Perigee는 색상 시스템을 처음부터 새로 만들지 않습니다. `@gravity-ui/uikit`에서 `--g-*` 커스텀 속성을
그대로 가져오기 때문에, 라이트·다크 테마 모두에서 색상 팔레트, 간격 체계, 타이포그래피가
gravity-ui.com과 정확히 일치합니다.

이 동기화는 작은 Node 스크립트(`scripts/sync-vendor.mjs`)를 통해 이루어지며, 이는 테마
*개발자*에게만 필요합니다 — 이 gem을 기반으로 만든 사이트는 빌드할 때 Node가 전혀 필요하지 않습니다.
