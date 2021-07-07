import React from 'react'


const VideoDetail = ({ video }) => {
    if(!video) {
        return(
            <div>
                Loading.....
            </div>
        )
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div className="video-detail">
            <div className="ui embed">
                <iframe title="video player" src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>  
                {video.snippet.description}    
            </div>
        </div>
    )
}


export default VideoDetail