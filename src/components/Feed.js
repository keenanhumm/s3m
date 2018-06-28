import React from 'react';
import Header from './Header';
import Posts from './Posts';
import CurrentChannel from './CurrentChannel';
import channels from '../dummy/channels';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: channels.find(channel => channel.id === this.props.match.params.channelId)
    };
  }
  render() {
    if (this.state.channel === undefined) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container">
        <div>
          <Header status='feed' channelId={this.state.channel.id} />
        </div>
        <div>
          <CurrentChannel currentChannel={this.state.channel} />
        </div>
        <div>
          <Posts posts={this.state.channel.posts} vw={this.props.vw} />
        </div>
      </div>
    );
  }
}
