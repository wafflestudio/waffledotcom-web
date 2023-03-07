import classNames from "classnames/bind";
import { useRef, useState } from "react";
import { useScroll } from "../../../hooks/scroll/useScroll";
import useDelayedState from "../../../hooks/delayedState/useDelayedState";
import styles from "./Calendar.module.scss";

const cx = classNames.bind(styles);

function Calendar() {
  const ref = useRef(null);
  const [syrupAngle, setSyrupAngle] = useState(0);
  const currentMonth = (((((syrupAngle % 360) + 360) % 360) / 30 + 4) % 12) + 1;
  console.log(currentMonth);
  const [scrollClass, setScrollClass] = useDelayedState<{ available: boolean }>(
    { available: false },
  );
  useScroll(ref, ({ progress }) => {
    if (0.5 < progress && progress < 3) {
      if (!scrollClass.available) {
        setScrollClass({ available: true });
      }
    } else {
      setScrollClass({ available: false }, 500);
    }
  });

  const handleMonthClick = (month: number) => {
    return (e: React.MouseEvent) => {
      const cwDistance = (month + 12 - currentMonth) % 12;
      const ccwDistance = 12 - cwDistance;
      console.log(`${currentMonth} => ${month}, currentAngle: ${syrupAngle}`);
      if (cwDistance <= 6) setSyrupAngle(syrupAngle + cwDistance * 30);
      else setSyrupAngle(syrupAngle - ccwDistance * 30);
    };
  };

  return (
    <div className={cx("container", scrollClass)} ref={ref}>
      <div className={cx("background")}>
        <div className={cx("tableCloth1")} />
        <div className={cx("tableCloth2")} />
      </div>
      <div className={cx("foreground")}>
        <div className={cx("forkAndKnife")}>
          <img src="./static/images/illustration/fork.svg" alt="" />
          <img src="./static/images/illustration/knife.svg" alt="" />
        </div>
        <div className={cx("honeyBottom")}></div>
        <div className={cx("pancake")}>
          <img
            className={cx("pancakeBackground")}
            src="./static/images/illustration/pancake.svg"
            alt=""
          />
          <div className={cx("months")}>
            {Array.from(Array(12).keys()).map((value) => {
              const month = value + 1;
              return (
                <div
                  key={month}
                  className={cx(
                    `month${month === currentMonth ? "Active" : ""}`,
                    `m${month}`,
                  )}
                  onClick={handleMonthClick(month)}
                >
                  {month}
                  <div
                    key={month}
                    className={cx(
                      `monthSuffix${month === currentMonth ? "Active" : ""}`,
                      `m${month}_`,
                    )}
                  >
                    월
                  </div>
                </div>
              );
            })}
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
          <div
            className={cx("syrupTopWrapper")}
            style={{ transform: `rotate(${syrupAngle}deg)` }}
          >
            <img
              className={cx("syrupTop")}
              src="./static/images/illustration/syrupTop.svg"
              alt=""
              draggable={false}
            />
            <img
              className={cx("syrupLuster")}
              src="./static/images/illustration/syrupLuster.svg"
              alt=""
              draggable={false}
            />
          </div>
          <div
            className={cx("syrupBottomWrapper")}
            style={{ transform: `rotate(${syrupAngle}deg)` }}
          >
            <img
              className={cx("syrupBottom")}
              src="./static/images/illustration/syrupBottom.svg"
              alt=""
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
