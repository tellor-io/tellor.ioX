import React, { useState } from 'react'
import Bounties from './Bounties'
import './BountiesWrapper.scss'
import {ReactComponent as Swoosh} from 'assets/Swoosh.svg';
import PropTypes from 'prop-types';

export default function BountiesWrapper(props) {

    const [toggle, setToggle] = useState(false);

    const {
        hideHeader,
        darkBackground
    } = props;

    return (
        <div className={darkBackground ? "BountiesWrapperDark" : "BountiesWrapper"}>
            {!hideHeader && (
                <div className="BountiesWrapper__title">
                    <h1>Earn TRB</h1>
                    <Swoosh />
                    <h1>, grab a bounty!</h1>
                </div>
            )}
            <Bounties />
            <div className="BountiesWrapper__desc">
                <p>The Tellor Bounties program is a way to reward developers who help us build out Tellor. We have a dev fund that's for developing Tellor and we plan to use it!</p>
                <a onClick={() => setToggle(!toggle)}>read ground rules</a>
            </div>
            {/* collapsable area */}
            { toggle && (
                <div className="BountiesWrapper__collapse">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            )}
        </div>
    )
}

BountiesWrapper.propTypes = {
    hideHeader: PropTypes.bool,
    darkBackground: PropTypes.bool,
}
