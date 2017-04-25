import React from 'react';
import VideoRelated from './video_list_item';

const VideoReturn = (props) => {

    const vidItems = props.videos.map((vid) => {
       return (

           <VideoRelated
                onVidClick = {props.onVidClick}
                key = {vid.etag}
                vid = {vid} />
       );
    });

    return (
        <ul className = "col-md-4 list-group">
            {vidItems}
        </ul>

    );
}

export default VideoReturn;
