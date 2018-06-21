import React from 'react';

export default (props) => {
  const isPosted = props.posts.find(post => post.etag === props.result.etag);
  if (isPosted !== undefined) {
    return <div>Added</div>;
  }
  return <button onClick={() => props.addPost(props.result)}>Add</button>;
};
