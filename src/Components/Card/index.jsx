import React from 'react';
import './index.css';

const index = ({ imageUrl, name, regionName }) => {
  return (
    <div className="custom-card">
      <img src={imageUrl} alt={name} className="card-image" />
      <div className="card-content">
        <span className="name">{name}</span>
        <span className="region-name">{regionName}</span>
      </div>
    </div>
  );
};

export default index;
