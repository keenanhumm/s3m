import React from 'react';

export default (props) => {
  const isPosted = props.posts.find(post => post.videoId === props.result.id.videoId);
  if (isPosted !== undefined) {
    return (
      <div className="add">
        <div className="added">Posted</div>
      </div>
    );
  }
  return <div className="add">
      <div>
        <button onClick={() => props.addPost(props.result)}>Post</button>
      </div>
    </div>;
};
