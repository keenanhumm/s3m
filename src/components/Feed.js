import React from 'react';
import Header from './Header';
import Posts from './Posts';


export default (props) => { // eslint-disable-line
  return (
    <React.Fragment>
      <Header />
      <Posts posts={props.posts} />
    </React.Fragment>
  );
};
