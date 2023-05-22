import About from "../../components/Home/About/About";
import Billboard from "../../components/Home/Billboard/Billboard";
import WhoAreWe from "../../components/Home/WhoAreWe/WhoAreWe";
import Services from "../../components/Home/ServiceSummary/ServicesSummary";
import Role from "../../components/Home/Role/Role";
import Activity from "../../components/Home/Activity/Activity";
import WhatWeDo from "../../components/Home/WhatWeDo/WhatWeDo";
import Calendar from "../../components/Home/Calendar/Calendar";
import QnA from "../../components/Home/QnA/QnA";
import Ending from "../../components/common/Ending/Ending";

function Home() {
  return (
    <>
      <Billboard />
      <About />
      <Services />
      <WhoAreWe />
      <Role />
      <Activity />
      <WhatWeDo />
      <Calendar />
      <QnA />
      <Ending type={"side"} />
    </>
  );
}

export default Home;
