import React from 'react';
import './Footer.scss';
import logo from '../../assets/images/logo4.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaSnapchatGhost, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-column company-info">
            <img src={logo} alt="Tamanna Hajj Group Logo" className="footer-logo" />
            <div className="footer-description">
              <p>Your trusted partner for Hajj and Umrah services since 1990. We provide comprehensive travel solutions with dedication and care.</p>
            </div>
          </div>

          <div className="footer-column contact-info">
            <h3>Contact Information</h3>
            <div className="contact-details">
              <div className="contact-item">
                <FaPhoneAlt className="contact-icon" />
                <div>
                  <p>02-55075449, 02-55075450</p>
                  <p>Cell: +8801715-050481</p>
                </div>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <p>info@tamannaworldbd.com</p>
                  <p>asadulhaquemamun@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <p>5, Fair Plaza (7th Floor), Mirpur-1, Dhaka-1216.</p>
              </div>
            </div>
          </div>

          <div className="footer-column quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/hajj">Hajj Packages</a></li>
              <li><a href="/umrah">Umrah Packages</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer"><FaSnapchatGhost /></a>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Tamanna Hajj Group. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
