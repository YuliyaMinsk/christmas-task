import React from 'react';

import Filter from './filter/Filter';
import ToyCatalog from './toy-catalog/Toy-catalog';
import './Catalog-page.scss';

 function CatalogPage() {

  return (
    <main className="main">
      <div className="main-container">
        <Filter />
        <ToyCatalog />
      </div>
    </main>
  );
}

export default CatalogPage;
