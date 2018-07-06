import React from 'react';

export default (props) => {// eslint-disable-line
  return (
    <div className="animated fadeIn">
      <input
        type="text"
        onChange={props.onSearchChange}
        value={props.searchText}
        placeholder={'Search YouTube'}
        maxLength={30}
      />
    </div>
  );
};
