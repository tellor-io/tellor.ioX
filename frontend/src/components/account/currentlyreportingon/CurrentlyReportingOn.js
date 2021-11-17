import React from "react";

import "./CurrentlyReportingOn.scss";

import PropTypes from 'prop-types'

const CurrentlyReportingOn = () => {

    return (
        <div className="CurrentlyReportingOn">
            <div className="container">
                <h3 className="page-header-small">Currently reporting on</h3>
                <p className="data">ETH/USD</p>
            </div>
            <div className="container">
                <h3 className="page-header-small">Total report events</h3>
                <p className="data">88</p>
            </div>
            <div className="container">
                <h3 className="page-header-small">Last report event</h3>
                <p className="data">4 days ago</p>
            </div>
        </div>
    );
    };

CurrentlyReportingOn.propTypes = {
    isConnected: PropTypes.bool.isRequired,
    account: PropTypes.object.isRequired,
}

export default CurrentlyReportingOn; 
