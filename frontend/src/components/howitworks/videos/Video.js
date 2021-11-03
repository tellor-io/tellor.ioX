import React from 'react'

import './Video.scss'
import videoplaceholder from 'assets/video_placeholder.png' 
import PropTypes from 'prop-types'

const Video = (props) => {    

    const {
        iframe,
        linkText,
        linkUrl
    } = props;

    return (
        <div className="Video">
            { iframe }
            <a href={linkUrl} target='_blank'>
                <h3>{linkText}</h3>
            </a>
        </div>
    )
}

Video.propTypes = {
    iframe: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    linkUrl: PropTypes.string.isRequired
}
export default Video;
