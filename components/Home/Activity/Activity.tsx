"use client";

import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useNavigatorScroll } from "../../common/Scroll/scroll";
import styles from "./Activity.module.scss";
import Carousel from "./Carousel";
import activities from "./ActivityData";

const cx = classNames.bind(styles);

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
                alt={activities[selectedId].altText}
              />
            </div>
            <div className={cx("description")}>
              {activities.map((activity, id) => (
                <div
                  key={id}
                  className={cx("subTitle", {
                    active: selectedId === id,
                  })}
                >
                  <div
                    className={cx("head")}
                    onClick={() => {
                      setSelectedId(id);
                    }}
                  >
                    {activity.head}
                  </div>
                  <div
                    className={cx("detailDescription", {
                      visible: selectedId === id,
                    })}
                  >
                    {activity.detailDescription}
                  </div>
                </div>
              ))}
            </div>

            {/* mobile */}
            <div className={cx("carouselContainer")}>
              <Carousel
                activities={activities}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
