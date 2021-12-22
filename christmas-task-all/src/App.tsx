import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Snow from './components/snow/Snow';
import CatalogPage from './pages/catalog-page/Catalog-page';
import ChristmasTreePage from './pages/christmas-tree-page/Christmas-tree-page';
import WelcomePage from './pages/welcome-page/Welcome-page';

function App() {
  return (
    <div className="App">
      { location.pathname === "/" && <Snow/> }
      <Header/>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/tree" element={<ChristmasTreePage />} />
      </Routes>      
      <Footer/>
    </div>
  );
}

export default App;
