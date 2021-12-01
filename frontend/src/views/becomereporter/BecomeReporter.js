import React from "react";

import Intro from "components/becomereporter/intro/Intro";
import HowItWorks from "components/becomereporter/howitworks/HowItWorks";
import GettingStarted from "components/becomereporter/gettingstarted/GettingStarted";
import WhiteButtonPanel from "components/shared/WhiteButtonPanel/WhiteButtonPanel";

import Discord from "assets/Discord2.svg";

const BecomeReporter = () => {
  //Makes page load at top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div className="viewContainer">
      <Intro />
      <HowItWorks />
      {/* <GettingStarted /> */}
      <WhiteButtonPanel
        title="Stuck becoming a data reporter?"
        leftBtnText="ask the community *"
        rightBtnText="talk to the team"
        leftBtnLink="https://discord.com/channels/461602746336935936/461602746336935938"
        rightBtnLink="https://discord.com/channels/461602746336935936/695303398991462420"
        rightIcon={Discord}
      />
    </div>
  );
};

export default BecomeReporter;
