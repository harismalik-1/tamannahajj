import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PackageDetails() {
  const { id } = useParams();
  const [packageDetails, setPackageDetails] = useState(null);

  useEffect(() => {
    axios.get(`/api/packages/${id}`) // Replace with your API endpoint
      .then(response => {
        setPackageDetails(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the package details!", error);
      });
  }, [id]);

  if (!packageDetails) return <div>Loading...</div>;

  return (
    <div className="package-details">
      <h2>{packageDetails.title}</h2>
      <p>{packageDetails.description}</p>
      <p>Price: {packageDetails.price}</p>
      <p>Duration: {packageDetails.duration}</p>
      <button className="btn">Book Now</button>
    </div>
  );
}

export default PackageDetails;
