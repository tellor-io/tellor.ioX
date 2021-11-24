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
        account,
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
                    <MessageBox isNew={isNew} account={account}/>
                    <UserWidget isConnected={true} account={account}/>
                    <ActivityFeed data={activities} />
                    <CurrentlyReportingOn data={reporting} isReporter={isReporter} isConnected={true} />
                    <ReportingHistory data={history}/>
                </>
            )
        } else if (!isReporter && !isNew) {
            //active, not a report
            return (
                <>
                    <UserWidget isConnected={true} account={account}/>
                    <ActivityFeed data={activities} />
                    <MessageBox isNew={isNew} account={account}/>
                    <CurrentlyReportingOn data={reporting} isReporter={isReporter} isConnected={true} />
                    <ReportingHistory data={history}/>
                </>
            )
        } else {
            //active, is reporter
            return ( 
                <>
                    <UserWidget isConnected={true} account={account}/>
                    <CurrentlyReportingOn data={reporting} isReporter={isReporter} isConnected={true} />
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
    account: PropTypes.object.isRequired,
    reporting: PropTypes.object,
    history: PropTypes.array,
    activities: PropTypes.array,
    isReporter: PropTypes.bool,
}

export default Connected;
