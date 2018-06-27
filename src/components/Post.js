import React from 'react';
import YouTube from 'react-youtube';

export default (props) => {
  // sizing for embedded video
  let width = 300;
  let height = 183;
  if (props.vw > 400) {
    width = props.vw * 0.6;
  } else {
    width = props.vw * 0.9;
  }
  height = width * 0.61;
  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  const opts = {
    height: `${height}`,
    width: `${width}`,
    playerVars: {
      autoplay: 0,
      loop: 1,
      playsinline: 1,
      rel: 0
    }
  };
  return (
    <div>
      <div className="vid">
        <YouTube
          videoId={props.post.videoId}
          onReady={this.onReady}
          opts={opts}
        />
      </div>
      <div className="vid-title">{props.post.title}</div>
    </div>
  );
};
