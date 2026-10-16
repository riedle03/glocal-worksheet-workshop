---
name: 원고 합평 워크숍
description: 불 켜진 노란 바탕 위에 기울어진 탄소색 판이 출발 안내판처럼 놓이는 합평 활동지 — 포켓 시간표 슬라이드
colors:
  bed: "#d9a820"
  bed-lit: "#e2b42e"
  carbon: "#1b1b1a"
  slate: "#3d4855"
  ivory: "#f6ecdc"
  paper: "#fbf5ea"
  ink-soft: "#3a3529"
  vermilion: "#b02e17"
  bottle-green: "#0f6b4e"
  hair: "#c9961c"
  muted-on-dark: "#c9c2b2"
typography:
  display:
    fontFamily: "Black Han Sans, Pretendard Variable, Pretendard, sans-serif"
    fontSize: "clamp(64px, 9.7vw, 140px)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "-0.03em"
  masthead:
    fontFamily: "Black Han Sans, Pretendard Variable, Pretendard, sans-serif"
    fontSize: "68px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Black Han Sans, Pretendard Variable, Pretendard, sans-serif"
    fontSize: "76px"
    fontWeight: 400
    lineHeight: 1.05
  headline-chapter:
    fontFamily: "Black Han Sans, Pretendard Variable, Pretendard, sans-serif"
    fontSize: "44px"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, Malgun Gothic, sans-serif"
    fontSize: "22px"
    fontWeight: 900
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, Malgun Gothic, sans-serif"
    fontSize: "28px"
    fontWeight: 800
    lineHeight: "40px"
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, Segoe UI, Malgun Gothic, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, Malgun Gothic, sans-serif"
    fontSize: "15px"
    fontWeight: 800
    lineHeight: 1.4
  clock:
    fontFamily: "Black Han Sans, Pretendard Variable, Pretendard, sans-serif"
    fontSize: "48px"
    fontWeight: 400
    fontFeature: "tnum"
rounded:
  none: "0px"
spacing:
  gutter: "36px"
  gutter-narrow: "18px"
  measure: "46rem"
  page-max: "1440px"
  chapter-max: "1080px"
  chapter-gap: "96px"
  cell-pad: "30px"
components:
  button-slab:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.ivory}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 26px"
    height: "52px"
  button-slab-hover:
    backgroundColor: "{colors.slate}"
  button-slab-active:
    backgroundColor: "{colors.bottle-green}"
  button-slab-line:
    backgroundColor: "{colors.bed}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.none}"
    padding: "0 26px"
    height: "52px"
  button-slab-small:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.ivory}"
    padding: "0 18px"
    height: "40px"
  seat-pick:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.ivory}"
    padding: "0 22px 0 46px"
    height: "72px"
  chip-code:
    backgroundColor: "{colors.slate}"
    textColor: "{colors.ivory}"
    padding: "0 12px"
    height: "40px"
  chip-code-green:
    backgroundColor: "{colors.bottle-green}"
    textColor: "{colors.ivory}"
  chip-code-red:
    backgroundColor: "{colors.vermilion}"
    textColor: "{colors.ivory}"
  chip-code-gold:
    backgroundColor: "{colors.bed}"
    textColor: "{colors.carbon}"
  input-ink:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.carbon}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "8px 10px"
  cell:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.none}"
    padding: "0 30px 26px"
  chapter-head:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.ivory}"
    typography: "{typography.headline-chapter}"
    padding: "16px 48px 16px 40px"
  departures-board:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.ivory}"
    padding: "22px 70px 28px 90px"
---

# Design System: 원고 합평 워크숍

## Overview

**Creative North Star: "포켓 시간표 슬라이드"**

워크숍 하루를 한 장의 출발 안내판으로 읽는다. 챕터·차례·일곱 걸음이 역의 출발 편처럼 지나가고, 화면은 그 안내판을 손에 쥔 포켓 시간표처럼 짠다. 불 켜진 금빛 바탕 위에 탄소색과 슬레이트 판이 왼쪽으로 기울어 놓이고, 글을 읽고 쓰는 자리는 불투명한 상아색 판이 받친다. 크림색 종이 활동지의 둥근 카드·옆 탭 강조는 이 세계의 반대편이다.

밀도는 높고 목소리는 굵다. 순위는 크기보다 **굵기·반전(어두운 판 위 밝은 글자)·줄**로 매긴다. 판은 기울어도 글자 기준선은 언제나 수평이다. 판만 기울고 글자는 똑바로 서 있는 이 어긋남이 세계의 서명이다.

