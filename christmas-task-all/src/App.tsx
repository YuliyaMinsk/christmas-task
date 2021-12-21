import React from 'react';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import CatalogPage from './pages/catalog-page/Catalog-page';

function App() {
  return (
    <div className="App">
      <Header/>
      <CatalogPage/>
      <Footer/>
    </div>
  );
}

export default App;