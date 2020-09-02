import React from 'react';

const Video = (props) => {
    const {videoId} = props.video.id;
    if(!videoId)
    return ''
    

    console.log(videoId);
    return (
        <div>
            <iframe width="420" height="315"
            src={`https://www.youtube.com/embed/${videoId}`}>
            </iframe>
        </div>
    );
}

export default Video;
