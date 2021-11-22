import React, { useState, useEffect } from "react"
import "./UserWidget.scss"
import PropTypes from 'prop-types'

const UserWidget = (props) => {

    const { 
        isConnected,
        account  
    } = props;

    //displays user account info
    return (
        <div className="UserWidget">
            {/* account address and "connected" label */}
            <div className="UserWidget__left">
                <img src={account.avatar} />
                <div className="UserWidget__left__address">
                    {isConnected && (
                        <p className="page-text">You're connected as</p>
                    )}
                    <p className="page-text address">{account.addressHidden}</p>
                </div>
            </div>
            {/* trb count if connected */}
            {isConnected && ( 
                <div className="UserWidget__right">
                    <p>{account.trb} TRB</p>
                </div>
            )}
        </div>
    );
};

UserWidget.propTypes = {
    isConnected: PropTypes.bool.isRequired,
    account: PropTypes.object.isRequired,
}

export default UserWidget;
