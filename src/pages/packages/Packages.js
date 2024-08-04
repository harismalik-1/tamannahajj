import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PackageCard from '../../components/packagecard/PackageCard';
import './Packages.scss';

function Packages() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    axios.get('/api/packages') // Replace with your API endpoint
      .then(response => {
        setPackages(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the packages!", error);
      });
  }, []);

  return (
    <div className="packages-page">
      <h2>Our Packages</h2>
      <div className="packages-grid">
        {packages.map(pkg => (
          <Link key={pkg.id} to={`/packages/${pkg.id}`}>
            <PackageCard title={pkg.title} description={pkg.description} price={pkg.price} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Packages;
