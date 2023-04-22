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
          <svg
            className={cx("spoon")}
            width="188"
            height="707"
            viewBox="0 0 188 707"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M105.813 257.865C151.861 250.935 187.456 204.19 187.456 138.392C187.456 66.9919 147.335 0.19519 93.8396 0.19519C40.3442 0.19519 0.222656 66.9919 0.222656 138.392C0.222656 204.189 35.8176 250.935 81.8665 257.865C73.8001 412.18 68.3084 665.387 68.3084 676.79C68.3084 693.241 79.7394 706.577 93.8403 706.577C107.941 706.577 119.372 693.241 119.372 676.79C119.372 665.387 113.879 412.18 105.813 257.865Z"
              fill="white"
              fillOpacity="0.2"
            />
          </svg>
        </div>
        <div className={cx("centerContainer")}></div>
        <div className={cx("rightContainer")}>
          <div className={cx("chopsticks", "chopsticks2")}>
            <svg
              className={cx("leftChopstick")}
              width="38"
              height="707"
              viewBox="0 0 38 707"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0362 0.497192L28.1485 0.497192L37.2047 706.879H0.97998L10.0362 0.497192Z"
                fill="white"
                fillOpacity="0.2"
              />
            </svg>
            <svg
              className={cx("rightChopstick")}
              width="38"
              height="707"
              viewBox="0 0 38 707"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0362 0.497192L28.1485 0.497192L37.2047 706.879H0.97998L10.0362 0.497192Z"
                fill="white"
                fillOpacity="0.2"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Siksha;
