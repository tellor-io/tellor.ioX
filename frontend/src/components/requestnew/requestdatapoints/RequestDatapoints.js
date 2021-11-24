import React, { useState, useEffect } from "react";

import "./RequestDatapoints.scss";
import Datapoint from "../../shared/Datapoint/Datapoint";
import { useSelector } from "react-redux";

const RequestDatapoints = () => {
  const [open, setOpen] = useState(false);
  const [datapointsTotal, setDatapointsTotal] = useState(0);
  const [linkText, setLinkText] = useState("");
  const eventsFromRedux = useSelector((state) => state.graphEvents.eventsData);

  useEffect(() => {
    if (eventsFromRedux) {
      setLinkText(open ? "see less..." : `see all (${eventsFromRedux.length})`);
      setDatapointsTotal(eventsFromRedux.length);
    }
  }, [eventsFromRedux, open]);

  //toggle data point visibility
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="RequestDatapoints">
      <div className="Datapoints">
        <p className="popular-points">Most popular datapoints:</p>
        {eventsFromRedux &&
          eventsFromRedux.map((data, i) => {
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
