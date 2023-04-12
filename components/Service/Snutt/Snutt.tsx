import classNames from "classnames/bind";
import useWaffleScroll from "../../../library/waffleScroll";
import IntroductionHead from "../common/IntroductionHead/IntroductionHead";
import IntroductionCarousel from "../common/IntroductionCarousel/IntroductionCarousel";
import styles from "./Snutt.module.scss";

const cx = classNames.bind(styles);

function Snutt() {
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
    </>
  );
}

export default Snutt;
