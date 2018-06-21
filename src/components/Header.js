import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {// eslint-disable-line
  return (
    <div className="header">
      <div className="header__back">{props.add && <Link to='/'>Back</Link>}</div>
      <div className="header__title">
        {/* <img src="../images/vizidri.png" alt="Logo"/> */}
        vizidri
      </div>
      <div className="header__add">{!props.add && <Link to='/add'>+</Link>}</div>
    </div>
  );
};

export default Header;
