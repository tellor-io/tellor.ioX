import React from "react";

import UseInProjects from "components/usetellor/useinprojects/UseInProjects";
import SampleUsing from "components/usetellor/sampleusing/SampleUsing";
import ForSmartContracts from "components/usetellor/forsmartcontracts/ForSmartContracts";
import WhiteButtonPanel from "components/shared/WhiteButtonPanel/WhiteButtonPanel";

import Discord from "assets/Discord2.svg";

const UseTellor = () => {
  //Makes page load at top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div className="viewContainer">
      <UseInProjects />
      <ForSmartContracts />
      <SampleUsing />
      <WhiteButtonPanel
        title="Stuck implementing Tellor?"
        leftBtnText="ask the community *"
        rightBtnText="talk to the team"
        leftBtnLink="https://discord.com/channels/461602746336935936/461602746336935938"
        rightBtnLink="https://discord.com/channels/461602746336935936/695303398991462420"
        rightIcon={Discord}
      />
    </div>
  );
};

export default UseTellor;
