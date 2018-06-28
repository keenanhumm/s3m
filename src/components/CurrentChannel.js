import React from 'react';

export default (props) => {// eslint-disable-line
  if (!props.channel) {
    return null;
  }
  const channelName = `#${props.channel.name}`;
  return <div className="current-channel">{channelName}</div>;
};
