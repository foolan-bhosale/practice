import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer(props) {
    console.log(props.video);

    return <ReactPlayer controls url={props.videoUrl} />;
}

export default VideoPlayer;
