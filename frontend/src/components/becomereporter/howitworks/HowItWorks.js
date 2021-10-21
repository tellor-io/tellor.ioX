import React from 'react';
import './HowItWorks.scss';

const HowItWorks = () => {

    return (
        <div className="HowItWorks">
            <h2 className="page-header-small">How data reporting works</h2>
            <p className="page-text">When data is requested, data reporters submit values to be put on-chain. Data reporters can also receive tips from users to update certain data points more frequently.</p>
            <div className="HowItWorks__list">
                <p className="page-text">To become a data reporter for Tellor’s oracle you must have: </p>
                <ul className="page-text">
                    <li>Advanced knowledge of blockchain smart contracts</li>
                    <li>GPU running something...something</li>
                    <li>Access to consistent broadband network</li>
                    <li>Ability to run Telliot software 24/7</li>
                    <li>An understanding of Tellor’s technical docs here</li>
                </ul>
            </div>
        </div>
    )
}

export default HowItWorks;