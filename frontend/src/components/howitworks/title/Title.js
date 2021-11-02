import React from 'react'

import './Title.scss'
import videoplaceholder from 'assets/video_placeholder.png'; 

const Title = () => {    
    return (
        <div className="Title">
            <h1 className="page-header">How tellor’s <span className="highlighted">unstoppable oracle</span> works</h1>
            <div className="Title__video">
                <video poster={videoplaceholder}>
                    {/* 
                        Todo: Insert mp4, webm, and video link
                    */}
                    <source src="myVideo.mp4" type="video/mp4" />
                    <source src="myVideo.webm" type="video/webm" />
                    <p>
                        Your browser doesn't support HTML5 video. Here is a 
                        <a href="myVideo.mp4">link to the video</a> instead.
                    </p>
                </video>
            </div> 
        </div>
    )
}

export default Title;
