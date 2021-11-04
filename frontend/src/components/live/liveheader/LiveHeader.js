import React, { useState } from 'react'

import './LiveHeader.scss'
import DownCarrot from 'assets/down-carrot.svg';

const LiveHeader = () => {    

    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState('mainnet');

    //toggle dropdown
    const toggleDropdown = () => {
        setOpen(!open);
    }

    //set text and close dropdown
    const handleSelection = (text) => {
        setSelection(text);
        setOpen(false);
    }
    

    return (
        <div className="LiveHeader">
            <h2 className="page-header-small">
                <span>•</span> 
                Live on tellor
            </h2>
            {/* dropdown */}
            <div className="LiveHeader__dropdown">
                <button className="page-text selection" onClick={toggleDropdown}>
                    {selection}   
                    <img src={DownCarrot} />  
                </button>
                {/*  open dropdown */}
                {open && (
                    <div className="dropdown"> 
                        <ul>
                            <li className="page-text" onClick={() => handleSelection('mainnet')}>
                                mainnet
                            </li>
                            <li  className="page-text" onClick={() => handleSelection('rinkeby')}>
                                rinkeby
                            </li>
                        </ul> 
                    </div>
                )}
            </div>
        </div>
    )
}

export default LiveHeader;
