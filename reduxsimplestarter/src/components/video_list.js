import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = props => {
  //loop through the array of videos coming from API
  //for each element of videos the function will call with a single video
  //and we return a VideoListItem, and we will pass it a video as a property named video
  const videoItems = props.videos.map(video => {
    //
    return <VideoListItem onVideoSelect={props.onVideoSelect} key={video.etag} video={video} />;
  });

  //we are using JS variable so we need curly braces
  return <ul>{videoItems}</ul>;
};

export default VideoList;
