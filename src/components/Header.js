import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {// eslint-disable-line
  return <div className="header">
      <div className="back-link">
        {props.status === 'add' && <Link to="/feed">Feed</Link>}
        {props.status === 'feed' && <Link to="/">Channels</Link>}
      </div>
      <div>
        vidiverse
      </div>
      <div className="add-link">
        {props.status === 'feed' && <Link to="/add">Post</Link>}
      </div>
    </div>;
};

export default Header;
