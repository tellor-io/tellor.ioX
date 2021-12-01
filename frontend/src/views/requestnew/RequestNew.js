import React from "react";

import RequestIntro from "components/requestnew/requestintro/RequestIntro";
import RequestDatapoints from "components/requestnew/requestdatapoints/RequestDatapoints";

const RequestNew = () => {
  //Makes page load at top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div className="viewContainer">
      <RequestIntro />
      <RequestDatapoints />
    </div>
  );
};

export default RequestNew;
