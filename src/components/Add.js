import React from 'react';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import Header from './Header';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.state = { searchText: '' };
  }
  onSearchChange(e) {
    this.setState({
      searchText: e.target.value
    });
    this.props.searchYT(this.state.searchText);
  }
  render() {
    return (
      <div className="container">
        <div>
          <Header add={true} />
        </div>
        <div>
          <SearchBox
          searchText={this.state.searchText}
          posts={this.props.posts}
          onSearchChange={this.onSearchChange}
          />
        </div>
        <div>
          <SearchResults
          posts={this.props.posts}
          results={this.props.results}
          addPost={this.props.addPost}
          />
        </div>
      </div>
    );
  }
}

export default Add;
