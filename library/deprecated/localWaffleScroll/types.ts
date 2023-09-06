import { MutableRefObject } from "react";
import {
  ScrollCallback,
  AvailableHTMLElement,
  SetScrollContainer,
} from "../../waffleScroll/types";

export type LocalScrollHook<
  T extends Record<string, unknown>,
  U extends Record<string, unknown>,
> = (params: { callback?: ScrollCallback<T & U>; initialState?: U }) => {
  targetRef: MutableRefObject<AvailableHTMLElement | null>;
  state: T;
};

export type LocalScrollCreatorReturnType<
  T extends Record<string, unknown>,
  U extends Record<string, unknown>,
> = LocalScrollHook<T, U> & { setScrollContainer: SetScrollContainer };
