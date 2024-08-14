import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/images/logo2.png'; // Adjust the path as necessary

function Header() {
  return (
    <header className="header">
      <div className="top-info">
        <span> Canada: +1-416-731-0343</span>
        <span>US: +1-973-896-8966.</span>
        <span>Email: info@tamannahajj.com</span>
      </div>
      <hr />
      <nav className="nav">
        <div className="nav__logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <ul className="nav__links">
          <li><Link to="/">Hajj</Link></li>
          <li><Link to="/packages">Umrah</Link></li>
          <li><Link to="/about">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
