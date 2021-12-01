import React from "react";
import "./TforTelliot.scss";
import { Link } from "react-router-dom";
import solo from "../../../assets/Telliot_solo.png";
import { ReactComponent as TelliotIcon } from "assets/telliot.svg";

import { Button } from "antd";

export default function TforTelliot() {
  const downloadUrl = "https://tellor-io.github.io/telliot-core/";
  const docUrl = "https://tellor-io.github.io/pytelliot/";

  return (
    <div className="TforTelliot">
      <div className="TforTelliot__illustration">
        <img src={solo} alt="Telliot solo" />
      </div>
      <div className="TforTelliot__txt__andcta">
        <h2>T is for Telliot</h2>
        <p>
          Telliot is the software for data reporters to interact with the Tellor
          oracle. You can download the latest version to your computer and get
          started in just a few minutes.
        </p>
        <div className="TforTelliot__cta">
          <Button
            type="large"
            className="bigbutton"
            onClick={() => window.open(downloadUrl)}
          >
            <TelliotIcon />
            get started
          </Button>
          <Link to="/becomereporter">learn more</Link>
        </div>
      </div>
    </div>
  );
}
