import { createGlobalScrollHook } from "../../library/waffleScroll";

export const useServiceScroll = createGlobalScrollHook({
  globalState: { currentService: "none" },
});
