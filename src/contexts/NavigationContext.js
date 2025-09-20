import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

export const NavigationProvider = ({ children }) => {
  const [currentView, setCurrentView] = useState('eCommerce');

  const navigateToView = (view) => {
    setCurrentView(view);
  };

  const value = {
    currentView,
    navigateToView,
    isDefaultView: currentView === 'Default',
    isEcommerceView: currentView === 'eCommerce'
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
