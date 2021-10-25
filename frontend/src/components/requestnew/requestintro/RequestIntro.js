import React from 'react'

import './RequestIntro.scss'
import Github from 'assets/Github.svg';


const RequestIntro = () => {

    const url = '';

    return (
        <div className="RequestIntro">
            <h1 className="page-header">Requesting a new data point</h1>
            <div className="RequestIntro__desc">
                <p className="page-text">Each blockchain project has their own unique data needs — that's why the Tellor oracle is built to be one of the most flexible available. </p>
                <p className="page-text">With Tellor, data is submitted as bytes. This means oracle users can request any data type or series of variables in a single query.</p>
                <p className="page-text">Each data request is given an ID on-chain. The more data batching the oracle can provide in request ID’s, the more efficient the system becomes (more values per transaction).</p>
                <p className="page-text">All new data point requests are put to a governance vote. This is to organize requests and define the data point for those needing to verify the validity of the data. </p>
                <p className="page-text">Oracle users should use best practices when selecting data to query, and may need to tip reporters to incentivize active reporting.</p>
            </div>
            <div className="RequestIntro__actions">
                <button size="large" className="page-button" onClick={() => window.open(url)}>
                    <img src={Github} alt="github"/>
                    submit a new data request
                </button>
            </div>
        </div>
    )
}

export default RequestIntro;
