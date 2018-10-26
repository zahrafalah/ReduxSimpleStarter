import React from 'react';
import { Card } from 'semantic-ui-react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>LOading</div>;
  }
  const videoId = video.id.videoId;
  //   const url = 'https://www.youtube.com/embed/' + videoId;
  //Or lets use some ES6 magic that would be interpolation method by using back ticks
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <Card>
      <iframe src={url} />
      <Card.Content>
        <Card.Header>{video.snippet.title}</Card.Header>
        <Card.Description>{video.snippet.description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default VideoDetail;
