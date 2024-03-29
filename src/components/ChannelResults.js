import React from 'react';
import ChannelResult from './ChannelResult';

export default (props) => {
  // eslint-disable-line
  if (props.searchText !== '' && !props.channelResults.length > 0) {
    return <div>No matching channels exist yet!</div>;
  }
  return <div className="channel-results">
      {props.channelResults.map(channel => (
        <ChannelResult
          key={channel._id /* eslint-disable-line*/}
          channel={channel}
          joinChannel={props.joinChannel}
          goToFeed={props.goToFeed}
        />
      ))}
    </div>;
};
