import React from 'react'
import UseInProjects from 'components/usetellor/useinprojects/UseInProjects'
import SampleUsing from 'components/usetellor/sampleusing/SampleUsing'
import ForSmartContracts from 'components/usetellor/forsmartcontracts/ForSmartContracts'
import StuckImplementing from 'components/usetellor/stuckimplementing/StuckImplementing'


const UseTellor = () => {
    return (
        <div className="viewContainer">
            <UseInProjects />
            <SampleUsing />
            <ForSmartContracts />
            <StuckImplementing />
        </div>
    )
}

export default UseTellor;