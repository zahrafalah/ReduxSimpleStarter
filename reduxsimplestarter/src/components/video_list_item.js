import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const aStyle = {
  fontSize: '1em',
  fontFamily: 'Lato',
  color: 'black',
  fontWeight: '700',
  lineHeight: '1.28571429em'
};

const VideoListItem = ({ video, onVideoSelect }) => {
  console.log(video);
  //or
  //const video = props.video;
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    //videoListItem takes the property of onVideoSelect and says
    //whenever i get clicked call that function with a video that I was passed
    //for instance each videoItem has a diff video and it ends up with the current video

    <Card onClick={() => onVideoSelect(video)} style={{ padding: '0.5em 0.5em' }} color="red">
      <Card.Content textAlign="center">
        <Image
          centered
          rounded
          floated="left"
          size="tiny"
          src={imageUrl}
          style={{ marginRight: '1em' }}
        />
        <div style={aStyle}>
          <Card.Header>{video.snippet.title}</Card.Header>
          {/* <Card.Description>{video.snippet.description}</Card.Description> */}
        </div>
      </Card.Content>
    </Card>
  );
};

export default VideoListItem;
