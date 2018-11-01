import React, { Component } from 'react';
//turning a component to a container by connecting react and redux
import { connect } from 'react-redux';
//Further connection of Actions to containers by importing select book
import { selectBook } from '../actions/index';
// this is a function that makes sure that the Action that is generated
//by the action creator ends up flowing through  all of diff reducers.
//we take the value from selectBook
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}
        >
          {book.title}
        </li>
      );
    });
  }
  render() {
    console.log(this.props.books);
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  //Whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  };
}
//anything returned from this function will end up as props
//on the bookList container
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, the result should be passed to all
  //of our reducers
  //dispatch means give this info to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}
// Promote BookList from a component to a container- it needs to know
//about this new dispatch method, selectBook. Make it available as a prop.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
