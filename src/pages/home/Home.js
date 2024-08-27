import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import videobg from '../../assets/videos/videobg3.mp4'; // Adjust the path as necessary
import './Home.scss';

function Counter({ end, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = (duration / end) * 100;

    const timer = setInterval(() => {
      if (end > 500 & end < 2020)
        start += 10;
      else if (end > 1000)
        start += 50;
      else
        start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);
  }, [end, duration]);
  if (end === 2010)
    return <h2>{count}</h2>;
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
        <Link to="/Hajj" className="btn btn-primary">Our Packages</Link>
        
        <div className="stats-counter">
          <div className="counter-item">
            <Counter end={5000} duration={50} />
            <p>Pilgrims Taken</p>
          </div>
          <div className="counter-item">
            <Counter end={20} duration={1} />
            <p>Umrah Tours per year</p>
          </div>
          <div className="counter-item">
            <Counter end={2010} duration={2} />
            <p>Serving Since</p>
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
            <h3>Complete Hajj Packages</h3>
          </div>
          <div className="service-card">
            <h3>Umrah Services</h3>
          </div>
          <div className="service-card">
            <h3>Umrah during Ramadan</h3>
          </div>
        </div>
        <Link to="/all-services" className="btn btn-secondary">Explore All Services</Link>
      </section>
      <section className="featured-packages">
        <h2>About Us</h2>
        <div className="packages-grid">
        </div>
      </section>
    </div>
  );
}

export default Home;
