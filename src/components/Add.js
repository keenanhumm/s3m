import React from 'react';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import Header from './Header';

export default (props) => { // eslint-disable-line
  return (
    <React.Fragment>
      <Header add={true}/>
      <SearchBox />
      <SearchResults />
    </React.Fragment>
  );
};
