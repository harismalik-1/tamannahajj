import React from 'react';

function PackageCard({ title, description, price }) {
  return (
    <div className="package-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Price: {price}</p>
    </div>
  );
}

export default PackageCard;
