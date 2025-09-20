import React from 'react';
import ProjectionsChart from './ProjectionsChart';
import RevenueChart from './RevenueChart';
import LocationChart from './LocationChart';
import ProductsTable from './ProductsTable';
import DonutChart from './DonutChart';

const ChartsGrid = () => {
  return (
    <div className="charts-grid">
      <ProjectionsChart />
      <RevenueChart />
      <LocationChart />
      <ProductsTable />
      <DonutChart />
    </div>
  );
};

export default ChartsGrid;
