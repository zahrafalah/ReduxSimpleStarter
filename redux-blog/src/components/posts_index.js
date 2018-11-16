import React, { Component } from 'react';
//in order to connect to the redux
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import { Button, Grid, Header, Segment } from 'semantic-ui-react';
//this component act exactly like a classic anchore tag
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
  componentDidMount() {
    //this will automatically shows up in console as the first log and empty
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <Segment>
          <Grid.Row key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </Grid.Row>
        </Segment>
      );
    });
  }

  render() {
    console.log(this.props.posts);
    return (
      <Grid container textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
        <Grid.Column textAlign="center">
          <Grid.Row>
            <Segment>
              <Header>Posts: </Header>
            </Segment>
            <div>{this.renderPosts()}</div>
          </Grid.Row>
          <Grid.Row>
            <Button type="">
              <Link to="/posts/new">Add a new Post</Link>
            </Button>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}
//when ever we want to consume any thing in the application state we need this function:
function mapStateToProps(state) {
  return { posts: state.posts };
}
// if we are not using mapStateToProps func, instead we are passing it as null
//as the second arg we need to pass the action creator itself inside an object
export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostsIndex);
//{ fetchPosts: fetchPosts } === { fetchPosts }
