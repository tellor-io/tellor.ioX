import React from "react"

import "./Unconnected.scss"
import UserWidget from 'components/account/userwidget/UserWidget'
import CurrentlyReportingOn from 'components/account/currentlyreportingon/CurrentlyReportingOn'
import ReportingHistory from 'components/account/reportinghistory/ReportingHistory'
import ActivityFeed from 'components/account/activityfeed/ActivityFeed'

import PropTypes from 'prop-types'

const Unconnected = (props) => {

    const { 
        userAccount,
        clickedAddress 
    } = props;

    return (
        <div className="Connected">
            <UserWidget isConnected={false} account={clickedAccount}/>
            <CurrentlyReportingOn />
        </div> 
    );
};

Unconnected.propTypes = {
    userAccount: PropTypes.object.isRequired,
    clickedAccount: PropTypes.object.isRequired,
}

export default Unconnected;
