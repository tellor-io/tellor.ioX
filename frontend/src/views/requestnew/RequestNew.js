import React from "react";

import RequestIntro from "components/requestnew/requestintro/RequestIntro";
import RequestDatapoints from "components/requestnew/requestdatapoints/RequestDatapoints";

const RequestNew = ({ events }) => {
  return (
    <div className="viewContainer">
      <RequestIntro />
      <RequestDatapoints events={events} />
    </div>
  );
};

export default RequestNew;