상태는 색이 아니라 **선의 모양**으로 말한다. 지난 편(완료)과 내 자리가 아닌 편(해당 없음)은 줄이 그어지고, 지금 편 하나만 병 초록 판을 얻는다. 움직임은 기계식 안내판처럼 두 단계로 딸깍 넘어갈 뿐 미끄러지지 않는다.

**Key Characteristics:**
- 금빛 바탕(종이결 타일 + 램프 빛 한 겹) 위의 탄소·슬레이트 기울어진 판
- 큰 판은 통째로 기울이고, 손에 닿는 작은 판은 상자 안에서 평행사변형으로 잘라 낸다
- 글자 기준선은 언제나 수평
- 버밀리언·병 초록은 코드 칩과 상태 표시에만
- 둥근 모서리 0, 번진 그림자 0, 그라디언트는 램프 빛 하나
- 움직임은 steps(2) 약 90ms의 딸깍 전환뿐

## Colors

금빛 바탕, 탄소·슬레이트 판, 상아 종이, 그리고 아주 드물게 쓰는 신호색 둘로 된 역 안내판 팔레트.

### Primary
- **불 켜진 금빛 바탕 (Lit Goldenrod Bed)** (`bed`): 페이지 전체의 땅. 끈끈한 레일 띠, 선택 영역의 반대색, 테두리 버튼의 안쪽 판, 어두운 판 위의 제목·강조 글자(안내판 제목, 챕터 머리의 「누가」, 걸음 번호·시계)에 쓴다. 밝은 변주 **램프 금빛** (`bed-lit`)은 hover와 어두운 판 위 포커스 링에만.

### Secondary
- **탄소 (Carbon)** (`carbon`): 기본 판이자 기본 글자색. 안내판, 챕터 머리, 칸 머리띠, 기본 버튼, 진행자 걸음판, 경고·콜아웃, 포커스 링, 굵은 구분선(3px)과 입력칸 밑줄.
- **슬레이트 (Slate)** (`slate`): 두 번째 판. 안내판 표 머리, 챕터 안의 구간 띠, 기본 코드 칩, 버튼 hover.

### Tertiary
- **버밀리언 (Vermilion)** (`vermilion`): 코드 칩과 「아니다」 태그에만. 판·글자·밑줄 색으로 쓰지 않는다.
- **병 초록 (Bottle Green)** (`bottle-green`): 코드 칩, 「좋은」 태그, 그리고 상태 하나 — **지금**(레일의 지금 번호판, 안내판의 지금 상태), 체크된 완료 상자, 버튼 눌림.

### Neutral
- **상아 (Bible Ivory)** (`ivory`): 글과 입력을 받는 불투명 판(칸, 풀어 읽기 판, 약속 카드, 이름 판), 어두운 판 위 본문 글자.
- **종이 (Paper)** (`paper`): 상아 판 안의 입력칸 바탕과 예문 판. 포커스 때 흰색으로 밝아진다.
- **흐린 잉크 (Soft Ink)** (`ink-soft`): 밝은 판 위 보조 글자(작은 글, 힌트, 괄호 보충).
- **금빛 실선 (Hair)** (`hair`): 어두운 판 안의 1px 행 구분선.
- **어두운 판 위 흐린 글자 (Muted on Dark)** (`muted-on-dark`): 어두운 판 위 보조 글자, 완료 상태 글자, 어두운 입력칸 밑줄.

### Named Rules
**The Signal Only Rule.** 버밀리언과 병 초록은 코드 칩·태그·상태 표시에만 산다. 판 바탕, 제목 글자, 입력칸 테두리에 쓰지 않는다(입력칸을 빨강 밑줄로 표시하던 시도는 탄소 3px 밑줄로 되돌렸다).

**The One Now Rule.** 초록 「지금」은 한 화면에 한 편뿐이다. 화면 위 30% 읽는 선을 지난 마지막 챕터가 지금이고, 레일과 안내판이 같은 하나를 가리킨다.

**The Lamp Only Rule.** 그라디언트는 바탕의 램프 빛(가운데가 조금 밝은 타원 하나) 하나뿐이다.

## Typography

**Display Font:** Black Han Sans (with Pretendard Variable)
**Body Font:** Pretendard Variable (with Pretendard, -apple-system, Segoe UI, Malgun Gothic)

