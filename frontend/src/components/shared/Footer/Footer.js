import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { ReactComponent as Swoosh } from "assets/Swoosh.svg";
import { ReactComponent as Refresher } from "assets/refresh.svg";
import { ReactComponent as Github } from "../../../assets/Github.svg";
import { ReactComponent as Twitter } from "../../../assets/Twitter.svg";
import { ReactComponent as Discord } from "../../../assets/discord_icon_blue.svg";
import { useMediaQuery } from 'react-responsive';
import { useSelector } from "react-redux";

const Footer = () => {
  const [refresherClass, setRefresherClass] = useState();
  const [nmbr, setNmbr] = useState(0);
  const isMobileHeader = useMediaQuery({query: '(max-width: 840px)'});

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
                  <span>
                    unstoppable
                  </span>
                  <span>
                    oracle
                  </span>
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
                href="https://discord.com/channels/461602746336935936/826118829322797116"
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
            <h2>suscipit semid</h2>
            <a href="/">lorem</a>
            <a href="/">ipsum dolor</a>
            <a href="/">sit amet</a>
            <a href="/">varius</a>
            <a href="/">posuere turpis</a>
          </div>
          <div className="Column__Small">
            <h2>pharetra</h2>
            <a href="/">praesent imperdient</a>
            <a href="/">lectus</a>
            <a href="/">placerat sit amet</a>
            <a href="/">ultricies lectus</a>
          </div>
          <div className="Column__Small">
            <h2>aliquam erat</h2>
            <a href="/">volutpat</a>
            <a href="/">pellentesque</a>
            <a href="/">ullamcorper</a>
            <a href="/">tincidunt quam </a>
            <a href="/">vellectus</a>
          </div>
        </div>
      </div>
    {/* </>
    } */}
    </div>
  );
};

export default Footer;
