"use client";

import classNames from "classnames/bind";
import IntroductionCarousel from "../common/IntroductionCarousel/IntroductionCarousel";
import IntroductionHead from "../common/IntroductionHead/IntroductionHead";
import { useServiceScroll } from "../serviceScroll";
import styles from "./Siksha.module.scss";

const cx = classNames.bind(styles);

function Siksha() {
  const { targetRef, state } = useServiceScroll({
    callback: ({ progress, getState, setState }) => {
      if (progress > 0.75 && progress < 3) {
        if (getState().currentService !== "siksha")
          setState({ currentService: "siksha" });
      }
    },
    anchorId: "siksha",
  });

  return (
    <section
      className={cx("container", {
        available: state.currentService === "siksha",
      })}
      ref={targetRef}
    >
      <div className={cx("background")}>
        <div className={cx("leftContainer")}>
          <img
            className={cx("spoon")}
            src={"/static/images/illustration/spoon.svg"}
            alt="A spoon image for background"
          />
        </div>
        <div className={cx("centerContainer")}>
          <div className={cx("introduction")}>
            <IntroductionHead
              logo={"/static/images/logo/siksha_logo.svg"}
              title={"식샤"}
              des={["식샤는 서울대학교 식단 알리미 앱입니다."]}
              textColor="black"
              links={[
                "https://apps.apple.com/kr/app/%EC%8B%9D%EC%83%A4-%EC%84%9C%EC%9A%B8%EB%8C%80%ED%95%99%EA%B5%90-%EC%8B%9D%EB%8B%A8-%EC%95%B1/id1032700617",
                "https://play.google.com/store/apps/details?id=com.wafflestudio.siksha2&hl=ko&gl=US",
                "https://siksha.wafflestudio.com/",
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
        </div>
        <div className={cx("rightContainer")}>
          <div className={cx("chopsticks")}>
            <img
              className={cx("leftChopstick")}
              src={"/static/images/illustration/chopstick.svg"}
              alt="A left chopstick image for background"
            />
            <img
              className={cx("rightChopstick")}
              src={"/static/images/illustration/chopstick.svg"}
              alt="A right chopstick image for background"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Siksha;
