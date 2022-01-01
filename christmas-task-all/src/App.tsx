import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import CatalogPage from './pages/catalog-page/Catalog-page';
import ChristmasTreePage from './pages/christmas-tree-page/Christmas-tree-page';
import WelcomePage from './pages/welcome-page/Welcome-page';
import SnowFall from './pages/christmas-tree-page/settings/snow/snow-fall/Snow-fall';
import './App.scss';

function App() {
  
  const location = useLocation();

  return (
    <div className="App">
      { location.pathname === "/" && <SnowFall/> }
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
