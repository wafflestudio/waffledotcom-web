import classNames from "classnames/bind";
import styles from "./ScrollNavigator.module.scss";
const cx = classNames.bind(styles);

type ScrollItemProps = {
  name: string;
  anchorId: string;
};

const homeScrolls: ScrollItemProps[] = [
  { name: "MAIN", anchorId: "main" },
  { name: "ABOUT US", anchorId: "about" },
  { name: "OUR SERVICES", anchorId: "services" },
  { name: "MEMBERS", anchorId: "members" },
  { name: "ACTIVITY", anchorId: "activity" },
];

function ScrollItem({ name, anchorId }: ScrollItemProps) {
  return (
    <li className={cx("item")} onClick={() => {}}>
      <div className={cx("label")}>{name}</div>
      <div className={cx("dot")} />
    </li>
  );
}

export default function ScrollNavigator() {
  return (
    <nav className={cx("ScrollNavigator")}>
      <ul className={cx("list")}>
        {homeScrolls.map(({ name, anchorId }) => (
          <ScrollItem key={anchorId} name={name} anchorId={anchorId} />
        ))}
      </ul>
    </nav>
  );
}
