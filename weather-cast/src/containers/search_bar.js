import React, { Component } from 'react';
import { Grid, Input } from 'semantic-ui-react';

class SearchBar extends Component {
  render() {
    return (
      <Grid textAlign="center">
        <Grid.Row>
          <Input />
        </Grid.Row>
      </Grid>
    );
  }
}

export default SearchBar;
