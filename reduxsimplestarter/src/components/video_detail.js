import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';

const iframeStyle = {
  width: '60em',
  height: '30em'
};

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>LOading</div>;
  }
  const videoId = video.id.videoId;
  //   const url = 'https://www.youtube.com/embed/' + videoId;
  //Or lets use some ES6 magic that would be interpolation method by using back ticks
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <Segment style={{ padding: '2em 2em' }}>
      <Grid>
        <Grid.Row>
          <iframe src={url} style={iframeStyle} allowFullScreen={true} />
        </Grid.Row>
        <Grid.Row>
          <Header>{video.snippet.title}</Header>
        </Grid.Row>
        <Grid.Row>
          <p>{video.snippet.description}</p>
        </Grid.Row>
      </Grid>

      {/* <div>
        <iframe src={url} />
      </div>
      <div>{video.snippet.title}</div>
      <div>{video.snippet.description}</div> */}
    </Segment>
  );
};

export default VideoDetail;