**Character:** 역 안내판처럼 꽉 찬 검은 한글 고딕 제목과, 900까지 굵기를 오가는 한 벌의 고딕 본문. 제목 서체는 굵기 400 한 가지로만 쓰고, 본문 서체 안에서 순위를 굵기로 매긴다.

### Hierarchy
- **Display** (Black Han Sans 400, clamp(64px, 9.7vw, 140px), 0.88): 첫 화면 두 줄 큰 제목 하나.
- **Masthead** (Black Han Sans 400, 68px, 1): 왼쪽 위 이름표. 900px 이하 34px.
- **Headline** (Black Han Sans 400, 76px, 1.05): 출발 안내판 제목, 금빛 글자 + 금빛 3px 밑줄. 900px 이하 40–44px.
- **Headline Chapter** (Black Han Sans 400, 44px, 1.15): 챕터 머리 제목. 뒷장 제목 40px, 어두운 판 소제목 28px, 진행자 걸음 이름 32px도 같은 서체.
- **Title** (Pretendard 900, 22px, -0.02em): 칸 제목, 약속 제목. 구간 띠 21px, 소제목 24px / 19px. 안내판 행 이름 29px, 자리 고르기 35px도 900.
- **Lede** (Pretendard 800, 28px / 40px): 첫 화면 한 줄 소개. 챕터 첫 문단은 21px 600.
- **Body** (Pretendard 400, 17px, 1.7): 모든 본문과 입력. 문단 폭 46rem. 예문은 18px / 1.95. 한국어 어절 단위 줄바꿈(keep-all).
- **Label** (Pretendard 800, 15px): 입력칸 이름, 작은 번호판, 태그. 저장 표시·글자 수는 14px 700.
- **Clock** (Black Han Sans, 48px, 고정폭 숫자): 진행자 시계 하나.

### Named Rules
**The Weight Ladder Rule.** 본문 서체 안에서 순위는 400 → 600 → 700 → 800 → 900의 굵기로 올린다. 대문자·자간 벌리기·작은 윗글(키커)로 순위를 만들지 않는다.

**The Display Is Sign Rule.** Black Han Sans는 안내판의 간판 글자다. 큰 제목·판 제목·챕터 제목·시계에만 쓰고 본문·버튼·칩에는 쓰지 않는다.

## Layout

최대 1440px 페이지에 좌우 여백 36px(900px 이하 18px). 챕터와 뒷장은 1080px 안에서 왼쪽 정렬로 흐르고, 챕터 사이는 96px(900px 이하 70px)을 비운다.

- **첫 화면:** 587 : 781 두 칸. 왼쪽에 큰 제목·소개·A/B 자리판·이름 판, 오른쪽에 기울어진 출발 안내판(최소 높이 592px), 아래 전체 폭으로 약속 카드 다섯 장. 1180px 이하 한 칸으로 쌓이고 약속 카드는 2열, 900px 이하 1열.
- **레일:** 화면 위에 붙는 6칸 눈금 레일. 4px 탄소 선 위에 번호 눈금이 서고, 지금 칸만 초록 판. 600px 이하 번호만.
- **표:** 안내판·출발표·일곱 걸음은 고정 폭 첫 열 + 비율 열의 격자, 행 사이 1px 금빛 실선. 900px 이하 한 열로 풀고 표 머리를 감춘다.
- **사다리:** 네 계단은 24px씩 오른쪽으로 물러난다(900px 이하 정렬).
- **따라오는 안내판:** 1420px 이상에서만 오른쪽 빈 띠에 236px 작은 안내판이 고정으로 뜬다.
- **기울기 여유:** 출발 안내판 행은 위에서 아래로 11px씩 왼쪽으로 물러나 판의 기울기를 따른다. 기울인 배경이 가로 스크롤을 만들지 않도록 html·body는 가로를 자른다.
- **인쇄:** 바탕·레일·버튼을 걷고 흰 종이에 판 색을 그대로 찍는다. 다른 자리 챕터 흐림과 엎어 둔 카드를 풀어 모든 칸이 살아 있게 한다.

## Elevation & Depth

그림자 없는 평면 세계다. 깊이는 **겹친 판**으로만 만든다: 금빛 땅 → 기울어진 탄소·슬레이트 판 → 상아 판 → 종이 입력칸. 바탕에는 종이결 타일(`assets/plates/ground.png`, 576×360, 이음매 없는 거울 타일)과 램프 빛 타원 하나가 겹쳐 빛판이 된다. 흐림 대신 투명도로 물러난다: 다른 자리 챕터는 0.4, 해당 없음 행은 0.5.

