import React, { useState, useEffect } from "react";

import "./RequestDatapoints.scss";
import Datapoint from "../../shared/Datapoint/Datapoint";

const RequestDatapoints = ({ events }) => {
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
      {/* only show dropdown if more than 3 datapoints */}
      {datapointsTotal > 3 && (
        <a onClick={() => handleClick()} target="_blank" className="see-all">
          {linkText}
        </a>
      )}
    </div>
  );
};

export default RequestDatapoints;
