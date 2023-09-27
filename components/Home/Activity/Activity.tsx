"use client";

import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useNavigatorScroll } from "../../common/Scroll/scroll";
import styles from "./Activity.module.scss";
import Carousel from "./Carousel";

const cx = classNames.bind(styles);

export type Activity = {
  id: number;
  head: string;
  detailDescription: string;
  image: string;
  altImg?: string;
};

const activities: Activity[] = [
  {
    id: 0,
    head: "프로젝트",
    detailDescription:
      "와플스튜디오의 핵심 활동으로, 개발자와 디자이너가 팀을 이루고 프로젝트를 진행합니다.",
    image: "/static/images/activity/activity_img_sample.svg",
    altImg: "Someone is programming a website with laptop",
  },
  {
    id: 1,
    head: "세미나 및 토이프로젝트",
    detailDescription:
      "신입 루키 회원들을 대상으로 각 분야의 세미나가 진행됩니다. 학기 말에는 여러 분야가 팀을 이뤄 토이프로젝트에 참여합니다.",
    image: "/static/images/activity/activity_img_sample.svg",
    altImg: "Someone is programming a website with laptop",
  },
  {
    id: 2,
    head: "굽기",
    detailDescription:
      "와플스튜디오의 핵심 활동으로, 개발자와 디자이너가 팀을 이루고 프로젝트를 진행합니다.",
    image: "/static/images/activity/activity_img_sample.svg",
    altImg: "Someone is programming a website with laptop",
  },
  {
    id: 3,
    head: "와커톤",
    detailDescription:
      "와플스튜디오의 핵심 활동으로, 개발자와 디자이너가 팀을 이루고 프로젝트를 진행합니다.",
    image: "/static/images/activity/activity_img_sample.svg",
    altImg: "Someone is programming a website with laptop",
  },
  {
    id: 4,
    head: "MT",
    detailDescription:
      "와플스튜디오의 핵심 활동으로, 개발자와 디자이너가 팀을 이루고 프로젝트를 진행합니다.",
    image: "/static/images/activity/activity_img_sample.svg",
    altImg: "Someone is programming a website with laptop",
  },
];

export default function Activity() {
  const { state, targetRef } = useNavigatorScroll({
    callback: ({ progress, setState }) => {
      if (progress >= 1 && progress < 3) {
        setState({ currentSection: "activity" });
      }
    },
    anchorId: "activity",
  });

  const [selectedId, setSelectedId] = useState(0);

  useEffect(() => {
    if (targetRef.current && targetRef.current.clientWidth < 1300) {
      const interval = setInterval(() => {
        setSelectedId((prev) => (prev + 1) % activities.length);
      }, 2000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [targetRef, targetRef.current?.clientWidth]);

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
            {/* deskTopAndTablet */}
            <div className={cx("imageContainer")}>
              <img
                src={activities[selectedId].image}
                alt={activities[selectedId].altImg}
              />
            </div>
            <div className={cx("description")}>
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className={cx("subTitle", {
                    active: selectedId === activity.id,
                  })}
                >
                  <div
                    className={cx("head")}
                    onClick={() => {
                      setSelectedId(activity.id);
                    }}
                  >
                    {activity.head}
                  </div>
                  <div
                    className={cx("detailDescription", {
                      visible: selectedId === activity.id,
                    })}
                  >
                    {activity.detailDescription}
                  </div>
                </div>
              ))}
            </div>

            {/* mobile */}
            <div className={cx("carouselContainer")}>
              <Carousel activities={activities} selectedId={selectedId} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
