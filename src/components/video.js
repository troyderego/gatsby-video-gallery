import React from "react"

const Video = ({ videoSrURL, videoTitle }) => (
    <div className="video">
        <iframe
            src={videoSrURL}
            title={videoTitle}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            moallowfullscreen="true"
            allowFullScreen
        />
    </div>
)

export default Video