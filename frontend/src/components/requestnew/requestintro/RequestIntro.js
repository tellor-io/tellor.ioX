import React from "react";

import "./RequestIntro.scss";
import Github from "assets/Github.svg";
import { Link } from "react-router-dom";

const RequestIntro = () => {
  const url =
    "https://discord.com/channels/461602746336935936/695303398991462420";
  const url2 = "https://tellor-io.github.io/telliot-core/code/queries/";

  return (
    <div className="RequestIntro">
      <h1 className="page-header">Using oracle data</h1>
      <div className="RequestIntro__desc">
        <h1>We put data on blockchains. Any data. </h1>
        <p className="page-text">
          Smart contracts have their own unique data needs - these needs will
          only broaden as our industry grows. That is why we built Tellor to be
          able to answer any data request and put that data on-chain, on demand.{" "}
        </p>
        <h2>Common data queries </h2>
        <p className="page-text">
          Many blockchain projects use common data points for their smart
          contracts. These data queries are already built into Tellor’s oracle -
          all you have to do is integrate Tellor into your smart contracts.
        </p>
        <div className="RequestIntro__buttons">
          <button size="large" className="page-button">
            <Link to="/usetellor">use tellor</Link>
          </button>
          <a
            href="https://github.com/tellor-io/telliot-feed-examples/tree/main/src/telliot_feed_examples/feeds"
            target="_blank"
            rel="noopener noreferrer"
          >
            current data queries
          </a>
        </div>
        <h2>Create a new query</h2>
        <p className="page-text">
          New data queries are submitted using a standard format. Consistent
          data queries allow other oracle users to access the data if they need
          it and not create redundancy in the data reporting. To learn how to
          create a new query just use the format in our docs.
        </p>
        <div className="RequestIntro__buttons">
          <button
            size="large"
            className="page-button"
            onClick={() => window.open(url2)}
          >
            read the data specs
          </button>
        </div>
        <h2>Don’t see the data you need?</h2>
        <p className="page-text">
          Tellor’s oracle is flexible enough to add any data on-chain. If you’ve
          browsed the existing price feeds and query documentation but need
          something else, we’re here to help.
        </p>
      </div>
      <div className="RequestIntro__actions">
        <button
          size="large"
          className="page-button"
          onClick={() => window.open(url)}
        >
          talk to the team
        </button>
      </div>
    </div>
  );
};

export default RequestIntro;
