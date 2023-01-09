import { useState } from "react";

const useDelayedState = <T>(initialState: T) => {
  const [getState, setState] = useState<T>(initialState);
  const get = getState;
  const set = (newState: T) => {
    setState(newState);
  };
  return [get, set];
};

export default useDelayedState;
