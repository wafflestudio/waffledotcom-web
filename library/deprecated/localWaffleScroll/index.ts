// @ts-nocheck
import { useReducer, useRef } from "react";
import { useIsomorphicLayoutEffect } from "../../waffleScroll";
import {
  ScrollCallback,
  ScrollListener,
  AvailableHTMLElement,
  SetScrollContainer,
} from "../../waffleScroll/types";
import { getScrollUtils } from "../waffleScroll/extendedUtils";
import {
  Calculatable,
  roundBy,
  calculateProgress,
  partialIsDifferent,
} from "../waffleScroll/tools";
import { LocalScrollCreatorReturnType, LocalScrollHook } from "./types";

/**
 * 컴포넌트 내부에 상태가 귀속되는 스크롤 훅을 만드는 함수입니다.
 * 컴포넌트 외부에서 선언하며, 스크롤에 따른 로컬 상태를 변경할 수 있는 hook을 리턴합니다.
 *
 * useLocalscroll.setScrollContainer 메서드를 특정 div의 ref에 전달하면,
 * 해당 div의 스크롤 이벤트를 기준으로 함수가 작동합니다.
 *
 * @param initialState 모든 훅에서 공유할 상태와 스크롤 콜백 객체.
 * { globalState: object, defaultCallback?: function }형태로 전달.
 *
 * @param hasScrollContainer window가 아닌 다른 div를 스크롤 컨테이너로 쓸 경우 true
 *
 * @return useLocalScroll 로컬 스크롤 훅 API
 */

export const createLocalScrollHook = <
  T extends Record<string, unknown>,
  U extends Record<string, unknown>,
>(
  initialState: { localState: T; defaultCallback?: ScrollCallback<T & U> },
  hasScrollContainer?: boolean,
): LocalScrollCreatorReturnType<T, U> => {
  let isInitiated = false;
  const listeners: Set<ScrollListener<T & U>> = new Set();
  const defaultState: T = initialState.localState;
  const defaultCallback = initialState.defaultCallback;
  let scrollContainer: AvailableHTMLElement | null = null;

  const handleOnScroll = () => {
    const currentViewport: Calculatable = hasScrollContainer
      ? {
          offsetTop: scrollContainer?.scrollTop ?? 999999,
          offsetHeight: scrollContainer?.offsetHeight ?? 0,
        }
      : {
          offsetTop: window.scrollY,
          offsetHeight: window.innerHeight,
        };

    for (const { element, apis, callback } of listeners) {
      const target: Calculatable = {
        offsetTop: element.offsetTop,
        offsetHeight: element.offsetHeight,
      };
      const progress = roundBy(calculateProgress(target, currentViewport), 2);
      if (defaultCallback)
        defaultCallback({
          ...apis,
          ...getScrollUtils(progress, apis),
          direction: "up",
          progress,
        });
      if (callback)
        callback({
          ...apis,
          ...getScrollUtils(progress, apis),
          direction: "up",
          progress,
        });
    }
  };

  const setScrollContainer: SetScrollContainer = (containerElement) => {
    if (!hasScrollContainer) {
      console.error(
        "스크롤 컨테이너를 사용하려면 hasScrollContainer를 true로 하세요",
      );
      return null;
    }
    scrollContainer = containerElement;
    containerElement.addEventListener("scroll", handleOnScroll);
    containerElement.addEventListener("resize", handleOnScroll);
  };

  const useLocalScroll: LocalScrollHook<T, U> = ({
    callback = () => null,
    initialState = {} as U,
  }) => {
    const [, forceUpdate] = useReducer((c: number): number => c + 1, 0);
    const localState = useRef<T & U>({ ...defaultState, ...initialState });
    const targetRef = useRef<AvailableHTMLElement | null>(null);
    const listenerRef = useRef<ScrollListener<T & U>>(null);
    const scrollCallback = useRef<ScrollCallback<T & U>>(callback);

    const getLocalState = () => localState.current;

    const setLocalState = (partial: Partial<T & U>) => {
      if (partialIsDifferent(localState.current, partial)) {
        localState.current = { ...localState.current, ...partial };
        listeners.forEach((listener) => listener.forceUpdate());
      }
    };

    useIsomorphicLayoutEffect(() => {
      //처음 사용되는 훅은 이벤트리스너를 등록
      if (!hasScrollContainer) {
        if (!isInitiated) {
          window.addEventListener("scroll", handleOnScroll);
          window.addEventListener("resize", handleOnScroll);
          isInitiated = true;
        }
      }
      //마운트 시 리스너 등록
      if (targetRef.current) {
        const listener: ScrollListener<T & U> = {
          element: targetRef.current,
          callback: scrollCallback.current ?? null,
          anchorId: null,
          forceUpdate,
          apis: {
            getState: getLocalState,
            setState: setLocalState,
          },
        };
        /* TODO: ref에 직접 assign하는 방법 찾기 */
        // @ts-ignore
        listenerRef.current = listener;
        listeners.add(listener);
        if (!hasScrollContainer || (hasScrollContainer && scrollContainer))
          handleOnScroll();
        listeners.forEach((listener) => listener.forceUpdate());
      }
      //언마운트 시 리스너 삭제
      return () => {
        if (listenerRef.current) {
          listeners.delete(listenerRef.current);
        }
      };
    }, [targetRef]);

    return { targetRef, state: getLocalState() };
  };
  return Object.assign(useLocalScroll, { setScrollContainer });
};
