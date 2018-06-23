// eslint-disable-next-line
import 'typeface-roboto';
import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import Home from './components/Home';
import Feed from './components/Feed';
import Add from './components/Add';

import './styles/styles.scss';

const API_KEY = 'AIzaSyC1fvi2fBD8cbk1kLXeM45Lk_ppVxclv-w';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.searchYT = this.searchYT.bind(this);
    this.addPost = this.addPost.bind(this);
    this.joinChannel = this.joinChannel.bind(this);
    this.state = {
      posts: [],
      results: [],
      channels: [
        { id: 1, name: 'the_fam' },
        { id: 2, name: 'hooperz_only' },
        { id: 3, name: 'hb4l' }
      ],
      currentChannel: {}
    };
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
    this.setState(prevState => ({
      posts: [result, ...prevState.posts]
    }));
  }
  render() {
    const slowSearch = _.debounce((term) => {
      this.searchYT(term);
    }, 300); // eslint-disable-line
    return <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props => <Home {...props} posts={this.state.posts} channels={this.state.channels} joinChannel={this.joinChannel} />} />
          <Route path="/feed" render={props => <Feed {...props} posts={this.state.posts} currentChannel={this.state.currentChannel} />} />
          <Route path="/add" render={props => <Add {...props} posts={this.state.posts} results={this.state.results} searchYT={slowSearch} addPost={this.addPost} />} />
          <Route path="*" render={props => <Home {...props} channels={this.state.channels} joinChannel={this.joinChannel} />} />
        </Switch>
      </BrowserRouter>;
  }
}
// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById('app'));
