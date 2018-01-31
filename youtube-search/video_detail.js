import React from 'react';
import ReactDOM from 'react-dom';

const VideoDetail = (props)=>{
  const video = props.video;
  if(!video){
    return <div>Loading</div>
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div>
        <iframe className='video-video' src={url}></iframe>
      <div className='video-title'>{video.snippet.title}</div>
      <div className='video-descript'>{video.snippet.description}</div>
    </div>
  )
}

export default VideoDetail;
