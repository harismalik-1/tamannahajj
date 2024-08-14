import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PackageCard from '../../components/packagecard/PackageCard';
import videobg from '../../assets/videos/videobg3.mp4'; // Adjust the path as necessary
import './Home.scss';

function Counter({ end, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = (duration / end) * 100;

    const timer = setInterval(() => {
      if (end > 500)
        start += 10;
      else
        start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);
  }, [end, duration]);

  return <h2>{count}+</h2>;
}


function Home() {
  return (
    <div className="home">
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={videobg} type="video/mp4" />
        </video>
      </div>
      <section className="banner">
        <h1>Plan your Hajj and Umrah with a Trusted Partner</h1>
        <Link to="/packages" className="btn btn-primary">Our Packages</Link>
        
        <div className="stats-counter">
          <div className="counter-item">
            <Counter end={1000} duration={50} />
            <p>Pilgrims Served</p>
          </div>
          <div className="counter-item">
            <Counter end={200} duration={1} />
            <p>Umrah Tours Taken</p>
          </div>
          <div className="counter-item">
            <Counter end={50} duration={2} />
            <p>Hajj Tours Conducted</p>
          </div>
        </div>
        
        <div className="banner-waves">
          <div className="banner-wave">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="fancyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="1%" style={{ stopColor: 'grey', stopOpacity: 1 }} />
                  <stop offset="10%" style={{ stopColor: '#A9A9A9', stopOpacity: .9 }} />
                  <stop offset="80%" style={{ stopColor: '#bf7300', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path
                d="M321.39,56.11c59.5-4.34,117.57-16.62,176.83-26.34,63.07-10.25,127.24-17.62,191.25-22.74,88.8-7.04,177.37-7.77,265.62-.59,57.66,4.9,115.06,13.17,172.32,22.04V120H0V1.13C118.2,16.22,239.27,62.18,321.39,56.11Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>

          <div className="banner-wave">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="secondFancyGradient" x1="0%" y1="0%" x2="90%" y2="10%">
                  <stop offset="1%" style={{ stopColor: '#ffcc33', stopOpacity: 1 }} />
                  <stop offset="80%" style={{ stopColor: '#665d51', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path
                d="M321.39,56.11c59.5-4.34,117.57-16.62,176.83-26.34,63.07-10.25,127.24-17.62,191.25-22.74,88.8-7.04,177.37-7.77,265.62-.59,57.66,4.9,115.06,13.17,172.32,22.04V120H0V1.13C118.2,16.22,239.27,62.18,321.39,56.11Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </section>
      <section className="services">
        <h1>Our Services</h1>
        <div className="services-grid">
          <div className="service-card">
            <h3>Multiple Hajj Packages</h3>
          </div>
          <div className="service-card">
            <h3>Year-round Umrah Services</h3>
          </div>
          <div className="service-card">
            <h3>Local Hajj</h3>
          </div>
        </div>
        <Link to="/all-services" className="btn btn-secondary">Explore All Services</Link>
      </section>
      <section className="featured-packages">
        <h2>About Us</h2>
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
