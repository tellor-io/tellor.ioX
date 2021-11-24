import React from 'react'

import './RequestIntro.scss'
import Github from 'assets/Github.svg';

import HeaderDesc from 'components/shared/HeaderDesc/HeaderDesc';


const RequestIntro = () => {

    return (
        <div className="RequestIntro">
            <h1 className="page-header">We put data on blockchains. Any data.</h1>
            <p className="page-text">Smart contracts have their own unique data needs that they ask oracles to provide for them - these needs will only broaden as our industry grows. That is why we built Tellor to be able to answer any data query and put that data on-chain, on demand.</p>
        {/* common data queries */}
        <div className="request-text-container">
            <h2 className="page-header-small">Common data queries</h2>
            <p className="page-text ">Many blockchain projects use common data points for their smart contracts. These data queries are already built into Tellor’s oracle - all you have to do is integrate Tellor into your smart contracts.</p>
        </div>
        <div className="RequestIntro__actions">
            <button size="large" className="page-button" onClick={() => window.open('')}>
                current data queries
            </button>
            <button size="large" className="page-button" onClick={() => window.open('')}>
                Integrate Tellor
            </button>
        </div>
        {/* create a new query */}
        <div className="request-text-container">
            <h2 className="page-header-small">Create a new query</h2>
            <p className="page-text ">New data queries are submitted using a standard format. Consistent data queries allow other oracle users to access the data if they need it and not create redundancy in the data reporting. To learn how to create a new query just use the format in our docs.</p>
        </div>
        <div className="RequestIntro__actions">
            <button size="large" className="page-button" onClick={() => window.open('')}>
                {/* <img src={Github} alt="github"/> */}
                read the data specs
            </button>
        </div>
        {/* dont see the data you need */}
        <div className="request-text-container">
            <h2 className="page-header-small">Don’t see the data you need?</h2>
            <p className="page-text ">Tellor’s oracle is flexible enough to add any data on-chain. If you’ve browsed the existing price feeds and query documentation but need something else, we’re here to help.</p>
        </div>
        <div className="RequestIntro__actions">
            <button size="large" className="page-button" onClick={() => window.open('')}>
                {/* <img src={Github} alt="github"/> */}
                reach out to the team
            </button>
        </div>
        

        </div>
    ) 
}

export default RequestIntro;
