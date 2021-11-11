import React from 'react'

import './Videos.scss'
import Video from './Video'

const Videos = () => {    

    // youtube urls 
    const seeAll = "https://www.youtube.com/watch?v=fNuAmpYzztg&list=PLuJHbmh0kCXVPHDA2Q3J3TfatBRGrOsm-&ab_channel=Tellor";
    const tellorMining = "https://www.youtube.com/watch?v=KJgXGm8n6tM&ab_channel=Tellor";
    const usingFellowship = "https://www.youtube.com/watch?v=-AlIJKX-zBg&ab_channel=Tellor";
    const automatingTips = "https://www.youtube.com/watch?v=KJgXGm8n6tM&ab_channel=Tellor";

    // iframe 
    const tellorMiningFrame = <iframe width="560" height="315" src="https://www.youtube.com/embed/8hAtNXL9avU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>;
    const usingFellowshipFrame = <iframe width="560" height="315" src="https://www.youtube.com/embed/-AlIJKX-zBg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>;
    const automatingTipsFrame = <iframe width="560" height="315" src="https://www.youtube.com/embed/KJgXGm8n6tM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>;

    return (
        <div className="Videos">
            <div className="Videos__header">
                <h3 className="page-header-small">T-school’s most popular</h3>
                <a href={seeAll} target="_blank">
                    see all
                </a>
            </div>
            <div className="Videos__videorow">
                <Video 
                    iframe={tellorMiningFrame}
                    linkText="Tellor school - Tellor mining 101"
                    linkUrl={tellorMining} />
                <Video 
                    iframe={usingFellowshipFrame}
                    linkText="Tellor school - Using Fellowship"
                    linkUrl={usingFellowship}/>
                <Video 
                    iframe={automatingTipsFrame}
                    linkText="Tellor School: Automating Tips: 3/3 Adding Secrets and Launch!"
                    linkUrl={automatingTips}/>
            </div>
        </div>
    )
}

export default Videos;
