import classNames from "classnames/bind";
import { useNavigatorScroll } from "../../Home/scroll";
import styles from "./Services.module.scss";

const cx = classNames.bind(styles);

export default function Services() {
  const { state, targetRef } = useNavigatorScroll({
    callback: ({ progress, setState }) => {
      if (progress >= 1 && progress < 3) {
        setState({ currentSection: "services" });
      }
    },
    anchorId: "services",
  });
  return (
    <section
      className={cx("container", { off: state.currentSection !== "services" })}
      ref={targetRef}
    >
      <div className={cx("background")} />
      <div className={cx("foreground")}>
        <div className={cx("texts")}>
          <h1 className={cx("title")}>출시된 서비스</h1>
          <p className={cx("description")}>
            와플스튜디오의 프로젝트로 시작해 <br /> 실제 사용되고 있는 서비스
          </p>
          <a className={cx("more-button")} href="https://wafflestudio.com/">
            자세히 알아보기
          </a>
          <div className={cx("progress")}>
            <div className={cx("bar", "background-bar")}></div>
            <div className={cx("bar", "foreground-bar")}></div>
            <p className={cx("index", "current-index")}></p>
            <div className={cx("divider")}></div>
            <p className={cx("index")}></p>
            <button className={cx("play-button")}>
              <div className={cx("progress-border")}></div>
            </button>
          </div>
        </div>
        <div className={cx("carousel")}>
          <button className={cx("carousel-button", "previous")}></button>
          <div className={cx("app-icon")}>
            <a className={cx("icon")} href="https://wafflestudio.com/"></a>
            <h1 className={cx("name")}>식샤</h1>
            <p className={cx("description")}>서울대학교 학식 어플</p>
          </div>
          <a className={cx("phone")} href="https://wafflestudio.com/"></a>
          <button className={cx("carousel-button", "next")}></button>
        </div>
      </div>
    </section>
  );
}
