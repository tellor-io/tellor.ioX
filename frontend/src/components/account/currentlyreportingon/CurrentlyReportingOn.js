import React from "react";
import "./CurrentlyReportingOn.scss";
import PropTypes from 'prop-types'
import LockIcon from 'assets/LockIcon3.png'
const CurrentlyReportingOn = (props) => {

    const { 
        data,
        isReporter 
    } = props; 

    //used to display empty data styles
    const dark = isReporter ? '' : 'dark';

    //displays user reporting metrics 
    return (
        <div className="CurrentlyReportingOn">
            {!isReporter && (
                <div className="lock-container">
                    <img src={LockIcon} className="lock-icon"/>
                    <p className="page-text lock-text">You need 100 TRB to become a reporter.</p>
                </div>
            )}
            <div className="CurrentlyReportingOn__metrics">
                {/* earned */}
                <div className="container">
                    <h3 className={`data-header ${dark}`}>Earned as reporter</h3>
                    <p className={`data ${dark}`}>{isReporter ? data.earned : 0} TRB</p>
                </div>
                {/* current report */}
                <div className="container">
                    <h3 className={`data-header ${dark}`}>Currently reporting on</h3>
                    <p className={`data ${dark}`}>{ isReporter ? data.current : "None"}</p>
                </div>
                {/*  total reports */}
                <div className="container">
                    <h3 className={`data-header ${dark}`}>Total report events</h3>
                    <p className={`data ${dark}`}>{isReporter ? data.total : 0}</p>
                </div>
                {/*  last reported */}
                <div className="container">
                    <h3 className={`data-header ${dark}`}>Last report event</h3>
                    <p className={`data ${dark}`}>{isReporter ? data.lastReported : "N/a"}</p>
                </div>
            </div>
        </div>
    );
    };

CurrentlyReportingOn.propTypes = {
    data: PropTypes.object,
    isReporter: PropTypes.bool
}

export default CurrentlyReportingOn; 
