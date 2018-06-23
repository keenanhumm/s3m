import React from 'react';
import ChannelResult from './ChannelResult';

export default (props) => {
  // eslint-disable-line
  if (props.searchText !== '' && !props.channelResults.length > 0) {
    return <div>No matching channels exist yet!</div>;
  }
  return (
    <div className="channel-results">
      {props.channelResults.map(channel => (
        <ChannelResult
          key={channel.id}
          channel={channel}
          joinChannel={props.joinChannel}
          goToChannel={props.goToChannel}
        />
      ))}
    </div>
  );
};
