import React from 'react';
import Header from './Header';
import Posts from './Posts';
import CurrentChannel from './CurrentChannel';
import { getChannel } from '../requests';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: {}
    };
  }

  async componentDidMount() {
    const { channelId } = this.props.match.params;
    const channel = await getChannel(channelId);
    this.setState({ channel });
  }

  render() {
    const { channel } = this.state;
    if (!channel) {
      return <div>Loading...</div>;
    }
    return <div className="container">
        <div>
          <Header status="feed" channelId={channel.id} />
        </div>
        <div>
          <CurrentChannel channel={channel} />
        </div>
        <div>
          <Posts posts={channel.posts} vw={this.props.vw} />
        </div>
      </div>;
  }
}
