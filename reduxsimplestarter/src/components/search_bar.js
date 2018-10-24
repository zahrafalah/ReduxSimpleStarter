import React, { Component } from 'react';

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
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />
        {/* value of the state : {this.state.term} */}
      </div>
    );
  }
}

export default SearchBar;
