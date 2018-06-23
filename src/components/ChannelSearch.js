import React from 'react';

export default (props) => {// eslint-disable-line
  return (
    <div>
      <input
        type="text"
        placeholder="What interests you..."
        onChange={(event) => {
          event.preventDefault();
          props.onChannelSearchChange(event.target.value);
        }}
        value={props.searchText}
      />
    </div>
  );
};
