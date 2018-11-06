import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import { Grid, Button, Segment, Form, Input } from 'semantic-ui-react';

//to create a controlled component we need to set state
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    //this: is the instance of searchBar that has a func called handleChange.
    //we are overriding the local func(this.handleChange) by binding this with it.
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    //we will fetch weather data by calling the action creator
    this.props.fetchWeather(this.state.term);
    //in order to empty the search bar after we submit:
    //it will cause the component to rerender
    this.setState({ term: '' });
  }

  render() {
    return (
      <Grid textAlign="center">
        <Input
          fluid
          placeholder="Search for the weather forecast of your favorite city"
          style={{
            width: '60%',
            float: 'left'
          }}
          value={this.state.term}
          onChange={this.handleChange}
        />
        <Button type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Grid>
    );
  }
}

//in order to hook up our action creator with our search button with this:
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

//as oppose to previous exports we will pass null cz we have to pass mapDispatchToProps as the 2nd arg.
//also we dont need to pass any state in here, we dont need it so we just will pass null.
export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
