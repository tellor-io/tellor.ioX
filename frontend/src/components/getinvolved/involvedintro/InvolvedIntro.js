import React from 'react'

import './InvolvedIntro.scss'
import Github from 'assets/Github.svg';
import Discord from 'assets/Discord_white.svg';
import HeaderDesc from 'components/shared/HeaderDesc/HeaderDesc';

const InvolvedIntro = () => {    

    //urls
    const joinDiscord = '';
    const checkGithub = '';
    const readDocs = '';
    const becomeReporter = '';
    const startStaking = '';
    const readBlog = '';

    //headers/descriptions
    const developers = ["Developers", "Contribute to building the oracle, participate in community governance and help us make a better Tellor."]
    const projects = ["DeFi Projects", "Connect to Tellor’s oracle and supply your application with unstoppable data. Get started with a few lines of code."]
    const reporters = ["Data reporters", "Tellor’s oracle thrives on quality data. Earn rewards by supplying data points to smart contracts."]
    const holders = ["TRB holders", "Get involved in community decisions and shape the future Tellor. Stake TRB and earn rewards while participating in the monetary policy of Tellor."]
    const curiouis = ["Crypto-curious", "Learn more about oracles and the technologies behind blockchain infrastructure. Tellor is here to help with content and resources, even if you’re just getting started. "]
    
    return (
        <div className="InvolvedIntro">
            <div className="InvolvedIntro__intro">
                <h1 className="page-header">Get involved</h1>
                <p className="page-text">Tellor is open-source and structured as a decentralized autonomous organization. We are building Tellor as a community, we want you to join!</p>
                
                {/* join discord */}
                <button  size="large" className="page-button" onClick={() => window.open(joinDiscord)}>
                    <img src={Discord} alt="join-disc" className="icon"/>
                    join us on Discord
                </button>
                
            </div>
            <div className="InvolvedIntro__body">

                {/* developers */}
                <HeaderDesc title={developers[0]} description={developers[1]}/>
                <button  size="large" className="page-button" onClick={() => window.open(checkGithub)}>
                    <img src={Github} alt="check-git" className="icon"/>
                    check out the Github
                </button>


                {/* defi proejects */}
                <HeaderDesc title={projects[0]} description={projects[1]}/>
                <button  size="large" className="page-button" onClick={() => window.open(readDocs)}>
                    read the docs
                </button>


                {/* data reporters */}
                <HeaderDesc title={reporters[0]} description={reporters[1]}/>
                <button  size="large" className="page-button" onClick={() => window.open(becomeReporter)}>
                    become a reporter
                </button>


                {/* trb holders */}
                <HeaderDesc title={holders[0]} description={holders[1]}/>
                <button  size="large" className="page-button" onClick={() => window.open(startStaking)}>
                    start staking
                </button>


                {/* crypto curious */}
                <HeaderDesc title={curiouis[0]} description={curiouis[1]}/>
                <button  size="large" className="page-button" onClick={() => window.open(readBlog)}>
                    read the blog
                </button>

            </div>
        </div>
    )
}

export default InvolvedIntro;
