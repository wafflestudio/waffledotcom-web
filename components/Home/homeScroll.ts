import { createGlobalScrollHook } from "../../library/waffleScroll";
import { GlobalScrollHookParams } from "../../library/waffleScroll/types";

const homeScrollItems = [
  { name: "MAIN", anchorId: "main" },
  { name: "ABOUT US", anchorId: "about" },
  { name: "OUR SERVICES", anchorId: "services" },
  { name: "MEMBERS", anchorId: "members" },
  { name: "ACTIVITY", anchorId: "activity" },
  { name: "SUPPORT", anchorId: "support" },
] as const;

export const useHomeScroll = createGlobalScrollHook(
  { currentSection: "main" },
  {
    defaultCallback: ({ direction, getState }) => {
      useHomeScroll.scrollTo(getState().currentSection, {
        behavior: "instant",
        block: direction === "up" ? "start" : "end",
      });
    },
    defaultCallbackWait: 1000,
  },
);

export const onHomeScroll: (
  anchorId: typeof homeScrollItems[number]["anchorId"],
) => GlobalScrollHookParams<{ currentSection: string }> = (anchorId) => ({
  callback: ({ progress, direction, setState }) => {
    // console.log(`${anchorId}: ${progress} (${direction})`);
    if (direction === "up") {
      if (progress < 3 && progress >= 2) {
        setState({ currentSection: anchorId });
      }
    } else {
      if (progress <= 2 && progress > 0) {
        setState({ currentSection: anchorId });
      }
    }
  },
  anchorId,
});
