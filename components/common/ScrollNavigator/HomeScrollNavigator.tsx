"use client";

import classNames from "classnames/bind";
import { homeScrollItems, useHomeScroll } from "../../Home/homeScroll";
import styles from "./ScrollNavigator.module.scss";
const cx = classNames.bind(styles);

export default function HomeScrollNavigator() {
  const { targetRef, state } = useHomeScroll();

  return (
    <nav
      ref={targetRef}
      className={cx("ScrollNavigator", `${state.currentSection}`)}
    >
      <ul className={cx("list")}>
        {homeScrollItems.map(({ name, anchorId }) => (
          <li
            key={anchorId}
            className={cx("item", {
              current: state.currentSection === anchorId,
            })}
          >
            <button
              onClick={() => {
                useHomeScroll.scrollTo(anchorId, {
                  behavior: "instant",
                  block: "center",
                });
                useHomeScroll.setState({ currentSection: anchorId });
              }}
            >
              <div className={cx("label")}>{name}</div>
              <div className={cx("dot")} />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
