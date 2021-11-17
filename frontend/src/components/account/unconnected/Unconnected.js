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
        clickedAccount,
        reporting,
        history,
        activities, 
    } = props;

    return (
        <div className="Unconnected">
            <UserWidget isConnected={false} account={clickedAccount}/>
            <CurrentlyReportingOn data={reporting} />
            <ReportingHistory data={history}/>
            <ActivityFeed data={activities} />
        </div> 
    );
};

Unconnected.propTypes = {
    userAccount: PropTypes.object.isRequired,
    clickedAccount: PropTypes.object.isRequired,
    reporting: PropTypes.object,
    history: PropTypes.array,
    activities: PropTypes.array,
}

export default Unconnected;
