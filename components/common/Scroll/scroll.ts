import { createGlobalScrollHook } from "../../../library/waffleScroll";

export const useNavigatorScroll = createGlobalScrollHook(
  {
    currentSection: "",
  },
  { defaultCallback: () => console.count("throttle?") },
);
