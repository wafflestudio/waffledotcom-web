"use client";
import classNames from "classnames/bind";
import { useRef } from "react";
import useDelayedState from "../../../../hooks/delayedState/useDelayedState";
import { useScroll } from "../../../../hooks/scroll/useScroll";
import useWaffleScroll from "../../../../library/deprecated/waffleScroll";
import styles from "./QnA.module.scss";

const cx = classNames.bind(styles);

function QnA() {
  const { ref, scrollState } = useWaffleScroll(
    ({ toggleState }) => {
      toggleState(0.5, 3, "available");
    },
    { available: false },
  );

  return (
    <div className={cx("container", scrollState)} ref={ref}>
      <div className={cx("background")} />
      <div className={cx("foreground")}>
        <div className={cx("phone")}>
          <div className={cx("screen")}>
            <div className={cx("topBar")}>
              푸푸리{" "}
              <img alt="" src="/static/images/home/heywaffle_emoji.svg" />
            </div>
          </div>
        </div>
        <div className={cx("screenshots")}>
          <div className={cx("fakeScreenshot")} />
        </div>
      </div>
    </div>
  );
}

export default QnA;