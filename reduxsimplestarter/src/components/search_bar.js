import React, { Component } from 'react';
import { Grid, Input, Icon } from 'semantic-ui-react';

const aStyle = {
  fontSize: '2em',
  fontFamily: 'Lato',
  color: 'black',
  fontWeight: '700'
};

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
  //has two purposes or two function inside of it.
  // 1 is just setting state for the new term and
  //2d:it fires of the call back function(onSearchChange func).
  handleChange(term) {
    this.setState({ term });
    this.props.onSearchChange(term);
  }
  render() {
    // return <input onChange={this.handleChange} />;
    //or
    // return <input onChange={event => console.log(event.target.value)} />;
    return (
      <Grid textAlign="center">
        <Grid.Row>
          <a style={aStyle}>
            <Icon size="large" color="red" name="youtube play" />
            YouTuPia
            {/* <Header as="h3" style={{ fontSize: '2em' }}>
              YouTuPia
            </Header> */}
          </a>
        </Grid.Row>
        <Grid.Row>
          <Input
            style={{
              width: '75%'
            }}
            className="search-bar"
            value={this.state.term}
            // onChange={event => this.setState({ term: event.target.value })}
            //we refactored the onchange event. so whenever the content of the input change now cause the handleChange() with the new input value.
            onChange={event => this.handleChange(event.target.value)}
            icon="search"
            placeholder="Search In YouTube ..."
          />
        </Grid.Row>
      </Grid>

      //  value of the state : {this.state.term}
    );
  }
}

export default SearchBar;
