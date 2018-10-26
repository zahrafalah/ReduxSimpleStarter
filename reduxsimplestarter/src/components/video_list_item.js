import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const VideoListItem = ({ video, onVideoSelect }) => {
  console.log(video);
  //or
  //const video = props.video;
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => onVideoSelect(video)}>
      <div>
        <img src={imageUrl} />
        <div>
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
