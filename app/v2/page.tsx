import About from "../../components/deprecated/Home/About/About";
import Billboard from "../../components/deprecated/Home/Billboard/Billboard";
import WhoAreWe from "../../components/deprecated/Home/WhoAreWe/WhoAreWe";
import Services from "../../components/deprecated/Home/ServiceSummary/ServicesSummary";
import Role from "../../components/deprecated/Home/Role/Role";
import Activity from "../../components/deprecated/Home/Activity/Activity";
import WhatWeDo from "../../components/deprecated/Home/WhatWeDo/WhatWeDo";
import Calendar from "../../components/deprecated/Home/Calendar/Calendar";
import QnA from "../../components/deprecated/Home/QnA/QnA";
import Ending from "../../components/common/Ending/Ending";
import Cover from "../../components/deprecated/Cover/Cover";

function Home() {
  return (
    <>
      <Cover />
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
