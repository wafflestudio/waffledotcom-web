# WaffleStudio-Web
## 와플스튜디오 랜딩페이지 리뉴얼 (since 2022) 

> 서울대학교 컴퓨터공학부 웹/앱 개발 동아리 와플스튜디오에 오신 것을 환영합니다!
>
> 본 레포지토리는 와플스튜디오 홈페이지의 웹 프론트엔드 개발을 위해 작성되었습니다.
> 
> 배포 주소: (미정)

| ver | deployment URL | Start Date | PO |
|---|---|---|---|
| pre-release | [미정](./README.md) | YYYY-MM-DD | [MINKYU LEE](https://github.com/minkyu97) |



# Table of Content
- [Description](#Description)
- [Usage](#Usage)
- [Convention](#Convention)
- [Upcoming Features](#Upcoming-Features)
- [Contributors](#Contributors)


# Description

## 프로젝트 소개
기존의 와플스튜디오 홈페이지는 동아리의 간단한 정보를 확인하는 정도의 역할만 수행했으며, 
다양한 시기에 적힌 코드가 산재하여 유지/보수가 쉽지 않았습니다.

리뉴얼 와플스튜디오 홈페이지는 동아리의 정체성을 참신한 이미지로 보여줄 수 있는 랜딩 페이지와 
동아리 내의 프로젝트, 구성원을 효과적으로 홍보할 수 있는 여러 소개 페이지를 갖추고 있습니다.

또한 후속 개발을 통해 동아리 내 행정 업무 처리, 리크루팅 진행 및 기술 블로그 운영 등의 다채로운 기능을 갖춘
동아리의 중심 플랫폼으로 발전시키고자 합니다.

## 기술 스택
- React
- Typescript
- Next.js (ver 12.3.1.)
- Sass

### Test
- jest
- storybook
---

# Usage
## Prerequisite

- node.js
- yarn

## 개발 환경 세팅
```bash
yarn
husky install
husky add .husky/pre-commit "yarn lint-staged --no-stash --verbose && yarn build"
```
- 윈도우의 경우 "yarn lint-staged --no-stash --verbose && yarn build"를 사용

## 테스트 서버 실행

```bash
yarn dev
```
---

# Convention
## 개발 방향성
풍부한 기능을 갖추는 것 외에, `wafflestudio-web`이 추구하는 중요한 목적 중 하나는 
아주 오랜 기간동안, 동아리의 다양한 개발자들에 의해 성공적으로 유지보수될 수 있는 코드베이스를 구축하는 것입니다.

따라서 본 프로젝트에 참여하는 개발자들은 다음의 조건을 충족하는 코드를 작성해야 합니다.
- 이해가 쉬운 코드 작성
- 외부 라이브러리 의존성 최소화

현재는 개발의 편의를 위해 Next.js 프레임워크와 여러 라이브러리를 사용하고 있습니다.
리뉴얼 홈페이지의 최초 배포가 이뤄지고 나면 이러한 외부 기능에 대한 의존성을 최소화하는 리팩토링 작업을 진행할 예정입니다.

## linting / code style
`wafflestudio-web`은 엄격한 타입스크립트의 사용을 권장하며, `import` 순서, 파일/컴포넌트 명 작성 등 코드 스타일에 관한 규칙들을 `eslint`와 `prettier`를 이용하여 
최대한 자동화하고 있습니다. 또한 라이브러리의 의존을 심화시키는 lint rules는 사전에 차단하고 있습니다(아래 예시).
- `.eslintrc.json`
```json
{
  ...
  "@next/next/no-img-element": "off",
  ...
}
```
자세한 내용은 [.eslintrc.json](./.eslintrc.json)을 참고하세요. 

## library
동아리원의 유지보수가 불가능한 외부 라이브러리에 대한 의존을 줄이기 위해, 
필요한 기능들은 직접 라이브러리 형태로 구현한 후 직접 기능 추가, 유지 보수를 진행하고 있습니다.

개발 된/개발 중인 라이브러리는 이후의 개발자들을 위해 간단한 README 문서를 반드시 작성해두어야 합니다. 

현재 개발중인 라이브러리의 목록은 다음과 같습니다. (개발 시 직접 추가하세요!) 
- [WaffleScroll](library/waffleScroll/README.md)

## 협업
`wafflestudio-web`은 기본적으로 노션의 칸반을 이용하여 진행상황 및 보고 내용을 관리할 예정입니다.
- 작업할 내용이 생길 경우 노션에 칸반을 생성합니다.
- 작업을 진행하면서 노션의 칸반을 알맞게 이동합니다.
- Pull Request를 올릴 때 작업의 시작점이 된 칸반의 링크를 달고, 기타 내용도 템플릿에 맞게 작성합니다.
- 동료의 코드 리뷰가 끝나면 PR을 squash merge하고 브랜치를 삭제합니다.

작업 내용은 추가적으로 프론트엔드 스크럼과, `매 달 첫째 주 월요일`에 진행되는 전체 회의에서 보고합니다. 보고는 슬랙 칸반을 기준으로 이루어집니다.

## 컴포넌트
리액트 컴포넌트를 제작할 때 반드시 따라야 할 컨벤션은 없지만, 코드 스타일을 통일하고 유지보수를 용이하게 하기 위해 몇 가지 스타일을 권장합니다.

- 페이지 컴포넌트는 `/pages`, 일반 컴포넌트는 `/components/${사용되는 페이지 명}`에 작성하기
  - 컴포넌트 이름과 동일한 하위 디렉토리에 컴포넌트용 tsx 파일과 하나의 css(또는 scss) 모듈 배치
- 함수 컴포넌트 사용 (컴포넌트 함수는 화살표 함수 사용 X)
- 컴포넌트의 관심 명확히 분리하기
  - 가능한 한 컴포넌트를 추가, 삭제, 수정하는 것이 다른 컴포넌트 파일의 코드에 영향을 미치지 않도록 하기
    - ex) 스크롤에 따라 `fixed` 스타일의 배경화면이 전환되지만, 그렇다고 배경화면을 하나로 묶어서 작성하지는 말기
  - 다른 컴포넌트에 영향을 받을 수 밖에 없는 컴포넌트는 그렇지 않은 컴포넌트와 반드시 분리하고, 다른 컴포넌트에서 전달받는 값을 명시적으로 관리하기
    - ex) 목록과 현위치를 나타내는 네비게이터 바의 경우 다른 컴포넌트와 파일을 분리하고, 목차의 내용과 anchor를 배열로 등으로 명시하여 관리
- 반복 가능성이 높은 컴포넌트 내 로직은 커스텀 훅으로 모아서 관리

---
# Upcoming Features

---
# Contributors
