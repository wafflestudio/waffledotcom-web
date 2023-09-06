import { createGlobalScrollHook } from "../../library/waffleScroll";

export type ScrollItem = {
  name: string;
  anchorId: string;
};

export const homeScrollItems = [
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
    defaultCallbackWait: 500,
  },
);
