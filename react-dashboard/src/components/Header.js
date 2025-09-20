import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigation } from '../contexts/NavigationContext';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, isDark } = useTheme();
  const { currentView, navigateToView } = useNavigation();

  // Debug logging
  console.log('Header - Current theme:', theme, 'isDark:', isDark);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };

  const handleButtonClick = (e) => {
    // Add a simple click animation using CSS classes
    if (e.currentTarget) {
      e.currentTarget.classList.add('clicked');
      setTimeout(() => {
        if (e.currentTarget) {
          e.currentTarget.classList.remove('clicked');
        }
      }, 150);
    }
  };

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
    const rightSidebar = document.querySelector('.right-sidebar');
    if (rightSidebar) {
      rightSidebar.classList.toggle('closed');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.classList.toggle('open');
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          ☰
        </button>
        <div className="breadcrumb">
          <span className="breadcrumb-item">Dashboards</span>
          <span className="breadcrumb-separator">/</span>
          <span 
            className={`breadcrumb-item ${currentView === 'Default' ? 'active' : 'clickable'}`}
            onClick={() => navigateToView('Default')}
            style={{ cursor: 'pointer' }}
          >
            Default
          </span>
          <span className="breadcrumb-separator">/</span>
          <span 
            className={`breadcrumb-item ${currentView === 'eCommerce' ? 'active' : 'clickable'}`}
            onClick={() => navigateToView('eCommerce')}
            style={{ cursor: 'pointer' }}
          >
            eCommerce
          </span>
        </div>
      </div>
      
      <div className="header-center">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="Search" 
            className={`search-input ${isSearchFocused ? 'focused' : ''}`}
            value={searchValue}
            onChange={handleSearchChange}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
          />
        </div>
      </div>
      
      <div className="header-right">
        <button className="header-btn" onClick={handleButtonClick} title="Grid">
          <span className="btn-icon">⊞</span>
        </button>
        <button 
          className="header-btn theme-toggle" 
          onClick={() => {
            console.log('Theme toggle clicked! Current theme:', theme);
            toggleTheme();
          }}
          title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
        >
          <span className="btn-icon">{isDark ? '☀️' : '🌙'}</span>
        </button>
        <button className="header-btn" onClick={handleButtonClick} title="Clock">
          <span className="btn-icon">🕐</span>
        </button>
        <button className="header-btn" onClick={handleButtonClick} title="Notifications">
          <span className="btn-icon">🔔</span>
        </button>
        <button className="header-btn profile-btn" onClick={handleButtonClick} title="Profile">
          <div className="profile-avatar">JD</div>
        </button>
        <button 
          className="header-btn sidebar-toggle" 
          onClick={toggleRightSidebar}
          title="Toggle Sidebar"
        >
          <span className="btn-icon">{isRightSidebarOpen ? '✕' : '☰'}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
