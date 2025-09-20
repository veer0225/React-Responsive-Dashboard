import React from 'react';
import useRealTimeData from '../hooks/useRealTimeData';

const StatsGrid = () => {
  const initialStats = [
    {
      title: 'Customers',
      value: '3,781',
      trend: '+11.01%',
      isPositive: true
    },
    {
      title: 'Orders',
      value: '1,219',
      trend: '-0.03%',
      isPositive: false
    },
    {
      title: 'Revenue',
      value: '$695',
      trend: '+15.03%',
      isPositive: true
    },
    {
      title: 'Growth',
      value: '30.1%',
      trend: '+6.08%',
      isPositive: true
    }
  ];

  const stats = useRealTimeData(initialStats);

  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-header">
            <h3>{stat.title}</h3>
            <div className={`stat-trend ${stat.isPositive ? 'positive' : 'negative'}`}>
              <span className="trend-icon">{stat.isPositive ? '↗' : '↘'}</span>
              <span className="trend-text">{stat.trend}</span>
            </div>
          </div>
          <div className="stat-value">{stat.value}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
