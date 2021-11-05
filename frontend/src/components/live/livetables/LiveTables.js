import React from 'react'

import './LiveTables.scss'

import LiveDatapoints from 'components/live/livetables/livedatapoints/LiveDatapoints'
import CurrentlyReporting from 'components/live/livetables/currentlyreporting/CurrentlyReporting'
import PastVoteItems from 'components/live/livetables/pastvoteitems/PastVoteItems'

const LiveTables = () => {
    return (
        <div className="LiveTables">
              <LiveDatapoints />
              <CurrentlyReporting />
              <PastVoteItems />
        </div>
    )
}

export default LiveTables;
