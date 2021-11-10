import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { ReactComponent as Swoosh } from "assets/Swoosh.svg";
import { ReactComponent as Refresher } from "assets/refresh.svg";
import { ReactComponent as Github } from "../../../assets/Github.svg";
import { ReactComponent as Twitter } from "../../../assets/Twitter.svg";
import { ReactComponent as Discord } from "../../../assets/discord_icon_blue.svg";
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
  const [refresherClass, setRefresherClass] = useState();
  const [nmbr, setNmbr] = useState(0);
  const isMobileHeader = useMediaQuery({query: '(max-width: 840px)'});

  // //// DUMMY ////
  const tidbits = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit massa nec tempus egestas. Nunc nec ipsum porta massa pretium fermentum ut ut ipsum.",
    "Suspendisse mauris ante, pulvinar eget justo tempor, faucibus varius libero. In diam ligula, suscipit maximus blandit eu, molestie at est. Nunc sit amet scelerisque urna.",
    "Vitae interdum ante. Praesent dapibus, eros in mattis mattis, magna diam vehicula ex, vel pharetra leo metus a mi. Curabitur eget blandit nibh, ac ornare dolor.",
    "Aliquam ornare libero at fringilla sagittis. Nulla ultricies orci eu ligula blandit auctor. Etiam sed nunc sed mi auctor convallis quis a erat.",
  ];

  const getNew = () => {
    if (tidbits) {
      const newnbmr = Math.floor(Math.random() * tidbits.length);
      if (newnbmr === nmbr) {
        if (newnbmr > tidbits.length) {
          debugger;
          setNmbr(newnbmr - 1);
        } else {
          setNmbr(newnbmr + 1);
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
      {isMobileHeader?
      <p>mobile footer</p>
      :
      <>
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
          <div className="BrandLink">
            <Link to="/">
              <div>
                <span className="logo">tellor</span>
              </div>
              <div>
                <span className="baseline">
                  unstoppable
                  <br />
                  oracle
                </span>
              </div>
            </Link>
          </div>
          <p>&copy; 2021 tellor.io</p>
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

      {/* <div>
        <Link to="/">
          <Swoosh />
        </Link>
        <Link to="/">
          <TellorLogoWhite />
        </Link>
        <p>&copy; 2021 Tellor</p>
      </div>
      <div>
        <p>Links</p>
        <a href="http://tellor.io" alt="http://docs.tellor.io" target="_blank" rel="noopener noreferrer">tellor.io</a>
        <a href="http://docs.tellor.io" alt="http://docs.tellor.io" target="_blank" rel="noopener noreferrer">docs.tellor.io</a>
      </div> */}
    </>
    }
    </div>
  );
};

export default Footer;
