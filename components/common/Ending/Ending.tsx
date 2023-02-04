import classNames from "classnames/bind";
import styles from "./Ending.module.scss";
import { useRef } from "react";
import useDelayedState from "../../../hooks/delayedState/useDelayedState";
import { useScroll } from "../../../hooks/scroll/useScroll";

const cx = classNames.bind(styles);

interface Props {
  type: "side" | "top";
}

const Ending = ({ type }: Props) => {
  const ref = useRef(null);
  const [scrollClass, setScrollClass] = useDelayedState<{ available: boolean }>(
    { available: false },
  );
  useScroll(ref, ({ progress }) => {
    if (1.0 <= progress) {
      if (!scrollClass.available) {
        setScrollClass({ available: true });
      }
    } else {
      setScrollClass({ available: false }, 500);
    }
  });
  return (
    <div className={cx("container", scrollClass)} ref={ref}>
      <div className={cx("background")} />
      {type === "side" && (
        <>
          <img className={cx("desk")} src="./static/images/ending/desk.svg" />
          <img className={cx("mouse")} src="./static/images/ending/mouse.svg" />
          <img className={cx("chair")} src="./static/images/ending/chair.svg" />
          <img
            className={cx("light")}
            src="./static/images/ending/light_side.svg"
          />
        </>
      )}
      {type === "top" && <></>}

      <div className={cx("contact")}>
        <div className={cx("instagram")}>
          <div>
            <span className={cx("label")}>와플스튜디오 인스타그램</span>
          </div>
          <div className={cx("address")}>@wafflestudio_official</div>
        </div>
        <div className={cx("mail")}>
          <div>
            <span className={cx("label")}>총괄 및 문의</span>
            master@wafflestudio.com
          </div>
          <div>
            <span className={cx("label")}>리크루팅 지원</span>
            recruit@wafflestudio.com
          </div>
          <div>
            <span className={cx("label")}>와플 동아리장</span>
            hanan.dev04@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ending;
