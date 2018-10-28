import React from 'react';
import VideoListItem from './video_list_item';
import { Grid, GridRow } from 'semantic-ui-react';

const VideoList = props => {
  //loop through the array of videos coming from API
  //for each element of videos the function will call with a single video
  //and we return a VideoListItem, and we will pass it a video as a property named video
  const videoItems = props.videos.map(video => {
    //videolist takes the property of onVideoSelect and it passes it in to videoListItem
    return <VideoListItem onVideoSelect={props.onVideoSelect} key={video.etag} video={video} />;
  });

  //we are using JS variable so we need curly braces
  return <ul>{videoItems}</ul>;
};

export default VideoList;
