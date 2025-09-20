import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const RevenueChart = () => {
  const { isDark } = useTheme();
  
  const currentWeekColor = isDark ? '#F1F5F9' : '#1E293B';
  const previousWeekColor = isDark ? '#3B82F6' : '#3B82F6';
  
  return (
    <div className="chart-card large">
      <div className="chart-header">
        <h3>Revenue</h3>
      </div>
      <div className="chart-content">
        <div className="line-chart">
          <div className="chart-lines">
            <svg className="line-svg" viewBox="0 0 400 200">
              {/* Current Week Line */}
              <polyline 
                className="line current-week" 
                points="20,120 80,100 140,80 200,60 260,70 320,50 380,40"
                fill="none" 
                stroke={currentWeekColor} 
                strokeWidth="3"
              />
              {/* Previous Week Line */}
              <polyline 
                className="line previous-week" 
                points="20,140 80,120 140,100 200,80 260,90 320,70 380,60"
                fill="none" 
                stroke={previousWeekColor} 
                strokeWidth="3" 
                strokeDasharray="5,5"
              />
              {/* Data Points */}
              <circle cx="20" cy="120" r="4" fill={currentWeekColor}/>
              <circle cx="80" cy="100" r="4" fill={currentWeekColor}/>
              <circle cx="140" cy="80" r="4" fill={currentWeekColor}/>
              <circle cx="200" cy="60" r="4" fill={currentWeekColor}/>
              <circle cx="260" cy="70" r="4" fill={currentWeekColor}/>
              <circle cx="320" cy="50" r="4" fill={currentWeekColor}/>
              <circle cx="380" cy="40" r="4" fill={currentWeekColor}/>
              
              <circle cx="20" cy="140" r="4" fill={previousWeekColor}/>
              <circle cx="80" cy="120" r="4" fill={previousWeekColor}/>
              <circle cx="140" cy="100" r="4" fill={previousWeekColor}/>
              <circle cx="200" cy="80" r="4" fill={previousWeekColor}/>
              <circle cx="260" cy="90" r="4" fill={previousWeekColor}/>
              <circle cx="320" cy="70" r="4" fill={previousWeekColor}/>
              <circle cx="380" cy="60" r="4" fill={previousWeekColor}/>
            </svg>
          </div>
          <div className="chart-labels">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
          </div>
          <div className="chart-legend">
            <div className="legend-item">
              <div className="legend-color current"></div>
              <span>Current Week $58,211</span>
            </div>
            <div className="legend-item">
              <div className="legend-color previous"></div>
              <span>Previous Week $68,768</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
