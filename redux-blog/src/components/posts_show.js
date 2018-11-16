import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Button, Grid, Segment, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
  //ComponentDidMount would be automatically call once the component is rendered to the dom
  componentDidMount() {
    // if (!this.props.post) {
    const { id } = this.props.match.params;
    //the action creator will fetch the post and will add it into post piece of state
    //we then need to get out the post from state and pass it to the component with mapStateToProps func
    this.props.fetchPost(id);
    // }
  }
  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading...</div>;
    }
    return (
      <Grid container textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
        <Grid.Column textAlign="center">
          <Grid.Row>
            <Segment>
              <Header>Title: {post.title}</Header>
              <Header>Tag: {post.categories}</Header>
              <Header>Content: {post.content}</Header>
            </Segment>
            <Segment>
              <Button>
                <Link to="/">Back To Index</Link>
              </Button>
              <Button onClick={this.onDeleteClick.bind(this)}>Delete</Button>
            </Segment>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}

//state={posts} --> list of posts
// function mapStateToProps({ posts }) {
//     return {posts}
// }   Or

//by passing the second arg(ownProps) we are setting the only props the we want to go into the component
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(
  mapStateToProps,
  { fetchPost, deletePost }
)(PostsShow);
