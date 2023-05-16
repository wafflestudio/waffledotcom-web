import { createGlobalScrollHook } from "../../library/waffleScroll";

export const useNavigatorScroll = createGlobalScrollHook({
  globalState: { currentSection: "" },
});
