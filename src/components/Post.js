import React from 'react';
import YouTube from 'react-youtube';

export default props => {// eslint-disable-line
  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  return <div>
      <YouTube videoId={props.post.id.videoId} onReady={this.onReady} />
      {props.post.snippet.title}
    </div>;
};
