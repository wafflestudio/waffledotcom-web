import classNames from "classnames/bind";
import { MouseEvent, useState } from "react";
import { useNavigatorScroll } from "../../Home/scroll";
import styles from "./Activity.module.scss";

const cx = classNames.bind(styles);

export default function About() {
  const { state, targetRef } = useNavigatorScroll({
    callback: ({ progress, setState }) => {
      if (progress >= 1 && progress < 3) {
        setState({ currentSection: "activity" });
      }
    },
    anchorId: "activity",
  });

  const [hover, setHover] = useState({
    a: false,
    b: false,
    c: false,
    d: false,
  });

  const handleHover = (e: MouseEvent<HTMLDivElement>, i: string) => {
    setHover({ ...hover, [i]: true });
  };

  const handleLeave = (e: MouseEvent<HTMLDivElement>, i: string) => {
    setHover({ ...hover, [i]: false });
  };

  return (
    <section
      className={cx("container", { off: state.currentSection !== "activity" })}
      ref={targetRef}
    >
      <div className={cx("background")} />
      <div className={cx("foreground")}>
        <div className={cx("wrapper")}>
          <div className={cx("textArea")}>
            <p>활동소개</p>
            <span>와플스튜디오에서 하는 활동들</span>
          </div>
          <div className={cx("imageArea")}>
            <div
              className={cx("image", hover.a ? "hover" : "")}
              onMouseOver={(e) => {
                handleHover(e, "a");
              }}
              onMouseLeave={(e) => {
                handleLeave(e, "a");
              }}
            >
              <div className={cx("ratio")}></div>
            </div>
            <div
              className={cx("image", hover.b ? "hover" : "")}
              onMouseOver={(e) => {
                handleHover(e, "b");
              }}
              onMouseLeave={(e) => {
                handleLeave(e, "b");
              }}
            >
              <div className={cx("ratio")}></div>
            </div>
            <div
              className={cx("image", hover.c ? "hover" : "")}
              onMouseOver={(e) => {
                handleHover(e, "c");
              }}
              onMouseLeave={(e) => {
                handleLeave(e, "c");
              }}
            >
              <div className={cx("ratio")}></div>
            </div>
            <div
              className={cx("image", hover.d ? "hover" : "")}
              onMouseOver={(e) => {
                handleHover(e, "d");
              }}
              onMouseLeave={(e) => {
                handleLeave(e, "d");
              }}
            >
              <div className={cx("ratio")}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
