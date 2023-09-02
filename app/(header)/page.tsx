import Header from "../../components/common/Header/Header";
import ScrollNavigator from "../../components/common/Scroll/ScrollNavigator";
import Main from "../../components/newHome/Main/Main";
import About from "../../components/newHome/About/About";
import Services from "../../components/newHome/Services/Services";
import Members from "../../components/newHome/Members/Members";
import Activity from "../../components/newHome/Activity/Activity";

export default function Home() {
  return (
    <main>
      <Header />
      <Main />
      <About />
      <Services />
      <Members />
      <Activity />
      <ScrollNavigator />
    </main>
  );
}
