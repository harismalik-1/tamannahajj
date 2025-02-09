import React from 'react';
import './RamadanUmrah.scss';
import { FaHotel, FaUtensils, FaBus, FaMapMarkerAlt, FaLanguage, FaDollarSign, FaCheck, FaCalendarAlt, FaMosque } from 'react-icons/fa';

function RamadanUmrah() {
  return (
    <div className="umrah-page">
      <div className="umrah-header">
        <div className="header-content">
          <FaMosque className="building-icon" />
          <h2>Ramadan Umrah Package 2025</h2>
          <p className="header-subtitle">Experience the Blessed Month in the Holy Cities</p>
          <div className="header-features">
            <span><FaCalendarAlt /> 7-11 Days Package</span>
            <span><FaHotel /> Multiple Hotel Categories</span>
            <span><FaMapMarkerAlt /> Prime Locations</span>
          </div>
        </div>
      </div>

      <section className="umrah-content">
        <div className="package-pricing">
          <div className="section-header">
            <FaMosque className="section-icon" />
            <h3>Package Options</h3>
            <p className="section-subtitle">Choose Your Preferred Accommodation Style</p>
          </div>
          
          <div className="pricing-cards">
            {/* 5 Star Package */}
            <div className="price-card">
              <div className="card-header">
                <FaHotel className="room-icon" />
                <h4>5-Star Package</h4>
                <p className="room-subtitle">Hotels 50 Meters from both Haram Sharif</p>
                <div className="amenities">
                  <span><FaCheck /> Luxury Hotel Room</span>
                  <span><FaCheck /> Prime Location</span>
                  <span><FaCheck /> VIP Transportation</span>
                </div>
              </div>
              <div className="price-details">
                <div className="price-item">
                  <p className="option-label">1st to 7th (7 Days)</p>
                  <div className="price-grid">
                    <div className="room-option">
                      <span className="room-type">Quad:</span>
                      <span className="amount">4,650</span>
                      <span className="currency">CAD</span>
                    </div>
                    <div className="room-option">
                      <span className="room-type">Triple:</span>
                      <span className="amount">5,350</span>
                      <span className="currency">CAD</span>
                    </div>
                    <div className="room-option">
                      <span className="room-type">Double:</span>
                      <span className="amount">6,450</span>
                      <span className="currency">CAD</span>
                    </div>
                  </div>
                </div>
                <div className="price-item">
                  <p className="option-label">8th to 14th (7 Days)</p>
                  <div className="price-grid">
                    <div className="room-option">
                      <span className="room-type">Quad:</span>
                      <span className="amount">4,800</span>
                      <span className="currency">CAD</span>
                    </div>
                    <div className="room-option">
                      <span className="room-type">Triple:</span>
                      <span className="amount">5,500</span>
                      <span className="currency">CAD</span>
                    </div>
                    <div className="room-option">
                      <span className="room-type">Double:</span>
                      <span className="amount">6,600</span>
                      <span className="currency">CAD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Star Package */}
            <div className="price-card featured">
              <div className="featured-label">Most Popular</div>
              <div className="card-header">
                <FaHotel className="room-icon" />
                <h4>3-Star Package</h4>
                <p className="room-subtitle">Hotels 350-400 Meters from both Haram Sharif</p>
                <div className="amenities">
                  <span><FaCheck /> Comfortable Hotel Room</span>
                  <span><FaCheck /> Good Location</span>
                  <span><FaCheck /> Regular Transportation</span>
                </div>
              </div>
              <div className="price-details">
                <div className="price-item">
                  <p className="option-label">1st to 7th (7 Days)</p>
                  <div className="price-grid">
                    <div className="room-option">
                      <span className="room-type">Quad:</span>
                      <span className="amount">3,700</span>
                      <span className="currency">CAD</span>
                    </div>
                    <div className="room-option">
                      <span className="room-type">Triple:</span>
                      <span className="amount">4,000</span>
                      <span className="currency">CAD</span>
                    </div>
                    <div className="room-option">
                      <span className="room-type">Double:</span>
                      <span className="amount">4,100</span>
                      <span className="currency">CAD</span>
                    </div>
                  </div>
                </div>
                <div className="price-item">
                  <p className="option-label">8th to 14th (7 Days)</p>
                  <div className="price-grid">
                    <div className="room-option">
                      <span className="room-type">Quad:</span>
                      <span className="amount">3,850</span>
                      <span className="currency">CAD</span>
                    </div>
                    <div className="room-option">
                      <span className="room-type">Triple:</span>
                      <span className="amount">4,150</span>
                      <span className="currency">CAD</span>
                    </div>
                    <div className="room-option">
                      <span className="room-type">Double:</span>
                      <span className="amount">4,250</span>
                      <span className="currency">CAD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Standard Package */}
            <div className="price-card">
              <div className="card-header">
                <FaHotel className="room-icon" />
                <h4>Standard Package</h4>
                <p className="room-subtitle">Hotels 450-500 Meters from both Haram Sharif</p>
                <div className="amenities">
                  <span><FaCheck /> Standard Hotel Room</span>
                  <span><FaCheck /> Standard Location</span>
                  <span><FaCheck /> Regular Transportation</span>
                </div>
              </div>
              <div className="price-details">
                <div className="price-item">
                  <p className="option-label">1st to 7th (7 Days)</p>
                  <div className="price-grid">
                    <div className="room-option">
                      <span className="room-type">Quad:</span>
                      <span className="amount">3,200</span>
                      <span className="currency">CAD</span>
                    </div>
                    <div className="room-option">
                      <span className="room-type">Triple:</span>
                      <span className="amount">3,400</span>
                      <span className="currency">CAD</span>
                    </div>
                    <div className="room-option">
                      <span className="room-type">Double:</span>
                      <span className="amount">3,500</span>
                      <span className="currency">CAD</span>
                    </div>
                  </div>
                </div>
                <div className="price-item">
                  <p className="option-label">8th to 14th (7 Days)</p>
                  <div className="price-grid">
                    <div className="room-option">
                      <span className="room-type">Quad:</span>
                      <span className="amount">3,350</span>
                      <span className="currency">CAD</span>
                    </div>
                    <div className="room-option">
                      <span className="room-type">Triple:</span>
                      <span className="amount">3,550</span>
                      <span className="currency">CAD</span>
                    </div>
                    <div className="room-option">
                      <span className="room-type">Double:</span>
                      <span className="amount">3,650</span>
                      <span className="currency">CAD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="package-details">
          <h3>Package Details</h3>
          <table>
            <thead>
              <tr>
                <th>Details</th>
                <th>Includes</th>
                <th>Excludes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><FaCalendarAlt /> Duration: 7-11 days</td>
                <td className='includes'><FaHotel /> Hotel accommodations in Madinah and Makkah</td>
                <td className='excludes'><FaUtensils /> Meals (Breakfast/Sohour/Iftar/Dinner)</td>
              </tr>
              <tr>
                <td><FaHotel /> Choice of Hotel Categories</td>
                <td className='includes'><FaBus /> All transportation between cities</td>
                <td className='excludes'><FaBus /> Additional side trips</td>
              </tr>
              <tr>
                <td><FaBus /> Transportation Services</td>
                <td className='includes'><FaMapMarkerAlt /> Ziyarah to historical & religious sites</td>
                <td className='excludes'><FaDollarSign /> Personal Expenses</td>
              </tr>
              <tr>
                <td><FaLanguage /> Guide Services</td>
                <td className='includes'><FaLanguage /> Multilingual support available</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <table>
            <tbody>
              <tr>
                <td>Canada (Toronto):</td>
                <td>Faruq Khan</td>
                <td>Phone:</td>
                <td>+1-416-731-0343</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>raquib88002@yahoo.com</td>
                <td>Email:</td>
                <td>mamunsnm@gmail.com</td>
              </tr>
              <tr>
                <td>Corporate Office:</td>
                <td>Tamanna Hajj Group, Dhaka</td>
                <td>Phone:</td>
                <td>+8801715-050481</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default RamadanUmrah;