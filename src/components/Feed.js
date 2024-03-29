import _ from 'lodash';
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
    getChannel(channelId).then((channel) => {
      this.setState({ channel }, () => {
        const sortedPosts = _.orderBy(this.state.channel.posts, ['postedAt'], ['desc']);
        this.setState({
          channel: {
            ...channel,
            posts: sortedPosts
          }
        });
      });
    });
  }

  render() {
    const { channel } = this.state;
    if (!channel || !channel.name || !channel.posts) {
      return <div className="loading animated fadeIn">Loading...</div>;
    }
    return <div className="container">
        <div>
          <Header status="feed" channel={channel} />
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
