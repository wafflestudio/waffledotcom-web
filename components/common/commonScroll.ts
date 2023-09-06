import { GlobalScrollHookParams } from "../../library/waffleScroll/types";
import { homeScrollItems } from "../Home/homeScroll";
import { serviceScrollItems } from "../Service/serviceScroll";

export const handleOnePageScroll: (
  anchorId:
    | typeof homeScrollItems[number]["anchorId"]
    | typeof serviceScrollItems[number]["anchorId"],
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
