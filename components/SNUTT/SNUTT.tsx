import classNames from "classnames/bind";
import useWaffleScroll from "../../library/waffleScroll";
import IntroduceHead from "../ServiceIntroduce/IntroduceHead/IntroduceHead";
import IntroduceCarousel from "../ServiceIntroduce/IntroduceCarousel/IntroduceCarousel";
import styles from "./SNUTT.module.scss";

const cx = classNames.bind(styles);

function SNUTT() {
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
          <div className={cx("block1")}></div>
          <div className={cx("block2")}></div>
          <div className={cx("block3")}></div>
          <div className={cx("block4")}></div>
          <div className={cx("block5")}></div>
          <div className={cx("block6")}></div>
          <div className={cx("block7")}></div>
        </div>
        <div className={cx("description")}>
          <IntroduceHead
            logo={"/static/images/logo/snutt_logo.svg"}
            title={"SNUTT"}
            des={[
              "SNUTT는 서울대학교 시간표 어플입니다.",
              "SNUTT는 서울대학교 대표 시간표 어플입니다.",
              "SNUTT는 서울대학교 시간표 어플입니다.",
            ]}
          />
          <IntroduceCarousel />
        </div>
      </section>
    </>
  );
}

export default SNUTT;
