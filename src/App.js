import React, { useState } from 'react';
import './styles/App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { NavigationProvider } from './contexts/NavigationContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardContent from './components/DashboardContent';
import RightSidebar from './components/RightSidebar';
import useKeyboardShortcuts from './hooks/useKeyboardShortcuts';
import useScrollEffects from './hooks/useScrollEffects';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useKeyboardShortcuts();
  useScrollEffects();

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.classList.remove('open');
    }
  };

  return (
    <ThemeProvider>
      <NavigationProvider>
        <div className="dashboard-container">
          <div 
            className={`mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={closeMobileMenu}
          />
          <Sidebar />
          <main className="main-content">
            <Header />
            <DashboardContent />
          </main>
          <RightSidebar />
        </div>
      </NavigationProvider>
    </ThemeProvider>
  );
}

export default App;
