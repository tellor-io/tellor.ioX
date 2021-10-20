import React from 'react'
import Bounties from './Bounties'
import './BountiesWrapper.scss'
import {ReactComponent as Swoosh} from 'assets/Swoosh.svg';

export default function BountiesWrapper() {
    return (
        <div className="BountiesWrapper">
            <div className="BountiesWrapper__title">
                <h1>Earn TRB</h1>
                <Swoosh />
                <h1>, grab a bounty!</h1>
            </div>
            <Bounties />
            <div className="BountiesWrapper__footer">
                <p>The Tellor Bounties program is a way to reward developers who help us build out Tellor.
    We have a dev fund that's for developing Tellor and we plan to use it!</p>
                <a href="#">read ground rules</a>
            </div>
        </div>
    )
}
