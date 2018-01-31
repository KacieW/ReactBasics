import React from 'react';
import ReactDOM from 'react-dom';
import VideoListItem from './video_list_item';

const VideoList = (props)=>{
  const videoItem = props.videos.map((x, index)=>{
    return <VideoListItem key={index} onVideoClick ={props.onVideoSelect} video={x}/>
  });
  return (
    <div>
      <ul className='sideBar'>
        {videoItem}
      </ul>
    </div>
  );
}

export default VideoList;
