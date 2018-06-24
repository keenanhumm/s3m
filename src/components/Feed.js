import React from 'react';
import Header from './Header';
import Posts from './Posts';
import CurrentChannel from './CurrentChannel';

export default (props) => {// eslint-disable-line
  return (
    <div className="container">
      <div>
        <Header status='feed' />
      </div>
      <div>
        <CurrentChannel currentChannel={props.currentChannel} />
      </div>
      <div>
        <Posts posts={props.currentChannel.posts} />
      </div>
    </div>
  );
};
