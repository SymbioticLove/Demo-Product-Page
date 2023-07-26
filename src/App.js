import './App.css';
import Header from './components/Header';
import MainHero from './components/MainHero';
import ProductDetail from './components/ProductDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';
import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="wrapper">
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      {currentPage === 'home' && <MainHero />}
      {currentPage === 'about' && <ProductDetail />}
      {currentPage === 'contact' && <Contact />}
      <Footer />
    </div>
  );
}

export default App;

