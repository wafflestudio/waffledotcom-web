import { PickByType, ScrollApis } from "./types";

export type ScrollUtils<T extends object> = {
  toggleState: (
    min: number,
    max: number,
    stateKeyToToggle: keyof PickByType<T, boolean>,
    sideEffect?: () => void,
  ) => void;
};

//utility function
export const getScrollUtils = <T extends object>(
  progress: number,
  apis: ScrollApis<T>,
): ScrollUtils<T> => {
  const { getState, setState } = apis;

  const toggleState: ScrollUtils<T>["toggleState"] = (
    min,
    max,
    stateKeyToToggle,
    sideEffect,
  ) => {
    if (progress > min && progress < max) {
      if (sideEffect) sideEffect();
      setState({ [stateKeyToToggle]: true } as Partial<T>);
    } else {
      setState({ [stateKeyToToggle]: false } as Partial<T>);
    }
  };
  return { toggleState };
};
