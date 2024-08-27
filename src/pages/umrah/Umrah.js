import React from 'react';
import './Umrah.scss';
import { FaHotel, FaPlane, FaUtensils, FaBus, FaMapMarkerAlt, FaLanguage, FaDollarSign } from 'react-icons/fa';

function Umrah() {
  return (
    <div className="umrah-page">
      <div className="umrah-header">
        <h2>Umrah - Regular Package 2025</h2>
      </div>

      <section className="umrah-content">
        <div className="package-details">
          <h3>Package Details</h3>
          <table>
            <thead>
              <tr>
                <th>Room Type</th>
                <th>Visa & Ticket Included</th>
                <th>Visa & Ticket Excluded</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Quad</td>
                <td>5 Star: 3700 CAD<br />3 Star: 3000 CAD<br />Standard: 2700 CAD</td>
                <td>5 Star: 1600 CAD<br />3 Star: 900 CAD<br />Standard: 600 CAD</td>
              </tr>
              <tr>
                <td>Triple</td>
                <td>5 Star: 4000 CAD<br />3 Star: 3200 CAD<br />Standard: 2900 CAD</td>
                <td>5 Star: 1900 CAD<br />3 Star: 1100 CAD<br />Standard: 800 CAD</td>
              </tr>
              <tr>
                <td>Double</td>
                <td>5 Star: 4100 CAD<br />3 Star: 3300 CAD<br />Standard: 3000 CAD</td>
                <td>5 Star: 2000 CAD<br />3 Star: 1200 CAD<br />Standard: 900 CAD</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="package-includes">
          <h3>Package Includes</h3>
          <ul>
            <li><FaHotel /> Hotel accommodations in Madinah and Makkah</li>
            <li><FaBus /> All transportation between Jeddah, Madinah, and Makkah</li>
            <li><FaMapMarkerAlt /> Ziyarah to historical & religious sites in Madinah and Makkah</li>
            <li><FaLanguage /> Multilingual support available</li>
          </ul>
        </div>

        <div className="package-excludes">
          <h3>Package Excludes</h3>
          <ul>
            <li><FaUtensils /> Meals (Breakfast/Sohour/Iftar/Dinner)</li>
            <li><FaBus /> Side trips to places other than Makkah and Madinah</li>
          </ul>
        </div>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <table>
            <tbody>
              <tr>
                <td>Canada (Toronto)</td>
                <td>Faruq Khan</td>
                <td>Phone</td>
                <td>+1-416-731-0343</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>raquib88002@yahoo.com</td>
                <td>Email</td>
                <td>mamunsnm@gmail.com</td>
              </tr>
              <tr>
                <td>Corporate Office</td>
                <td>Tamanna Hajj Group, Dhaka</td>
                <td>Phone</td>
                <td>+8801715-050481</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Umrah;
