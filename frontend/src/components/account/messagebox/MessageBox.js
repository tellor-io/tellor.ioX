import React, { useState, useEffect } from "react";

import "./MessageBox.scss";
import PropTypes from 'prop-types'
import BountiesWrapper from 'components/shared/Bounties/BountiesWrapper'


const MessageBox = (props) => {

    const [showInfo, setShowInfo] = useState(false);
    const [showBounties, setShowBounties] = useState(false);
    const [hideMessage, setHideMessage] = useState(false);

    //component props
    const { 
        isNew, 
        account 
    } = props;

    //content per user case
    const user = {
        new: {
            style : 'new',
            header: `Welcome, ${account.addressHidden}!`,
            mainDescription: 'As a vital part of Tellor, the TRB-holders actively contribute to the quality of the data.',
            subDescription: 'Want to get active in the network? Get some TRB!',
        },
        active : {
            style : 'active',
            header: `Almost there, ${account.addressHidden}`,
            mainDescription: 'With 100TRB, you can become a reporter and actively be a part of this unstoppable oracle.',
            subDescription: '',
        }
    }

    //display new or active user data
    const display = isNew ? user.new : user.active;

    //show nothing
    if (hideMessage) {
        return (
            <></>
        )
    }

    return (
          <div className="MessageBox">
                <div className={`messagebox-container container-${display.style}`}>
                    {/* intro content */}
                    <h3 className="messagebox-header">{display.header}</h3>
                    <p className="page-text messagebox-text main-description">{display.mainDescription}</p>
                    
                    {/* expandable content */}
                    {showInfo && (
                        <div className="showinfo-container">
                            <ul>
                                <li>
                                    <span className="bold">disputes:</span> as a TRB-holder, you are able to dispute a value you deem as false. You’ll also be able to dispute a dispute, within the 24hr timelimit. 
                                    <a href="" className="page-text">read more on disputes</a>
                                </li>
                                <li>
                                   <span className="bold">voting:</span> as a TRB-holder, you’ll be able to vote on all matters Tellor: disputes, Tellor Improvement Plans, upgrades... first discussed in the forum, then brought to a vote, it’s up to TRB-holders to decide which direction the network will go. 
                                   <a href="" className="page-text">read more on voting</a>
                                </li>
                                <li>
                                    <span className="bold">treasury:</span> offer your TRB as collateral and receive rewards! 
                                    <a href="" className="page-text">read more on treasury</a>
                                </li>
                            </ul>
                        </div>
                    )}

                    {/*  toggle bounties */}
                    {showBounties && (
                        <div className="toggle-bounties">
                            <BountiesWrapper 
                                hideHeader={true} 
                                darkBackground={true}
                                hidePadding={true} />
                        </div>
                    )}

                    <p className="page-text messagebox-text bold sub-description">{display.subDescription}</p>
                    {/* action items */}
                    <div className="messagebox-actions">
                        <div className="messagebox-buttons">
                            <button className="messagebox-button" onClick={ () => setShowInfo(!showInfo) }>
                                {!showInfo 
                                    ? "tell me more" 
                                    : "hide info"
                                }
                            </button>
                            <button className="messagebox-button" onClick={ () => setShowBounties(!showBounties) }>
                                {!showBounties 
                                    ? "show Tellor bounties" 
                                    : "hide Tellor bounties"
                                }
                            </button>    
                        </div>
                        <a className="page-text close-msg" onClick={ () => setHideMessage(true) }>
                            close and hide msg
                        </a>
                    </div>
                </div>
          </div>
    );
};

MessageBox.propTypes = {
    isNew: PropTypes.bool.isRequired,
    account: PropTypes.object.isRequired,
}
export default MessageBox;
