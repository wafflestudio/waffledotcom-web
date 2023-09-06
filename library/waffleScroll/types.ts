import { MutableRefObject } from "react";
import { ScrollUtils } from "./utility";

//Pick
export type PickByType<T, U> = {
  [P in keyof T as T[P] extends U ? (U extends T[P] ? P : never) : never]: T[P];
};

/* TODO: AvailableHTMLElment 가짓수 늘리기 */
export type AvailableHTMLElement = HTMLDivElement;

export type ScrollApis<GlobalInterface extends Record<string, unknown>> = {
  getState: () => GlobalInterface;
  setState: (partial: Partial<GlobalInterface>) => void;
};

export type DefaultScrollCallback<T extends Record<string, unknown>> = (
  params: ScrollApis<T> & { direction: "up" | "down" },
) => void;

export type ScrollCallback<T extends Record<string, unknown>> = (
  params: ScrollApis<T> &
    ScrollUtils<T> & { progress: number; direction: "up" | "down" },
) => void;

export type ScrollListener<T extends Record<string, unknown>> = {
  element: AvailableHTMLElement;
  callback: ScrollCallback<T> | null;
  anchorId: string | null;
  forceUpdate: () => void;
  apis: ScrollApis<T>;
};

export type GlobalScrollHookParams<T extends Record<string, unknown>> = {
  callback?: ScrollCallback<T>;
  anchorId?: string;
  wait?: number;
};

export type GlobalScrollHook<T extends Record<string, unknown>> = (
  params?: GlobalScrollHookParams<T>,
) => {
  targetRef: MutableRefObject<AvailableHTMLElement | null>;
  state: T;
};

export type SetScrollContainer = (
  containerElement: AvailableHTMLElement,
) => void;

export type ScrollTo = (
  to: string,
  config?: {
    behavior?: ScrollBehavior;
    block?: "start" | "center" | "end" | "nearest";
  },
) => void;

/* TODO: 조건부 타입 이용해서 hasScrollContainer가 true일 때만 setScrollContainer가 가능하게 할 수는 없을까? */
export type ScrollCreatorReturnType<T extends Record<string, unknown>> =
  GlobalScrollHook<T> & {
    setScrollContainer: SetScrollContainer;
    scrollTo: ScrollTo;
  } & ScrollApis<T>;
