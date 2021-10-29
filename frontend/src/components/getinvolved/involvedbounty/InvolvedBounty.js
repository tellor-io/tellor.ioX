import React from 'react'

import './InvolvedBounty.scss'
import HeaderDesc from 'components/shared/HeaderDesc/HeaderDesc'

const InvolvedBounty = () => {    

    const bountyText = [
        "Claim a bounty", 
        "Here are some specific ways you can help improve Tellor and earn TRB in the process!"
    ]

    return (
        <div className="InvolvedBounty">
            <HeaderDesc title={bountyText[0]} description={bountyText[1]}/>
        </div>
    )
}

export default InvolvedBounty;
