import React from 'react';
import YouTube from 'react-youtube';

export default (props) => {
  // eslint-disable-line
  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  const opts = { height: '183', width: '300' };
  return (
    <div>
      <div className="vid">
        <YouTube
          videoId={props.post.id.videoId}
          onReady={this.onReady}
          opts={opts}
        />
      </div>
      <div className="vid-title">{props.post.snippet.title}</div>
    </div>
  );
};
