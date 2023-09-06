import Snutt from "../../components/Service/Snutt/Snutt";
import Snuboard from "../../components/Service/Snuboard/Snuboard";
import Siksha from "../../components/Service/Siksha/Siksha";
import Main from "../../components/Service/Main/Main";
import ServiceScrollNavigator from "../../components/common/ScrollNavigator/ServiceScrollNavigator";

function Service() {
  return (
    <>
      <Main />
      <Snutt />
      <Siksha />
      <Snuboard />
      <ServiceScrollNavigator />
    </>
  );
}

export default Service;
