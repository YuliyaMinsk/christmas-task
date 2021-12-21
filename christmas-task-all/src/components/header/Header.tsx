import React from 'react';
import Menu from './menu/Menu';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Menu/>
      </div>
    </header>
  );
}

export default Header;
