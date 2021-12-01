import React from "react";

import Whatsnew from "components/home/whatsnew/Whatsnew";
import HomeDatapoints from "components/home/homedatapoints/HomeDatapoints";
import HomeCurrentReporters from "components/home/homecurrentreporters/HomeCurrentReporters";
import TforTelliot from "components/home/tfortelliot/TforTelliot";
import OnlyAsDecentral from "components/home/onlyasdecentral/OnlyAsDecentral";
import BountiesWrapper from "components/shared/Bounties/BountiesWrapper";

export default function Home() {
  //Makes page load at top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div className="viewContainer">
      <Whatsnew />
      <HomeDatapoints />
      <HomeCurrentReporters />
      <TforTelliot />
      <OnlyAsDecentral />
      <BountiesWrapper />
    </div>
  );
}
