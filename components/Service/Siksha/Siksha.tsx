"use client";

import classNames from "classnames/bind";
import useWaffleScroll from "../../../library/waffleScroll";
import IntroductionCarousel from "../common/IntroductionCarousel/IntroductionCarousel";
import IntroductionHead from "../common/IntroductionHead/IntroductionHead";
import styles from "./Siksha.module.scss";

const cx = classNames.bind(styles);

function Siksha() {
  const { ref, scrollState } = useWaffleScroll(
    ({ toggleState }) => {
      toggleState(0.75, 3, "available");
    },
    { available: false },
  );
  return (
    <>
      <section className={cx("container", scrollState)} ref={ref}>
        <div className={cx("background")}>
          <div className={cx("leftContainer")}>
            <img
              className={cx("spoon")}
              src={"/static/images/illustration/spoon.svg"}
              alt=""
            />
          </div>
          <div className={cx("centerContainer")}>
            <div className={cx("introduction")}>
              <IntroductionHead
                logo={"/static/images/logo/siksha_logo.svg"}
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
          </div>
          <div className={cx("rightContainer")}>
            <div className={cx("chopsticks")}>
              <img
                className={cx("leftChopstick")}
                src={"/static/images/illustration/chopstick.svg"}
                alt=""
              />
              <img
                className={cx("rightChopstick")}
                src={"/static/images/illustration/chopstick.svg"}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Siksha;
