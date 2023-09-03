import Main from "../components/Home/Main/Main";
import About from "../components/Home/About/About";
import Services from "../components/Home/Services/Services";
import Members from "../components/Home/Members/Members";
import Activity from "../components/Home/Activity/Activity";
import ScrollNavigator, {
  ScrollItem,
} from "../components/common/Scroll/ScrollNavigator";

const homeScrollItems: ScrollItem[] = [
  { name: "MAIN", anchorId: "main" },
  { name: "ABOUT US", anchorId: "about" },
  { name: "OUR SERVICES", anchorId: "services" },
  { name: "MEMBERS", anchorId: "members" },
  { name: "ACTIVITY", anchorId: "activity" },
];

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Services />
      <Members />
      <Activity />
      <ScrollNavigator items={homeScrollItems} />
    </>
  );
}
