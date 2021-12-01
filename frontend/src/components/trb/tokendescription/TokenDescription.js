import React from "react";

import "./TokenDescription.scss";
import HeaderDesc from "components/shared/HeaderDesc/HeaderDesc";

const TokenDescription = () => {
  const content = [
    {
      title: "Utility",
      description:
        "TRB incentivizes data reporters to submit timely, accurate data. Oracle users can use TRB to incentivize reporters to update data more frequently.",
    },
    {
      title: "Governance",
      description:
        "The TRB token is also a key piece of Tellor’s governance. TRB holders can vote on data disputes, upgrades to the Tellor system, minting events like grants, and monetary policy through the Tellor treasury.",
    },
    {
      title: "Security",
      description:
        "Security of the Tellor system increases as the number of active members voting increases. As the price of the TRB token increases, so does the cost to attack the Tellor oracle. Staying active as a TRB holder is important for a well-functioning community. TRB holders are able to delegate their voting rights to a trusted party if needed.",
    },
    // {
    //   title: "Price History",
    //   description:
    //     "Tellor had no ICO or pre-mine. Tellor uses a dev share structure that sends a portion of the reporting rewards to a smart contract used for financing team activities. This structure supports long-term alignment between data reporters, Tellor’s core team and community members.",
    // },
  ];

  const url =
    "https://discord.com/channels/461602746336935936/468503081844342784";

  return (
    <div className="TokenDescription">
      <HeaderDesc
        title={content[0].title}
        description={content[0].description}
      />
      <div className="TokenDescription__action">
        <button
          type="default"
          size="large"
          className="page-button"
          onClick={() => window.open(url)}
        >
          become a data reporter
        </button>
      </div>
      <HeaderDesc
        title={content[1].title}
        description={content[1].description}
      />
      <HeaderDesc
        title={content[2].title}
        description={content[2].description}
      />
      {/* <HeaderDesc
        title={content[3].title}
        description={content[3].description}
      /> */}
    </div>
  );
};

export default TokenDescription;
