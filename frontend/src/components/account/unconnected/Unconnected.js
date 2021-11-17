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
        isReporter
    } = props;

    return (
        <div className="Unconnected">
            {isReporter 
                ? (
                    <>
                        <UserWidget isConnected={false} account={clickedAccount}/>
                        <CurrentlyReportingOn data={reporting} isReporter={isReporter}/>
                        <ReportingHistory data={history}/>
                        <ActivityFeed data={activities} />
                    </>
                ) : (
                    <>
                        <UserWidget isConnected={false} account={clickedAccount}/>
                        <ActivityFeed data={activities} />
                        <CurrentlyReportingOn data={reporting} isReporter={isReporter}/>
                        <ReportingHistory data={history}/>
                    </>
                )

            }
            
        </div> 
    );
};

Unconnected.propTypes = {
    userAccount: PropTypes.object.isRequired,
    clickedAccount: PropTypes.object.isRequired,
    reporting: PropTypes.object,
    history: PropTypes.array,
    activities: PropTypes.array,
    isReporter: PropTypes.bool,
}

export default Unconnected;
