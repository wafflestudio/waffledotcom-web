import styles from "./Cover.module.scss";
import { useRef } from "react";
import { useScroll } from "../../custom/scroll/useScroll";

const Cover = () => {
  const ref = useRef(null);
  useScroll(ref, ({ isAvailable, progress }) => {
    if (isAvailable) {
      console.log(progress);
    }
  });

  return (
    <section className={styles.container} ref={ref}>
      <div className={styles.logos}>
        <div className={styles.logoCenter}>와플스튜디오</div>
        <div className={styles.logoLeftTop}>좌상</div>
      </div>

      <nav className={styles.navigator}>
        <ul>
          <li>소개</li>
          <li>서비스</li>
          <li>멤버</li>
        </ul>
      </nav>
      <div className={styles.description}>
        <p>와플스튜디오는 서울대학교 컴퓨터공학부 웹 / 앱 개발 동아리입니다.</p>
        <p> 타과생도 동아리에 지원하실 수 있습니다.</p>
      </div>
    </section>
  );
};

export default Cover;
