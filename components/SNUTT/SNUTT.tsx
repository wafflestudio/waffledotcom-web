import classNames from "classnames/bind";
import useWaffleScroll from "../../library/waffleScroll";
import IntroduceHead from "../ServiceIntroduce/IntroduceHead/IntroduceHead";
import IntroduceCarousel from "../ServiceIntroduce/IntroduceCarousel.tsx/IntroduceCarousel";
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
          <IntroduceHead />
          <IntroduceCarousel />
        </div>
      </section>
    </>
  );
}

export default SNUTT;
