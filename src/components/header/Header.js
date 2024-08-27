import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/images/logo4.png'; // Adjust the path as necessary

function Header() {
  return (
    <header className="header">
      <div className="top-info">
        <span>Canada: +1-416-731-0343</span>
        <span>US: +1-973-896-8966</span>
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
          <li className="dropdown">
            <Link to="/hajj">Hajj</Link>
            <ul className="dropdown-menu">
              <li><Link to="/hajj/diamond">Diamond Package</Link></li>
              <li><Link to="/hajj/gold">Gold Package</Link></li>
              <li><Link to="/hajj/silver">Silver Package</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="/umrah">Umrah</Link>
            <ul className="dropdown-menu">
              <li><Link to="/umrah/ramadan">Ramadan Umrah</Link></li>
            </ul>
          </li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
