import React from "react";

import LiveHeader from "components/live/liveheader/LiveHeader";
import VoteItems from "components/live/voteitems/VoteItems";
import LiveTables from "components/live/livetables/LiveTables";

const HowItWorks = () => {
  //Makes page load at top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div className="viewContainer">
      <LiveHeader />
      <VoteItems />
      {/* <LiveTables /> */}
    </div>
  );
};

export default HowItWorks;
