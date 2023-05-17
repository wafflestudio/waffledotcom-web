import classNames from "classnames/bind";
import { useEffect } from "react";
import Header from "../../components/common/Header/Header";
import ScrollNavigator from "../../components/common/Scroll/ScrollNavigator";
import { useNavigatorScroll } from "../../components/Home/scroll";
import Main from "../../components/newHome/Main/Main";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function TestMain() {
  const { targetRef } = useNavigatorScroll({
    callback: ({ progress, setState }) => {
      if (progress > 0.75 && progress < 2.75) {
        setState({ currentSection: "main" });
      }
    },
    anchorId: "main",
  });

  return (
    <div ref={targetRef} className={cx("test", "red")}>
      Main
    </div>
  );
}
function TestAbout() {
  const { state, targetRef } = useNavigatorScroll({
    callback: ({ progress, setState }) => {
      if (progress > 0.75 && progress < 2.75) {
        setState({ currentSection: "about" });
      }
    },
    anchorId: "about",
  });

  return (
    <div ref={targetRef} className={cx("test", "blue")}>
      About
    </div>
  );
}
function TestServices() {
  const { targetRef } = useNavigatorScroll({
    callback: ({ progress, setState }) => {
      if (progress > 0.75 && progress < 2.75) {
        setState({ currentSection: "services" });
      }
    },
    anchorId: "services",
  });
  return (
    <div id="services" ref={targetRef} className={cx("test", "green")}>
      Services
    </div>
  );
}
function TestMembers() {
  const { targetRef } = useNavigatorScroll({
    callback: ({ progress, setState }) => {
      if (progress > 0.75 && progress < 2.75) {
        setState({ currentSection: "members" });
      }
    },
    anchorId: "members",
  });
  return (
    <div ref={targetRef} className={cx("test", "orange")}>
      Members
    </div>
  );
}
function TestActivity() {
  const { targetRef } = useNavigatorScroll({
    callback: ({ progress, setState }) => {
      if (progress > 0.75 && progress < 2.75) {
        setState({ currentSection: "activity" });
      }
    },
    anchorId: "activity",
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
      <Main />
      <TestAbout />
      <TestServices />
      <TestMembers />
      <TestActivity />
      <ScrollNavigator />
    </main>
  );
}
