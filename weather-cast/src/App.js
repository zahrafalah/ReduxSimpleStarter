import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/search_bar';
import WeatherList from './containers/weather_list';
import { Grid, Segment, Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container>
        <Segment style={{ padding: '2em 0em' }}>
          <Grid container stackable>
            <Grid.Row>
              <Grid.Column textAlign="center" width={16}>
                <SearchBar />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '1em' }}>
          <Grid container>
            <Grid.Row>
              <Grid.Column textAlign="center" width={16}>
                <WeatherList />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

export default App;

{
  /* <div>
<SearchBar />
<WeatherList />
</div> */
}
