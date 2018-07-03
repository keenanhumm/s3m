import React from 'react';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import Header from './Header';
import CurrentChannel from './CurrentChannel';
import { getChannel, createPost } from '../requests';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.addPost = this.addPost.bind(this);
    this.state = {
      channel: {},
      searchText: ''
    };
  }

  async addPost(result) {
    createPost({
      title: result.snippet.title,
      videoId: result.id.videoId,
      channelId: this.state.channel.id
    }).then((post) => {
      this.props.history.push(`/${post.channel.id}`);
    });
  }

  async componentDidMount() {
    const { channelId } = this.props.match.params;
    const channel = await getChannel(channelId);
    this.setState({ channel });
  }

  onSearchChange(e) {
    this.setState(
      {
        searchText: e.target.value
      },
      () => {
        this.props.searchYT(this.state.searchText);
      }
    );
  }
  render() {
    const { channel, searchText } = this.state;
    if (!channel || !channel.name) {
      return <div className="loading">Loading...</div>;
    }
    return (
      <div className="container">
        <div>
          <Header status="add" channel={channel} />
        </div>
        <div>
          <CurrentChannel channel={channel} />
        </div>
        <div>
          <SearchBox
            searchText={searchText}
            posts={channel.posts}
            onSearchChange={this.onSearchChange}
          />
        </div>
        <div>
          <SearchResults
            posts={channel.posts}
            results={this.props.results}
            addPost={this.addPost}
          />
        </div>
      </div>
    );
  }
}

export default Add;
