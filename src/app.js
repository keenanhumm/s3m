// eslint-disable-next-line
import 'typeface-roboto';
import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import Feed from './components/Feed';
import Add from './components/Add';

import './styles/styles.scss';

const API_KEY = 'AIzaSyC1fvi2fBD8cbk1kLXeM45Lk_ppVxclv-w';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.searchYT = this.searchYT.bind(this);
    this.addPost = this.addPost.bind(this);
    this.state = {
      posts: [],
      results: []
    };
  }
  searchYT(text) {
    YTSearch({
      key: API_KEY,
      term: text
    }, (data) => {
      this.setState({
        results: data
      });
    });
  }
  addPost(result) {
    this.setState(prevState => ({
      posts: [result, ...prevState.posts]
    }));
  }
  render() {
    const slowSearch = _.debounce((term) => { this.searchYT(term) }, 300);// eslint-disable-line
    return <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props => <Feed {...props} posts={this.state.posts} />} />
          <Route path="/add" render={props => <Add {...props} posts={this.state.posts} results={this.state.results} searchYT={slowSearch} addPost={this.addPost} />} />
          <Route path="*" render={props => <Feed {...props} posts={this.state.posts} />} />
        </Switch>
      </BrowserRouter>;
  }
}
// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById('app'));
