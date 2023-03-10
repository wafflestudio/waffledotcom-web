import { MutableRefObject, useEffect } from "react";

type IScrollState = {
  isAvailable: boolean;
  progress: number;
};
type IScrollData = {
  offsetTop: number;
  offsetHeight: number;
  callback: (state: IScrollState) => void;
};
type IViewportData = Omit<IScrollData, "callback">;

let isViewportInitiated = false;
const scrollViewport: IViewportData = {
  offsetTop: -1,
  offsetHeight: -1,
};
const scrollTargets: IScrollData[] = [];

const checkScrollState = (
  target: IScrollData,
  viewport: IViewportData,
): IScrollState => {
  const { offsetTop: targetTop, offsetHeight: targetHeight } = target;
  const { offsetTop: viewportTop, offsetHeight: viewportHeight } = viewport;
  //console.log(viewport);
  const diff = viewportTop + viewportHeight - targetTop;
  if (diff < 0) return { isAvailable: false, progress: 0 };
  if (diff > targetHeight + viewportHeight)
    return { isAvailable: false, progress: 3 };
  if (viewportHeight === targetHeight) {
    if (diff <= viewportHeight)
      return { isAvailable: true, progress: diff / viewportHeight };
    if (diff > viewportHeight)
      return { isAvailable: true, progress: 1 + diff / viewportHeight };
  }
  if (viewportHeight < targetHeight) {
    if (diff <= viewportHeight)
      return { isAvailable: true, progress: diff / viewportHeight };
    if (diff > viewportHeight && diff < targetHeight)
      return {
        isAvailable: true,
        progress: 1 + (diff - viewportHeight) / (targetHeight - viewportHeight),
      };
    if (diff >= targetHeight)
      return {
        isAvailable: true,
        progress: 2 + (diff - targetHeight) / viewportHeight,
      };
  }
  if (viewportHeight > targetHeight) {
    if (diff <= targetHeight)
      return { isAvailable: true, progress: 1 + diff / targetHeight };
    if (diff > targetHeight && diff < viewportHeight)
      return {
        isAvailable: true,
        progress: 1 + (diff - targetHeight) / (viewportHeight - targetHeight),
      };
    if (diff >= viewportHeight)
      return {
        isAvailable: true,
        progress: 2 + (diff - viewportHeight) / targetHeight,
      };
  }
  //error occurred
  return { isAvailable: false, progress: -999 };
};
const checkTargets = (viewport: IViewportData) => {
  scrollTargets.forEach((target) => {
    target.callback(checkScrollState(target, viewport));
  });
};

/*** hooks ***/
export const useInitiateScrollViewport = () => {
  useEffect(() => {
    if (!isViewportInitiated) {
      window.addEventListener("scroll", (e) => {
        scrollViewport.offsetTop = window.scrollY;
        checkTargets(scrollViewport);
      });
      scrollViewport.offsetHeight = window.innerHeight;
      scrollViewport.offsetTop = window.scrollY;
      isViewportInitiated = true;
      checkTargets(scrollViewport);
    }
  }, []);
};
export const useResizeScrollViewport = () => {};

export const useScroll = (
  ref: MutableRefObject<null | HTMLDivElement>,
  callback: (state: IScrollState) => void,
) => {
  useEffect(() => {
    if (ref.current) {
      console.dir(ref.current);
      if (
        !scrollTargets
          .map((target) => target.offsetTop)
          .includes(ref.current?.offsetTop)
      ) {
        const newTarget = {
          offsetTop: ref.current.offsetTop,
          offsetHeight: ref.current.offsetHeight,
          callback,
        };
        scrollTargets.push(newTarget);
      }
    }
  }, [ref]);
};
