import React from "react";

import TokenIntro from "components/trb/tokenintro/TokenIntro";
import TokenDescription from "components/trb/tokendescription/TokenDescription";
import GetTRB from "components/trb/gettrb/GetTRB";
import BountiesWrapper from "components/shared/Bounties/BountiesWrapper";

const TRB = () => {
  return (
    <div className="viewContainer">
      <TokenIntro />
      <TokenDescription />
      <GetTRB />
      <BountiesWrapper />
    </div>
  );
};

export default TRB;
