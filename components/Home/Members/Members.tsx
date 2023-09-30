"use client";

import Image from "next/image";
import classNames from "classnames/bind";
import { useNavigatorScroll } from "../../common/Scroll/scroll";

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

  const waffleIcon = (
    <Image
      className={cx("simpleWaffleIcon", "without", "desktop")}
      src="static/images/home/simple_waffle_icon.svg"
      alt=""
      width={12}
      height={12}
    />
  );

  return (
    <section
      className={cx("container", { off: state.currentSection !== "members" })}
      ref={targetRef}
    >
      <div className={cx("background")} />
      <div className={cx("foreground")}>
        <div className={cx("content")}>
          <div className={cx("titleBar")}>
            <h1 className={cx("title")}>멤버 구성</h1>
            <h2 className={cx("subTitle")}>
              와플스튜디오의 멤버 구성과 모집 단위
            </h2>
          </div>

          <div className={cx("section")}>
            <div className={cx("sectionTitle")}>
              {waffleIcon}
              <h2 className={cx("sectionTitleText")}>준회원</h2>
              {waffleIcon}
            </div>
            <div className={cx("memberTypeSet")}>
              <div className={cx("memberType")}>
                <Image
                  className={cx("memberTypeImage")}
                  src="/static/images/home/rookies_icon.svg"
                  alt="rookies icon"
                  width="150"
                  height="150"
                />
                <div className={cx("memberTypeContent")}>
                  <h3 className={cx("memberTypeName")}>Rookies</h3>
                  <p className={cx("memberTypeDefinition")}>
                    서비스 개발에 필요한 지식을 쌓는 인원
                  </p>
                  <ul className={cx("memberTypeDescription")}>
                    <li className={cx("without", "desktop")}>
                      한 학기동안 루키활동이 이루어지며
                    </li>
                    <li className={cx("without", "desktop")}>
                      세미나, 과제, 팀프로젝트를 통해 개발에 대해 학습합니다.
                    </li>
                    <li className={cx("without", "mobile", "tablet")}>
                      한 학기 동안 세미나, 과제, 팀 프로젝트를 통해 개발에 대해
                      학습합니다.
                    </li>
                    <li>모든 과정을 이수하면 정회원 정회원으로 승격됩니다.</li>
                    <li>8월 중 모집</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={cx("section")}>
            <div className={cx("sectionTitle")}>
              {waffleIcon}
              <h2 className={cx("sectionTitleText")}>정회원</h2>
              {waffleIcon}
            </div>
            <div className={cx("memberTypeSet")}>
              <div className={cx("memberType")}>
                <Image
                  className={cx("memberTypeImage")}
                  src="/static/images/home/programmers_icon.svg"
                  alt="programmers icon"
                  width="150"
                  height="150"
                />
                <div className={cx("memberTypeContent")}>
                  <h3 className={cx("memberTypeName")}>Programmers</h3>
                  <p className={cx("memberTypeDefinition")}>
                    본격적으로 서비스 기획 및 개발을 진행하는 인원
                  </p>
                  <ul className={cx("memberTypeDescription")}>
                    <li>자율적으로 팀을 구성하여 활동합니다.</li>
                    <li>개발 실무 경험이 있을 경우 상시 모집</li>
                  </ul>
                </div>
              </div>

              <div className={cx("memberType")}>
                <Image
                  className={cx("memberTypeImage")}
                  src="/static/images/home/designers_icon.svg"
                  alt="designers icon"
                  width="151"
                  height="150"
                />
                <div className={cx("memberTypeContent")}>
                  <h3 className={cx("memberTypeName")}>Designers</h3>
                  <p className={cx("memberTypeDefinition")}>
                    서비스 UX/UI 및 굿즈를 디자인하는 인원
                  </p>
                  <ul className={cx("memberTypeDescription")}>
                    <li>팀에 참여하여 서비스 기획 및 디자인을 맡습니다.</li>
                    <li>상시 모집</li>
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
