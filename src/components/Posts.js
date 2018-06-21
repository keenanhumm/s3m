import React from 'react';
import Post from './Post';

export default (props) => {
  if (props.posts) {
    return (
      <React.Fragment>
        {props.posts.map(post => <Post key={post.etag} post={post} />)}
      </React.Fragment>
    );
  }
  return <div></div>;
};
