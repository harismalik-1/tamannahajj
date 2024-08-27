import React from 'react';
import './GoldPackage.scss';
import { FaHotel, FaPlane, FaUtensils, FaBus, FaMapMarkerAlt, FaLanguage, FaDollarSign } from 'react-icons/fa'; // Importing icons

function GoldPackage() {
  return (
    <div className="gold-page">
      <div className="gold-header">
        <h2>Hajj - Gold Package</h2>
      </div>

      <section className="gold-content">
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
                <td><FaHotel /> 3 Star Hotel (With Catering 3 Meal Plan)</td>
                <td className='includes'><FaBus /> Transportation Services – Mina, Arafat, Muzdalifa & Jamarah (only for first day & last day)</td>
                <td className='excludes'><FaDollarSign /> Sacrifice (Qurbani) - Additional cost of $200 USD / $250 CAD per sheep</td>
              </tr>
              <tr>
                <td><FaMapMarkerAlt /> Within 450 meters from Haram</td>
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
              {/* Continue with the rest of the data */}
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

export default GoldPackage;
