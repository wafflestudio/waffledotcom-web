import styles from "./Billboard.module.scss";
import { useScroll } from "../../../hooks/scroll/useScroll";
import { useRef, useState } from "react";
import classNames from "classnames/bind";
import { dummyBanners } from "./dummy";

const cx = classNames.bind(styles);

const Billboard = () => {
  const ref = useRef(null);
  const [areaRef0, areaRef1, areaRef2, areaRef3] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const [scrollClass, setScrollClass] = useState<{ available: boolean }>({
    available: false,
  });
  const [selected, setSelected] = useState<-1 | 0 | 1 | 2 | 3 | 4>(-1);

  useScroll(ref, ({ isAvailable, progress }) => {
    if (progress >= 0.5 && progress < 3) {
      setScrollClass({ available: true });
    } else {
      setScrollClass({ available: false });
    }
    if (progress < 0.5) {
      setSelected(-1);
    } else if (progress < 1.25) {
      setSelected(0);
    } else if (progress < 1.5) {
      setSelected(1);
    } else if (progress < 1.75) {
      setSelected(2);
    } else if (progress < 2.0) {
      setSelected(3);
    } else if (progress >= 3) {
      setSelected(4);
    }
  });

  return (
    <section className={cx("container", scrollClass)} ref={ref}>
      <div className={cx("background")} />
      <div className={cx("area")} ref={areaRef0} />
      <div className={cx("area")} ref={areaRef1} />
      <div className={cx("area")} ref={areaRef2} />
      <div className={cx("area")} ref={areaRef3} />
      <div className={cx("foreground")}>
        <div className={cx("bannerContainer")}>
          <nav className={cx("bannerNavigator")}>
            {dummyBanners.map(({ title }, index) => (
              <button
                className={cx("bannerTitle", { selected: index === selected })}
                key={title}
              >
                {title}
              </button>
            ))}
          </nav>
          <div className={cx("bannerWrapper", `selected${selected}`)} />
        </div>
      </div>
    </section>
  );
};

export default Billboard;
