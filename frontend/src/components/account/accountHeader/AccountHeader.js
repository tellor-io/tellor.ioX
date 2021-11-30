import React from "react"

import "./AccountHeader.scss"
import UserWidget from 'components/account/userwidget/UserWidget'
import { truncateAddr } from 'utils/helpers';
import { Jazzicon } from '@ukstv/jazzicon-react';

import PropTypes from 'prop-types'

const AccountHeader = (props) => {
    //component props
    const { 
        account,
        IsCurrentUser
    } = props;

    console.log("account",account);
    //returned view
    return (
        <div className="AccountHeader">
            <div className="AccountHeader__left">
                <div className="AccountHeader__left__avatar">
                    <Jazzicon address={account.address} />
                </div>
                <div className="AccountHeader__left__address">
                    {IsCurrentUser && (
                        <p className="page-text">You're connected as</p>
                    )}
                    
                    <a className="page-text address" href={"https://etherscan.io/address/"+account.address} target="_blank" rel="noopener noreferrer">{truncateAddr(account.address)}</a>
                    {/* <p className="page-text address">{truncateAddr(account.address)}</p> */}
                </div>
            </div>
        </div>
    );
};

AccountHeader.propTypes = {
    account: PropTypes.object.isRequired,
}

export default AccountHeader;
