import React, { Component } from 'react';
import './App.css';
import { Grid, Segment, Container } from 'semantic-ui-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Welcome To My <code>React-Redux</code> Blog
          </p>
          <Container>
            <Segment raised style={{ padding: '2em 2em' }}>
              <Grid container>
                <Grid.Row>
                  <Grid.Column textAlign="center" width={16}>
                    <BrowserRouter>
                      <div>
                        <Switch>
                          <Route path="/posts/new" component={PostsNew} />
                          <Route path="/posts/:id" component={PostsShow} />
                          <Route path="/" component={PostsIndex} />
                        </Switch>
                      </div>
                    </BrowserRouter>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
