import React from 'react';
import './Footer.scss';
import logo from '../../assets/images/logo2.png'; // Adjust the path as necessary

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <img src={logo} alt="Tamanna Hajj Group Logo" className="footer-logo" />
          <p>Managing Director - Md. Asadul Haque Mamun</p>
          <p>Cell # +8801715-050481</p>
          <p>Email: asadulhaquemamun@gmail.com</p>
          <p>Corporate Office: 5, Fair Plaza (7th Floor), Mirpur-1, Dhaka-1216.</p>
          <p>Phone: 02-55075449, 02-55075450</p>
          <p>Email: info@tamannaworldbd.com</p>
          <p>Web: www.tamannaworldbd.com</p>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Canada: +1-416-731-0343</p>
          <p>US: +1-973-896-8966</p>
          <p>Email: info@tamannahajj.com</p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/packages">Packages</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Hajj and Umrah Services. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
