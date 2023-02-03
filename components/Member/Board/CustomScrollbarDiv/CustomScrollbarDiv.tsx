import styles from "./CustomScrollbarDiv.module.scss";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Scrollbar from "./Scrollbar/Scrollbar";

type props = {
  className?: string;
  style?: object;
  trackClassName?: string;
  trackStyle?: object;
  trackHeight?: number;
  thumbClassName?: string;
  thumbStyle?: object;
  thumbHeight?: number;
  scrollbarClassName?: string;
  scrollbarStyle?: object;
  children?: React.ReactNode;
};

const CustomScrollbarDiv = ({
  className = "",
  style = {},
  trackClassName = "",
  trackStyle = {},
  trackHeight = -1,
  thumbClassName = "",
  thumbStyle = {},
  thumbHeight = -1,
  children,
}: props) => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [offsetHeight, setOffsetHeight] = useState(0);
  const [scrollbar, setScrollbar] = useState({
    trackHeight: trackHeight,
    thumbHeight: thumbHeight,
    thumbTop: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (containerRef && containerRef.current) {
      const container = containerRef.current;
      const containerStyle = window.getComputedStyle(container);
      const padding =
        parseInt(containerStyle.paddingTop.slice(0, -2)) +
        parseInt(containerStyle.paddingBottom.slice(0, -2));

      const newTrackHeight =
        trackHeight === -1 ? container.offsetHeight - padding : trackHeight;
      const newThumbHeight =
        thumbHeight === -1
          ? (newTrackHeight * container.offsetHeight) / container.scrollHeight
          : thumbHeight;
      const newThumbtop =
        (container.scrollTop * (newTrackHeight - newThumbHeight)) /
        (container.scrollHeight - container.offsetHeight);

      setScrollHeight(container.scrollHeight);
      setOffsetHeight(container.offsetHeight);
      setScrollbar({
        trackHeight: newTrackHeight,
        thumbHeight: newThumbHeight,
        thumbTop: newThumbtop,
      });
    }
  }, []);

  return (
    <div
      className={`${styles.container} ${className}`}
      ref={containerRef}
      style={style}
      onScroll={(e) => {
        const container = e.target;
        const containerStyle = window.getComputedStyle(container);
        const padding =
          parseInt(containerStyle.paddingTop.slice(0, -2)) +
          parseInt(containerStyle.paddingBottom.slice(0, -2));

        const newTrackHeight =
          trackHeight === -1 ? container.offsetHeight - padding : trackHeight;
        const newThumbHeight =
          thumbHeight === -1
            ? (newTrackHeight * container.offsetHeight) / container.scrollHeight
            : thumbHeight;
        const newThumbtop =
          (container.scrollTop * (newTrackHeight - newThumbHeight)) /
          (container.scrollHeight - container.offsetHeight);

        console.log({
          trackHeight: newTrackHeight,
          thumbHeight: newThumbHeight,
          thumbTop: newThumbtop,
        });
        setScrollbar({
          trackHeight: newTrackHeight,
          thumbHeight: newThumbHeight,
          thumbTop: newThumbtop,
        });
      }}
    >
      <div className={styles.children}>{children}</div>
      {offsetHeight === scrollHeight ? null : (
        <div
          className={`${styles.track} ${trackClassName}`}
          style={{
            height: scrollbar.trackHeight,
            ...trackStyle,
          }}
        >
          <div
            className={`${styles.thumb} ${thumbClassName}`}
            style={{
              height: scrollbar.thumbHeight,
              top: scrollbar.thumbTop,
              ...thumbStyle,
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default CustomScrollbarDiv;
