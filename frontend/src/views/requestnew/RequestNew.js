import React from "react";

import RequestIntro from "components/requestnew/requestintro/RequestIntro";

const RequestNew = () => {
  //Makes page load at top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div className="viewContainer">
      <RequestIntro />
    </div>
  );
};

export default RequestNew;
