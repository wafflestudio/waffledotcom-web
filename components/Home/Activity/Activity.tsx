import classNames from "classnames/bind";
import { useRef, useState } from "react";
import useDelayedState from "../../../hooks/delayedState/useDelayedState";
import { useScroll } from "../../../hooks/scroll/useScroll";
import styles from "./Activity.module.scss";

const cx = classNames.bind(styles);

interface Props {}

function Activity({}: Props) {
  const ref = useRef(null);
  const [scrollClass, setScrollClass] = useDelayedState<{ available: boolean }>(
    { available: false },
  );
  const [isMore, setIsMore] = useState<boolean>(false);

  useScroll(ref, ({ isAvailable, progress }) => {
    if (0.5 < progress && progress < 3) {
      if (!scrollClass.available) {
        setScrollClass({ available: true });
      }
    } else {
      setScrollClass({ available: false }, 500);
    }
    if (isAvailable) {
      if (1.2 < progress) {
        setIsMore(true);
      } else {
        setIsMore(false);
      }
    }
  });
  return (
    <section className={cx("container", scrollClass)} ref={ref}>
      <div className={cx("background")} />
      <div className={cx("foreground")}>
        <div className={cx("activities")}>
          <div className={cx("projectName")}>프로젝트</div>
          <div className={cx("projectName")}>루키 세미나</div>
          <div className={cx("projectName")}>코딩 모임</div>
          <div className={cx("projectName")}>와플 반죽하기/굽기</div>
          <div className={cx("projectName")}>스터디</div>
        </div>
        <div className={cx("more", { up: isMore })}>
          <div className={cx("description")}>
            와플스튜디오에 대해 더 알고 싶으신가요?
          </div>
          <a className={cx("to")} href={"/services"}>
            모집 안내 보기 &gt;
          </a>
        </div>
      </div>
    </section>
  );
}

export default Activity;
