import React, { useState, useEffect } from "react";

import "./RequestDatapoints.scss";
import Datapoint from "../../shared/Datapoint/Datapoint";

const RequestDatapoints = ({ events }) => {
  console.log(events);
  // //// DUMMY ////
  const datapoints = [
    {
      timestamp: "1633959919",
      reporter: "0x1D39955c9662678535d68a966862A06956ea5644",
      symbols: "ETH/USD",
      value: "3957.33",
    },
    {
      timestamp: "1633959564",
      reporter: "0x1D39955c9662678535d68a966862A06956ea5644",
      symbols: "BTC/USD",
      value: "43761.1",
    },
    {
      timestamp: "1633959554",
      reporter: "0x1D39955c9662678535d68a966862A06956ea5644",
      symbols: "BNB/USD",
      value: "355.15",
    },
    {
      timestamp: "1633959919",
      reporter: "0x1D39955c9662678535d68a966862A06956ea5644",
      symbols: "ETH/USD",
      value: "3957.33",
    },
    {
      timestamp: "1633959564",
      reporter: "0x1D39955c9662678535d68a966862A06956ea5644",
      symbols: "BTC/USD",
      value: "43761.1",
    },
    {
      timestamp: "1633959554",
      reporter: "0x1D39955c9662678535d68a966862A06956ea5644",
      symbols: "BNB/USD",
      value: "355.15",
    },
    {
      timestamp: "1633959919",
      reporter: "0x1D39955c9662678535d68a966862A06956ea5644",
      symbols: "ETH/USD",
      value: "3957.33",
    },
    {
      timestamp: "1633959564",
      reporter: "0x1D39955c9662678535d68a966862A06956ea5644",
      symbols: "BTC/USD",
      value: "43761.1",
    },
    {
      timestamp: "1633959554",
      reporter: "0x1D39955c9662678535d68a966862A06956ea5644",
      symbols: "BNB/USD",
      value: "355.15",
    },
  ];

  const [open, setOpen] = useState(false);
  const [datapointsTotal, setDatapointsTotal] = useState(0);
  const [linkText, setLinkText] = useState("");

  useEffect(() => {
    if (events) {
      setLinkText(open ? "see less..." : `see all (${events.length})`);
      setDatapointsTotal(events.length);
    }
  }, [events, open]);

  //toggle data point visibility
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="RequestDatapoints">
      <div className="Datapoints">
        <p className="popular-points">Most popular datapoints:</p>
        {events &&
          events.map((data, i) => {
            if (open) {
              //only show all datapoints if open
              return <Datapoint key={i} data={data} />;
            } else if (i < 3 && !open) {
              return <Datapoint key={i} data={data} />;
            }
          })}
      </div>
      {/* only show dropdownf if more than 3 datapoints */}
      {datapointsTotal > 3 && (
        <a onClick={() => handleClick()} target="_blank" className="see-all">
          {linkText}
        </a>
      )}
    </div>
  );
};

export default RequestDatapoints;
