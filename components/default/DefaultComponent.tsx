import classNames from "classnames/bind";
import styles from "./DefaultStyle.module.scss";

const cx = classNames.bind(styles);

function DefaultComponent() {
  return <div className={cx("")}></div>;
}

export default DefaultComponent;
