import React from "react";

import AboutIntro from "components/abouttellor/aboutintro/AboutIntro";
import Jobs from "components/abouttellor/jobs/Jobs";

const AboutTellor = () => {
  return (
    <div className="viewContainer">
      <AboutIntro />
      <Jobs />
    </div>
  );
};

export default AboutTellor;
