import React from 'react'

import LiveHeader from 'components/live/liveheader/LiveHeader'

const HowItWorks = () => {
    return (
        <div className="viewContainer">
            {/* 
              * 
              * <VoteItems />
              * <Tables />
              *** <LiveDatapoints />
              *** <CurrentlyReporting />
              *** <PastVoteItems />
              * 
            */}
            <LiveHeader />
        </div>
    )
}

/*
 * Questions:
 ****  mainnet header : does anything turn on the "Live in tellor"
 ****  mainnet header : what populates the dropdown list and what effects happen changing it
 ****  vote items : where does i
 * 
 */

export default HowItWorks;
