import React, { useState } from 'react'

// Connected import  from 'components/address/connected/Connected'
// Unconnected  from 'components/address/unconnected/Unconnected'

const Account = () => {

    /*
     * - "/live" onClick on open Address with url param 
     * - components - not connected : user (not connected), reporting on, activity feed (see case for empty), reporting history (with and without data)
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
            HELLOOOO THEREEEE
        </div>
    )
}

export default Account;
