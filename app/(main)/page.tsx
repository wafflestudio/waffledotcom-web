import ScrollNavigator from "../../components/common/Scroll/ScrollNavigator";
import About from "../../components/newHome/About/About";
import Services from "../../components/newHome/Services/Services";
import Members from "../../components/newHome/Members/Members";
import Activity from "../../components/newHome/Activity/Activity";

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
