import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return <div>Posts Index</div>;
  }
}

// function mapStateToProps() {}
// we are not using mapStateToProps func, instead we are passing it as null
//s the second arg we need to pass the action creator itself inside an object rather than
export default connect(
  null,
  { fetchPosts }
)(PostsIndex);
//{ fetchPosts: fetchPosts } === { fetchPosts }
