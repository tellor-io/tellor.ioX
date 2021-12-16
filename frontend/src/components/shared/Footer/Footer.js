import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { ReactComponent as Swoosh } from "assets/Swoosh.svg";
import { ReactComponent as Refresher } from "assets/refresh.svg";
import { ReactComponent as Github } from "../../../assets/Github.svg";
import { ReactComponent as Twitter } from "../../../assets/Twitter.svg";
import { ReactComponent as Discord } from "../../../assets/discord_icon_blue.svg";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";

const Footer = () => {
  const [refresherClass, setRefresherClass] = useState();
  const [nmbr, setNmbr] = useState(0);
  const isMobileHeader = useMediaQuery({ query: "(max-width: 840px)" });

  const tidbits = [];
  //Redux
  const tidbitsActual = useSelector((state) => state.strapiData.tidbits);
  tidbitsActual.forEach((tidbit) => {
    tidbits.push(tidbit.tidbit);
  });

  const getNew = () => {
    if (tidbits) {
      const newnbmr = Math.floor(Math.random() * tidbits.length);
      if (newnbmr === nmbr) {
        if (newnbmr > tidbits.length) {
          debugger;
          setNmbr(newnbmr - 1);
        } else {
          if (newnbmr < tidbits.length - 1) {
            setNmbr(newnbmr + 1);
          } else {
            setNmbr(newnbmr);
          }
        }
      } else {
        setNmbr(newnbmr);
      }
    }
    setRefresherClass("doanim");
    let animcleaner = setTimeout(() => setRefresherClass(""), 250);
    return () => {
      clearTimeout(animcleaner);
    };
  };

  const handleAnchor = () => {
    if (location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY - 100);
    }
  };

  return (
    <div className="Footer">
      {/* {isMobileHeader?
      <p>mobile footer</p>
      :
      <> */}
      <div className="tidbits">
        <div className="tidbits__logo" onClick={() => getNew()}>
          <p>
            tellor
            <br />
            <span className="green">
              tidbit
              <br />
              {nmbr + 1}
            </span>
          </p>
          <Refresher className={refresherClass} />
        </div>
        <div className="tidbits__txt">
          <p>{tidbits[nmbr]}</p>
        </div>
      </div>
      <div className="Footer__Bottom">
        <div className="Column__Big">
          <div className="BrandLink_and_Socials__Container">
            <div className="BrandLink__Container">
              <div className="BrandLink">
                <Link to="/">
                  <div>
                    <span className="logo">tellor</span>
                  </div>
                  <div className="baseline">
                    <span>unstoppable</span>
                    <span>oracle</span>
                  </div>
                </Link>
              </div>
              <p>&copy; 2021 tellor.io</p>
            </div>
            <div className="Social__Container">
              <a
                href="https://github.com/tellor-io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
              <a
                href="https://twitter.com/WeAreTellor/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
              <a
                href="https://discord.com/invite/n7drGjh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Discord />
              </a>
            </div>
          </div>
        </div>
        <div className="Columns__Small">
          <div className="Column__Small">
            <h2>Get Started</h2>
            <a href="/usetellor">use tellor</a>
            <a href="/howitworks">how the oracle works</a>
            <a href="/usingoracle">find data points</a>
            {/* <a href="/live">live on tellorscan</a> */}
          </div>
          <div className="Column__Small">
            <h2>Get Involved</h2>
            <a href="/becomereporter">become a data reporter</a>
            <a href="/getinvolved">join the community</a>
            <a href="/trb">TRB token</a>
            {/* <a href="/live">connect &amp; vote</a> */}
          </div>
          <div className="Column__Small">
            <h2>About Tellor</h2>
            <a href="/abouttellor">our story</a>
            <a href="/abouttellor/#jobs" onClick={handleAnchor}>
              careers
            </a>
            <a href="/blog">blog</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
