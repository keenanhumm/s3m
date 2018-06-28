import React from 'react';
import { Link } from 'react-router-dom';
import { SSL_OP_TLS_BLOCK_PADDING_BUG } from 'constants';

const Header = (props) => {// eslint-disable-line
  if (props.status === 'add' && !props.channelId) {
    return <div>Loading...</div>;
  }
  return <div className="header">
      <div className="back-link">
      {props.status === 'add' && <Link to={`/${props.channelId}`}>Feed</Link>}
        {props.status === 'feed' && <Link to="/">Channels</Link>}
      </div>
      <div>
        vidiverse
      </div>
      <div className="add-link">
      {props.status === 'feed' && <Link to={`/${props.channelId}/add`}>Post</Link>}
      </div>
    </div>;
};

export default Header;
