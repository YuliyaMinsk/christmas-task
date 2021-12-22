import React from 'react';
import { useLocation } from 'react-router-dom'

import { Constants } from '../../../abstract/Constants';
import logo from '../../../assets/svg/tree.svg';
import Search from '../search/Search';
import CountSelected from '../count-selected/Count-selected';
import './Menu.scss';

function Menu() {

  const location = useLocation();
  console.log(location.pathname);

  return (
    <nav className="menu menu-top">
      <div className="menu-left">
        <a href="/"><img src={logo} className="menu-logo" alt="logo" /></a>
        <a className="menu-link" href="/catalog">{Constants.MENU_CATALOG}</a>
        <a className="menu-link" href="/tree">{Constants.MENU_TREE}</a>
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
