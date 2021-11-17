import React from "react"

import "./Connected.scss"
import UserWidget from 'components/account/userwidget/UserWidget'
// import CurrentlyReportingOn from 'components/account/currentlyreportingon/CurrentlyReportingOn'

import PropTypes from 'prop-types'

const Connected = (props) => {

    const { 
        userAccount,
        clickedAddress  
    } = props;

    return (
        <div className="Connected">
            <UserWidget isConnected={true} account={userAccount}/>
            {/* <CurrentlyReportingOn /> */}
        </div>
    );
};

Connected.propTypes = {
    userAccount: PropTypes.object.isRequired,
    clickedAccount: PropTypes.object.isRequired,
}

export default Connected;
