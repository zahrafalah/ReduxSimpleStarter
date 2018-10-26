import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const VideoListItem = ({ video }) => {
  console.log(video);
  //or
  //const video = props.video;
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li>
      <Card>
        <Image src={imageUrl} />
        <Card.Content>
          <Card.Header>{video.snippet.title}</Card.Header>
          <Card.Description>{video.snippet.description}</Card.Description>
        </Card.Content>
      </Card>
    </li>
  );
};

export default VideoListItem;
