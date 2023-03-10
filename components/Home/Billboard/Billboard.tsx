import { useRef, useState } from "react";
import classNames from "classnames/bind";
import { useScroll } from "../../../hooks/scroll/useScroll";
import styles from "./Billboard.module.scss";
import { dummyBanners } from "./dummy";

const cx = classNames.bind(styles);

function Billboard() {
  const ref = useRef(null);
  const [areaRef0, areaRef1, areaRef2, areaRef3] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const [scrollClass, setScrollClass] = useState<{
    available: boolean;
    bannerOn: boolean;
  }>({
    available: false,
    bannerOn: false,
  });
  const [selected, setSelected] = useState<-1 | 0 | 1 | 2 | 3 | 4>(-1);
  const [[darkSkylinePercent, lightSkylinePercent], setCityProgress] = useState<
    [number, number]
  >([0, 0]);
  const [lampHeight, setLampHeight] = useState<number>(120);

  useScroll(ref, ({ progress }) => {
    if (progress >= 0.5 && progress < 3.0) {
      setScrollClass({ available: true, bannerOn: true });
      if (progress > 2) {
        setScrollClass({ available: true, bannerOn: false });
      }
    } else {
      setScrollClass({ available: false, bannerOn: false });
    }
    if (progress >= 0.5 && progress < 2) {
      setCityProgress([(progress - 0.5) * 240, (progress - 0.5) * 120]);
    } else if (progress >= 2) {
      setCityProgress([
        (progress - 0.5) * 240 + (progress - 2) * 360,
        (progress - 0.5) * 120,
      ]);
    }
    if (progress < 0.5) {
      setSelected(-1);
    } else if (progress < 1) {
      setLampHeight(120 - 240 * (progress - 0.5));
    } else if (progress < 1.25) {
      setSelected(0);
    } else if (progress < 1.5) {
      setSelected(1);
    } else if (progress < 1.75) {
      setSelected(2);
    } else if (progress < 2.0) {
      setSelected(3);
    } else {
      setSelected(4);
    }
  });

  return (
    <section className={cx("container", scrollClass)} ref={ref}>
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
              {dummyBanners.map(({ title, backgroundColor, url }) => (
                <div
                  key={title}
                  className={cx("banner", { clickable: url })}
                  style={{ background: backgroundColor }}
                  onClick={() => {
                    if (url) {
                      window.open(url);
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Billboard;
