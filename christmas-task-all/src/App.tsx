import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import CatalogPage from './pages/catalog-page/Catalog-page';
import ChristmasTreePage from './pages/christmas-tree-page/ChristmasTree';
import WelcomePage from './pages/welcome-page/Welcome';

function App() {
  return (
    <div className="App">
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
