import classNames from "classnames/bind";
import Link from "next/link";

import { useNavigatorScroll } from "../../Home/scroll";
import styles from "./Main.module.scss";

const cx = classNames.bind(styles);

export default function Main() {
  const { state, targetRef } = useNavigatorScroll({
    callback: ({ progress, setState }) => {
      if (progress >= 1) {
        setState({ currentSection: "main" });
      }
    },
    anchorId: "main",
  });

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
        <h3 className={cx("subLogo")}>맛있는 서비스가 탄생하는 곳</h3>
        <h1 className={cx("mainLogo")}>WAFFLE</h1>
        <h1 className={cx("mainLogo")}>STUDIO</h1>
      </div>
      <div className={cx("buttonWrapper")}>
        <a
          onClick={() => useNavigatorScroll.scrollTo("about")}
          className={cx("button")}
        >
          <img src={"/static/images/home/home_main_button.png"} />
          <div className={cx("label")}>CLICK</div>
        </a>
      </div>
    </section>
  );
}