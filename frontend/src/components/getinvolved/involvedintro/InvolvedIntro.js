import React from "react";

import "./InvolvedIntro.scss";
import Github from "assets/Github.svg";
import Discord from "assets/Discord_white.svg";
import HeaderDesc from "components/shared/HeaderDesc/HeaderDesc";
import { Link } from "react-router-dom";

const InvolvedIntro = () => {
  //urls
  const joinDiscord =
    "https://discord.com/channels/461602746336935936/826118829322797116";
  const checkGithub = "https://github.com/tellor-io/";
  const readDocs = "https://docs.tellor.io/tellor/";
  const startStaking =
    "https://docs.tellor.io/tellor/whitepaper/tellor-oracle-overview/mining";
  const readBlog = "/blog";

  //headers/descriptions
  const developers = [
    "Developers",
    "Contribute to building the oracle, participate in community governance and help us make a better Tellor.",
  ];
  const projects = [
    "DeFi Projects",
    "Connect to Tellor’s oracle and supply your application with unstoppable data. Get started with a few lines of code.",
  ];
  const reporters = [
    "Data reporters",
    "Tellor’s oracle thrives on quality data. Earn rewards by supplying data points to smart contracts.",
  ];
  const holders = [
    "TRB holders",
    "Get involved in community decisions and shape the future Tellor. Acquire TRB and participate in Tellor governance.",
  ];
  const curiouis = [
    "Crypto-curious",
    "Learn more about oracles and the technologies behind blockchain infrastructure. Tellor is here to help with content and resources, even if you’re just getting started. ",
  ];

  return (
    <div className="InvolvedIntro">
      {/* intro */}
      <div className="InvolvedIntro__intro">
        <h1 className="page-header">Get involved</h1>
        <p className="page-text">
          Tellor is open-source and structured as a decentralized autonomous
          organization. We are building Tellor as a community, we want you to
          join!
        </p>

        {/* join discord */}
        <button
          size="large"
          className="page-button"
          onClick={() => window.open(joinDiscord)}
        >
          <img src={Discord} alt="join-disc" className="icon" />
          join us on Discord
        </button>
      </div>
      {/* body */}
      <div className="InvolvedIntro__body">
        {/* developers */}
        <HeaderDesc title={developers[0]} description={developers[1]} />
        <div className="InvolvedIntro__body__btncontainer">
          <button
            size="large"
            className="page-button"
            onClick={() => window.open(checkGithub)}
          >
            <img src={Github} alt="check-git" className="icon" />
            check out the Github
          </button>
        </div>

        {/* defi proejects */}
        <HeaderDesc title={projects[0]} description={projects[1]} />
        <div className="InvolvedIntro__body__btncontainer">
          <button
            size="large"
            className="page-button"
            onClick={() => window.open(readDocs)}
          >
            read the docs
          </button>
        </div>

        {/* data reporters */}
        <HeaderDesc title={reporters[0]} description={reporters[1]} />
        <div className="InvolvedIntro__body__btncontainer">
          <Link to="/becomereporter">
            <button size="large" className="page-button">
              become a reporter
            </button>
          </Link>
        </div>

        {/* trb holders */}
        <HeaderDesc title={holders[0]} description={holders[1]} />
        <div className="InvolvedIntro__body__btncontainer">
          <Link to="/trb">
            <button size="large" className="page-button">
              more about trb
            </button>
          </Link>
        </div>

        {/* crypto curious */}
        <HeaderDesc title={curiouis[0]} description={curiouis[1]} />
        <div className="InvolvedIntro__body__btncontainer">
          <Link to="/blog" className="button">
            <button size="large" className="page-button">
              read the blog
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InvolvedIntro;
