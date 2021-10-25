import React from 'react'

import RequestIntro from 'components/requestnew/requestintro/RequestIntro';
import RequestDatapoints from 'components/requestnew/requestdatapoints/RequestDatapoints';


const RequestNew = () => {
    return (
        <div className="viewContainer">
            <RequestIntro />
            <RequestDatapoints />
        </div>
    )
}

export default RequestNew;