### Shadow Vocabulary
- **입력 포커스 밑줄** (`box-shadow: inset 0 -3px 0 var(--carbon)`; 어두운 판 위 `inset 0 -3px 0 var(--bed)`): 그림자가 아니라 밑줄을 굵히는 선. 번짐 0.

### Named Rules
**The Stacked Plate Rule.** 무언가를 앞으로 꺼내려면 판을 한 겹 더 놓는다. box-shadow 번짐, 떠 있는 카드, 오프셋 그림자는 쓰지 않는다.

## Shapes

둥근 모서리는 0이다. 모든 형태는 사각형 아니면 왼쪽으로 기운 평행사변형이고, 기울기는 `--rake`(-11°, 900px 이하 -8°) 하나가 정한다.

- **큰 판은 통째로 기울인다.** 출발 안내판, 표 머리, 챕터 머리, 칸 머리띠, 구간 띠, 따라오는 안내판, 그리고 그 위의 작은 표지(칸 번호판, 태그, 레일의 지금 번호판, 안내판의 지금 상태, 접힌 상자 머리)는 뒤에 깐 층만 `skewX(var(--rake))`로 기울인다. 900px 이하에서 안내판과 챕터 머리는 -4°로 눕힌다.
- **손에 닿는 작은 판은 상자 안에서 잘라 낸다.** 버튼, A/B 자리판, 코드 칩, 이름 판, 약속 카드는 상자 경계를 넘지 않도록 네 점 평행사변형 `clip-path`로 자른다. 기울기 여유 `--k`는 판 높이를 따른다: 버튼 20px(좁은 화면 12px), 자리판 18px, 약속 카드 15px, 이름 판 14px, 큰 칩 12px, 칩 9px, 작은 칩 6px.
- **테두리 판은 두 겹이다.** 바깥 판(탄소 또는 상아)을 자르고, 그 위에 2px 안쪽으로 한 겹 더 자른 판(금빛·상아·탄소)을 놓아 테두리를 만든다. CSS border로 평행사변형 테두리를 그리지 않는다.
- **체크 상자**는 글자가 없는 20px 상자 자체를 기울인다. 체크되면 초록으로 찬다.

### Named Rules
**The Flat Baseline Rule.** 판은 기울어도 글자는 기울지 않는다. 기울기·자르기는 언제나 뒤에 깐 층(::before / ::after)에만 걸고, 글자를 담은 요소 자체에 skew를 걸지 않는다.

**The Hand-Sized Clip Rule.** 손으로 누르거나 고르는 판은 자기 상자 밖으로 삐져나오지 않는다. 기울이지 말고 잘라 낸다.

## Components

### Buttons (슬랩)
판 하나를 누르는 감각. 굵고 단단하다.
- **Shape:** 상자 안에서 자른 평행사변형(`--k` 20px), 높이 52px, 좌우 26px. 글자 Pretendard 19px 900.
- **Primary:** 탄소 판 + 상아 글자. hover 슬레이트, 눌림 병 초록.
- **Line:** 탄소 바깥 판 위에 금빛 안쪽 판 — 금빛 땅에 그린 테두리 버튼. hover 램프 금빛. 「전체 지우기」처럼 물러선 동작.
- **어두운 판 위:** 상아 판(`ivory`) 버튼, 상아 테두리 버튼(`line-ivory`), 금빛 판 버튼. 포커스 링은 램프 금빛.
- **Small:** 높이 40px, 좌우 18px, 15px.
- **Focus:** 3px 탄소 외곽선, 3px 띄움.

### Chips (코드 칩)
안내판의 편 번호.
- **Style:** 자른 평행사변형, 높이 40px(표 안 36px, 큰 칩 54px, 작은 안내판 26px), Pretendard 24px 900. 슬레이트·병 초록·버밀리언·금빛·상아 다섯 가지. 금빛·상아 칩만 탄소 글자.
- **State:** 상태를 갖지 않는다. 편을 구분하는 코드일 뿐이다.

### Cards / Containers
- **Corner Style:** 0.
- **칸(Cell):** 상아 판 위에 기울어진 탄소 머리띠. 머리띠 안에 금빛 번호판 + 상아 22px 900 제목. 몸 좌우 30px(900px 이하 18px).
- **풀어 읽기 판·확인 판·읽는 사람 판:** 상아 평판, 기울이지 않는다.
- **약속 카드:** 탄소 바깥 + 상아 안쪽의 자른 두 겹 판, 번호 22px + 한 줄 16.5px 700.
- **콜아웃·경고:** 탄소 평판, 상아 글자, 강조는 금빛.
- **Shadow Strategy:** 없음. Elevation & Depth 참조.

