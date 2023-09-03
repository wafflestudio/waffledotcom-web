import ScrollNavigator from "../../components/common/Scroll/ScrollNavigator";
import About from "../../components/Home/About/About";
import Services from "../../components/Home/Services/Services";
import Members from "../../components/Home/Members/Members";
import Activity from "../../components/Home/Activity/Activity";

export default function Home() {
  return (
    <>
      <About />
      <Services />
      <Members />
      <Activity />
      <ScrollNavigator />
    </>
  );
}
