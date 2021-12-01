import React from "react";
import "./HowItWorks.scss";
import Telliot from "assets/Telliot_icon_v1.png";

const HowItWorks = () => {
  const docsUrl = "https://tellor-io.github.io/telliot-feed-examples/";
  const downloadUrl = "https://tellor-io.github.io/telliot-core/ ";

  return (
    <div className="HowItWorks">
      <h2 className="page-header-small">How data reporting works</h2>
      <p className="page-text">
        When data is requested, data reporters compete to record that data
        on-chain. They compete for time-based rewards, and they receive tips
        from users who need certain data points updated more frequently.
      </p>
      <button
        size="large"
        className="page-button"
        onClick={() => window.open(docsUrl)}
      >
        check out the docs here
      </button>
      <p className="page-text">
        Follow along the video below to practice running PyTelliot on the
        rinkeby test network.
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/-B0paj4YIA0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="HowItWorks__actions">
        <button
          size="large"
          className="page-button"
          onClick={() => window.open(downloadUrl)}
        >
          <img src={Telliot} alt="telliot" />
          download Telliot
        </button>
      </div>
    </div>
  );
};

export default HowItWorks;
