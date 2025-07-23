import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { 
  Header, 
  Hero, 
  Features, 
  Gallery, 
  CharacterCreator, 
  Shop, 
  Footer 
} from './components';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <Header />
      <Hero />
      <Features />
      <Gallery />
      <Footer />
    </div>
  );
};

const CreatePage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <CharacterCreator />
    </div>
  );
};

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <Header />
      <Shop />
      <Footer />
    </div>
  );
};

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <Header />
      <div className="pt-20">
        <Gallery expanded={true} />
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;