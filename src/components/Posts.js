import React from 'react';
import Post from './Post';

export default (props) => {
  if (props.posts && props.posts.length > 0) {
    return (
      <div className="feed animated fadeIn">
        {props.posts.map(post => <Post key={post.id} post={post} vw={props.vw} />)}
      </div>
    );
  }
  return <div className="feed animated fadeIn">No posts yet.</div>;
};
