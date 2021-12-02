import React from "react";
import "./ForSmartContracts.scss";

const ForSmartContracts = () => {
  const docs = "https://tellor-io.github.io/telliot-core/";

  return (
    <div className="ForSmart">
      <div className="ForSmart__intro">
        <h2 className="page-header-small">Tellor for smart contracts</h2>
        <p className="page-text">
          {" "}
          It takes 3 lines of code to integrate with Tellor for decentralized,
          trustless data in your smart contracts.
        </p>
      </div>
      <div className="ForSmart__code">
        <code>
          <pre className="code-import">
            <div className="highlight" />
            import './UsingTellor.sol';
          </pre>
          <div className="highlight" />
          <pre className="single-indent">
            contract YourContract is UsingTellor{"{"}
          </pre>
          <div className="highlight" />
          <pre className="double-indent">
            constructor(address payable _tellorContract)
            UsingTellor(_tellorContract) {"{"}
          </pre>
          <div className="highlight" />
          <pre className="double-indent">{"}"}</pre>
          <div className="highlight" />
          <pre className="code-function">
            <div className="highlight" />
            <pre className="special-indent">
              function getLastValue(bytes32 _queryId)
            </pre>
            <div className="highlight" />
            <pre className="single-indent">public</pre>
            <div className="highlight" />
            <pre className="single-indent">view</pre>
            <div className="highlight" />
            <pre className="single-indent">
              returns (bool ifRetrieve, bytes memory value, uint256
              _timestampRetrieved)
            </pre>
          </pre>
          <div className="highlight" />
          <pre className="double-indent">{"{"}</pre>
          <div className="highlight" />
          <pre className="triple-indent">return getCurrentValue(_queryId);</pre>
          <div className="highlight" />
          <pre className="double-indent">{"}"}</pre>
          <div className="highlight" />
          <pre className="ending-brace">{"}"}</pre>
        </code>
      </div>
      <div className="ForSmart__actions">
        {/* <button
          type="default"
          size="large"
          className="page-button "
          onClick={() => window.open(docs)}
        >
          read the docs
        </button> */}
      </div>
    </div>
  );
};

export default ForSmartContracts;
