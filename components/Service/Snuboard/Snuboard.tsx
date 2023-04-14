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
        {/* <IntroductionHead />
        <IntroductionCarousel /> */}
      </div>
    </section>
  );
}

export default Snuboard;
