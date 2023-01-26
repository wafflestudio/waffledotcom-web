import { useState } from "react";

const useDelayedState = <T>(initialState: T) => {
  const [getState, setState] = useState<T>(initialState);
  const get = getState;
  const delayedSet = (newState: T, ms?: number) => {
    if (ms && ms >= 0) {
      setTimeout(() => {
        setState(newState);
      }, ms);
    } else {
      setState(newState);
    }
  };
  return [get, delayedSet];
};

export default useDelayedState;
