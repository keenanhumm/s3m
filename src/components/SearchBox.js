import React from 'react';

export default (props) => {// eslint-disable-line
  return (
    <div>
      <input
        type="text"
        onChange={props.onSearchChange}
        value={props.searchText}
        placeholder={'Search YouTube'}
        maxLength={20}
      />
    </div>
  );
};
