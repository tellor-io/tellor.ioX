import React from 'react';
import './ForSmartContracts.scss';
import codeblock from 'assets/forsmart_codeblock.png';

const ForSmartContracts = () => {

    const docs = "https://docs.tellor.io/tellor/integration/user-functions";

    return (
        <div className="ForSmart">
            <div className="ForSmart__intro">
                <h2>Tellor for smart contracts</h2>
                <p> It takes 3 lines of code to integrate with Tellor for decentralized, trustless data in your smart contracts.</p>
            </div>
            <div className="ForSmart__code">
                <img src={codeblock} alt="code"/>
                {/* <code>
                    <pre>
                        import './UsingTellor.sol';
                        
                    </pre>
                    <pre>
                        contract YourContract is UsingTellor{"{"}
                    </pre>
                    <pre>    
                            constructor(addresss _userContract) UsingTellor(_userContract) ublic {"{"}
                    </pre>
                        {"}"}
                    <pre>
                        function getLastValue(uint256 _requestId) public view returns (bool ifRetrieve,)
                    </pre>
                    <pre>
                        
                    </pre>
                    {"}"}
                </code> */}
            </div>
            <div className="ForSmart__actions">
                <button type="default" size="large" onClick={() => window.open(docs)}>
                    read the docs 
                </button>
            </div>
        </div>
    )
}

export default ForSmartContracts;