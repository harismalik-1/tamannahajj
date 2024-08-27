import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './pages/home/Home';
import Hajj from './pages/hajj/Hajj';
import Umrah from './pages/umrah/Umrah';
import Gallery from './pages/gallery/Gallery';
import Contact from './pages/contact/Contact';
import DiamondPackage from './pages/hajj/DiamondPackage';
import GoldPackage from './pages/hajj/GoldPackage';
import SilverPackage from './pages/hajj/SilverPackage';
import RamadanUmrah from './pages/umrah/RamadanUmrah';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hajj" element={<Hajj />} />
          <Route path="/hajj/diamond" element={<DiamondPackage />} />
          <Route path="/hajj/gold" element={<GoldPackage />} />
          <Route path="/hajj/silver" element={<SilverPackage />} />
          <Route path="/umrah" element={<Umrah />} />
          <Route path="/umrah/ramadan" element={<RamadanUmrah />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
