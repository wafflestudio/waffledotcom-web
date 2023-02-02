import classNames from "classnames/bind";
import styles from "./Calendar.module.scss";

const cx = classNames.bind(styles);

interface Props {}

const Calendar = ({}: Props) => {
  return (
    <div className={cx("container")}>
      <div className={cx("background")}>
        <div className={cx("tableCloth1")} />
        <div className={cx("tableCloth2")} />
      </div>
      <div className={cx("foreground")}>
        <div className={cx("forkAndKnife")}>
          <img src="./static/images/illustration/fork.svg" />
          <img src="./static/images/illustration/knife.svg" />
        </div>
        <div className={cx("honeyBottom")}></div>
        <div className={cx("pancake")}>
          <img
            className={cx("pancakeBackground")}
            src="./static/images/illustration/pancake.svg"
          />
          <div className={cx("months")}>
            <div className={cx("month", "m1")}>1</div>
            <div className={cx("month", "m2")}>2</div>
            <div className={cx("month", "m3")}>3</div>
            <div className={cx("month", "m4")}>4</div>
            <div className={cx("month", "m5")}>5</div>
            <div className={cx("month", "m6")}>6</div>
            <div className={cx("month", "m7")}>7</div>
            <div className={cx("month", "m8")}>8</div>
            <div className={cx("month", "m9")}>9</div>
            <div className={cx("month", "m10")}>10</div>
            <div className={cx("month", "m11")}>11</div>
            <div className={cx("month", "m12")}>12</div>
          </div>
          <div className={cx("description")}>
            <div className={cx("title")}># 와플스튜디오는 매주 토요일마다!</div>
            <div className={cx("content")}>
              <div className={cx("monthName")}>1월</div>
              <div className={cx("monthContent")}>
                1주 토이프로젝트 중간 총회
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
