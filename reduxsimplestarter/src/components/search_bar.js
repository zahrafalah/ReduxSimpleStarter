import React, { Component } from 'react';
import { Grid, Input, Icon, Container, GridColumn, GridRow } from 'semantic-ui-react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }
  // handleChange(event) {
  //   console.log(event.target.value);
  // }
  handleChange(term) {
    this.setState({ term });
    this.props.onSearchChange(term);
  }
  render() {
    // return <input onChange={this.handleChange} />;
    //or
    // return <input onChange={event => console.log(event.target.value)} />;
    return (
      <Grid>
        <a>
          <Icon size="large" color="purple" name="video" />
        </a>
        <h>YouTuPia</h>
        <Input
          value={this.state.term}
          // onChange={event => this.setState({ term: event.target.value })}
          onChange={event => this.handleChange(event.target.value)}
          loading
          icon="user"
          placeholder="Search In YouTube ..."
        />
      </Grid>

      //  value of the state : {this.state.term}
    );
  }
}

export default SearchBar;
