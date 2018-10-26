import React, { Component } from 'react';
import { Grid, Input, Container, GridColumn, GridRow } from 'semantic-ui-react';

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
  render() {
    // return <input onChange={this.handleChange} />;
    //or
    // return <input onChange={event => console.log(event.target.value)} />;
    return (
      <Container>
        <Grid textAlign="center">
          <GridRow>
            <GridColumn>
              <Input
                value={this.state.term}
                onChange={event => this.setState({ term: event.target.value })}
                loading
                icon="user"
                placeholder="Search..."
              />
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>

      //  value of the state : {this.state.term}
    );
  }
}

export default SearchBar;
