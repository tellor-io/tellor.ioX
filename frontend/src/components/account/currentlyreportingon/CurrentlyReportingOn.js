import React from "react";
import "./CurrentlyReportingOn.scss";
import PropTypes from 'prop-types'

const CurrentlyReportingOn = (props) => {

    const { 
        data 
    } = props; 

    //displays user reporting metrics
    return (
        <div className="CurrentlyReportingOn">
            {/* current report */}
            <div className="container">
                <h3 className="page-header-small">Currently reporting on</h3>
                <p className="data">{data.current}</p>
            </div>
            {/*  total reports */}
            <div className="container">
                <h3 className="page-header-small">Total report events</h3>
                <p className="data">{data.total}</p>
            </div>
            {/*  last reported */}
            <div className="container">
                <h3 className="page-header-small">Last report event</h3>
                <p className="data">{data.lastReported}</p>
            </div>
        </div>
    );
    };

CurrentlyReportingOn.propTypes = {
    data: PropTypes.object.isRequired,
}

export default CurrentlyReportingOn; 
