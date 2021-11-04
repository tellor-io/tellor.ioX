import React, { useState } from 'react'

import './LiveHeader.scss'
import DownCarrot from 'assets/down-carrot.svg';
import { set } from 'lodash';

const LiveHeader = () => {    

    const [toggle, setToggle] = useState(false);

    return (
        <div className="LiveHeader">
            <h2 className="page-header-small">
                <span>•</span> 
                Live on tellor
            </h2>
            {/* dropdown */}
            <div className="LiveHeader__dropdown">
                <button className="page-text" onClick={ () => setToggle(!toggle)}>
                    mainnet   
                    <img src={DownCarrot} />  
                </button>
            </div>
        </div>
    )
}

export default LiveHeader;
