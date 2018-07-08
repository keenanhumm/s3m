// eslint-disable-next-line
import 'typeface-roboto';
import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import Home from './Home';
import Feed from './Feed';
import Add from './Add';
import { getChannels, createChannel } from '../requests';
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
    this.handleCreateChannel = this.handleCreateChannel.bind(this);
    this.state = {
      results: [],
      channels: [],
      vw: w
    };
  }

  async componentDidMount() {
    const channels = await getChannels();
    this.setState({ channels });
  }

  async handleCreateChannel(name) {
    createChannel({
      name
    }).then((channel) => {
      this.router.history.push(`/${channel._id}`);// eslint-disable-line
    });
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
  render() {
    const { channels } = this.state;
    if (!channels) {
      return <div>Loading...</div>;
    }
    const slowSearch = _.debounce((term) => {
      this.searchYT(term);
    }, 500); // eslint-disable-line
    return <BrowserRouter ref={(router) => {
          this.router = router;
        }}>
        <Switch>
          <Route exact path="/" render={props => <Home {...props} channels={this.state.channels} joinChannel={this.joinChannel} handleCreateChannel={this.handleCreateChannel} />} />
          <Route exact path="/:channelId" render={props => <Feed {...props} vw={this.state.vw} />} />
          <Route path="/:channelId/add" render={props => <Add {...props} channels={this.state.channels} results={this.state.results} searchYT={slowSearch} addPost={this.addPost} />} />
          <Route path="*" render={props => <Home {...props} channels={this.state.channels} joinChannel={this.joinChannel} handleCreateChannel={this.handleCreateChannel} />} />
        </Switch>
      </BrowserRouter>;
  }
}
