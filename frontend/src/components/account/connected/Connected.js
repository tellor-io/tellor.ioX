import React from "react"

import "./Connected.scss"
import UserWidget from 'components/account/userwidget/UserWidget'
import MessageBox from 'components/account/messagebox/MessageBox'
import CurrentlyReportingOn from 'components/account/currentlyreportingon/CurrentlyReportingOn'
import ReportingHistory from 'components/account/reportinghistory/ReportingHistory'
import ActivityFeed from 'components/account/activityfeed/ActivityFeed'

import PropTypes from 'prop-types'

const Connected = (props) => {
    //component props
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
        //user is new if there are no activities
        const isNew = activities.length > 0 ? false : true;

        if (!isReporter && isNew) {
            //not active, not a reporter
            return (
                <>
                    <MessageBox isNew={isNew} account={userAccount}/>
                    <UserWidget isConnected={true} account={userAccount}/>
                    <ActivityFeed data={activities} />
                    <CurrentlyReportingOn data={reporting} isReporter={isReporter}/>
                    <ReportingHistory data={history}/>
                </>
            )
        } else if (!isReporter && !isNew) {
            //active, not a report
            return (
                <>
                    <UserWidget isConnected={true} account={userAccount}/>
                    <ActivityFeed data={activities} />
                    <MessageBox isNew={isNew} account={userAccount}/>
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

    //returned view
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
