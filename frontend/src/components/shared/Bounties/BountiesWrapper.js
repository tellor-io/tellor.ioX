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
        </div>
    )
}
