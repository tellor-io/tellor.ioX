import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import "./Information.scss";
import howitworks from "assets/howitworks.png";
import howitworks_mobile from "assets/howitworks_mobile.png";
import reporters from "assets/Reporters.png";
import tipping from "assets/Tipping.png";
import disputes from "assets/Disputes.png";
import trb from "assets/TRB.png";
import telliot from "assets/Telliot.png";

const Information = () => {
  const isSmallestSize = useMediaQuery({ query: "(max-width: 669px)" });

  return (
    <div className="Information">
      {/*  description */}
      <div className="Information__intro">
        <p className="page-text-black">
          Oracles are a key part of blockchain infrastructure that bring data
          from the outside world and make it available for on-chain
          applications.
        </p>
        <p className="page-text-black">
          Oracles supply high-value data that power smart contracts — the type
          of data that must be incorruptible, censorship resistant and verified
          by consensus.
        </p>
        <p className="page-text-black">
          Tellor’s oracle supplies data that can be requested, validated and put
          on-chain transparently with data reporters competing for appropriate
          incentives.
        </p>
        <p className="page-text-black">
          Tellor is a permissionless community of data reporters, token holders,
          and project builders that use secure oracle data for their smart
          contracts.
        </p>
      </div>

      {/*  graphic */}
      {isSmallestSize ? (
        <img src={howitworks_mobile} alt="how it works" className="graphic" />
      ) : (
        <img src={howitworks} alt="how it works" className="graphic" />
      )}

      {/*  Data reporters  */}
      <div className="Information__option">
        <img src={reporters} />
        <div className="content">
          <h2 className="page-header-small-black">Data reporters</h2>
          <p className="page-text-black">
            Tellor’s oracle is a network of staked data reporters. Becoming a
            reporter requires no verification process. Anyone anywhere in the
            world can be a reporter using open source software.
          </p>
          <p className="page-text-black">
            With some knowledge of blockchain and smart contracts, interested
            data reporters holding more than 100 TRB can start earning rewards
            for providing accurate data.
          </p>
          <p className="page-text-black">
            When oracle users request the value of an off-chain data point (e.g.
            BTC/USD), data reporters compete to add this value to an on-chain
            data-bank, accessible by all Ethereum smart contracts
          </p>
          <div className="links">
            <a
              href="https://tellor-io.github.io/telliot-core/"
              className="page-text-black"
              target="_blank"
            >
              read more on reporters
            </a>
            <a
              href="/becomereporter"
              className="page-text-black"
              target="_blank"
            >
              become a reporter
            </a>
            <a href="/live" className="page-text-black">
              see report events
            </a>
          </div>
        </div>
      </div>

      {/*  Tipping  */}
      <div className="Information__option">
        <img src={tipping} />
        <div className="content">
          <h2 className="page-header-small-black">Tipping</h2>
          <p className="page-text-black">
            Oracle users can “tip” data reporters to incentivise a faster data
            update. Data reporters can choose to submit for any values they
            want, but in practice will most likely submit the values with the
            highest tips. Tipping gives the Tellor oracle a liveness guarantee
            with no need for off-chain agreements. Tellor’s oracle can therefore
            be as fast as needed, users just need to pay for tips to cover
            expenses of the data reporters.
          </p>
          <div className="links">
            {/* <a
              href="https://docs.tellor.io/tellor/token-holders/tip"
              className="page-text-black"
              target="_blank"
            >
              read more on tipping
            </a> */}
            <a href="/live" className="page-text-black">
              view pricelist
            </a>
          </div>
        </div>
      </div>

      {/*  Disputes  */}
      <div className="Information__option">
        <img src={disputes} />
        <div className="content">
          <h2 className="page-header-small-black">Disputes</h2>
          <p className="page-text-black">
            To maintain the integrity and accuracy of the oracle, Tellor data
            values can always be disputed. If the disputed data is voted by the
            community to be bad, it is removed from the database and the
            corresponding data reporter’s stake of TRB is slashed.
          </p>
          <div className="links">
            {/* <a
              href="https://docs.tellor.io/tellor/whitepaper/tellor-oracle-overview/disputes"
              className="page-text-black"
              target="_blank"
            >
              read more on disputes
            </a> */}
            <a href="/live" className="page-text-black">
              see all disputes
            </a>
          </div>
        </div>
      </div>

      {/*  TRB token  */}
      <div className="Information__option">
        <img src={trb} />
        <div className="content">
          <h2 className="page-header-small-black">TRB token</h2>
          <p className="page-text-black">
            Tributes (TRB) are the native token for Tellor. Data reporters earn
            TRB for supplying good data to oracle users. TRB tokens are also
            used for voting on community initiatives and improvements to the
            Tellor project. TRB holders can stake, or lock up for a period of
            time, to earn rewards for voting on governance proposals.
          </p>
          <p className="page-text-black">
            Tellor’s TRB token is broadly used for:
          </p>
          <ul className="page-text-black">
            <li>
              Mining rewards - incentive for data reporters to provide data to
              the oracle
            </li>
            <li>
              Time-based rewards - rewards for data reporting events grow as
              time passes, and reset to zero after each reporting event is
              completed
            </li>
            <li>
              Tipping - incentive for data reporters to provide data more
              quickly
            </li>
            <li>Dev share - share of TRB tokens going to Tellor’s core team</li>
            <li>
              Grants - community members can vote to mint TRB to promising new
              projects
            </li>
          </ul>
          <div className="links">
            <a href="/trb" className="page-text-black">
              read more on TRB
            </a>
            <a href="/trb/#bounties" className="page-text-black">
              earn TRB with bounties
            </a>
          </div>
        </div>
      </div>

      {/*  Telliot  */}
      <div className="Information__option">
        <img src={telliot} />
        <div className="content">
          <h2 className="page-header-small-black">Telliot</h2>
          <p className="page-text-black">
            Telliot is the software for data reporters to interact with the
            Tellor oracle. You can download the latest version to your computer
            and get started in just a few minutes.
          </p>
          <div className="links">
            <a
              href="https://tellor-io.github.io/telliot-core/"
              className="page-text-black"
              target="_blank"
            >
              read more on Telliot
            </a>
            <a
              href="https://github.com/tellor-io/telliot-feed-examples"
              className="page-text-black"
              target="_blank"
            >
              download Telliot v0.0.6
            </a>
            {/* <a
              href="https://github.com/tellor-io/telliot"
              className="page-text-black"
              target="_blank"
            >
              see Telliot on Github
            </a> */}
          </div>
        </div>
      </div>

      <div className="Information__button">
        <Link to="/live">
          <button className="page-button-black">
            see the network in action
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Information;
