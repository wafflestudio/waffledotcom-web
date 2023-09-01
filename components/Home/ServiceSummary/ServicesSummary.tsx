"use client";

import classNames from "classnames/bind";
import { useScroll } from "../../../hooks/scroll/useScroll";
import useDelayedState from "../../../hooks/delayedState/useDelayedState";
import useWaffleScroll from "../../../library/deprecated/waffleScroll";
import styles from "./ServicesSummary.module.scss";

const cx = classNames.bind(styles);
function Services() {
  const {
    ref,
    scrollState: { available, isMore, logoOpacity },
  } = useWaffleScroll(
    ({ progress, toggleState, setScrollState }) => {
      toggleState(0.75, 3, "available", () => {
        if (1 < progress && progress < 2) {
          setScrollState({ logoOpacity: (progress - 1) * 0.7 });
        }
      });
      toggleState(1.5, 3.1, "isMore");
    },
    { available: false, isMore: false, logoOpacity: 0 },
  );

  return (
    <>
      <section className={cx("container", { available })} ref={ref}>
        <div className={cx("background")} />
        <div className={cx("foreground")}>
          <div className={cx("logo")} style={{ opacity: 0.3 + logoOpacity }}>
            waffle
            <span className={cx("blank")} />
            studio
          </div>
          <div className={cx("mock")}>
            <img alt="" src="/static/images/dummy/mobile.png" />
          </div>
          <ul className={cx("icons")}>
            <li className={cx("icon")}>
              <img alt="" src="/static/images/logo/snutt_logo.svg" />
              <div className={cx("label")}>스누티티</div>
            </li>
            <li className={cx("icon")}>
              <img alt="" src="/static/images/logo/snutt_logo.svg" />
              <div className={cx("label")}>식샤</div>
            </li>
            <li className={cx("icon")}>
              <img alt="" src="/static/images/logo/snutt_logo.svg" />
              <div className={cx("label")}>스누보드</div>
            </li>
            <li className={cx("icon")}>
              <img alt="" src="/static/images/logo/snutt_logo.svg" />
              <div className={cx("label")}>???</div>
            </li>
            <li className={cx("icon")}>
              <img alt="" src="/static/images/logo/snutt_logo.svg" />
              <div className={cx("label")}>???</div>
            </li>
          </ul>
          <div className={cx("more", { up: isMore })}>
            <div className={cx("description")}>
              와플스튜디오의 서비스를 알아보세요
            </div>
            <a className={cx("to")} href={"/services"}>
              서비스 알아보기
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
