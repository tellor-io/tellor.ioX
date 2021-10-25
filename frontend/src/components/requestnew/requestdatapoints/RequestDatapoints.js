import React from 'react'

import './RequestDatapoints.scss'
import Datapoint from '../../shared/Datapoint/Datapoint';


const RequestDatapoints = () => {

     // //// DUMMY ////
     const dataPoints = [
        {
            timestamp: "1633959919",
            reporter: "0x1D39955c9662678535d68a966862A06956ea5644",
            symbols: "ETH/USD",
            value: "3957.33"
        },
        {
            timestamp: "1633959564",
            reporter: "0x1D39955c9662678535d68a966862A06956ea5644",
            symbols: "BTC/USD",
            value: "43761.1"
        },
        {
            timestamp: "1633959554",
            reporter: "0x1D39955c9662678535d68a966862A06956ea5644",
            symbols: "BNB/USD",
            value: "355.15"
        },
    ]

    const datapointstotal = 55;

    return (
        <div className="RequestDatapoints">
            <div className="Datapoints">
                <p className="popular-points">Most popular datapoints:</p>
                {dataPoints.map((data,i) => {
                    return <Datapoint key={i} data={data}/>
                })}
            </div>
            <a href="" target="_blank" className="see-all"> see all (50)</a>
        </div>
    )
}

export default RequestDatapoints;
