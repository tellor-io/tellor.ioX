import React from 'react'
import {ReactComponent as Github} from 'assets/Github.svg';
import {ReactComponent as Twitter} from 'assets/Twitter.svg';
import './Tellorfeeds.scss'
import { useMediaQuery } from 'react-responsive';

export default function Tellorfeeds() {
    const isMobileHeader = useMediaQuery({query: '(max-width: 600px)'});

    const githubrepo = "tellor-io/TellorPlayground";
    const latestcommit = "Last commit 42min ago";
    const latesttweet = "Last tweet 2 days ago";

    return (
        <div className="Tellorfeeds">
            <div className="Tellorfeed Tellorfeed__github">
                <div className="Tellorfeed__icon">
                <a href={"http://github.com/"+githubrepo} target="_blank" rel="noopener noreferrer"><Github /></a>
                </div>
                {isMobileHeader?
                    <div className="Tellorfeed__txt">
                        <a href={"http://github.com/"+githubrepo} target="_blank" rel="noopener noreferrer" >{latestcommit}</a>
                    </div>
                  :          
                    <div className="Tellorfeed__txt">
                        <a href={"http://github.com/"+githubrepo} target="_blank" rel="noopener noreferrer" >{githubrepo}</a>
                        <p className="bold">brendaloya - 9 jun</p>
                        <p>Merge pull request #7 from tkernell/dev1</p>
                    </div>
                }
            </div>
            <div className="Tellorfeed Tellorfeed__twitter">
                <div className="Tellorfeed__icon">
                    <a href="http://twitter.com/wearetellor" target="_blank" rel="noopener noreferrer">
                        <Twitter />
                    </a>
                </div>
                {isMobileHeader?
                    <div className="Tellorfeed__txt">
                        <a href={"http://github.com/"+githubrepo} target="_blank" rel="noopener noreferrer" >{latesttweet}</a>
                    </div>
                  : 
                    <div className="Tellorfeed__txt">
                        <p><a href="http://twitter.com/wearetellor" target="_blank" rel="noopener noreferrer">@WeAreTellor</a>  - 6 sept</p>
                        <p>gm tellor community🌞, ...</p>
                    </div>
                    }
            </div>
        </div>
    )
}
