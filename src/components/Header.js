import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {// eslint-disable-line
  return (
    <div>
      <div>{props.add && <Link to='/'>Back</Link>}</div>
      <div>vizidri</div>
      <div>{!props.add && <Link to='/add'>+</Link>}</div>
    </div>
  );
};

export default Header;
