import React from 'react';
import ReactDOM from 'react-dom';

const VideoListItem = (props)=>{
  const video = props.video;
  const onVideoSelect = props.onVideoClick;
  const imageUrl = video.snippet.thumbnails.default.url;
  return(
    <li className='video-list-item' onClick = {()=>{return onVideoSelect(video)}}>
      <div className='video-img'>
        <img src = {imageUrl} />
      </div>
      <div className='video-title'>
        {video.snippet.title}
      </div>
    </li>
  )
}
export default VideoListItem;
