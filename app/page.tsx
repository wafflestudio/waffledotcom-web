import ScrollNavigator from "../components/common/Scroll/ScrollNavigator";
import About from "../components/Home/About/About";
import Services from "../components/Home/Services/Services";
import Members from "../components/Home/Members/Members";
import Activity from "../components/Home/Activity/Activity";
import Main from "../components/Home/Main/Main";

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Services />
      <Members />
      <Activity />
      <ScrollNavigator />
    </>
  );
}
