import React from "react";
import { Link } from "react-router-dom";
import "./OnlyAsDecentral.scss";

export default function OnlyAsDecentral() {
  // //// DUMMY ////
  const items = [
    {
      title: "Governance",
      body: "Tellor’s decentralized structure puts the community in control. Well-designed incentives align users, reporters and holders while discouraging bad actors. Governance is used to settle data disputes, vote on Tellor upgrades and add supported data types.",
      link: "https://docs.tellor.io/tellor/whitepaper/tellor-oracle-overview/governance",
    },
    {
      title: "Oracle",
      body: "Data reporters bring valuable information on-chain for a wide range of DeFi applications. A decentralized network of data reporters makes Tellor’s oracle censorship-resistant and unstoppable.",
      link: "https://docs.tellor.io/tellor/whitepaper/tellor-oracle-overview/the-oracle",
    },
    {
      title: "Treasury",
      body: "Stake your TRB and vote on the future monetary policy of Tellor, earn rewards in the process. This new type of open market community will decide the circulating supply of TRB and future rates of return for staking TRB.",
      link: "https://docs.tellor.io/tellor/whitepaper/tellor-oracle-overview/monetary-policy",
    },
  ];

  return (
    <div className="OnlyAsDecentral">
      <div className="OnlyAsDecentral__quote">
        <h1>“You’re only as decentralized as your data”</h1>
        <p>
          <Link to="/abouttellor">Brenda Loya</Link> - CEO of Tellor
        </p>
      </div>
      <div className="OnlyAsDecentral__items">
        {items.map((item, i) => {
          return (
            <div key={i}>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                learn more about {item.title}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
