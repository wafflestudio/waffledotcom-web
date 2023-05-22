"use client";
import { useRef } from "react";
import classNames from "classnames/bind";
import useWaffleScroll from "../../../library/waffleScroll";
import styles from "./Billboard.module.scss";
import { dummyBanners } from "./dummy";

const cx = classNames.bind(styles);

function Billboard() {
  const [areaRef0, areaRef1, areaRef2, areaRef3] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const {
    ref,
    scrollState: {
      available,
      bannerOn,
      lampHeight,
      cityProgress: [darkSkylinePercent, lightSkylinePercent],
      selected,
    },
  } = useWaffleScroll<{
    available: boolean;
    bannerOn: boolean;
    lampHeight: number;
    cityProgress: [number, number];
    selected: -1 | 0 | 1 | 2 | 3 | 4;
  }>(
    ({ progress, toggleState, setScrollState }) => {
      //available and banner
      toggleState(0.5, 3, "available");
      toggleState(0.5, 2, "bannerOn");

      //city skyline progress
      if (progress >= 0.5 && progress < 2) {
        setScrollState({
          cityProgress: [(progress - 0.5) * 240, (progress - 0.5) * 120],
        });
      } else if (progress >= 2) {
        setScrollState({
          cityProgress: [
            (progress - 0.5) * 240 + (progress - 2) * 360,
            (progress - 0.5) * 120,
          ],
        });
      }

      //scrollState
      if (progress < 0.5) {
        setScrollState({ selected: -1 });
      } else if (progress < 1) {
        setScrollState({ lampHeight: 120 - 240 * (progress - 0.5) });
      } else if (progress < 1.25) {
        setScrollState({ selected: 0 });
      } else if (progress < 1.5) {
        setScrollState({ selected: 1 });
      } else if (progress < 1.75) {
        setScrollState({ selected: 2 });
      } else if (progress < 2.0) {
        setScrollState({ selected: 3 });
      } else {
        setScrollState({ selected: 4 });
      }
    },
    {
      available: false,
      bannerOn: false,
      lampHeight: 120,
      cityProgress: [0, 0],
      selected: -1,
    },
  );

  return (
    <section className={cx("container", { available, bannerOn })} ref={ref}>
      <div className={cx("background")}>
        <img
          className={cx("skylineLight")}
          style={{ transform: `translateY(-${lightSkylinePercent}px)` }}
          src="static/images/home/skyline_light.svg"
          alt=""
          width="100%"
        />
        <img
          className={cx("skylineDark")}
          style={{ transform: `translateY(-${darkSkylinePercent}px)` }}
          src="static/images/home/skyline_dark.svg"
          alt=""
          width="100%"
        />
        <div
          className={cx("skylineGround")}
          style={{ transform: `translateY(-${darkSkylinePercent}px)` }}
        />
      </div>
      <div className={cx("area")} ref={areaRef0} />
      <div className={cx("area")} ref={areaRef1} />
      <div className={cx("area")} ref={areaRef2} />
      <div className={cx("area")} ref={areaRef3} />

      <div className={cx("foreground")}>
        <div
          className={cx("bannerContainer")}
          style={{ transform: `translateY(${lampHeight}px)` }}
        >
          <nav className={cx("bannerNavigator", `selected${selected}`)}>
            {dummyBanners.map(({ title }, index) => (
              <button
                className={cx("bannerTitle", { selected: index === selected })}
                key={title}
              >
                <img
                  alt=""
                  className={cx("lightOff")}
                  src={"static/images/home/light_off.svg"}
                />
                <img
                  alt=""
                  className={cx("lightOn")}
                  src={"static/images/home/light_on.svg"}
                />
                {title}
              </button>
            ))}
          </nav>
          <div className={cx("bannerWrapper", `selected${selected}`)}>
            <div className={cx("bannerSlots")}>
              {dummyBanners.map(
                ({ title, backgroundColor, url, backgroundImage }) =>
                  backgroundImage ? (
                    <img
                      alt="banner"
                      key={title}
                      className={cx("banner", { clickable: url })}
                      style={{
                        background: "white",
                      }}
                      src={backgroundImage.src}
                      onClick={() => {
                        if (url) {
                          window.open(url);
                        }
                      }}
                    />
                  ) : (
                    <div
                      key={title}
                      className={cx("banner", { clickable: url })}
                      style={{
                        background: backgroundColor,
                      }}
                      onClick={() => {
                        if (url) {
                          window.open(url);
                        }
                      }}
                    />
                  ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Billboard;
