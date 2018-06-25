import React from 'react';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import Header from './Header';

class Add extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.currentChannel.posts === undefined) {
      this.props.history.push('/');
    }
    this.onSearchChange = this.onSearchChange.bind(this);
    this.state = { searchText: '' };
  }
  onSearchChange(e) {
    this.setState({
      searchText: e.target.value
    }, () => {
      this.props.searchYT(this.state.searchText);
    });
  }
  render() {
    if (this.props.currentChannel.posts === undefined) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container">
        <div>
          <Header status='add' />
        </div>
        <div>
          <SearchBox
            searchText={this.state.searchText}
            posts={this.props.currentChannel.posts}
            onSearchChange={this.onSearchChange}
          />
        </div>
        <div>
          <SearchResults
            posts={this.props.currentChannel.posts}
            results={this.props.results}
            addPost={this.props.addPost}
          />
        </div>
      </div>
    );
  }
}

export default Add;
