import React from 'react';

export default (props) => { // eslint-disable-line
  return (
    <div className = "channel-result">
      <div className="channel-name">#{props.channel.name}</div>
      <div className="channel-options">
        <button onClick={(e) => {
            e.preventDefault();
            props.joinChannel(props.channel);
            props.goToChannel();
          }}>
          Join
        </button>
      </div>
    </div>
  );
};
