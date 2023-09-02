import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import styles from "./ProgressBox.module.scss";

const cx = classNames.bind(styles);

export default function ProgressBox({
  carouselLength,
  serviceIndex,
  increaseIndex,
  isPlaying,
  toggleIsPlaying,
}: {
  carouselLength: number;
  serviceIndex: number;
  increaseIndex: () => void;
  isPlaying: boolean;
  toggleIsPlaying: () => void;
}) {
  const [timeCount, setTimeCount] = useState<number>(0);

  useEffect(() => {
    if (timeCount === 3000) {
      setTimeCount(0);
      increaseIndex();
    }
  }, [timeCount, increaseIndex]);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setTimeCount((prev) => prev + 50);
      }, 50);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isPlaying]);

  return (
    <div className={cx("progress-box", `state-${serviceIndex}`)}>
      <div className={cx("bar-wrapper")}>
        <div className={cx("bar", "background-bar")}></div>
        <div className={cx("bar", "foreground-bar")}></div>
      </div>
      <div className={cx("index-wrapper")}>
        <p className={cx("index", "current-index")}>{serviceIndex}</p>
        <div className={cx("divider")}></div>
        <p className={cx("index")}>{carouselLength}</p>
      </div>
      <button
        className={cx("play-button", isPlaying ? "playing" : "stopped")}
        onClick={toggleIsPlaying}
      >
        <div className={cx("border", "background-border")}></div>
        <div className={cx("foreground-border")}>
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.4655 14.4828C28.4655 22.2052 22.2052 28.4655 14.4828 28.4655C6.76029 28.4655 0.5 22.2052 0.5 14.4828C0.5 6.76029 6.76029 0.5 14.4828 0.5C22.2052 0.5 28.4655 6.76029 28.4655 14.4828Z"
              stroke="#F0745F"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}
