import React, { Component } from 'react';
import { Grid, Input, Form, Button, Segment } from 'semantic-ui-react';

//to create a controlled component we need to set state
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    //this: is the instance of searchBar that has a func called handleChange.
    //we are overriding the local func(this.handleChange) by binding this with it.
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }
  render() {
    return (
      <Grid textAlign="center">
        <Grid.Row>
          <Segment inverted>
            <Form inverted>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  placeholder="Search for the weather forecast of your favorite city"
                  value={this.state.term}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </Segment>
        </Grid.Row>
      </Grid>
    );
  }
}

export default SearchBar;
