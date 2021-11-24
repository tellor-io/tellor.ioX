import React from "react"

import "./Unconnected.scss"
import UserWidget from 'components/account/userwidget/UserWidget'
import CurrentlyReportingOn from 'components/account/currentlyreportingon/CurrentlyReportingOn'
import ReportingHistory from 'components/account/reportinghistory/ReportingHistory'
import ActivityFeed from 'components/account/activityfeed/ActivityFeed'

import PropTypes from 'prop-types'

const Unconnected = (props) => {
    //component props
    const { 
        account,
        reporting,
        history,
        activities, 
        isReporter
    } = props;

    //returns layout based on conditions
    const Display = () => {
        if (isReporter) {
            //clicked account is reporter
            return (
                <>
                    <UserWidget isConnected={false} account={account}/>
                    <CurrentlyReportingOn data={reporting} account={account} isReporter={isReporter}/>
                    <ReportingHistory data={history}/>
                    <ActivityFeed data={activities} />
                </>
            )
        } else {
            //clicked account is not reporter
            return (
                <>
                    <UserWidget isConnected={false} account={account}/>
                    <ActivityFeed data={activities} />
                    <CurrentlyReportingOn data={reporting} account={account} isReporter={isReporter}/>
                    <ReportingHistory data={history}/>
                </>
            )
        }

    }
    
    //returned view
    return (
        <div className="Unconnected">
            <Display />
        </div> 
    );
};

Unconnected.propTypes = {
    account: PropTypes.object.isRequired,
    reporting: PropTypes.object,
    history: PropTypes.array,
    activities: PropTypes.array,
    isReporter: PropTypes.bool,
}

export default Unconnected;
