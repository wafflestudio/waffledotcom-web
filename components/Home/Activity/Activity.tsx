"use client";

import classNames from "classnames/bind";
import { useState } from "react";
import { onHomeScroll, useHomeScroll } from "../homeScroll";
import styles from "./Activity.module.scss";

const cx = classNames.bind(styles);

export default function Activity() {
  const { state, targetRef } = useHomeScroll(onHomeScroll("activity"));
  const [index, setIndex] = useState(0);

  return (
    <section
      className={cx("container", { off: state.currentSection !== "activity" })}
      ref={targetRef}
    >
      <div className={cx("background")} />
      <div className={cx("foreground")}>
        <div className={cx("wrapper")}>
          <div className={cx("textArea")}>
            <p>활동소개</p>
            <span>와플스튜디오에서 하는 활동들</span>
          </div>
          <div className={cx("imageArea")}>
            <div className={cx("image")}>
              <img
                src="/static/images/activity/activityImage1.png"
                alt="Someone is programming a website with laptop"
              />
            </div>
            <div className={cx("description")}>
              <div className={cx("subTitle", { active: index === 0 })}>
                <div
                  className={cx("head")}
                  onClick={() => {
                    setIndex(0);
                  }}
                >
                  프로젝트
                </div>
                <div
                  className={cx("detailDescription", { visible: index === 0 })}
                >
                  와플스튜디오의 가장 핵심 활동으로, 각자의 팀에서 프로젝트를
                  진행하게 됩니다.
                </div>
              </div>
              <div className={cx("subTitle", { active: index === 1 })}>
                <div
                  className={cx("head")}
                  onClick={() => {
                    setIndex(1);
                  }}
                >
                  세미나 및 토이프로젝트
                </div>
                <div
                  className={cx("detailDescription", { visible: index === 1 })}
                >
                  와플스튜디오의 가장 핵심 활동으로, 각자의 팀에서 프로젝트를
                  진행하게 됩니다.
                </div>
              </div>
              <div className={cx("subTitle", { active: index === 2 })}>
                <div
                  className={cx("head")}
                  onClick={() => {
                    setIndex(2);
                  }}
                >
                  굽기
                </div>
                <div
                  className={cx("detailDescription", { visible: index === 2 })}
                >
                  와플스튜디오의 가장 핵심 활동으로, 각자의 팀에서 프로젝트를
                  진행하게 됩니다.
                </div>
              </div>
              <div className={cx("subTitle", { active: index === 3 })}>
                <div
                  className={cx("head")}
                  onClick={() => {
                    setIndex(3);
                  }}
                >
                  와커톤
                </div>
                <div
                  className={cx("detailDescription", { visible: index === 3 })}
                >
                  와플스튜디오의 가장 핵심 활동으로, 각자의 팀에서 프로젝트를
                  진행하게 됩니다.
                </div>
              </div>
              <div className={cx("subTitle", { active: index === 4 })}>
                <div
                  className={cx("head")}
                  onClick={() => {
                    setIndex(4);
                  }}
                >
                  MT
                </div>
                <div
                  className={cx("detailDescription", { visible: index === 4 })}
                >
                  와플스튜디오의 가장 핵심 활동으로, 각자의 팀에서 프로젝트를
                  진행하게 됩니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
