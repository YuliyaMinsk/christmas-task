import React from 'react';

import { Constants } from '../../../abstract/Constants';
import logo from '../../../assets/svg/tree.svg';
import Search from '../search/Search';
import CountSelected from '../count-selected/Count-selected';
import './Menu.scss';

function Menu() {
  return (
    <nav className="menu menu-top">
      <div className="menu-left">
        <img src={logo} className="menu-logo" alt="logo" />
        <a className="menu-link" href="#">{Constants.MENU_CATALOG}</a>
        <a className="menu-link" href="#">{Constants.MENU_TREE}</a>
      </div>
      <div className="menu-right">
        <Search />
        <CountSelected />
      </div>
    </nav>
  );
}

export default Menu;
