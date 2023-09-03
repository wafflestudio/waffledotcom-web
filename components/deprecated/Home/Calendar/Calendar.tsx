"use client";
import classNames from "classnames/bind";
import { useState } from "react";
import useWaffleScroll from "../../../../library/deprecated/waffleScroll";
import styles from "./Calendar.module.scss";
import _annualSchedules from "./annualSchedules.json";

const cx = classNames.bind(styles);

function Calendar() {
  const [syrupAngle, setSyrupAngle] = useState(0);
  const currentMonth = (((((syrupAngle % 360) + 360) % 360) / 30 + 4) % 12) + 1;

  const { ref, scrollState } = useWaffleScroll(
    ({ toggleState }) => {
      toggleState(0.5, 3, "available");
    },
    { available: false },
  );

  const handleMonthClick = (month: number) => {
    return () => {
      const cwDistance = (month + 12 - currentMonth) % 12;
      const ccwDistance = 12 - cwDistance;
      if (cwDistance <= 6) setSyrupAngle(syrupAngle + cwDistance * 30);
      else setSyrupAngle(syrupAngle - ccwDistance * 30);
    };
  };

  const annualSchedules = new Map(Object.entries(_annualSchedules));
  const monthlySchedules = annualSchedules.get(`${currentMonth}월`) ?? [];

  return (
    <div className={cx("container", scrollState)} ref={ref}>
      <div className={cx("background")}>
        <div className={cx("tableCloth1")} />
        <div className={cx("tableCloth2")} />
      </div>
      <div className={cx("foreground")}>
        <div className={cx("forkAndKnife")}>
          <img src="/static/images/illustration/fork.svg" alt="" />
          <img src="/static/images/illustration/knife.svg" alt="" />
        </div>
        <div className={cx("honeyBottom")}></div>
        <div className={cx("pancake")}>
          <img
            className={cx("pancakeBackground")}
            src="/static/images/illustration/pancake.svg"
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
                  <svg
                    className={cx(
                      `monthSuffix${month === currentMonth ? "Active" : ""}`,
                      `m${month}_`,
                    )}
                    width="31"
                    height="29"
                    viewBox="0 0 31 29"
                    fill="#FFE4AE"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.305699 12.582H22.8273L25.0733 0C27.028 0.399025 29.0452 0.399025 31 0L27.7559 18.1672H21.8291L21.9851 17.3079H15.3721L15.6528 15.7122H22.2659L22.5154 14.2698H13.9434C13.5379 16.3873 12.8205 17.492 11.3232 18.4741H7.26806L8.0167 14.2698H0L0.305699 12.582ZM13.2198 0.460317H13.4693C18.8034 0.460317 22.3906 2.2402 21.7356 5.95343C21.0805 9.66666 17.1501 11.4466 11.5041 11.4466H11.2546C5.88932 11.4466 2.30208 9.66667 2.95714 5.98413C3.6122 2.30159 7.89193 0.460317 13.226 0.460317H13.2198ZM2.89475 29L3.92413 23.2H20.9245L21.2988 21.0212H4.42946L4.77259 19.1492H27.575L26.6392 25.0719H9.51398L9.10847 27.3429H27.0135L26.7327 29H2.89475ZM11.5353 9.94285H11.7849C14.062 9.94285 15.4969 8.16295 15.9024 5.95343C16.3079 3.7439 15.4969 1.96401 13.2198 1.96401H12.9702C10.6931 1.96401 9.2582 3.77459 8.85268 5.95343C8.44717 8.13226 9.23325 9.94285 11.5353 9.94285Z" />
                  </svg>
                </div>
              );
            })}
          </div>
          <div className={cx("description")}>
            <div className={cx("title")}># 와플스튜디오는 매주 토요일마다!</div>
            <div className={cx("content")}>
              <div className={cx("monthName")}>{currentMonth}월</div>
              <div className={cx("monthContent")}>
                {monthlySchedules.map(
                  ({
                    week,
                    schedules,
                  }: {
                    week: number;
                    schedules: string[];
                  }) => {
                    return (
                      <div key={week} className={cx("weeklySchedules")}>
                        <div className={cx("week")}>{week}주</div>
                        <pre className={cx("schedules")}>
                          {schedules.join("\n")}
                        </pre>
                      </div>
                    );
                  },
                )}
              </div>
            </div>
          </div>
          <div
            className={cx("syrupTopWrapper")}
            style={{ transform: `rotate(${syrupAngle}deg)` }}
          >
            <img
              className={cx("syrupTop")}
              src="/static/images/illustration/syrupTop.svg"
              alt=""
              draggable={false}
            />
            <img
              className={cx("syrupLuster")}
              src="/static/images/illustration/syrupLuster.svg"
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
              src="/static/images/illustration/syrupBottom.svg"
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
