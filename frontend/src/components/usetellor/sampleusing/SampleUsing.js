import React from 'react';
import './SampleUsing.scss';
import { ReactComponent as Github } from 'assets/Github.svg';
import videoplaceholder from 'assets/video_placeholder.png';

const SampleUsing = () => {

    const githubrepo = "tellor-io/usingtellor";
    const docs = "https://docs.tellor.io/tellor/integration/usingtellor";

    return (
        <div className="SampleUsing">
            {/* 
                1. title
                2. description
                3. video
                4. button and github link
            */}
            <div className="SampleUsing__intro">
                <h2>sampleUsingTellor</h2>
                <p>
                    Lorem ipsum solor sit amet, consectetur adipiscing elit. Nullam semper efficitur cursus. Nam pellentesque ac sem a tempor. 
                    Nunc lorem lorem, sollicitudin vel cursus quis, maximus et metus. Nulla faucibus pellentesque blandit.
                </p>
            </div>
            <div className="SampleUsing__video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fNuAmpYzztg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="SampleUsing__actions">
                <button type="default" size="large" className="page-button " onClick={() => window.open(docs)}>
                    read the docs
                </button>
                <div className="SampleUsing__actions__github">
                    <a href={"http://github.com/"+githubrepo} target="_blank" rel="noopener noreferrer">
                        <Github className="icon" />
                        <span>sampleUsingTellor on Github</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SampleUsing;