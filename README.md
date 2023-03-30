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

## 설치
```bash
yarn
```

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
- [WaffleScroll](./library/waffleScroll/README.md)

## 협업


---
# Upcoming Features

---
# Contributors