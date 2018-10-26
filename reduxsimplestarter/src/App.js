import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
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
    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'surfboards' }, videos => {
      this.setState({ videos });
      //this.setState({videos : videos })jsx syntax
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
