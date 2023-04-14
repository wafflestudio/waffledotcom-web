import classNames from "classnames/bind";
import useWaffleScroll from "../../../library/waffleScroll";
import IntroductionHead from "../common/IntroductionHead/IntroductionHead";
import IntroductionCarousel from "../common/IntroductionCarousel/IntroductionCarousel";
import styles from "./Snuboard.module.scss";

const cx = classNames.bind(styles);

function Snuboard() {
  const { ref, scrollState } = useWaffleScroll(
    ({ toggleState }) => {
      toggleState(0, 3, "available");
    },
    { available: false },
  );

  return (
    <section className={cx("container", scrollState)} ref={ref}>
      <div className={cx("background")}></div>
      <div className={cx("introduction")}>
        <IntroductionHead
          logo={"/static/images/logo/snuboard_logo.svg"}
          title={"스누보드"}
          des={[
            "SNUTT는 서울대학교 시간표 어플입니다.",
            "SNUTT는 서울대학교 대표 시간표 어플입니다.",
            "SNUTT는 서울대학교 시간표 어플입니다.",
          ]}
          textColor="#ffffff"
          // TODO: 변수명 link => links 변경 제의
          link={[
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
