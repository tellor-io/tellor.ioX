import React from "react";

import InvolvedIntro from "components/getinvolved/involvedintro/InvolvedIntro";
import InvolvedBounty from "components/getinvolved/involvedbounty/InvolvedBounty";

const GetInvolved = () => {
  //Makes page load at top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div className="viewContainer">
      <InvolvedIntro />
      <InvolvedBounty />
    </div>
  );
};

export default GetInvolved;
