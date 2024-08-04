import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Packages from './pages/packages/Packages';
import PackageDetails from './pages/packagedetails/PackageDetails';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/:id" element={<PackageDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
