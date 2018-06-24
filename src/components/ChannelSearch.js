import React from 'react';

export default (props) => {// eslint-disable-line
  const createChannel = (event) => {
    event.preventDefault();
    props.createChannel(props.searchText);
    props.goToFeed();
  };

  return (
    <div className="channel-search">
      <div className="channel-input">
        <input
          type="text"
          placeholder="Search Channels"
          onChange={(event) => {
          event.preventDefault();
          props.onChannelSearchChange(event.target.value);
          }}
          value={props.searchText}
          maxLength={16}
        />
      </div>
      {!props.channelResults.length && props.searchText !== '' &&
        <div className="create-channel">
          <button onClick={ event => createChannel(event) }>Create</button>
        </div>
      }
    </div>
  );
};
