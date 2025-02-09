import React from 'react';
import './DiamondPackage.scss';
import { FaHotel, FaPlane, FaUtensils, FaBus, FaMapMarkerAlt, FaLanguage, FaDollarSign, FaCrown, FaGem, FaStar, FaCheck } from 'react-icons/fa'; // Importing icons

function DiamondPackage() {
  return (
    <div className="diamond-page">
      <div className="diamond-header">
        <div className="header-content">
          <FaCrown className="crown-icon" />
          <h2>Diamond VIP Hajj Package</h2>
          <div className="rating">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
          <p className="header-subtitle">Experience the Ultimate in Luxury and Spiritual Journey</p>
          <div className="header-features">
            <span><FaHotel /> 5-Star Hotels (Within 50m from Haram)</span>
            <span><FaMapMarkerAlt /> Maktab A Category MINA ZONE - 03</span>
            <span><FaBus /> VIP Transportation</span>
          </div>
        </div>
      </div>

      <section className="diamond-content">
        <div className="package-pricing">
          <div className="section-header">
            <FaGem className="section-icon" />
            <h3>Premium Package Options</h3>
            <p className="section-subtitle">Choose Your Preferred Accommodation</p>
          </div>
          
          <div className="pricing-cards">
            <div className="price-card">
              <div className="card-header">
                <FaHotel className="room-icon" />
                <h4>Quad Suite</h4>
                <p className="room-subtitle">4-Person Luxury Accommodation</p>
                <div className="amenities">
                  <span><FaCheck /> 5-Star Hotel Room</span>
                  <span><FaCheck /> Full Board Meals</span>
                  <span><FaCheck /> VIP Transportation</span>
                </div>
              </div>
              <div className="price-details">
                <div className="price-item">
                  <span className="currency">USD</span>
                  <span className="amount">$12,500</span>
                  <span className="per-person">per person</span>
                </div>
                <div className="price-item">
                  <span className="currency">CAD</span>
                  <span className="amount">$15,500</span>
                  <span className="per-person">per person</span>
                </div>
              </div>
            </div>

            <div className="price-card">
              <div className="card-header">
                <FaHotel className="room-icon" />
                <h4>Triple Suite</h4>
                <p className="room-subtitle">3-Person Premium Accommodation</p>
                <div className="amenities">
                  <span><FaCheck /> 5-Star Hotel Room</span>
                  <span><FaCheck /> Full Board Meals</span>
                  <span><FaCheck /> VIP Transportation</span>
                </div>
              </div>
              <div className="price-details">
                <div className="price-item">
                  <span className="currency">USD</span>
                  <span className="amount">$13,500</span>
                  <span className="per-person">per person</span>
                </div>
                <div className="price-item">
                  <span className="currency">CAD</span>
                  <span className="amount">$16,500</span>
                  <span className="per-person">per person</span>
                </div>
              </div>
            </div>

            <div className="price-card featured">
              <div className="featured-label">Most Popular</div>
              <div className="card-header">
                <FaHotel className="room-icon" />
                <h4>Executive Suite</h4>
                <p className="room-subtitle">2-Person VIP Accommodation</p>
                <div className="amenities">
                  <span><FaCheck /> Premium 5-Star Room</span>
                  <span><FaCheck /> Full Board Luxury Meals</span>
                  <span><FaCheck /> Premium VIP Transportation</span>
                </div>
              </div>
              <div className="price-details">
                <div className="price-item">
                  <span className="currency">USD</span>
                  <span className="amount">$14,500</span>
                  <span className="per-person">per person</span>
                </div>
                <div className="price-item">
                  <span className="currency">CAD</span>
                  <span className="amount">$17,500</span>
                  <span className="per-person">per person</span>
                </div>
              </div>
            </div>
          </div>

          <div className="payment-plan">
            <h4>Flexible Payment Plan</h4>
            <div className="payment-grid">
              <div className="payment-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h5>Initial Deposit</h5>
                  <p className="amount">$5,000 USD/CAD</p>
                  <p className="date">Upon Booking</p>
                </div>
              </div>
              <div className="payment-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h5>Second Payment</h5>
                  <p className="amount">$5,000 USD/CAD</p>
                  <p className="date">Before March 15, 2024</p>
                </div>
              </div>
              <div className="payment-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h5>Final Payment</h5>
                  <p className="amount">Remaining Balance</p>
                  <p className="date">Before April 15, 2024</p>
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
                <td><FaHotel /> Duration: 15-20 days</td>
                <td className='includes'><FaUtensils /> Breakfast, Lunch & Dinner as per selected package plan</td>
                <td className='excludes'><FaPlane /> ROUND Trip Air ticket - USA/CAN-Dhaka</td>
              </tr>
              <tr>
                <td><FaHotel /> 5 Star Hotel (With Hotel Buffet Meal Plan)</td>
                <td className='includes'><FaBus /> Transportation Services – Mina, Arafat, Muzdalifa & Jamarah (only for first day & last day)</td>
                <td className='excludes'><FaDollarSign /> Sacrifice (Qurbani) - Additional cost of $200 USD / $250 CAD per sheep</td>
              </tr>
              <tr>
                <td><FaMapMarkerAlt /> Within 50 meters from Haram</td>
                <td className='includes'><FaMapMarkerAlt /> Sightseeing & Local Transport in Makkah & Madinah</td>
                <td></td>
              </tr>
              <tr>
                <td><FaMapMarkerAlt /> Maktab A Category MINA ZONE - 03</td>
                <td className='includes'><FaLanguage /> Multilingual support available (English, Bangla & Arabic)</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="exclusive-offers">
          <h3>Exclusive Discount Offers</h3>
          <table>
            <thead>
              <tr>
                <th>Offer Type</th>
                <th>Discount</th>
                <th>Validity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><FaDollarSign /> Early Bird Full Payment</td>
                <td className='includes'>$1000 (USD/CAD)</td>
                <td>Before August 15, 2024</td>
              </tr>
              <tr>
                <td><FaDollarSign /> Happy Hearts Full Payment</td>
                <td className='includes'>$800 (USD/CAD)</td>
                <td>Before September 15, 2024</td>
              </tr>
              <tr>
                <td><FaDollarSign /> Win-Win Full Payment</td>
                <td className='includes'>$600 (USD/CAD)</td>
                <td>Before September 30, 2024</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="estimated-plan">
          <h3>Package Estimated Plan</h3>
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Date (AD)</th>
                <th>Date (Hijri)</th>
                <th>Departure</th>
                <th>Arrival</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>31 MAY</td>
                <td>4 ZIL HAJJ</td>
                <td>Dhaka</td>
                <td>Jed-Makkah Hotel & Perform Umrah</td>
              </tr>
              <tr>
                <td>02-04</td>
                <td>01-03 JUNE</td>
                <td>5-7 ZIL HAJJ</td>
                <td>Makkah</td>
                <td>As per selected package meal plan</td>
              </tr>
              <tr>
                <td>05</td>
                <td>04 JUNE</td>
                <td>8 ZIL HAJJ</td>
                <td>Mina</td>
                <td>Mina Camp Meals Service Provider</td>
              </tr>
              <tr>
                <td>06</td>
                <td>05 JUNE</td>
                <td>9 ZIL HAJJ</td>
                <td>Arafat</td>
                <td>Arafat Tent Lunch (Only)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bank-account">
          <h3>Bank Account Information</h3>
          <table>
            <tbody>
              <tr>
                <td>Bank Name:</td>
                <td>Islami Bank Bangladesh Limited</td>
              </tr>
              <tr>
                <td>Account Name:</td>
                <td>Tamanna International Tours & Travels</td>
              </tr>
              <tr>
                <td>Account No.:</td>
                <td>20502100900003910</td>
              </tr>
              <tr>
                <td>Routing No.:</td>
                <td>125263106</td>
              </tr>
              <tr>
                <td>Branch:</td>
                <td>Mirpur-1 Branch, Dhaka</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <table>
            <tbody>
              <tr>
                <td>Managing Director:</td>
                <td>Md. Asadul Haque Mamun</td>
                <td>Phone:</td>
                <td>+8801715-050481</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>asadulhaquemamun@gmail.com</td>
                <td>Email:</td>
                <td>info@tamannaworldbd.com</td>
              </tr>
              <tr>
                <td>Website:</td>
                <td>www.tamannaworldbd.com</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default DiamondPackage;
