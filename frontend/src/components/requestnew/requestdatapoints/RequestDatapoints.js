import React, { useState, useEffect } from "react";

import "./RequestDatapoints.scss";
import Datapoint from "../../shared/Datapoint/Datapoint";
import { useSelector } from "react-redux";

const RequestDatapoints = () => {
  const [open, setOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [datapointsTotal, setDatapointsTotal] = useState(0);
  const [linkText, setLinkText] = useState("");
  const eventsFromRedux = useSelector((state) => state.graphEvents.eventsData);

  useEffect(() => {
    if (eventsFromRedux) {
      let eventsArray = [];
      eventsFromRedux.map((event) => {
        if (event) {
          eventsArray.push(event);
        }
      });
      setEvents(eventsArray);
      setLinkText(open ? "see less..." : `see all (${eventsArray.length})`);
      setDatapointsTotal(eventsArray.length);
    }
    return () => {
      setEvents([]);
      setLinkText("");
      setDatapointsTotal(0);
    };
  }, [eventsFromRedux, open]);

  //toggle data point visibility
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="RequestDatapoints">
      <div className="Datapoints">
        <p className="popular-points">Most recent datapoints:</p>
        {events?.map((data, i) => {
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
