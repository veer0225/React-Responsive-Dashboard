import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const DonutChart = () => {
  const { isDark } = useTheme();
  
  const salesData = [
    { type: 'Direct', value: '$300.56', color: 'direct' },
    { type: 'Affiliate', value: '$135.18', color: 'affiliate' },
    { type: 'Sponsored', value: '$154.02', color: 'sponsored' },
    { type: 'E-mail', value: '$48.96', color: 'email' }
  ];

  return (
    <div className="chart-card">
      <div className="chart-header">
        <h3>Total Sales</h3>
      </div>
      <div className="chart-content">
        <div className="donut-chart">
          <div className="donut-container">
            <div 
              className="donut-circle"
              style={{
                background: isDark 
                  ? 'conic-gradient(#10B981 0deg 139deg, #3B82F6 139deg 250deg, #8B5CF6 250deg 310deg, #F1F5F9 310deg 360deg)'
                  : 'conic-gradient(#10B981 0deg 139deg, #3B82F6 139deg 250deg, #8B5CF6 250deg 310deg, #1E293B 310deg 360deg)'
              }}
            >
              <div 
                className="donut-center"
                style={{
                  color: isDark ? '#F1F5F9' : '#1E293B'
                }}
              >
                38.6%
              </div>
            </div>
          </div>
          <div className="donut-legend">
            {salesData.map((item, index) => (
              <div key={index} className="legend-item">
                <div className={`legend-color ${item.color}`}></div>
                <span>{item.type} {item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
