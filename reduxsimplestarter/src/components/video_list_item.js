import React from 'react';
import { Card, Image, List, Grid } from 'semantic-ui-react';

const VideoListItem = ({ video, onVideoSelect }) => {
  console.log(video);
  //or
  //const video = props.video;
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    //videoListItem takes the property of onVideoSelect and says
    //whenever i get clicked call that function with a video that I was passed
    //for instance each videoItem has a diff video and it ends up with the current video
    <Grid.Column>
      <Card
        onClick={() => onVideoSelect(video)}
        style={{ margin: '2em 0.5em', padding: '1em 1em' }}
      >
        <Image src={imageUrl} />
        <Card.Content>
          <Card.Header>{video.snippet.title}</Card.Header>
          {/* <Card.Description>{video.snippet.description}</Card.Description> */}
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default VideoListItem;
