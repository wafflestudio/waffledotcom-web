"use client";

import classNames from "classnames/bind";
import IntroductionHead from "../common/IntroductionHead/IntroductionHead";
import IntroductionCarousel from "../common/IntroductionCarousel/IntroductionCarousel";
import { useServiceScroll } from "../serviceScroll";
import { handleOnePageScroll } from "../../common/commonScroll";
import styles from "./Snuboard.module.scss";

const cx = classNames.bind(styles);

function Snuboard() {
  const { targetRef, state } = useServiceScroll(
    handleOnePageScroll("snuboard"),
  );

  return (
    <section
      className={cx("container", {
        available: state.currentSection === "snuboard",
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
          des={["스누보드는 서울대학교의 과별 공지를 모아보는 앱입니다."]}
          textColor="white"
          // TODO: 변수명 link => links 변경 제의
          links={[
            "https://apps.apple.com/kr/app/%EC%8A%A4%EB%88%84%EB%B3%B4%EB%93%9C-%EC%84%9C%EC%9A%B8%EB%8C%80%ED%95%99%EA%B5%90-%EA%B3%BC%EB%B3%84-%EA%B3%B5%EC%A7%80-%EB%AA%A8%EC%95%84%EB%B3%B4%EA%B3%A0-%EC%95%8C%EB%A6%BC-%EB%B0%9B%EC%9E%90/id1585860405",
            "https://play.google.com/store/apps/details?id=com.wafflestudio.snuboard&hl=ko&gl=US",
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
