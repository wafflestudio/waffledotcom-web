import { useState } from "react";

const useDelayedState = <T>(initialState: T) => {
  let isTimeoutCleared = false;
  const [state, setState] = useState<T>(initialState);
  const get: T = state;
  const delayedSet = (newState: T, ms?: number) => {
    if (ms && ms >= 0) {
      isTimeoutCleared = false;
      setTimeout(() => {
        if (!isTimeoutCleared) {
          setState(newState);
        }
      }, ms);
    } else {
      isTimeoutCleared = true;
      setState(newState);
    }
  };
  const api: [T, typeof delayedSet] = [get, delayedSet];
  return api;
};

export default useDelayedState;
