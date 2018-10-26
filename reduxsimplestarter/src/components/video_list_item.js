import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const VideoListItem = ({ video, onVideoSelect }) => {
  console.log(video);
  //or
  //const video = props.video;
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    //videoListItem takes the property of onVideoSelect and says
    //whenever i get clicked call that function with a video that I was passed
    //for instance each videoItem has a diff video and it ends up with the current video
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
