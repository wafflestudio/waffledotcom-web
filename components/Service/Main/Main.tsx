"use client";

import classNames from "classnames/bind";
import { useServiceScroll } from "../serviceScroll";
import { handleOnePageScroll } from "../../common/commonScroll";
import styles from "./Main.module.scss";

const cx = classNames.bind(styles);

export default function Main() {
  const { state, targetRef } = useServiceScroll(handleOnePageScroll("main"));

  return (
    <section
      className={cx("container", { off: state.currentSection !== "main" })}
      ref={targetRef}
    >
      <div className={cx("background")}>
        <div className={cx("bgText")}>WAFFLE</div>
        <div className={cx("bgText")}>STUDIO</div>
        <div className={cx("bgText")}>WAFFLE</div>
      </div>
      <div className={cx("logoWrapper")}>
        <h3 className={cx("subLogo")}>와플의 서비스를 소개합니다</h3>
        <h1 className={cx("mainLogo")}>WAFFLE</h1>
        <h1 className={cx("mainLogo")}>SERVICES</h1>
      </div>
      <div className={cx("buttonWrapper")}>
        <a
          onClick={() => useServiceScroll.scrollTo("snutt")}
          className={cx("button")}
        >
          <img
            src={"/static/images/deprecated/home_main_button.png"}
            alt="3D waffle shaped button"
          />
          <div className={cx("label")}>CLICK</div>
        </a>
      </div>
    </section>
  );
}
