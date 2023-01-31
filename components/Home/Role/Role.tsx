import classNames from "classnames/bind";
import styles from "./Role.module.scss";

const cx = classNames.bind(styles);

interface Props {}

const Role = ({}: Props) => {
  return (
    <section className={cx("Role")}>
      <div className={cx("background")} />
    </section>
  );
};

export default Role;
