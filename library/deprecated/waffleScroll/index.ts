import { useLayoutEffect, useReducer, useRef } from "react";
import {
  Calculatable,
  calculateProgress,
  partialIsDifferent,
  roundBy,
} from "./tools";
import { getScrollUtils, ScrollUtils } from "./extendedUtils";

//타입들
type AvailableHTMLElement = HTMLDivElement;

export type ScrollApis<T extends object> = {
  getScrollState: T;
  setScrollState: (partial: Partial<T>) => void;
};

type ScrollFunction<T extends object> = (
  params: ScrollApis<T> &
    ScrollUtils<T> & {
      progress: number;
    },
) => void;

type ScrollListener<T extends object> = {
  element: AvailableHTMLElement;
  scrollFunction: ScrollFunction<T>;
  apis: {
    getScrollState: T;
    setScrollState: (partial: Partial<T>) => void;
  };
};

//local scope window

//데이터들
let isInitiated = false;
const scrollListeners: ScrollListener<any>[] = [];

//스크롤 이벤트 핸들러
const onScrollHandler = () => {
  const currentViewport: Calculatable = {
    offsetTop: window.scrollY,
    offsetHeight: window.innerHeight,
  };
  for (const { element, apis, scrollFunction } of scrollListeners) {
    const target: Calculatable = {
      offsetTop: element.offsetTop,
      offsetHeight: element.offsetHeight,
    };
    const progress = roundBy(calculateProgress(target, currentViewport), 2);
    scrollFunction({
      ...apis,
      ...getScrollUtils(progress, apis),
      progress,
    });
  }
};

//메인 Hook
const useWaffleScroll = <T extends object>(
  scrollFunction: ScrollFunction<T>,
  initialState: T,
) => {
  const [, forceUpdate] = useReducer((c: number): number => c + 1, 0);
  const ref = useRef<AvailableHTMLElement | null>(null);
  const state = useRef<T>(initialState);
  const func = useRef<ScrollFunction<T>>(scrollFunction);
  const apis: ScrollApis<T> = {
    getScrollState: state.current,
    setScrollState: (partial: Partial<T>): void => {
      if (partialIsDifferent(state.current, partial)) {
        state.current = { ...state.current, ...partial };
        forceUpdate();
      }
    },
  };
  useLayoutEffect(() => {
    //처음 사용되는 훅은 이벤트리스너를 등록
    if (!isInitiated) {
      window.addEventListener("scroll", onScrollHandler);
      window.addEventListener("resize", onScrollHandler);
      isInitiated = true;
    }
    //마운트 시 리스너 등록
    if (ref.current) {
      const listener: ScrollListener<T> = {
        element: ref.current,
        scrollFunction: func.current,
        apis: apis,
      };
      scrollListeners.push(listener);
      onScrollHandler();
    }
    //언마운트 시 리스너 삭제
    return () => {
      const index = scrollListeners.findIndex(
        (listener) => listener.element === ref.current,
      );
      if (index >= 0) {
        scrollListeners.splice(index, 1);
      }
    };
  }, [ref]);

  return { ref, scrollState: state.current };
};

export default useWaffleScroll;
