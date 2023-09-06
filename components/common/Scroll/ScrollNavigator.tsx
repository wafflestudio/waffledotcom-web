"use client";

import classNames from "classnames/bind";
import { useHomeScroll } from "../../Home/homeScroll";
import styles from "./ScrollNavigator.module.scss";
const cx = classNames.bind(styles);

export type ScrollItem = {
  name: string;
  anchorId: string;
};

type ScrollNavigatorProps = {
  items: ScrollItem[];
};

export default function ScrollNavigator({ items }: ScrollNavigatorProps) {
  const { targetRef, state } = useHomeScroll();

  return (
    <nav
      ref={targetRef}
      className={cx("ScrollNavigator", `${state.currentSection}`)}
    >
      <ul className={cx("list")}>
        {items.map(({ name, anchorId }) => (
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
