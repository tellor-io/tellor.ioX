import React from "react";
import "./Intro.scss";

const Intro = () => {
  return (
    <div className="Intro">
      <h1 className="page-header">Becoming a data reporter</h1>
      <div className="Intro__desc">
        <p className="page-text">
          Blockchain applications depend on real-world data provided by Tellor’s
          oracle to power their smart contracts. Not everyone has the technical
          expertise or time to be a data reporter, yet for many it can be a
          rewarding and fulfilling challenge.
        </p>
      </div>
    </div>
  );
};

export default Intro;
