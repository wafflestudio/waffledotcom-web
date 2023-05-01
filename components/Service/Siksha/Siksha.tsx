import classNames from "classnames/bind";
import useWaffleScroll from "../../../library/waffleScroll";
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
    <section className={cx("container", scrollState)} ref={ref}>
      <div className={cx("background")}>
        <div className={cx("leftContainer")}>
          <img
            className={cx("spoon")}
            src={"/static/images/illustration/spoon.svg"}
          />
        </div>
        <div className={cx("centerContainer")}></div>
        <div className={cx("rightContainer")}>
          <div className={cx("chopsticks")}>
            <img
              className={cx("leftChopstick")}
              src={"/static/images/illustration/chopstick.svg"}
            />
            <img
              className={cx("rightChopstick")}
              src={"/static/images/illustration/chopstick.svg"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Siksha;
