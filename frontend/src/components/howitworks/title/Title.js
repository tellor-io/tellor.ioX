import React from 'react'

import './Title.scss'

const Title = () => {    
    return (
        <div className="Title">
            <h1 className="page-header">How tellor’s <span className="highlighted">unstoppable oracle</span> works</h1>
            <div className="Title__video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/LlSvqQwVOgE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div> 
        </div>
    )
}

export default Title;
