import React from 'react';

const ProjectionsChart = () => {
  const chartData = [
    { month: 'Jan', projection: 15, actual: 18 },
    { month: 'Feb', projection: 18, actual: 22 },
    { month: 'Mar', projection: 20, actual: 19 },
    { month: 'Apr', projection: 25, actual: 28 },
    { month: 'May', projection: 22, actual: 26 },
    { month: 'Jun', projection: 28, actual: 30 }
  ];

  const maxValue = Math.max(...chartData.map(d => Math.max(d.projection, d.actual)));

  return (
    <div className="chart-card">
      <div className="chart-header">
        <h3>Projections vs Actuals</h3>
      </div>
      <div className="chart-content">
        <div className="bar-chart">
          <div className="chart-bars">
            {chartData.map((data, index) => (
              <div key={index} className="bar-group">
                <div 
                  className="bar projection" 
                  data-value={`${data.projection}M`}
                  style={{ 
                    '--bar-height': `${(data.projection / maxValue) * 100}%`,
                    height: `${(data.projection / maxValue) * 100}%`
                  }}
                ></div>
                <div 
                  className="bar actual" 
                  data-value={`${data.actual}M`}
                  style={{ 
                    '--bar-height': `${(data.actual / maxValue) * 100}%`,
                    height: `${(data.actual / maxValue) * 100}%`
                  }}
                ></div>
              </div>
            ))}
          </div>
          <div className="chart-labels">
            {chartData.map((data, index) => (
              <span key={index}>{data.month}</span>
            ))}
          </div>
          <div className="chart-legend">
            <div className="legend-item">
              <div className="legend-color projection"></div>
              <span>Projections</span>
            </div>
            <div className="legend-item">
              <div className="legend-color actual"></div>
              <span>Actuals</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectionsChart;
