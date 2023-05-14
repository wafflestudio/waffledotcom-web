import classNames from "classnames/bind";
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
  return (
    <nav className={cx("ScrollNavigator")}>
      <ul className={cx("list")}>
        {homeScrollItems.map(({ name, anchorId }) => (
          <li key={anchorId} className={cx("item")} onClick={() => {}}>
            <div className={cx("label")}>{name}</div>
            <div className={cx("dot")} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
