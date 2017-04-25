import React from 'react';

const VideoRelated = (props) => {
    
    const video = props.vid;
    const onVidClick = props.onVidClick;
    const imgLink = video.snippet.thumbnails.default.url;
    
    return(
        <li onClick = {() => onVidClick(video)} className = "list-group-item">
            <div className = "video-list media">
                <div className = "media-left">
                    <img className = "media-object" src = {imgLink} />
                </div>
        
                <div className = "media-body">
                    <div className = "media-heading bold1">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
        
        
};

export default VideoRelated;