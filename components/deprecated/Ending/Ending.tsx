"use client";

import classNames from "classnames/bind";
import useWaffleScroll from "../../../library/deprecated/waffleScroll";
import styles from "./Ending.module.scss";

const cx = classNames.bind(styles);

interface Props {
  type: "side" | "top";
}

function Ending({ type }: Props) {
  const { ref, scrollState } = useWaffleScroll(
    ({ toggleState }) => {
      toggleState(0.99, 3.1, "available");
    },
    { available: false },
  );

  return (
    <div className={cx("container", scrollState)} ref={ref}>
      <div className={cx("background")} />
      {type === "side" && (
        <>
          <img
            alt=""
            className={cx("desk")}
            src="/static/images/ending/desk.svg"
          />
          <img
            alt=""
            className={cx("mouse")}
            src="/static/images/ending/mouse.svg"
          />
          <img
            alt=""
            className={cx("chair")}
            src="/static/images/ending/chair.svg"
          />
          <img
            alt=""
            className={cx("light")}
            src="/static/images/ending/light_side.svg"
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
}

export default Ending;
