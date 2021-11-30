import React from "react";
import "./Datapoint.scss";
import { truncateAddr } from "utils/helpers";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { Link } from 'react-router-dom';

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

export default function Datapoint({ data }) {
  const timeToUse = data._time ? data._time : data.timestamp;
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
              <Link to={"account/address/"+data._reporter}>{truncateAddr(data._reporter)}</Link>
            </p>
            <h4>
              {data.realQueryData.type === "LegacyRequest"
                ? `Legacy ${data.realQueryData.legacy_name}`
                : data.realQueryData.name}
            </h4>
          </div>
          <div className="Datapoint__right">
            <h2>
              {(data.realQueryData.name &&
                data.realQueryData.name.includes("USD")) ||
              (data.realQueryData.legacy_name &&
                data.realQueryData.legacy_name.includes("USD"))
                ? `${new Intl.NumberFormat("en-EN", {
                    style: "currency",
                    currency: "USD",
                  }).format(data.realValue / 1000000)}`
                : data.realValue}
            </h2>
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
