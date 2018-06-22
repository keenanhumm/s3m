import React from 'react';

export default (props) => {// eslint-disable-line
  return <div className="result">
      <div>
        <img src={props.result.snippet.thumbnails.medium.url} alt="video thumbnail" />
      </div>
      <div>{props.result.snippet.title}</div>
    </div>;
};
