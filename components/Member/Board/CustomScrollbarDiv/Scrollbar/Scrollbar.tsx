import styles from "./Scrollbar.module.scss";

type scrollbarProps = {
  trackClassName?: string;
  trackStyle?: object;
  thumbClassName?: string;
  thumbStyle?: object;
  scrollHeight: number;
  offsetHeight: number;
  scrollTop: number;
  setScrollTop: (x: number) => void;
};

const Scrollbar = ({
  trackClassName = "",
  trackStyle = {},
  thumbClassName = "",
  thumbStyle = {},
  scrollHeight,
  offsetHeight,
  scrollTop,
  setScrollTop,
}: scrollbarProps) => {
  const trackHeight = offsetHeight;
  const thumbHeight = (trackHeight * offsetHeight) / scrollHeight;
  const thumbTop =
    (scrollTop * (trackHeight - thumbHeight)) / (scrollHeight - offsetHeight);
  return (
    <div
      className={`${styles.track} ${trackClassName}`}
      style={{
        height: trackHeight,
        ...trackStyle,
      }}
    >
      <div
        className={`${styles.thumb} ${thumbClassName}`}
        style={{
          height: thumbHeight,
          top: thumbTop,
          ...thumbStyle,
        }}
      ></div>
    </div>
  );
};

export default Scrollbar;
