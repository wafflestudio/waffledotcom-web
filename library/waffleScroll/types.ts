import { MutableRefObject } from "react";
import { ScrollUtils } from "./utility";

//Pick
export type PickByType<T, U> = {
  [P in keyof T as T[P] extends U ? (U extends T[P] ? P : never) : never]: T[P];
};

/* TODO: AvailableHTMLElment 가짓수 늘리기 */
export type AvailableHTMLElement = HTMLDivElement;

export type ScrollApis<GlobalInterface extends Record<string, any>> = {
  getState: GlobalInterface;
  setState: (partial: Partial<GlobalInterface>) => void;
};

export type ScrollCallback<T extends Record<string, any>> = (
  params: ScrollApis<T> & ScrollUtils<T> & { progress: number },
) => void;

export type ScrollListener<T extends Record<string, any>> = {
  element: AvailableHTMLElement;
  callback: ScrollCallback<T> | null;
  forceUpdate: () => void;
  apis: ScrollApis<T>;
};

export type ScrollHook<T extends Record<string, any>> = (
  callback?: ScrollCallback<T>,
) => {
  targetRef: MutableRefObject<AvailableHTMLElement | null>;
  state: T;
};
export type LocalScrollHook<
  T extends Record<string, any>,
  U extends Record<string, any>,
> = (
  callback?: ScrollCallback<T & U>,
  initialState?: U,
) => {
  targetRef: MutableRefObject<AvailableHTMLElement | null>;
  state: T;
};

export type SetScrollContainer = (
  containerElement: AvailableHTMLElement,
) => void;

/* TODO: 조건부 타입 이용해서 hasScrollContainer가 true일 때만 setScrollContainer가 가능하게 할 수는 없을까? */
export type ScrollCreatorReturnType<T extends Record<string, any>> =
  ScrollHook<T> & { setScrollContainer: SetScrollContainer };

export type LocalScrollCreatorReturnType<
  T extends Record<string, any>,
  U extends Record<string, any>,
> = LocalScrollHook<T, U> & { setScrollContainer: SetScrollContainer };
