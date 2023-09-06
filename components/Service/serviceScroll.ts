import { createGlobalScrollHook } from "../../library/waffleScroll";

export const serviceScrollItems = [
  { name: "MAIN", anchorId: "main" },
  { name: "SNUTT", anchorId: "snutt" },
  { name: "SIKSHA", anchorId: "siksha" },
  { name: "SNUBOARD", anchorId: "snuboard" },
] as const;

export const useServiceScroll = createGlobalScrollHook(
  { currentSection: "main" },
  {
    defaultCallback: ({ direction, getState }) => {
      useServiceScroll.scrollTo(getState().currentSection, {
        behavior: "instant",
        block: direction === "up" ? "start" : "end",
      });
    },
    defaultCallbackWait: 500,
  },
);
