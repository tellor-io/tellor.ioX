import React from "react";
import { useMediaQuery } from "react-responsive";

import "./Title.scss";

const Title = () => {
  const breakTitle = useMediaQuery({ query: "(max-width: 700px)" });

  return (
    <div className="Title">
      <h1 className="page-header">
        How tellor’s{" "}
        <span className="highlighted">
          {breakTitle ? "un-stoppable" : "unstoppable"} oracle
        </span>{" "}
        works
      </h1>
      <div className="Title__video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/cmrWrFtL0e8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Title;
