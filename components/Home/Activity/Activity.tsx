"use client";

import classNames from "classnames/bind";
import { useState } from "react";
import { useNavigatorScroll } from "../../common/Scroll/scroll";
import styles from "./Activity.module.scss";

const cx = classNames.bind(styles);

type Activity = {
  head: string;
  detailDescription: string;
  image: string;
  altImg?: string;
};

const acitivities: Activity[] = [
  {
    head: "프로젝트",
    detailDescription:
      "와플스튜디오의 핵심 활동으로, 개발자와 디자이너가 팀을 이루고 프로젝트를 진행합니다.",
    image: "/static/images/activity/activityImage1.png",
    altImg: "Someone is programming a website with laptop",
  },
  {
    head: "세미나 및 토이프로젝트",
    detailDescription:
      "신입 루키 회원들을 대상으로 각 분야의 세미나가 진행됩니다. 학기 말에는 여러 분야가 팀을 이뤄 토이프로젝트에 참여합니다.",
    image: "/static/images/activity/activityImage1.png",
    altImg: "Someone is programming a website with laptop",
  },
  {
    head: "굽기",
    detailDescription:
      "와플스튜디오의 핵심 활동으로, 개발자와 디자이너가 팀을 이루고 프로젝트를 진행합니다.",
    image: "/static/images/activity/activityImage1.png",
    altImg: "Someone is programming a website with laptop",
  },
  {
    head: "와커톤",
    detailDescription:
      "와플스튜디오의 핵심 활동으로, 개발자와 디자이너가 팀을 이루고 프로젝트를 진행합니다.",
    image: "/static/images/activity/activityImage1.png",
    altImg: "Someone is programming a website with laptop",
  },
  {
    head: "MT",
    detailDescription:
      "와플스튜디오의 핵심 활동으로, 개발자와 디자이너가 팀을 이루고 프로젝트를 진행합니다.",
    image: "/static/images/activity/activityImage1.png",
    altImg: "Someone is programming a website with laptop",
  },
];

export default function About() {
  const { state, targetRef } = useNavigatorScroll({
    callback: ({ progress, setState }) => {
      if (progress >= 1 && progress < 3) {
        setState({ currentSection: "activity" });
      }
    },
    anchorId: "activity",
  });

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
            <p>활동</p>
            <span>와플스튜디오의 주요 활동</span>
          </div>
          <div className={cx("imageArea")}>
            <div className={cx("image")}>
              <img
                src={acitivities[index].image}
                alt={acitivities[index].altImg}
              />
            </div>
            <div className={cx("description")}>
              {acitivities.map((activity, id) => (
                <div
                  key={id}
                  className={cx("subTitle", {
                    active: index === id,
                    inactive: index !== id,
                  })}
                >
                  <div
                    className={cx("head")}
                    onClick={() => {
                      setIndex(id);
                    }}
                  >
                    {activity.head}
                  </div>
                  <div
                    className={cx("detailDescription", {
                      visible: index === id,
                    })}
                  >
                    {activity.detailDescription}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
