import classNames from "classnames/bind";
import IntroductionHead from "../common/IntroductionHead/IntroductionHead";
import IntroductionCarousel from "../common/IntroductionCarousel/IntroductionCarousel";
import { useServiceScroll } from "../serviceScroll";
import styles from "./Snutt.module.scss";

const cx = classNames.bind(styles);

function Snutt() {
  const { targetRef, state } = useServiceScroll({
    callback: ({ progress, getState, setState }) => {
      if (progress > 0.75 && progress < 2.7) {
        if (getState().currentService !== "snutt")
          setState({ currentService: "snutt" });
      } else {
        if (progress <= 0.75 && getState().currentService === "snutt")
          setState({ currentService: "none" });
      }
    },
  });

  return (
    <section
      className={cx("container", {
        available: state.currentService === "snutt",
      })}
      ref={targetRef}
    >
      <div className={cx("background")}>
        <div className={cx("lineWrap")}>
          <div className={cx("blockLine")}>
            <div className={cx("block1")}></div>
            <div className={cx("block2")}></div>
          </div>
          <div className={cx("blockLine")}>
            <div className={cx("block3")}></div>
            <div className={cx("block4")}></div>
          </div>
        </div>
        <div className={cx("lineWrap")}>
          <div className={cx("blockLine")}>
            <div className={cx("block5")}></div>
          </div>
          <div className={cx("blockLine")}>
            <div className={cx("block6")}></div>
            <div className={cx("block7")}></div>
          </div>
        </div>
      </div>
      <div className={cx("introduction")}>
        <IntroductionHead
          logo={"/static/images/logo/snutt_logo.svg"}
          title={"SNUTT"}
          des={[
            "SNUTT는 서울대학교 시간표 어플입니다.",
            "SNUTT는 서울대학교 대표 시간표 어플입니다.",
            "SNUTT는 서울대학교 시간표 어플입니다.",
          ]}
          textColor="black"
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
            "/static/images/dummy/mobile.png",
          ]}
        />
      </div>
    </section>
  );
}

export default Snutt;
