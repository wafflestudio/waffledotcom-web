import Snutt from "../../components/Service/Snutt/Snutt";
import Snuboard from "../../components/Service/Snuboard/Snuboard";
import Siksha from "../../components/Service/Siksha/Siksha";
import Main from "../../components/Service/Main/Main";
import { ScrollItem } from "../../components/common/Scroll/ScrollNavigator";
import ServiceScrollNavigator from "../../components/common/Scroll/ServiceScrollNavigator";

const ServiceScrollItems: ScrollItem[] = [
  { name: "MAIN", anchorId: "main" },
  { name: "SNUTT", anchorId: "snutt" },
  { name: "식샤", anchorId: "siksha" },
  { name: "스누보드", anchorId: "snuboard" },
];

function Service() {
  return (
    <>
      <Main />
      <Snutt />
      <Siksha />
      <Snuboard />
      <ServiceScrollNavigator items={ServiceScrollItems} />
    </>
  );
}

export default Service;
