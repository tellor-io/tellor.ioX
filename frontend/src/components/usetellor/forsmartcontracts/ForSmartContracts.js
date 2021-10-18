import React from 'react';
import './ForSmartContracts.scss';

const ForSmartContracts = () => {

    const docs = "https://docs.tellor.io/tellor/integration/user-functions";

    return (
        <div className="ForSmart">
            <div className="ForSmart__intro">
                <h2>Tellor for smart contracts</h2>
                <p> It takes 3 lines of code to integrate with Tellor for decentralized, trustless data in your smart contracts.</p>
            </div>
            <div className="ForSmart__code">
                <code>
                    <pre className="code-import">
                        import './UsingTellor.sol';
                    </pre>
                    <pre className="single-indent">
                        contract YourContract is UsingTellor{"{"}
                    </pre>
                    <pre className="double-indent">    
                            constructor(addresss _userContract) UsingTellor(_userContract) public {"{"}
                    </pre>
                    <pre className="double-indent">
                        {"}"}
                    </pre>
                    <pre className="code-function">
                        function getLastValue(uint256 _requestId) public view returns (bool ifRetrieve,)
                    </pre>
                    <pre className="double-indent">
                        uint256 value, uint256 _timestampeRetrieved) {"{"}
                    </pre>
                    <pre className="triple-indent">
                        return getCurrentValue(_requestId);
                    </pre>
                    <pre className="double-indent">
                        {"}"}
                    </pre>
                    <pre className="ending-brace">
                        {"}"}
                    </pre>
                </code>
            </div>
            <div className="ForSmart__actions">
                <button type="default" size="large" className="bigbutton  blackbutton fxw" onClick={() => window.open(docs)}>
                    read the docs 
                </button>
            </div>
        </div>
    )
}

export default ForSmartContracts;