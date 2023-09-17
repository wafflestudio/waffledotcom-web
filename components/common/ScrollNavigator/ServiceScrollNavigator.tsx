"use client";

import classNames from "classnames/bind";
import {
  serviceScrollItems,
  useServiceScroll,
} from "../../Service/serviceScroll";
import styles from "./ScrollNavigator.module.scss";

const cx = classNames.bind(styles);

export default function ServiceScrollNavigator() {
  const { targetRef, state } = useServiceScroll();

  return (
    <nav
      ref={targetRef}
      className={cx("ScrollNavigator", `${state.currentSection}`)}
    >
      <ul className={cx("list")}>
        {serviceScrollItems.map(({ name, anchorId }) => (
          <li
            key={anchorId}
            className={cx("item", {
              current: state.currentSection === anchorId,
            })}
          >
            <button
              onClick={() => {
                useServiceScroll.scrollTo(anchorId, {
                  behavior: "instant",
                  block: "center",
                });
                useServiceScroll.setState({ currentSection: anchorId });
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
