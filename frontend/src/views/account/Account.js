import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import Connected from 'components/account/connected/Connected'
import Unconnected  from 'components/account/unconnected/Unconnected'

import Avatar from 'assets/AvatarDark.png';

const Account = () => {

    //Makes page load at top
    window.scrollTo(0, 0);

    // TODO: replace variables with redux data
    const isConnected = false;
    const userAccount = {
        address: '0x87e6987E',
        avatar: Avatar,
        trb: 127,
    };
    const clickedAccount = {
        address: useParams().address,
        avatar: Avatar,
        trb: 0,
    };
    const reporting = {
        current: "ETH/USD",
        total: 88,
        lastReported: "4 days ago"
    }
    const history = [{   
        key: 1,
        symbols: "BTC/USD 24h TWAP",
        value: "45636.824417",
        reporter: "0x112q6...987E",
        accountID: "0x112q6987E",
        date: "22/09/2021, 14:25:33",
        avatar: Avatar,
    },
    {   
        key: 2,
        symbols: "ETH/USD",
        value: "45636.824417",
        reporter: "0x44pl...8879",
        accountID: "0x44pl8879",
        date: "22/09/2021, 14:25:33",
        avatar: Avatar,
    },
    {   
        key: 3,
        symbols: "BTC/USD",
        value: "45636.824417",
        reporter: "0x112q6...987E",
        accountID: "0x112q6987E",
        date: "22/09/2021, 14:25:33",
        avatar: Avatar,
    },
    {   
        key: 4,
        symbols: "BNB/USD",
        value: "4536.824417",
        reporter: "0x44pl...8879",
        accountID: "0x44pl8879",
        date: "22/08/2021, 14:25:33",
        avatar: Avatar,
    },{   
        key: 5,
        symbols: "BTC/USD 24h TWAP",
        value: "45636.82417",
        reporter: "0x44pl...8879",
        accountID: "0x44pl8879",
        date: "22/09/2021, 14:25:33",
        avatar: Avatar,
    },
    {   
        key: 6,
        symbols: "ETH/USD",
        value: "4566.824417",
        reporter: "0x87e6...981B",
        accountID: "0x87e6981B",
        date: "22/10/2021, 14:25:33",
        avatar: Avatar,
    },
    {   
        key: 7,
        symbols: "BTC/USD",
        value: "45636.82441",
        reporter: "0x44pl...8879",
        accountID: "0x44pl8879",
        date: "21/09/2021, 14:25:33",
        avatar: Avatar,
    },
    {   
        key: 8,
        symbols: "BNB/USD",
        value: "45636.824417",
        reporter: "0x44pl...8879",
        accountID: "0x44pl8879",
        date: "24/09/2021, 14:25:33",
        avatar: Avatar,
    },
    {   
        key: 9,
        symbols: "BNB/USD",
        value: "456.824417",
        reporter: "0x87e6...981B",
        accountID: "0x87e6981B",
        date: "22/09/2021, 14:25:33",
        avatar: Avatar,
    },{   
        key: 10,
        symbols: "BTC/USD 24h TWAP",
        value: "45636.827",
        reporter: "0x44pl...8879",
        accountID: "0x44pl8879",
        date: "22/09/2021, 14:25:33",
        avatar: Avatar,
    },
    {   
        key: 11,
        symbols: "ETH/USD",
        value: "536.824417",
        reporter: "0x44pxxl...8879",
        accountID: "0x44pl8879",
        date: "22/09/2021, 14:25:33",
        avatar: Avatar,
    },
    {   
        key: 12,
        symbols: "BTC/USD",
        value: "45636.8417",
        reporter: "0x44pl...8879",
        accountID: "0x44pl8879",
        date: "22/09/2021, 14:25:33",
        avatar: Avatar,
    },]



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
                ? <Connected 
                    userAccount={userAccount} 
                    clickedAccount={clickedAccount} />
                : <Unconnected 
                    userAccount={userAccount} 
                    clickedAccount={clickedAccount} 
                    reporting={reporting}
                    history={history}/>
            }
        </div>
    )
}

export default Account;
