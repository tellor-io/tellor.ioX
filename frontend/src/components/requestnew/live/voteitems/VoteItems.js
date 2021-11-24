import React, { useState } from 'react'

import './VoteItems.scss'

const VoteItems = () => {    

    const [voteCount, setVoteCount] = useState(0);
    const [voteItemsMsg, setVoteItemsMsg] = useState('Currently no active vote items');

    return (
        <div className="VoteItems">
            <div className="VoteItems__header">
                <h3>Active vote items</h3>
                <p className="page-text-black">{voteCount}</p>
            </div>
            <div className="VoteItems__message">
                <p className="page-text-black">{voteItemsMsg}</p>
            </div>
            <div className="VoteItems__link">
                <a className="page-text-black">see past vote items</a>
            </div>

        </div>
    )
}

export default VoteItems;
