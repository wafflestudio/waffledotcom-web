import classNames from "classnames/bind";
import { useEffect } from "react";
import { useNavigatorScroll } from "../../Home/scroll";
import styles from "./ScrollNavigator.module.scss";
const cx = classNames.bind(styles);

type ScrollItem = {
  name: string;
  anchorId: string;
};

const homeScrollItems: ScrollItem[] = [
  { name: "MAIN", anchorId: "main" },
  { name: "ABOUT US", anchorId: "about" },
  { name: "OUR SERVICES", anchorId: "services" },
  { name: "MEMBERS", anchorId: "members" },
  { name: "ACTIVITY", anchorId: "activity" },
];

export default function ScrollNavigator() {
  const { targetRef, state } = useNavigatorScroll();

  return (
    <nav ref={targetRef} className={cx("ScrollNavigator")}>
      <ul className={cx("list")}>
        {homeScrollItems.map(({ name, anchorId }) => (
          <li
            key={anchorId}
            className={cx("item", {
              current: state.currentSection === anchorId,
            })}
          >
            <button
              onClick={(e) => {
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
