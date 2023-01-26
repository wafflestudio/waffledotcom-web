import styles from "./Services.module.scss";
import { useScroll } from "../../../hooks/scroll/useScroll";
import { useRef, useState } from "react";
import classNames from "classnames/bind";
import useDelayedState from "../../../hooks/delayedState/useDelayedState";

const cx = classNames.bind(styles);
const Services = () => {
  const ref = useRef(null);
  const [scrollClass, setScrollClass] = useDelayedState<{ available: boolean }>(
    {
      available: false,
    },
  );

  useScroll(ref, ({ progress }) => {
    if (0.75 < progress && progress < 3) {
      if (!scrollClass.available) {
        setScrollClass({ available: true });
      }
    } else {
      setScrollClass({ available: false }, 500);
    }
  });

  return (
    <>
      <section className={cx("container", scrollClass)} ref={ref}>
        <div className={cx("background")}></div>
        <div className={cx("foreground")}>
          <div className={cx("logo")}>
            waffle
            <span className={cx("blank")} />
            studio
          </div>
          <div className={cx("mock")}></div>
          <ul className={cx("thumbnails")}></ul>
        </div>
      </section>
    </>
  );
};

export default Services;
