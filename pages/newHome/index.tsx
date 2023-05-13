import classNames from "classnames/bind";
import Header from "../../components/common/Header/Header";
import ScrollNavigator from "../../components/common/Scroll/ScrollNavigator";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <main>
      <Header />
      <ScrollNavigator />
    </main>
  );
}
