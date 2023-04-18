import classNames from "classnames/bind";
import { useRouter } from "next/router";
import useWaffleScroll from "../../../library/waffleScroll";
import styles from "./Cover.module.scss";

const cx = classNames.bind(styles);

function Cover() {
  const router = useRouter();
  const { ref, scrollState } = useWaffleScroll(
    ({ progress, toggleState }) => {
      toggleState(0, 2.7, "available");
    },
    { available: false },
  );
  return (
    <section className={cx("container", scrollState)} ref={ref}>
      <div className={styles.background}>
        <div className={cx("animatedText", "fromLeft")}>WAFFLE</div>
        <div className={cx("animatedText", "fromRight")}>STUDIO</div>
        <div className={cx("animatedText", "fromLeft")}>WAFFLE</div>
      </div>
      <div className={styles.logos}>
        <div className={styles.logoCenter}>
          <img alt="" src="./static/images/logo/waffle_logo_text.png" />
        </div>
        <div className={styles.logoLeftTop}>
          <img alt="" src="./static/images/logo/waffle_logo_image.png" />
        </div>
      </div>

      <nav className={styles.navigator}>
        <ul>
          <li style={{ background: "brown", color: "white" }}>소개</li>
          <li
            onClick={() => {
              void router.push("./service");
            }}
          >
            서비스
          </li>
          <li
            onClick={() => {
              void router.push("./member");
            }}
          >
            멤버
          </li>
        </ul>
      </nav>
      <div className={styles.description}>
        <p>와플스튜디오는 서울대학교 컴퓨터공학부 웹 / 앱 개발 동아리입니다.</p>
        <p> 타과생도 동아리에 지원하실 수 있습니다.</p>
      </div>
    </section>
  );
}

export default Cover;
