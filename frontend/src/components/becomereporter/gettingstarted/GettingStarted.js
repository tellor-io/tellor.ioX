import React from 'react';

import './GettingStarted.scss';
import videoplaceholder from 'assets/video_placeholder.png'; 
import Telliot from 'assets/Telliot_icon_v1.png';


const GettingStarted = () => {

    const downloadUrl = 'https://github.com/tellor-io/pytelliot ';
    const docUrl = 'https://tellor-io.github.io/pytelliot/';

    return (
        <div className="GettingStarted">
            <div className="GettingStarted__intro">
                <h2 className="page-header-small">Steps to get started</h2>
                <ol className="page-text">
                    <li>Advanced knowledge of blockchain smart contracts</li>
                    <li>GPU running something...something</li>
                    <li>Access to consistent broadband network</li>
                    <li>Ability to run Telliot software 24/7</li>
                    <li>An understanding of Tellor’s technical docs here</li>
                </ol>
                <p className="page-text">When data is requested, data reporters submit values to be put on-chain. Data reporters can also receive tips from users to update certain data points more frequently.</p>
            </div>
            {/*
            VIDEO TO BE INSERTED HERE
            <div className="GettingStarted__video">
                <video poster={videoplaceholder}>
                    <source src="myVideo.mp4" type="video/mp4" />
                    <source src="myVideo.webm" type="video/webm" />
                    <p>
                        Your browser doesn't support HTML5 video. Here is a 
                        <a href="myVideo.mp4">link to the video</a> instead.
                    </p>
                </video>
            </div>  */}
            <div className="GettingStarted__actions">
                <button  size="large" className="page-button" onClick={() => window.open(downloadUrl)}>
                    <img src={Telliot} alt="telliot"/>
                    download Telliot v1.2.8
                </button>
                <a href={docUrl} target="_blank">
                    read the docs
                </a>
            </div>
        </div>
    )
}

export default GettingStarted;