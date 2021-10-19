import React from 'react';

import './GetTRB.scss';
import HeaderDesc from '../../shared/HeaderDesc/HeaderDesc';

const GetTRB = () => {

    const content = [
        {
            title: "Get TRB",
            description: "Contribute to the success of Tellor! TRB is available on many decentralized exchanges, custodial exchanges and directly in some wallets."
        },
    ];

    return (
        <div className="GetTRB">
            <HeaderDesc title={content[0].title} description={content[0].description}/>
        </div>
    )
}

export default GetTRB; 