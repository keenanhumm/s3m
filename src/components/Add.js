import React from 'react';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import Header from './Header';
import channels from '../dummy/channels';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.state = {
      channel: channels.find(channel => channel.id === this.props.match.params.channelId),
      searchText: ''
    };
  }
  onSearchChange(e) {
    this.setState({
      searchText: e.target.value
    }, () => {
      this.props.searchYT(this.state.searchText);
    });
  }
  render() {
    if (this.state.channel === undefined) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container">
        <div>
          <Header status='add' channelId={this.state.channel.id} />
        </div>
        <div>
          <SearchBox
            searchText={this.state.searchText}
            posts={this.state.channel.posts}
            onSearchChange={this.onSearchChange}
          />
        </div>
        <div>
          <SearchResults
            posts={this.state.channel.posts}
            results={this.props.results}
            addPost={this.props.addPost}
          />
        </div>
      </div>
    );
  }
}

export default Add;
