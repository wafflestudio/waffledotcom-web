"use client";

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
    anchorId: "snutt",
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
          des={["SNUTT는 서울대학교 대표 시간표 어플입니다."]}
          textColor="black"
          links={[
            "https://apps.apple.com/kr/app/snutt-%EC%84%9C%EC%9A%B8%EB%8C%80%ED%95%99%EA%B5%90-%EC%8B%9C%EA%B0%84%ED%91%9C-%EC%95%B1/id1215668309",
            "https://play.google.com/store/apps/details?id=com.wafflestudio.snutt2.live&hl=ko&gl=US",
            "https://snutt.wafflestudio.com/",
          ]}
        />
        <IntroductionCarousel
          carouselImages={[
            "/static/services/snutt/snutt1.webp",
            "/static/services/snutt/snutt2.webp",
            "/static/services/snutt/snutt3.webp",
            "/static/services/snutt/snutt4.png",
            "/static/services/snutt/snutt5.png",
            "/static/services/snutt/snutt6.png",
          ]}
        />
      </div>
    </section>
  );
}

export default Snutt;
