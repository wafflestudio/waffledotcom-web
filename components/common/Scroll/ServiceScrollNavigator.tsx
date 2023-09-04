"use client";

import classNames from "classnames/bind";
import { useServiceScroll } from "../../Service/serviceScroll";
import { ScrollItem } from "./ScrollNavigator";
import styles from "./ScrollNavigator.module.scss";
const cx = classNames.bind(styles);

type ScrollNavigatorProps = {
  items: ScrollItem[];
};

export default function ServiceScrollNavigator({
  items,
}: ScrollNavigatorProps) {
  const { targetRef, state } = useServiceScroll();

  return (
    <nav
      ref={targetRef}
      className={cx("ScrollNavigator", `${state.currentService}`)}
    >
      <ul className={cx("list")}>
        {items.map(({ name, anchorId }) => (
          <li
            key={anchorId}
            className={cx("item", {
              current: state.currentService === anchorId,
            })}
          >
            <button
              onClick={() => {
                useServiceScroll.scrollTo(anchorId);
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
