import React, { Component } from 'react';
import ChannelSearch from './ChannelSearch';
import ChannelResults from './ChannelResults';
import Header from './Header';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.onChannelSearchChange = this.onChannelSearchChange.bind(this);
    this.goToFeed = this.goToFeed.bind(this);
    this.state = {
      channelResults: [],
      searchText: ''
    };
  }

  goToFeed(channel) {
    this.props.history.push(`/${channel._id}`); // eslint-disable-line
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
    const noSpaces = text.replace(/ /g, '');
    const noAngLeft = noSpaces.replace(/</g, '');
    const noAngRight = noAngLeft.replace(/>/g, '');
    this.setState(() => ({
      searchText: noAngRight
    }), () => {
      this.filterChannels();
    });
  }
  render() {
    return <div className="container">
        <Header status='home' />
        <ChannelSearch
          searchText={this.state.searchText}
          channelResults={this.state.channelResults}
          channels={this.props.channels}
          onChannelSearchChange={this.onChannelSearchChange}
          handleCreateChannel={this.props.handleCreateChannel}
          goToFeed={this.goToFeed}
        />
        <ChannelResults
          channelResults={this.state.channelResults}
          searchText={this.state.searchText}
          joinChannel={this.props.joinChannel}
          goToFeed={this.goToFeed}
        />
      </div>;
  }
}
