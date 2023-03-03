import React, {
  useEffect,
  useRef,
  useState,
  CSSProperties,
  useCallback,
} from "react";
import styles from "./CustomScrollbarDiv.module.scss";

type Props = {
  className?: string;
  style?: CSSProperties;
  trackClassName?: string;
  trackStyle?: CSSProperties;
  trackHeight?: number;
  thumbClassName?: string;
  thumbStyle?: CSSProperties;
  thumbHeight?: number;
  scrollbarClassName?: string;
  scrollbarStyle?: CSSProperties;
  children?: React.ReactNode;
};

function CustomScrollbarDiv({
  className = "",
  style = {},
  trackClassName = "",
  trackStyle = {},
  trackHeight = -1,
  thumbClassName = "",
  thumbStyle = {},
  thumbHeight = -1,
  children,
}: Props) {
  const [scrollbar, setScrollbar] = useState({
    trackHeight: trackHeight,
    thumbHeight: thumbHeight,
    thumbTop: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  const updateScrollBar = useCallback(
    (container: HTMLDivElement) => {
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
        container.scrollHeight === container.offsetHeight
          ? 0
          : (container.scrollTop * (newTrackHeight - newThumbHeight)) /
            (container.scrollHeight - container.offsetHeight);
      setScrollbar({
        trackHeight: newTrackHeight,
        thumbHeight: newThumbHeight,
        thumbTop: newThumbtop,
      });
    },
    [thumbHeight, trackHeight],
  );

  useEffect(() => {
    if (containerRef && containerRef.current) {
      const container = containerRef.current;
      updateScrollBar(container);
    }
  }, [updateScrollBar]);

  useEffect(() => {
    window.addEventListener("mousemove", handleDrag);
    window.addEventListener("mouseup", handleDragEnd);
    return () => {
      window.removeEventListener("mousemove", handleDrag);
      window.removeEventListener("mouseup", handleDragEnd);
    };
  });

  const posY = useRef(0);
  const dragStart = useRef(false);

  const handleDragStart = (e: React.MouseEvent) => {
    posY.current = e.clientY;
    dragStart.current = true;
  };

  const handleDrag = (e: MouseEvent) => {
    if (dragStart.current) {
      if (containerRef && containerRef.current) {
        const container = containerRef.current;
        const scrollBy = e.clientY - posY.current;
        const newThumbTop = scrollbar.thumbTop + scrollBy;

        if (
          newThumbTop >= 0 &&
          newThumbTop <= scrollbar.trackHeight - scrollbar.thumbHeight
        ) {
          posY.current = e.clientY;
          container.scrollBy(
            0,
            (scrollBy * (container.scrollHeight - container.offsetHeight)) /
              (scrollbar.trackHeight - scrollbar.thumbHeight),
          );
        }
      }
    }
  };

  const handleDragEnd = () => {
    dragStart.current = false;
  };

  return (
    <div
      className={`${styles.container} ${className}`}
      ref={containerRef}
      style={style}
      onScroll={(e: React.UIEvent<HTMLDivElement>) => {
        const container = e.currentTarget;
        updateScrollBar(container);
      }}
    >
      <div className={styles.children}>{children}</div>
      <div
        className={styles.scrollbar}
        style={{ height: scrollbar.trackHeight }}
      >
        <div
          className={`${styles.track} ${trackClassName}`}
          style={trackStyle}
        />
        <div
          className={`${styles.thumb} ${thumbClassName}`}
          style={{
            height: scrollbar.thumbHeight,
            top: scrollbar.thumbTop,
            ...thumbStyle,
          }}
          onMouseDown={handleDragStart}
        />
      </div>
    </div>
  );
}

export default CustomScrollbarDiv;
