import React from 'react';
import VideoPreview from './VideoPreview';
import AddButton from './AddButton';

export default props => {// eslint-disable-line
  return (
    <div className="result">
      <div>
        <VideoPreview result={props.result} />
      </div>
      <div>
        <AddButton
          result={props.result}
          addPost={props.addPost}
          posts={props.posts}
        />
      </div>
    </div>
  );
};
