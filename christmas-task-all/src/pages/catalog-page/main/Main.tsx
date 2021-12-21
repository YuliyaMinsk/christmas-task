import React from 'react';

import Filter from './filter/Filter';
import ToyCatalog from './toy-catalog/Toy-catalog';
import './Main.scss';


function Main() {

    return (
    <main className="main">
      <div className="main-container">
        <Filter />
        <ToyCatalog />
      </div>
    </main>
  );
}

export default Main;
