import React, { useState } from 'react';

const LocationChart = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    { name: 'New York', value: '72K' },
    { name: 'San Francisco', value: '39K' },
    { name: 'Sydney', value: '25K' },
    { name: 'Singapore', value: '61K' }
  ];

  const handleLocationClick = (locationName) => {
    setSelectedLocation(selectedLocation === locationName ? null : locationName);
  };

  return (
    <div className="chart-card">
      <div className="chart-header">
        <h3>Revenue by Location</h3>
      </div>
      <div className="chart-content">
        <div className="map-container">
          <div className="world-map">🌍</div>
          <div className="location-list">
            {locations.map((location, index) => (
              <div 
                key={index}
                className={`location-item ${selectedLocation === location.name ? 'selected' : ''}`}
                onClick={() => handleLocationClick(location.name)}
              >
                <span className="location-name">{location.name}</span>
                <span className="location-value">{location.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationChart;
