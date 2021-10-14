import React from 'react'
import UseInProjects from 'components/usetellor/useinprojects/UseInProjects'


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
        </div>
    )
}

export default UseTellor;