### Inputs / Fields
- **Style:** 종이 바탕, 테두리 없이 2px 탄소 밑줄, 모서리 0, 17px / 1.7. 한 줄 입력은 투명 바탕. 이름 칸은 상아 자른 판 안의 21px 밑줄.
- **Focus:** 바탕이 흰색으로 밝아지고 밑줄이 안쪽 3px 선으로 굵어진다. 외곽선 없음.
- **어두운 판 위:** 투명 바탕, 흐린 글자색 밑줄, 포커스 때 금빛 3px 밑줄.
- **고를 칸:** 3px 탄소 밑줄 + 라벨 앞 칩.
- **옮겨 온 칸(mirror):** 점선 밑줄, 700.

### Navigation (눈금 레일)
- 페이지 위에 붙는 금빛 띠. 4px 탄소 가로선에서 4×12px 눈금이 내려오고, 번호 15px 800 + 이름 14px 800.
- **지금:** 번호가 52px 초록 기울어진 판 위 상아 글자로 바뀐다. 다른 자리 칸은 0.4로 흐린다.
- **Mobile:** 600px 이하 번호만.

### Departures Board (출발 안내판) — 서명 컴포넌트
- 기울어진 탄소 판 위에 금빛 76px 제목 + 금빛 3px 밑줄, 기울어진 슬레이트 표 머리(순서 · 챕터 · 누가 · 상태), 여섯 행.
- 행: 코드 칩 · 29px 900 이름 · 24px 700 누가 · 24px 700 상태, 행 사이 1px 금빛 실선, hover는 금빛 10% 덮개.
- **상태 문법:** 대기(그대로) · **지금**(병 초록 기울어진 판) · 완료(상태 글자에 2px 줄, 흐린 글자) · 해당 없음(행 0.5, 이름에 2px 줄).
- 1420px 이상에서는 같은 문법의 236px 작은 안내판이 오른쪽에 따라온다(-4° 판).

### Facilitator Stepper (걸음 안내판)
- 탄소 평판. 금빛 18px 900 걸음 번호, Black Han Sans 32px 걸음 이름, 금빛 48px 고정폭 시계, 6px 진행 막대(금빛 채움), 상아 판·테두리 버튼 줄.

### Fold (접힌 상자)
- 2px 탄소 테두리의 기울어진 머리, hover 탄소 8% 덮개. 진행자용은 탄소로 채운 머리. 펼친 몸은 상아 평판.

### Motion
- 모든 상태 전환은 `steps(2)` 약 90ms(배경·투명도). 미끄러짐·튀어 오름·이징 곡선 없음. 움직임 줄이기 설정에서는 부드러운 스크롤과 전환을 끈다.

## Do's and Don'ts

### Do:
- **Do** 판을 기울일 때는 뒤에 깐 층에만 `skewX(var(--rake))`를 걸고 글자는 수평으로 둔다.
- **Do** 버튼·자리판·칩·카드처럼 손에 닿는 작은 판은 `--k` 네 점 `clip-path`로 상자 안에서 자르고, 테두리는 안쪽 판을 한 겹 더 놓아 만든다.
- **Do** 상태는 줄(완료·해당 없음)과 초록 「지금」 하나로 보여 준다.
- **Do** 순위는 굵기(400–900), 어두운 판 반전, 2–3px 탄소 줄로 매긴다.
- **Do** 글과 입력은 상아·종이 판 위에 둔다. 금빛 땅에 직접 긴 글을 깔지 않는다.
- **Do** 전환은 `steps(2)` 약 90ms로 딸깍 넘긴다.

### Don't:
- **Don't** 둥근 모서리, 번진 그림자, 램프 빛 외의 그라디언트를 쓰지 않는다.
- **Don't** 버밀리언·병 초록을 판 바탕·제목 글자·입력 테두리에 쓰지 않는다.
- **Don't** 글자를 담은 요소 자체를 기울이거나, 작은 판을 skew로 상자 밖까지 삐져나오게 하지 않는다.
- **Don't** 제목 위 작은 윗글(키커), 대문자·자간 벌리기로 순위를 만들지 않는다.
- **Don't** 이징 곡선으로 미끄러지는 움직임을 넣지 않는다.
