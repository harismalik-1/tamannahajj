import React from 'react';
import './Footer.scss';
import logo from '../../assets/images/logo2.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaSnapchatGhost } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
      <div className="footer-column logo-column">
      <img src={logo} alt="Tamanna Hajj Group Logo" className="footer-logo" />
      
      <div className="footer-info">
        <p>Managing Director - Md. Asadul Haque Mamun</p>
        <p>Cell: +8801715-050481</p>
      </div>
      
      <div className="footer-contact">
        <p>Email: asadulhaquemamun@gmail.com</p>
        <p>Phone: 02-55075449, 02-55075450</p>
      </div>

      <div className="footer-address">
        <p>Corporate Office: 5, Fair Plaza (7th Floor), Mirpur-1, Dhaka-1216.</p>
        <p>Email: info@tamannaworldbd.com</p>
        <p>Web: www.tamannaworldbd.com</p>
      </div>
    </div>


      </div>
      <div className="footer-bottom">
        <div className="footer-info">
          <p>&copy; 2024 Tamanna Hajj Group. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a href="/contact">Contact Us</a>
          <a href="/terms">Terms and Conditions</a>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com"><FaFacebookF /></a>
          <a href="https://www.twitter.com"><FaTwitter /></a>
          <a href="https://www.instagram.com"><FaInstagram /></a>
          <a href="https://www.snapchat.com"><FaSnapchatGhost /></a>
          <a href="https://www.youtube.com"><FaYoutube /></a>
        </div>
        <div className="back-to-top">
          <a href="#top">Back to top &uarr;</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
