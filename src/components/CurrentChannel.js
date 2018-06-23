import React from 'react';

export default (props) => {// eslint-disable-line
  const currentChannel = `#${props.currentChannel.name}`;
  return (
    <div className="current-channel">
      {currentChannel}
    </div>
  );
};
