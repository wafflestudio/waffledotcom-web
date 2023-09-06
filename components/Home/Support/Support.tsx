"use client";

import classNames from "classnames/bind";
import { onHomeScroll, useHomeScroll } from "../homeScroll";
import styles from "./Support.module.scss";

const cx = classNames.bind(styles);

export default function Support() {
  const { state, targetRef } = useHomeScroll(onHomeScroll("support"));

  return (
    <section
      className={cx("container", { off: state.currentSection !== "support" })}
      ref={targetRef}
    >
      <div className={cx("background")} />
      <div className={styles.foreground}>
        <div className={styles.sponsorship}>
          <div className={styles.description}>
            와플스튜디오는 소중한 후원과 함께 성장합니다.
          </div>
          <div className={styles.title}>Thanks to</div>
          <div className={styles.sponsors}>
            <div className={styles.sponsor}>김진억</div>
            <div className={styles.sponsor}>박면규</div>
            <div className={styles.sponsor}>한재화</div>
            <div className={styles.sponsor}>이승찬</div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={cx("contact")}>
            <div className={cx("instagram")}>
              <img src="/static/images/support/instagram.svg" alt="instagram" />
              <div className={styles.column}>
                <div>
                  <span className={cx("label")}>와플스튜디오 인스타그램</span>
                </div>
                <div className={cx("address")}>@wafflestudio_official</div>
              </div>
            </div>
            <div className={cx("mail")}>
              <img src="/static/images/support/gmail.svg" alt="gmail" />
              <div className={styles.column}>
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
                  snjlee58@snu.ac.kr
                </div>
              </div>
            </div>
          </div>
          <div className={styles.images}>
            <img
              alt=""
              className={cx("desk")}
              src="/static/images/support/desk.svg"
            />
            <img
              alt=""
              className={cx("mouse")}
              src="/static/images/support/mouse.svg"
            />
            <img
              alt=""
              className={cx("chair")}
              src="/static/images/support/chair.svg"
            />
            <img
              alt=""
              className={cx("light")}
              src="/static/images/support/light_side.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
