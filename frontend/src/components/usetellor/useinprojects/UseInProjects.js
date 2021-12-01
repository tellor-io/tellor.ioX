import React from "react";
import "./UseInProjects.scss";

const UseInProjects = () => {
  return (
    <div className="UseInProjects">
      <div className="UseInProjects__head">
        <h1 className="page-header">Use tellor in your project</h1>
      </div>
      <div className="UseInProjects__desc">
        <p className="page-text">
          Tellor helps a range of blockchain projects and applications put real
          world data in their smart contracts.
        </p>
        <p className="page-text">
          A few examples of projects that need an oracle to access secure,
          trustless data include stablecoins, insurance, options and derivatives
          and lending applications.
        </p>
      </div>
    </div>
  );
};

export default UseInProjects;
