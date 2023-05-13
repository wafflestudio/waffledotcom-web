import classNames from "classnames/bind";
import Header from "../../components/common/Header/Header";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <main>
      <Header />
    </main>
  );
}
