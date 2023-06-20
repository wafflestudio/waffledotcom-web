import classNames from "classnames/bind";
import IntroductionHead from "../common/IntroductionHead/IntroductionHead";
import IntroductionCarousel from "../common/IntroductionCarousel/IntroductionCarousel";
import { useServiceScroll } from "../serviceScroll";
import styles from "./Snuboard.module.scss";

const cx = classNames.bind(styles);

function Snuboard() {
  const { targetRef, state } = useServiceScroll({
    callback: ({ progress, getState, setState }) => {
      if (progress > 0.75 && progress < 2.7) {
        if (getState().currentService !== "snuboard")
          setState({ currentService: "snuboard" });
      }
    },
  });

  return (
    <section
      className={cx("container", {
        available: state.currentService === "snuboard",
      })}
      ref={targetRef}
    >
      <div className={cx("background")}>
        <div className={cx("bars")}>
          {/* 아래 array [0, ..., 7]은 map을 돌리기 위한 임의 array */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((_, index) => (
            <div key={index} className={cx("bar", `bar${index + 1}`)}></div>
          ))}
        </div>
      </div>
      <div className={cx("introduction")}>
        <IntroductionHead
          logo={"/static/images/logo/snuboard_logo.svg"}
          title={"스누보드"}
          des={[
            "SNUTT는 서울대학교 시간표 어플입니다.",
            "SNUTT는 서울대학교 대표 시간표 어플입니다.",
            "SNUTT는 서울대학교 시간표 어플입니다.",
          ]}
          textColor="white"
          // TODO: 변수명 link => links 변경 제의
          links={[
            "https://www.wafflestudio.com/",
            "https://www.wafflestudio.com/",
            "https://www.wafflestudio.com/",
          ]}
        />
        <IntroductionCarousel
          carouselImages={[
            "/static/images/dummy/coMo.png",
            "/static/images/dummy/seminar.png",
            "/static/images/dummy/Untitled.png",
            "/static/images/dummy/seminar.png",
            "/static/images/dummy/coMo.png",
          ]}
        />
      </div>
    </section>
  );
}

export default Snuboard;
