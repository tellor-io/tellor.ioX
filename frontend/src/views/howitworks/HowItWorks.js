import React from "react";

import Title from "components/howitworks/title/Title";
import Information from "components/howitworks/information/Information";
import Videos from "components/howitworks/videos/Videos";
import WhiteButtonPanel from "components/shared/WhiteButtonPanel/WhiteButtonPanel";

import Discord from "assets/Discord2.svg";

const HowItWorks = () => {
  //Makes page load at top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div className="viewContainer">
      <Title />
      <Information />
      <Videos />
      <WhiteButtonPanel
        title="Want to dive deeper?"
        leftBtnText="read the documentation"
        rightBtnText="talk to the team"
        leftBtnLink="https://docs.tellor.io/tellor/whitepaper/tellor-oracle-overview"
        rightBtnLink="https://discord.com/channels/461602746336935936/695303398991462420"
        rightIcon={Discord}
      />
    </div>
  );
};

export default HowItWorks;
