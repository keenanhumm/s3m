// eslint-disable-next-line
import 'typeface-roboto';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import Feed from './components/Feed';
import Add from './components/Add';

import './styles/styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  render() {
    return <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props => <Feed {...props} posts={this.state.posts} />} />
          <Route path="/add" render={props => <Add {...props} posts={this.state.posts} />} />
          <Route path="*" render={props => <Feed {...props} posts={this.state.posts} />} />
        </Switch>
      </BrowserRouter>;
  }
}
// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById('app'));
