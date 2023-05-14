import classNames from "classnames/bind";
import Header from "../../components/common/Header/Header";
import ScrollNavigator from "../../components/common/Scroll/ScrollNavigator";
import { useNavigatorScroll } from "../../components/Home/scroll";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function TestMain() {
  const { targetRef, state } = useNavigatorScroll(
    ({ progress, getState, setState }) => {
      if (progress > 0.75 && progress < 2.75) {
        setState({ current: "main" });
      }
    },
  );
  return (
    <div ref={targetRef} className={cx("test", "red")}>
      Main
    </div>
  );
}
function TestAbout() {
  const { targetRef } = useNavigatorScroll(({ progress, setState }) => {
    if (progress > 0.75 && progress < 2.75) {
      setState({ current: "about" });
    }
  });
  return (
    <div ref={targetRef} className={cx("test", "blue")}>
      About
    </div>
  );
}
function TestServices() {
  const { targetRef } = useNavigatorScroll(({ progress, setState }) => {
    if (progress > 0.75 && progress < 2.75) {
      setState({ current: "services" });
    }
  });
  return (
    <div ref={targetRef} className={cx("test", "green")}>
      Services
    </div>
  );
}
function TestMembers() {
  const { targetRef } = useNavigatorScroll(({ progress, setState }) => {
    if (progress > 0.75 && progress < 2.75) {
      setState({ current: "members" });
    }
  });
  return (
    <div ref={targetRef} className={cx("test", "orange")}>
      Members
    </div>
  );
}
function TestActivity() {
  const { targetRef } = useNavigatorScroll(({ progress, setState }) => {
    if (progress > 0.75 && progress < 2.75) {
      setState({ current: "activity" });
    }
  });
  return (
    <div ref={targetRef} className={cx("test", "violet")}>
      Activity
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <TestMain />
      <TestAbout />
      <TestServices />
      <TestMembers />
      <TestActivity />
      <ScrollNavigator />
    </main>
  );
}
