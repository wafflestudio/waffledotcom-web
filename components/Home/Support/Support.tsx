"use client";

import classNames from "classnames/bind";
import { useNavigatorScroll } from "../../common/Scroll/scroll";
import styles from "./Support.module.scss";

const cx = classNames.bind(styles);

export default function Support() {
  const { state, targetRef } = useNavigatorScroll({
    callback: ({ progress, setState }) => {
      if (progress >= 1 && progress < 3) {
        setState({ currentSection: "support" });
      }
    },
    anchorId: "support",
  });
  return (
    <div
      className={cx("container", { off: state.currentSection !== "support" })}
      ref={targetRef}
    >
      <div className={cx("background")} />
      <div className={styles.foreground}>
        <div className={styles.sponsorship}>
          <div className={styles.description}>
            와플스튜디오는 소중한 후원과 함께 성장합니다.
          </div>
          <img
            className={cx("supportMobile", "onlyMobile")}
            src="/static/images/support/support_mobile.svg"
            alt="support icon"
          />
          <div className={styles.title}>Thanks to</div>
          <div className={styles.sponsors}>
            <div className={styles.sponsor}>한재화</div>
            <div className={styles.sponsor}>김택민</div>
            <div className={styles.sponsor}>김지환</div>
            <div className={styles.sponsor}>이성원</div>
            <div className={styles.sponsor}>김진억</div>
            <div className={styles.sponsor}>박면규</div>
            <div className={styles.sponsor}>이승찬</div>
          </div>

          <div className={`${styles.sponsors} ${styles.around}`}>
            <div className={styles.sponsor}>김지호</div>
            <div className={styles.sponsor}>이인용</div>
            <div className={styles.sponsor}>김정은</div>
            <div className={styles.sponsor}>김광래</div>
            <div className={styles.sponsor}>이종민</div>
            <div className={styles.sponsor}>이익제</div>
            <div className={styles.sponsor}>황호성</div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={cx("contact")}>
            <div className={cx("instagram")}>
              <img
                className={cx("onlyDesktop")}
                src="/static/images/support/instagram.svg"
                alt="instagram"
              />
              <img
                className={cx("onlyMobile")}
                src="/static/images/support/instagram_mobile.svg"
                alt="instagram"
              />
              <div className={cx("mobileLabel", "onlyMobile")}>instagram</div>
              <div className={styles.column}>
                <div>
                  <span className={cx("label", "onlyDesktop")}>
                    와플스튜디오 인스타그램
                  </span>
                </div>
                <div className={cx("address")}>@wafflestudio_official</div>
              </div>
            </div>
            <div className={cx("mail")}>
              <img
                className={cx("onlyDesktop")}
                src="/static/images/support/gmail.svg"
                alt="gmail"
              />
              <img
                className={cx("onlyMobile")}
                src="/static/images/support/gmail_mobile.svg"
                alt="gmail"
              />
              <div className={cx("mobileLabel", "onlyMobile")}>email</div>
              <div className={styles.column}>
                <div className={styles.row}>
                  <span className={cx("label")}>총괄 및 문의</span>
                  master@wafflestudio.com
                </div>
                <div className={styles.row}>
                  <span className={cx("label")}>리크루팅 지원</span>
                  recruit@wafflestudio.com
                </div>
                <div className={styles.row}>
                  <span className={cx("label")}>와플 동아리장</span>
                  eastshine@snu.ac.kr
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
              className={cx("mouse", "onlyDesktop")}
              src="/static/images/support/mouse.svg"
            />
            <img
              alt=""
              className={cx("chair", "onlyDesktop")}
              src="/static/images/support/chair.svg"
            />
            <img
              alt=""
              className={cx("light", "onlyDesktop")}
              src="/static/images/support/light_side.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
