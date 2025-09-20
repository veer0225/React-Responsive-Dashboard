import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('default');
  const { isDark } = useTheme();

  const navSections = [
    {
      title: 'Favorites',
      items: [
        { id: 'overview', text: 'Overview', icon: '📊' },
        { id: 'projects', text: 'Projects', icon: '📁' }
      ]
    },
    {
      title: 'Dashboards',
      items: [
        { id: 'default', text: 'Default', icon: '📈', hasArrow: false },
        { id: 'ecommerce', text: 'eCommerce', icon: '🛒', hasArrow: true },
        { id: 'projects-dash', text: 'Projects', icon: '📋', hasArrow: true },
        { id: 'courses', text: 'Online Courses', icon: '🎓', hasArrow: true }
      ]
    },
    {
      title: 'Pages',
      items: [
        { id: 'profile', text: 'User Profile', icon: '👤', hasArrow: true },
        { id: 'overview-page', text: 'Overview', icon: '📊', hasArrow: false },
        { id: 'projects-page', text: 'Projects', icon: '📁', hasArrow: false },
        { id: 'campaigns', text: 'Campaigns', icon: '📢', hasArrow: false },
        { id: 'documents', text: 'Documents', icon: '📄', hasArrow: false },
        { id: 'followers', text: 'Followers', icon: '👥', hasArrow: false },
        { id: 'account', text: 'Account', icon: '⚙️', hasArrow: true },
        { id: 'corporate', text: 'Corporate', icon: '🏢', hasArrow: true },
        { id: 'blog', text: 'Blog', icon: '📝', hasArrow: true },
        { id: 'social', text: 'Social', icon: '🌐', hasArrow: true }
      ]
    }
  ];

  const handleNavClick = (itemId) => {
    setActiveItem(itemId);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">B</div>
          <span className="logo-text">ByeWind</span>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        {navSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="nav-section">
            <h4 className="nav-title">{section.title}</h4>
            <ul className="nav-list">
              {section.items.map((item) => (
                <li 
                  key={item.id} 
                  className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
                >
                  <a 
                    href="#" 
                    className="nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                  >
                    <div className="nav-icon-wrapper">
                      <div className="nav-icon">{item.icon}</div>
                    </div>
                    <span className="nav-text">{item.text}</span>
                    {item.hasArrow && <span className="nav-arrow">▶</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
