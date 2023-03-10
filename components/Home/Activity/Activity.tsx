import classNames from "classnames/bind";
import useWaffleScroll from "../../../library/waffleScroll";
import styles from "./Activity.module.scss";

const cx = classNames.bind(styles);

function Activity() {
  const {
    ref,
    scrollState: { available, isMore },
  } = useWaffleScroll(
    ({ toggleState }) => {
      toggleState(0.5, 3, "available");
      toggleState(1.2, 3.1, "isMore");
    },
    { available: false, isMore: false },
  );

  return (
    <section className={cx("container", { available })} ref={ref}>
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
