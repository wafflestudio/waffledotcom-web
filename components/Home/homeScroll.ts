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

export const useHomeScroll = createGlobalScrollHook<{
  currentSection: string;
  initialDirection: null | "up" | "down";
}>(
  { currentSection: "main", initialDirection: null },
  {
    defaultCallback: ({ direction, getState, setState }) => {
      if (getState().initialDirection === null) {
        setState({ initialDirection: direction });
      } else {
        useHomeScroll.scrollTo(getState().currentSection, {
          behavior: "instant",
          block: direction === "up" ? "start" : "end",
        });
        /** @TODO setTimeout 말고 더 좋은 방법 고안하기 */
        setTimeout(() => setState({ initialDirection: null }), 10);
      }
    },
    defaultCallbackWait: 500,
  },
);
