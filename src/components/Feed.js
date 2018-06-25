import React from 'react';
import Header from './Header';
import Posts from './Posts';
import CurrentChannel from './CurrentChannel';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.currentChannel.name === undefined) {
      this.props.history.push('/');
    }
  }
  render() {
    if (this.props.currentChannel.name === undefined) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container">
        <div>
          <Header status='feed' />
        </div>
        <div>
          <CurrentChannel currentChannel={this.props.currentChannel} />
        </div>
        <div>
          <Posts posts={this.props.currentChannel.posts} vw={this.props.vw} />
        </div>
      </div>
    );
  }
}
