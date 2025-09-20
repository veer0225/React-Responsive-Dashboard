import React from 'react';
import { useNavigation } from '../contexts/NavigationContext';
import StatsGrid from './StatsGrid';
import ChartsGrid from './ChartsGrid';
import OrdersTable from './OrdersTable';

const DashboardContent = () => {
  const { currentView } = useNavigation();

  return (
    <div className="dashboard-content">
      <h1 className="page-title">{currentView}</h1>
      {currentView === 'eCommerce' ? (
        <>
          <StatsGrid />
          <ChartsGrid />
        </>
      ) : (
        <OrdersTable />
      )}
    </div>
  );
};

export default DashboardContent;
