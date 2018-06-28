// eslint-disable-next-line
import 'typeface-roboto';
import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import uuid from 'uuid';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import Home from './Home';
import Feed from './Feed';
import Add from './Add';
import channels from '../dummy/channels';
import '../styles/styles.scss';

const API_KEY = 'AIzaSyC1fvi2fBD8cbk1kLXeM45Lk_ppVxclv-w';

export default class App extends React.Component {
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
    this.createChannel = this.createChannel.bind(this);
    this.state = {
      results: [],
      channels,
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
  addPost(result) {
    const post = {
      id: uuid(),
      videoId: result.id.videoId,
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
    return <BrowserRouter ref={(router) => { this.router = router; }}>
        <Switch>
          <Route exact path="/" render={props => <Home {...props} channels={this.state.channels} joinChannel={this.joinChannel} createChannel={this.createChannel} />} />
          <Route exact path="/:channelId" render={props => <Feed {...props} channels={this.state.channels} currentChannel={this.state.currentChannel} vw={this.state.vw} />} />
          <Route path="/:channelId/add" render={props => <Add {...props} channels={this.state.channels} currentChannel={this.state.currentChannel} results={this.state.results} searchYT={slowSearch} addPost={this.addPost} />} />
          <Route path="*" render={props => <Home {...props} channels={this.state.channels} joinChannel={this.joinChannel} createChannel={this.createChannel} />} />
        </Switch>
      </BrowserRouter>;
  }
}
