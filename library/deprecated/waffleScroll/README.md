# Waffle Scroll

---
- Written by [designDefined](https://github.com/designDefined)
- Last Update: 23-03-10 


## Table of Content
- [Description](#Description)
- [Usage](#Usage)
- [Upcoming Features](#Upcoming-Features)


## Description
`waffleScroll`은 랜딩 페이지의 스크롤 애니메이션을 쉽고 선언적으로 구현하기 위한 라이브러리입니다.

주로 `Intersection Observer`를 이용해 구현하는 scroll transition이나 parallax animation 등을 리액트 컴포넌트 내에서 깔끔하게 구현할 수 있습니다.

페이지 스크롤에 따라 컴포넌트가 노출되는 정도를 한정적인 수치로 매핑한 `progress` 값에 따라, `scrollState`를 

## Usage
### 사용하기
`useWaffleScroll` Hook은 `scrollFunction`과 `initialState`를 인자로 받아 `ref`와 `scrollState`를 반환합니다.
- `scrollFunction`: 스크롤 값에 따라 `scrollState`를 변화시키는 콜백 함수
- `initialState`: `scrollState`의 초기값
- `ref`: 스크롤을 감지할 컴포넌트를 등록
- `scrollState`: scrollFunction에 적힌대로 변화하는 상태. 컴포넌트의 스타일링을 위해 사용!

```typescript jsx
const {ref, scrollState} = useWaffleScroll(scrollFunction, initialState);
```

### scroll state
`useState`와 비슷하게 작동하나, 객체만을 값으로 가질 수 있습니다. 상태가 변경될 시 선언된 컴포넌트가 자동으로 리렌더됩니다. 

### scroll function
`useWaffleScroll`이 인자로 받는 콜백 함수입니다.
다음과 같은 API들이 자동으로 인자로 제공되어 콜백 함수 내에서 사용할 수 있습니다.
- `getScrollState`: 현재 scroll state를 가져옵니다.
- `setScrollState`: scroll state를 변경합니다. scroll state의 일부분(Partial Type)만을 인자로 넣으면 나머지 속성은 유지되고 해당 속성만 변경됩니다. 깊은 비교를 이용하여 변경값이 없을 경우 리렌더하지 않습니다.
- `progress`: 스크롤되는 컴포넌트가 화면에 얼마나 보이는 지를 나타내는 값입니다. 0 ~ 3 사이의 연속적인 float 값으로 제공됩니다. 
  - 0 < progress < 1: 화면 하단에 컴포넌트 일부분이 보임
  - 1 <= progress <= 2: 화면에 컴포넌트 전체가 보임 or 컴포넌트가 화면 전체를 채움
  - 2 < progress < 3: 화면 상단에 컴포넌트 일부분이 보임
  - progress가 0 또는 3: 화면에 컴포넌트가 전혀 보이지 않음 
- `toggleState(min, max, stateKeyToToggle)`: progress가 최소, 최대 값 사이일 때 세번째 인자로 받은 scrollState key의 값을 true, 아닐 때는 false로 전환합니다.
  - 선언적인 코드 작성에 유용합니다.
  - ```typescript jsx
    toggleState(1.5, 4, "isMore");
    ``` 

### 사용 예시
```typescript jsx
   const { ref, scrollState: { available, notFold } } = useWaffleScroll(
    ({ toggleState }) => {
      toggleState(0.2, 3, "available");
      toggleState(0.7, 3.1, "notFold");
    },
    { available: false, notFold: false },
  );
```
scroll state의 초기값은 `{available:false, notFold:false}`입니다.
스크롤이 내려가기 시작해 progress가 0.2 이상일 때 `available` 속성이 `true`가 되고, 더 내려가 0.7 이상일 때 `notFold` 속성도 `true`가 됩니다.
스크롤이 더 내려가다 화면서 완전히 사라지면 `available`은 다시 `false`가 됩니다. progress의 최대값은 3이기에, 페이지의 스크롤이 컴포넌트를 지나가 있으면 `notFold` 속성은 `false`가 되지 않고 여전히 `true`입니다.

# Upcoming Features
- 성능 최적화
- custom scroll 컴포넌트 만들기에 대응