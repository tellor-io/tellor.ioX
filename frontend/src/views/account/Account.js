import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import Connected from 'components/account/connected/Connected'
import Unconnected  from 'components/account/unconnected/Unconnected'

import Avatar from 'assets/AvatarDark.png';

const Account = () => {

    //Makes page load at top
    window.scrollTo(0, 0);

    // TODO: setup with redux variables when available
    const isConnected = true;
    const userAccount = {
        address: '0x87e6987E',
        avatar: Avatar,
        trb: 127,
    };
    
    //account in url, TODO: add to redux for data in /live when added
    const clickedAccount = {
        address: useParams().address,
        avatar: Avatar,
        trb: 0,
    };
   

    /*
     * - "/live" onClick on open Address with url param
     * - components - not connected :  activity feed (see case for empty), reporting history (with and without data)
     * - components - connected :   intro message box, activity feed, reporting history (not reported yet),
     *
     * cases
     *  - Not Connected and clicks address (is reporter) : sees 1. user (not connected) 2. Currently reporting on 3. Reporting History, Activity Events
     *  - Not Connected and clicks address (is not reporter) : sees 1. user (not connected) 2. Activity Feed 3. Report History (disabled)
     *  - Connected and is new user : 1. Intro Message Box 2. user (connected) 3. Activity Feed (empty) 4.  Report History (disabled)
     *  - Connected, user is active but not reporter : 1. user (connected) 2. Activity Feed 3. Intro Message Box 4. Report History (disabled)
     *  - Connected, user is active and reporter: 1. user (connected) 2. Activity Feed
     *
     * components
     *  - UserWidget: connected vs unconnected display
     *  - CurrentlyReporting: shown vs hidden
     *  - Activity Feed:  data, no data,
     *  -
     */

    return (
        <div className="viewContainer">
            { isConnected
                ? <Connected userAccount={userAccount} clickedAccount={clickedAccount} />
                : <Unconnected userAccount={userAccount} clickedAccount={clickedAccount} />
            }
        </div>
    )
}

export default Account;
