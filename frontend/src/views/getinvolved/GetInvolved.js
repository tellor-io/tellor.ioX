import React from 'react'

import InvolvedIntro from 'components/getinvolved/involvedintro/InvolvedIntro';
import InvolvedBounty from 'components/getinvolved/involvedbounty/InvolvedBounty';


const GetInvolved = () => {
    return (
        <div className="viewContainer">
            <InvolvedIntro />
            <InvolvedBounty />
        </div>
    )
}

export default GetInvolved;
