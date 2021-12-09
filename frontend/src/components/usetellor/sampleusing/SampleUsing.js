import React from "react";
import "./SampleUsing.scss";
import { ReactComponent as Github } from "assets/Github.svg";
// import videoplaceholder from "assets/video_placeholder.png";

const SampleUsing = () => {
  const githubrepo = "tellor-io/sampleUsingTellor";
  const docs = "https://docs.tellor.io/tellor/integration/introduction";

  return (
    <div className="SampleUsing">
      {/* 
                1. title
                2. description
                3. video
                4. button and github link
            */}
      <div className="SampleUsing__intro">
        <h2 className="page-header-small">Setting up Tellor</h2>
        <p className="page-text">
          Tellor is completely open source, and can be set up using the
          instructions in our docs and by watching the video walkthrough below.
        </p>
      </div>
      <div className="SampleUsing__video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fNuAmpYzztg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="SampleUsing__actions">
        <button
          type="default"
          size="large"
          className="page-button "
          onClick={() => window.open(docs)}
        >
          read the docs
        </button>
        <div className="SampleUsing__actions__github">
          <a
            href={"http://github.com/" + githubrepo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="icon" />
            <span>sampleUsingTellor on Github</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SampleUsing;
