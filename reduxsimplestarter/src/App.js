import _ from 'lodash';
import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
import { Grid, Container, Segment } from 'semantic-ui-react';

const API_KEY = 'AIzaSyC4f-CdOH7kwmwpg3LsjPVgiWCyyMx95KU';
//call to YouTube API to call to get some info,
// the first arg would be a search term, we pass an obj with key and a term
// 2nd arg is the call back func
// YTSearch({ key: API_KEY, term: 'surfboards' }, function(data) {
//   console.log(data);
// });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    // YTSearch({ key: API_KEY, term: 'surfboards' }, videos => {
    //   this.setState({
    //     videos: videos,
    //     selectedVideo: videos[0]
    //   });
    // });
    this.videoSearch('surfboards');
  }
  // We refactored the youtube search into its own method
  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    //throttling(controlling) the videoSearch func. _ : means lodash.
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    console.log(this.state);
    return (
      <Container>
        <Segment style={{ padding: '2em 0em' }}>
          <Grid container stackable>
            <Grid.Row>
              <Grid.Column textAlign="center" width={16}>
                {/* we passed down the search method to the SearchBar, under the property of onsearchchange() */}
                {/* <SearchBar onSearchChange={term => this.videoSearch(term)} /> */}
                {/* in order to use the throttling method: passing the debounce version of the videoSearch */}
                <SearchBar onSearchChange={videoSearch} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        {/* <VideoDetail video={this.state.videos[0]} /> */}
        <Segment style={{ padding: '1em' }}>
          <Grid container>
            <Grid.Row>
              <Grid.Column textAlign="center" width={11}>
                <VideoDetail video={this.state.selectedVideo} />
              </Grid.Column>
              <Grid.Column textAlign="center" width={5}>
                <VideoList
                  videos={this.state.videos}
                  //a func that just updates app states. It takes the video and updates the selected video
                  //we pass this func as a property into video list
                  onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

export default App;
