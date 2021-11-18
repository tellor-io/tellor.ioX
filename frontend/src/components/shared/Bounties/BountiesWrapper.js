import React, { useState } from "react";
import Bounties from "./Bounties";
import "./BountiesWrapper.scss";
import { ReactComponent as Swoosh } from "assets/Swoosh.svg";
import PropTypes from "prop-types";

export default function BountiesWrapper(props) {
  const [toggle, setToggle] = useState(false);

  const { 
    hideHeader,
    darkBackground,
    hidePadding 
  } = props;

  //dynamic className
  const classType = darkBackground ? "BountiesWrapperDark" : "BountiesWrapper";
  const padding = hidePadding ? "no-padding" : "padding";

  return (
    <div className={`${classType}  ${padding}`}>
      {/* show or hide header */}
      {!hideHeader && (
        <div className={`${classType}__title`}>
          <h1>Earn TRB</h1>
          <Swoosh />
          <h1>, grab a bounty!</h1>
        </div>
      )}
      <Bounties darkBackground={darkBackground} />
      <div className={`${classType}__desc`}>
        <p>
          The Tellor Bounties program is a way to reward developers who help us
          build out Tellor. We have a dev fund that&apos;s for developing Tellor
          and we plan to use it!
        </p>
        <a onClick={() => setToggle(!toggle)}>read ground rules</a>
      </div>
      {/* collapsable area */}
      {toggle && (
        <div className={`${classType}__collapse`}>
          <h2>Tellor Bounties Ground Rules</h2>
          <p>Welcome Tellor Developers and Bounty Hunters!</p>
          <h3>How do I get started?</h3>
          <p>
            Look at the available bounties above, and see if anything tickles
            your fancy, (click the &quot;+&quot; icon to find out more). Then,
            click the "Claim this bounty" button, fill out the form, and
            we&apos;ll get notified. After that, just wait for us to reach out
            to you and the bounty is yours!
            <br />
            If you want to help someone else working on one not available, send
            me an email at:{" "}
            <span>
              <a href="mailto:nfett@tellor.io">nfett@tellor.io</a>
            </span>{" "}
            and I&apos;ll see if it&apos;s a fit.
            <br />
            If you&apos;re building something else that&apos;s open source and
            fits with our mission...tell me to add it and lets keep building
            this out.
          </p>
          <h3>What this is NOT.</h3>
          <p>
            This is not us paying teams to get this done. We&apos;re not selling
            off our dev share or hiring contractors. Instead, we want the
            community to become part of completing the network&apos;s
            development need.
            <br />
            The rewards should be seen as just bonuses for helping to build out
            Tellor, not nessecarily a salary or a fair market value for the
            work.
            <br />
            It&apos;s also not some anonymous thing. If you want the reward, you
            have to let me know you&apos;re working on it. Hell, let discord and
            the Tellor channel know you&apos;re on it. We want you to work on it
            alone, with people, and with the team.
          </p>
          <h3>Disclaimer!</h3>
          <p>
            This is crypto...no promises or guarantees in any way. Rewards are
            subject to change given price changes.
          </p>
        </div>
      )}
    </div>
  );
}

BountiesWrapper.propTypes = {
  hideHeader: PropTypes.bool,
  darkBackground: PropTypes.bool,
  hidePadding: PropTypes.bool
};
