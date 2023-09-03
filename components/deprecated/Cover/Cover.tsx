"use client";

import classNames from "classnames/bind";
import { usePathname } from "next/navigation";
import Link from "../../common/WaffleLink";
import useWaffleScroll from "../../../library/deprecated/waffleScroll";
import styles from "./Cover.module.scss";

const cx = classNames.bind(styles);

function Cover() {
  const pathname = usePathname();
  const isService = pathname.startsWith("/service");
  const isMember = pathname.startsWith("/member");
  const isHome = pathname === "/";
  const { ref, scrollState } = useWaffleScroll(
    ({ toggleState }) => {
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
          <img alt="" src="/static/images/logo/waffle_logo_text.png" />
        </div>
        <div className={styles.logoLeftTop}>
          <img alt="" src="/static/images/logo/waffle_logo_image.png" />
        </div>
      </div>

      <nav className={styles.navigator}>
        <ul>
          <li
            style={isHome ? { background: "brown", color: "white" } : undefined}
          >
            <Link href="/">소개</Link>
          </li>
          <li
            style={
              isService ? { background: "brown", color: "white" } : undefined
            }
          >
            <Link href="/service">서비스</Link>
          </li>
          <li
            style={
              isMember ? { background: "brown", color: "white" } : undefined
            }
          >
            <Link href="/member">멤버</Link>
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
