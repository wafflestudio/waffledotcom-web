"use client";

import classNames from "classnames/bind";
import { useNavigatorScroll } from "../../Home/scroll";
import Image from "next/image";

import styles from "./Members.module.scss";

const cx = classNames.bind(styles);

export default function Members() {
  const { state, targetRef } = useNavigatorScroll({
    callback: ({ progress, setState }) => {
      if (progress >= 1 && progress < 3) {
        setState({ currentSection: "members" });
      }
    },
    anchorId: "members",
  });
  return (
    <section
      className={cx("container", { off: state.currentSection !== "members" })}
      ref={targetRef}
    >
      <div className={cx("background")} />
      <div className={cx("foreground")}>
        <div className={cx("content-wrapper")}>
          <div className={cx("title-wrapper")}>
            <h1 className={cx("title")}>멤버 구성</h1>
            <p className={cx("description")}>
              와플스튜디오의 멤버 구성과 모집 단위
            </p>
          </div>

          <div className={cx("grade")}>
            <h2 className={cx("grade-name")}>준회원</h2>
            <div className={cx("positions")}>
              <div className={cx("position")}>
                <Image
                  className={cx("position-image")}
                  src="/static/images/newHome/rookies_icon.svg"
                  alt="rookies icon"
                  width="150"
                  height="150"
                />
                <div className={cx("texts")}>
                  <h3 className={cx("position-name")}>Rookies</h3>
                  <p className={cx("description")}>
                    서비스 개발에 필요한 지식을 쌓는 인원
                  </p>
                  <ul className={cx("descriptions")}>
                    <li className={cx("description")}>
                      한 학기 동안 세미나, 과제, 팀 프로젝트를 통해 개발에 대해
                      학습합니다.
                    </li>
                    <li className={cx("description")}>
                      모든 과정을 이수하면 정회원 Programmers로 승격됩니다.
                    </li>
                    <li className={cx("description")}>8월 중 모집</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={cx("grade")}>
            <h2 className={cx("grade-name")}>정회원</h2>
            <div className={cx("positions")}>
              <div className={cx("position")}>
                <Image
                  className={cx("position-image")}
                  src="/static/images/newHome/programmers_icon.svg"
                  alt="programmers icon"
                  width="150"
                  height="150"
                />
                <div className={cx("texts")}>
                  <h3 className={cx("position-name")}>Programmers</h3>
                  <p className={cx("description")}>
                    본격적으로 서비스 기획 및 개발을 진행하는 인원
                  </p>
                  <ul className={cx("descriptions")}>
                    <li className={cx("description")}>
                      자율적으로 팀을 구성하여 활동합니다.
                    </li>
                    <li className={cx("description")}>
                      개발 실무 경험이 있을 경우 상시 모집
                    </li>
                  </ul>
                </div>
              </div>

              <div className={cx("position")}>
                <Image
                  className={cx("position-image")}
                  src="/static/images/newHome/designers_icon.svg"
                  alt="designers icon"
                  width="151"
                  height="150"
                />
                <div className={cx("texts")}>
                  <h3 className={cx("position-name")}>Designers</h3>
                  <p className={cx("description")}>
                    서비스 UX/UI 및 굿즈를 디자인하는 인원
                  </p>
                  <ul className={cx("descriptions")}>
                    <li className={cx("description")}>
                      팀에 참여하여 서비스 기획 및 디자인을 맡습니다.
                    </li>
                    <li className={cx("description")}>상시 모집</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
