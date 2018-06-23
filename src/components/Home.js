import React, { Component } from 'react';
import ChannelSearch from './ChannelSearch';
import ChannelResults from './ChannelResults';
import Header from './Header';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.onChannelSearchChange = this.onChannelSearchChange.bind(this);
    this.goToChannel = this.goToChannel.bind(this);
    this.state = {
      channelResults: [],
      searchText: ''
    };
  }

  goToChannel() {
    this.props.history.push('/feed');
  }

  filterChannels() {
    if (this.state.searchText === '') {
      this.setState(() => ({
        channelResults: []
      }));
    } else {
      const results = this.props.channels.filter((channel) => {// eslint-disable-line
        return channel.name.toLowerCase().includes(this.state.searchText.toLowerCase());
      });
      this.setState(() => ({
        channelResults: results
      }));
    }
  }
  onChannelSearchChange(text) {
    this.setState(() => ({
      searchText: text
    }), () => {
      this.filterChannels();
    });
  }
  render() {
    return <div className="container">
        <Header status='home' />
        <ChannelSearch
          searchText={this.state.searchText}
          channels={this.props.channels}
          onChannelSearchChange={this.onChannelSearchChange}
        />
        <ChannelResults
          channelResults={this.state.channelResults}
          searchText={this.state.searchText}
          joinChannel={this.props.joinChannel}
          goToChannel={this.goToChannel}
        />
      </div>;
  }
}
