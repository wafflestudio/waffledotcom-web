import Main from "../components/Home/Main/Main";
import About from "../components/Home/About/About";
import Services from "../components/Home/Services/Services";
import Members from "../components/Home/Members/Members";
import Activity from "../components/Home/Activity/Activity";
import ScrollNavigator from "../components/common/ScrollNavigator/HomeScrollNavigator";
import Support from "../components/Home/Support/Support";

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Services />
      <Members />
      <Activity />
      <Support />
      <ScrollNavigator />
    </>
  );
}
