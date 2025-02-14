"use client";

import classNames from "classnames/bind";
import { useNavigatorScroll } from "./scroll";
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
  const { targetRef, state } = useNavigatorScroll();

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
                useNavigatorScroll.scrollTo(anchorId);
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
