import styles from "./CustomScrollbarDiv.module.scss";
import { useLayoutEffect, useRef, useState } from "react";

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
  const scrollbarThumbRef = useRef<HTMLDivElement>(null);

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

  const posY = useRef(0);
  const dragStart = useRef(false);
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    posY.current = e.clientY;
    dragStart.current = true;
  };
  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    if (dragStart.current) {
      if (containerRef && containerRef.current) {
        const container = containerRef.current;
        const newThumbTop = e.target.offsetTop + e.clientY - posY.current;

        posY.current = e.clientY;

        container.scrollTo(
          0,
          (newThumbTop * (container.scrollHeight - container.offsetHeight)) /
            (scrollbar.trackHeight - scrollbar.thumbHeight),
        );
      }
    }
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    // e.target.style.top = `${e.target.offsetTop + e.clientY - posY.current}px`;
    dragStart.current = false;
  };

  return (
    <div
      className={`${styles.container} ${className}`}
      ref={containerRef}
      style={style}
      onScroll={(e: React.UIEvent<HTMLDivElement>) => {
        const container = e.target as HTMLDivElement;
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

        setScrollbar({
          trackHeight: newTrackHeight,
          thumbHeight: newThumbHeight,
          thumbTop: newThumbtop,
        });
      }}
    >
      <div className={styles.children}>{children}</div>
      <div
        className={styles.scrollbar}
        style={{ height: scrollbar.trackHeight }}
      >
        <div
          className={`${styles.track} ${trackClassName}`}
          style={{
            ...trackStyle,
          }}
        ></div>
        <div
          className={`${styles.thumb} ${thumbClassName}`}
          ref={scrollbarThumbRef}
          style={{
            height: scrollbar.thumbHeight,
            top: scrollbar.thumbTop,
            ...thumbStyle,
          }}
          onMouseDown={handleDragStart}
          onMouseMove={handleDrag}
          onMouseUp={handleDragEnd}
        ></div>
      </div>
    </div>
  );
};

export default CustomScrollbarDiv;