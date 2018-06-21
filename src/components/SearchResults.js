import React from 'react';
import SearchResult from './SearchResult';

export default (props) => { // eslint-disable-line
  if (props.results.length === 0) {
    return <div></div>;
  }
  return (
    <React.Fragment>
      {
        props.results.map(result => <SearchResult
          key={result.etag}
          result={result}
          addPost={props.addPost}
          posts={props.posts}
          />)
      }
    </React.Fragment>
  );
};
