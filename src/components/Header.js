import React from 'react';
import { Link } from 'react-router-dom';
import { SSL_OP_TLS_BLOCK_PADDING_BUG } from 'constants';

const Header = (props) => {// eslint-disable-line
  if (props.status === 'add' && !props.channel) {
    return <div>Loading...</div>;
  }
  return <div className="header">
      <div className="back-link">
        {props.status === 'add' && <Link to={`/${props.channel.id}`}>back</Link>}
        {props.status === 'feed' && <Link to="/">back</Link>}
      </div>
      <div>
        vidiverse
      </div>
      <div className="add-link">
        {props.status === 'feed' && <Link to={`/${props.channelId}/add`}>post</Link>}
      </div>
    </div>;
};

export default Header;
