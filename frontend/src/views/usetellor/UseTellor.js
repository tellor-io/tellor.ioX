import React from 'react'
import UseInProjects from 'components/usetellor/useinprojects/UseInProjects'
import SampleUsing from 'components/usetellor/sampleusing/SampleUsing'
import ForSmartContracts from 'components/usetellor/forsmartcontracts/ForSmartContracts'
import StuckImplementing from 'components/usetellor/stuckimplementing/StuckImplementing'


const UseTellor = () => {
    return (
        <div className="viewContainer">
            {/* 
                1. <UseInProject />
                2. <SampleUsing />
                3. <ForSmartContracts />
                4. <StuckImplementing />
            */}
            <UseInProjects />
            <SampleUsing />
            
        </div>
    )
}

export default UseTellor;