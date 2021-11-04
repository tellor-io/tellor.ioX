import React from 'react'

import LiveHeader from 'components/live/liveheader/LiveHeader'
import VoteItems from 'components/live/voteitems/VoteItems'

const HowItWorks = () => {
    return (
        <div className="viewContainer">
            {/* 
              * 
              * 
              * <Tables />
              *** <LiveDatapoints />
              *** <CurrentlyReporting />
              *** <PastVoteItems />
              * 
            */}
            <LiveHeader />
            <VoteItems />
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
