import React from 'react';
import { Embed, Card } from 'semantic-ui-react';

const VideoDetail = ({ video }) => {
  const videoId = video.id.videoId;
  //   const url = 'https://www.youtube.com/embed/' + videoId;
  //Or lets use some ES6 magic that would be interpolation method by using back ticks
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <Card>
    <Embed
      autoplay={false}
      color="white"
      hd={false}
      id="gJscrxxl_Bg"
      iframe={{
        allowFullScreen: true,
        style: {
          padding: 10
        },
        src={url}
      }}
      placeholder="/images/image-16by9.png"
      source="youtube"
    />
    <Card.Content>
          <Card.Header>{video.snippet.title}</Card.Header>
          <Card.Description>{video.snippet.description}</Card.Description>
    </Card.Content>
    </Card>
  );
};

export default VideoDetail;
