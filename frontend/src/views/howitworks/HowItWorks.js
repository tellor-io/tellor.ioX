import React from 'react'

import Title from 'components/howitworks/title/Title';
import Information from 'components/howitworks/information/Information';


const HowItWorks = () => {
    return (
        <div className="viewContainer">
            {/* 
              * 
              *
              * <Videos />
              * <StuckPanel />
              * 
            */}
            <Title /> 
            <Information />
        </div>
    )
}

export default HowItWorks;
