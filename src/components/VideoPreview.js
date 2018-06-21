import React from 'react';

export default (props) => {// eslint-disable-line
  return <div>
      <img src={props.result.snippet.thumbnails.medium.url} alt="video thumbnail" />
      {props.result.snippet.title}
    </div>;
};
