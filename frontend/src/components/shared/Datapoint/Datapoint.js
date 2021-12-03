import React from "react";
import "./Datapoint.scss";
import { truncateAddr } from "utils/helpers";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { Link } from "react-router-dom";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

export default function Datapoint({ data }) {
  const timeToUse = data ? data._time : "1638490975";
  //Globals
  const time = timeAgo.format(new Date(timeToUse * 1000), "round");

  return (
    <>
      {data ? (
        <div className="Datapoint">
          <div className="Datapoint__left">
            <p>
              {time} • by{" "}
              {/* <a
                href={"https://etherscan.io/address/" + data._reporter}
                target="_blank"
                rel="noopener noreferrer"
              >
                {truncateAddr(data._reporter)}
              </a> */}
              <Link to={"account/address/" + data._reporter}>
                {truncateAddr(data._reporter)}
              </Link>
            </p>
            <h4>{data.reportedValueName}</h4>
          </div>
          <div className="Datapoint__right">
            <h2>{data.reportedValue}</h2>
          </div>
        </div>
      ) : (
        <div className="Datapoint">
          <p>Loading data</p>
        </div>
      )}
    </>
  );
}
