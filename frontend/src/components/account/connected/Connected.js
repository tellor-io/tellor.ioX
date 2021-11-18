import React from "react"

import "./Connected.scss"
import UserWidget from 'components/account/userwidget/UserWidget'
import MessageBox from 'components/account/messagebox/MessageBox'
import CurrentlyReportingOn from 'components/account/currentlyreportingon/CurrentlyReportingOn'
import ReportingHistory from 'components/account/reportinghistory/ReportingHistory'
import ActivityFeed from 'components/account/activityfeed/ActivityFeed'

import PropTypes from 'prop-types'

const Connected = (props) => {
    //props
    const { 
        userAccount,
        clickedAddress,
        reporting,
        history,
        activities,
        isReporter,
    } = props;

    //returns layout based on conditions
    const Display = () => {
        if (!isReporter && activities.length === 0) {
            //not active, not a reporter
            return (
                <>
                    <MessageBox />
                    <UserWidget isConnected={true} account={userAccount}/>
                    <ActivityFeed data={activities} />
                    <CurrentlyReportingOn data={reporting} isReporter={isReporter}/>
                    <ReportingHistory data={history}/>
                </>
            )
        } else if (!isReporter && activities.length > 0) {
            //active, not a report
            return (
                <>
                    <UserWidget isConnected={true} account={userAccount}/>
                    <ActivityFeed data={activities} />
                    <MessageBox />
                    <CurrentlyReportingOn data={reporting} isReporter={isReporter}/>
                    <ReportingHistory data={history}/>
                </>
            )
        } else {
            //active, is reporter
            return ( 
                <>
                    <UserWidget isConnected={true} account={userAccount}/>
                    <CurrentlyReportingOn data={reporting} isReporter={isReporter}/>
                    <ReportingHistory data={history}/>
                    <ActivityFeed data={activities} />
                </> 
            )
        }

    }

    return (
        <div className="Connected">
            <Display />
        </div>
    );
};

Connected.propTypes = {
    userAccount: PropTypes.object.isRequired,
    clickedAccount: PropTypes.object.isRequired,
    reporting: PropTypes.object,
    history: PropTypes.array,
    activities: PropTypes.array,
    isReporter: PropTypes.bool,
}

export default Connected;
