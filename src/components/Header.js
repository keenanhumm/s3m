import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {// eslint-disable-line
  return <div className="header">
      <div className="back-link">
        {props.add && <Link to="/">Back</Link>}
      </div>
      <div>
        vidiverse
      </div>
      <div className="add-link">
        {!props.add && <Link to="/add">Add</Link>}
      </div>
    </div>;
};

export default Header;
