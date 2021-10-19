import React from 'react';

import TokenIntro from 'components/trb/tokenintro/TokenIntro';
import TokenDescription from 'components/trb/tokendescription/TokenDescription';
import GetTRB from 'components/trb/gettrb/GetTRB';
import EarnTRB from 'components/trb/earntrb/EarnTRB';


const TRB = () => {
    return (
        <div className="viewContainer">
            <TokenIntro />
            <TokenDescription />
            <GetTRB />
            <EarnTRB />
        </div>
    )
}

export default TRB;