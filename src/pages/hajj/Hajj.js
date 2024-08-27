import React from 'react';
import { Link } from 'react-router-dom';
import { FaHotel, FaUtensils, FaBus, FaLandmark } from 'react-icons/fa'; // Import icons
import './Hajj.scss';

function Hajj() {
  return (
    <div className="hajj-page">
      <section className="hajj-header">
        <div className="banner">
          <h1>The Hajj Journey</h1>
          <p>Embark on a sacred journey of Hajj, guided by our commitment to Islamic principles and meticulous attention to spiritual fulfillment.</p>
        </div>
      </section>

      <section className="package-selection">
        <h2>Our Packages</h2>
        <div className="packages-grid">
          <div className="package-card diamond">
            <h3>Diamond VIP</h3>
            <p>Experience luxury with our premium 5-star package. Includes exclusive services and amenities close to Haram.</p>
            <ul className="package-features">
              <li><FaHotel /> 5-Star Hotel (50 meters from Haram)</li>
              <li><FaUtensils /> All-inclusive meal plan</li>
              <li><FaBus /> Transportation Services</li>
              <li><FaLandmark /> Sightseeing & Local Transport</li>
            </ul>
            <Link to="/hajj/diamond" className="btn btn-secondary">View Details</Link>
          </div>
          <div className="package-card gold">
            <h3>Gold</h3>
            <p>A balance of comfort and affordability, staying at 3-star hotels close to Haram with essential services included.</p>
            <ul className="package-features">
              <li><FaHotel /> 3-Star Hotel (450 meters from Haram)</li>
              <li><FaUtensils /> All-inclusive meal plan</li>
              <li><FaBus /> Transportation Services</li>
              <li><FaLandmark /> Sightseeing & Local Transport</li>
            </ul>
            <Link to="/hajj/gold" className="btn btn-secondary">View Details</Link>
          </div>
          <div className="package-card silver">
            <h3>Silver</h3>
            <p>Our standard package offers all the essentials for a fulfilling Hajj experience, staying within 750 meters from Haram.</p>
            <ul className="package-features">
              <li><FaHotel /> Standard Hotel (750 meters from Haram)</li>
              <li><FaUtensils /> All-inclusive meal plan</li>
              <li><FaBus /> Transportation Services</li>
              <li><FaLandmark /> Sightseeing & Local Transport</li>
            </ul>
            <Link to="/hajj/silver" className="btn btn-secondary">View Details</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hajj;
