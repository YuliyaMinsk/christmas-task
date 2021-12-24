import React from 'react';
import { Link, useLocation } from 'react-router-dom'

import { Constants } from '../../../abstract/Constants';
import Search from '../search/Search';
import CountSelected from '../count-selected/Count-selected';
import './Menu.scss';

function Menu() {

  const location = useLocation();

  return (
    <nav className="menu menu-top">
      <div className="menu-left">
        <Link className="menu-logo" to="/"></Link>
        <Link className="menu-link" to="/catalog">{Constants.MENU_CATALOG}</Link>
        <Link className="menu-link" to="/tree">{Constants.MENU_TREE}</Link>
      </div>
      { location.pathname === "/catalog" &&
      <div className="menu-right">
        <Search />
        <CountSelected />
      </div>
      }
    </nav>
  );
}

export default Menu;
