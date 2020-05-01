import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer(props) {
    console.log(props.video);

    return (
        <div className='player-wrapper'>
            <ReactPlayer controls url={props.videoUrl} width='100%' height='100%' className='react-player' />
        </div>
    );
}

export default VideoPlayer;
