import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import {ReactComponent as Swoosh} from 'assets/Swoosh.svg';
import {ReactComponent as Refresher} from 'assets/refresh.svg';

const Footer = () => {
  const [refresherClass, setRefresherClass] = useState();
  const [nmbr, setNmbr] = useState(0);

  // //// DUMMY ////
  const tidbits = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit massa nec tempus egestas. Nunc nec ipsum porta massa pretium fermentum ut ut ipsum.",
    "Suspendisse mauris ante, pulvinar eget justo tempor, faucibus varius libero. In diam ligula, suscipit maximus blandit eu, molestie at est. Nunc sit amet scelerisque urna.",
    "Vitae interdum ante. Praesent dapibus, eros in mattis mattis, magna diam vehicula ex, vel pharetra leo metus a mi. Curabitur eget blandit nibh, ac ornare dolor.",
    "Aliquam ornare libero at fringilla sagittis. Nulla ultricies orci eu ligula blandit auctor. Etiam sed nunc sed mi auctor convallis quis a erat.",
  ];


  const getNew = () => {
    if(tidbits){
      const newnbmr = Math.floor(Math.random() * (tidbits.length));
      if (newnbmr === nmbr) {
        if(newnbmr > tidbits.length){
          debugger;
          setNmbr(newnbmr-1)
        } else {
          setNmbr(newnbmr+1)
        }
      } else {
        setNmbr(newnbmr)
      }
    }
    setRefresherClass("doanim");
    let animcleaner = setTimeout(() => setRefresherClass(""), 250);
    return () => {
      clearTimeout(animcleaner);
    };
  }




  return (
    <div className="Footer">
      <div className="tidbits">
        <div className="tidbits__logo" onClick={() => getNew()}>
          <p>tellor<br /><span className="green">tidbit<br />{nmbr+1}</span></p>
          <Refresher className={refresherClass}/> 
        </div>
        <div className="tidbits__txt">
          <p>{tidbits[nmbr]}</p>
        </div>
      </div>
      <p>footer</p>
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
    </div>
  );
};

export default Footer;
