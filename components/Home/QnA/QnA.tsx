import classNames from "classnames/bind";
import styles from "./QnA.module.scss";
import { useRef } from "react";
import useDelayedState from "../../../hooks/delayedState/useDelayedState";
import { useScroll } from "../../../hooks/scroll/useScroll";

const cx = classNames.bind(styles);

interface Props {}

const QnA = ({}: Props) => {
  const ref = useRef(null);
  const [scrollClass, setScrollClass] = useDelayedState<{ available: boolean }>(
    { available: false },
  );
  useScroll(ref, ({ isAvailable, progress }) => {
    if (0.5 < progress && progress < 3) {
      if (!scrollClass.available) {
        setScrollClass({ available: true });
      }
    } else {
      setScrollClass({ available: false }, 500);
    }
  });
  return (
    <div className={cx("container", scrollClass)} ref={ref}>
      <div className={cx("background")} />
      <div className={cx("foreground")}>
        <div className={cx("phone")}>
          <div className={cx("screen")}>
            <div className={cx("topBar")}>
              푸푸리 <img src="./static/images/home/heywaffle_emoji.svg" />
            </div>
          </div>
        </div>
        <div className={cx("screenshots")}>
          <div className={cx("fakeScreenshot")} />
        </div>
      </div>
    </div>
  );
};

export default QnA;