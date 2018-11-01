import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started</div>;
    }
    return (
      console.log('hi'),
      (
        <div>
          <h3>Details for:</h3>
          <p>{this.props.book.title}</p>
        </div>
      )
    );
  }
}
function mapStateToProps(state) {
  console.log(state);
  //return the reducer (check the global reducers in combineReducers at rootReducer)
  return { book: state.activeBook };
}

export default connect(mapStateToProps)(BookDetail);
