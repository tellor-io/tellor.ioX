import React from 'react'

import Title from 'components/howitworks/title/Title';
import Information from 'components/howitworks/information/Information';
import Videos from 'components/howitworks/videos/Videos';


const HowItWorks = () => {
    return (
        <div className="viewContainer">
            {/* 
              *
              * <StuckPanel />
              * 
            */}
            <Title /> 
            <Information />
            <Videos />
        </div>
    )
}

export default HowItWorks;
