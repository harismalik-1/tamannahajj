import React from 'react';
import { Link } from 'react-router-dom';
import PackageCard from '../../components/packagecard/PackageCard';
import './Home.scss';

function Home() {
  return (
    <div className="home">
      <section className="banner">
        <h1>Welcome to Hajj and Umrah Services</h1>
        <p>Your journey to spiritual fulfillment starts here.</p>
        <Link to="/packages" className="btn">View Packages</Link>
      </section>
      <section className="featured-packages">
        <h2>Featured Packages</h2>
        <div className="packages-grid">
          <PackageCard title="Silver Package" description="10 days in Makkah and Madinah" price="CAD 10,900" />
          <PackageCard title="Gold Package" description="15 days in Makkah and Madinah" price="CAD 13,600" />
          <PackageCard title="Diamond Package" description="20 days in Makkah and Madinah" price="CAD 17,000" />
        </div>
      </section>
    </div>
  );
}

export default Home;
