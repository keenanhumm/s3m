import React from 'react';
import Post from './Post';

export default (props) => {
  if (props.posts.length > 0) {
    return (
      <div className="feed">
        {props.posts.map(post => <Post key={post.id} post={post} vw={props.vw} />)}
      </div>
    );
  }
  return <div className="feed">No posts yet.</div>;
};
