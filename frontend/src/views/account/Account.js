import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import Connected from 'components/account/connected/Connected'
import Unconnected  from 'components/account/unconnected/Unconnected'

const Account = () => {
    // TODO: sett up with redux variables when available
    const [ isConnected, setIsConnected ] = useState(false);
    const [ userAccount, setUserAccount ] = useState('');
    //reads from url
    const accountClicked = useParams().address;
    //Makes page load at top
    window.scrollTo(0, 0);

    useEffect(() => {
        //should be defined from redux
        setUserAccount("0x87e6987E");
        if (userAccount === accountClicked) {
            setIsConnected(true);
        }
        console.log('userAccount = ', userAccount);
        console.log('accountClicked = ', accountClicked);
    }, [userAccount])
    
    /*
     * - "/live" onClick on open Address with url param 
     * - components - not connected : user (not connected), currently reporting , activity feed (see case for empty), reporting history (with and without data)
     * - components - connected :  user (connected), intro message box, activity feed, reporting history (not reported yet),
     * 
     * cases
     *  - Not Connected and clicks address (is reporter) : sees 1. user (not connected) 2. Currently reporting on 3. Reporting History, Activity Events
     *  - Not Connected and clicks address (is not reporter) : sees 1. user (not connected) 2. Activity Feed 3. Report History (disabled)
     *  - Connected and is new user : 1. Intro Message Box 2. user (connected) 3. Activity Feed (empty) 4.  Report History (disabled)
     *  - Connected, user is active but not reporter : 1. user (connected) 2. Activity Feed 3. Intro Message Box 4. Report History (disabled)
     *  - Connected, user is active and reporter: 1. user (connected) 2. Activity Feed 
     */

    return (
        <div className="viewContainer">
            { isConnected 
                ? <Connected />
                : <Unconnected />
            }
        </div>
    )
}

export default Account;
