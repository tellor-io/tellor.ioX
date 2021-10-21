import React from 'react';

import Intro from 'components/becomereporter/intro/Intro';
import HowItWorks from 'components/becomereporter/howitworks/HowItWorks';
import GettingStarted from 'components/becomereporter/gettingstarted/GettingStarted';
// import TokenIntro from 'components/shared/tokenintro/WhitePanel';


const BecomeReporter = () => {
    return (
        <div className="viewContainer">
            
            <Intro />
            <HowItWorks />
            <GettingStarted />
            {/* <WhitePanel /> */}
           
        </div>
    )
}

export default BecomeReporter;