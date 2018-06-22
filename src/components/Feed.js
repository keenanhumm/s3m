import React from 'react';
import Header from './Header';
import Posts from './Posts';

export default (props) => {// eslint-disable-line
  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <div>
        <Posts posts={props.posts} />
      </div>
    </div>
  );
};
