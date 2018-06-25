// eslint-disable-next-line
import 'typeface-roboto';
import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import YTSearch from 'youtube-api-search';
import uuid from 'uuid';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import Home from './components/Home';
import Feed from './components/Feed';
import Add from './components/Add';
import channels from './dummy/channels';

import './styles/styles.scss';

const API_KEY = 'AIzaSyC1fvi2fBD8cbk1kLXeM45Lk_ppVxclv-w';
const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

class App extends React.Component {
  constructor(props) {
    super(props);
    const w = Math.max(
      document.documentElement.clientWidth, // eslint-disable-line
      window.innerWidth || 0 // eslint-disable-line
    );
    const h = Math.max(
      document.documentElement.clientHeight, // eslint-disable-line
      window.innerHeight || 0 // eslint-disable-line
    );
    this.searchYT = this.searchYT.bind(this);
    this.addPost = this.addPost.bind(this);
    this.joinChannel = this.joinChannel.bind(this);
    this.createChannel = this.createChannel.bind(this);
    this.state = {
      results: [],
      channels,
      currentChannel: {},
      vw: w
    };
  }
  createChannel(name) {
    const newChannel = { id: uuid(), name, posts: [] };
    this.setState(
      prevState => ({
        channels: [...prevState.channels, newChannel]
      }),
      () => {
        this.joinChannel(newChannel);
      }
    );
  }
  searchYT(text) {
    YTSearch(
      {
        key: API_KEY,
        term: text
      },
      (data) => {
        this.setState({
          results: data
        });
      }
    );
  }
  joinChannel(channel) {
    this.setState(() => ({
      currentChannel: channel
    }));
  }
  addPost(result) {
    const post = {
      etag: result.etag,
      id: result.id.videoId,
      title: result.snippet.title
    };
    this.setState(prevState => ({
      currentChannel: {
        ...prevState.currentChannel,
        posts: [post, ...prevState.currentChannel.posts]
      }
    }));
  }
  render() {
    const slowSearch = _.debounce((term) => {
      this.searchYT(term);
    }, 300); // eslint-disable-line
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home
                  {...props}
                  channels={this.state.channels}
                  joinChannel={this.joinChannel}
                  createChannel={this.createChannel}
                />
              )}
            />
            <Route
              path="/feed"
              render={props => (
                <Feed
                  {...props}
                  channels={this.state.channels}
                  currentChannel={this.state.currentChannel}
                  vw={this.state.vw}
                />
              )}
            />
            <Route
              path="/add"
              render={props => (
                <Add
                  {...props}
                  channels={this.state.channels}
                  currentChannel={this.state.currentChannel}
                  results={this.state.results}
                  searchYT={slowSearch}
                  addPost={this.addPost}
                />
              )}
            />
            <Route
              path="*"
              render={props => (
                <Home
                  {...props}
                  channels={this.state.channels}
                  joinChannel={this.joinChannel}
                  createChannel={this.createChannel}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}
// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById('app'));
