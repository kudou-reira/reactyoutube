import React from 'react';

const VideoProperties = ({vid}) => {
    
    if(vid === null){
        return <div>Now Loading...</div>;
    }
    
    const videoID = vid.id.videoId;
    const videoURL = "https://www.youtube.com/embed/" + videoID;
    
    return(
  
      <div className = "video-detail col-md-8">
          <div className = "embed-responsive embed-responsive-16by9">
              <iframe className = "embed-responsive-item" src = {videoURL}></iframe>
          </div>
      
          <div className = "details">
              <div className = "bold">{vid.snippet.title}</div>
              <div>{vid.snippet.description}</div>
          </div>
      </div>
      
    );  
};

export default VideoProperties;