import React from 'react';
import VideoPreview from './VideoPreview';
import AddButton from './AddButton';

export default (props) => {// eslint-disable-line
  return <div>
      <VideoPreview result={props.result} />
      <AddButton result={props.result} addPost={props.addPost} posts={props.posts} />
    </div>;
};
