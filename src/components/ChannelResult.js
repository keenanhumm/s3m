import React from 'react';

export default (props) => {
  // eslint-disable-line
  const onRequestJoin = (event) => {
    event.preventDefault();
    props.joinChannel(props.channel);
    props.goToFeed();
  };

  return (
    <div className="channel-result">
      <div className="channel-name">#{props.channel.name}</div>
      <div className="channel-options">
        <button onClick={event => onRequestJoin(event)}>Join</button>
      </div>
    </div>
  );
};
