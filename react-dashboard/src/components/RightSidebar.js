import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const RightSidebar = () => {
  const [collapsedSections, setCollapsedSections] = useState({});
  const { isDark } = useTheme();

  const toggleSection = (sectionId) => {
    console.log(`Toggling section: ${sectionId}`);
    setCollapsedSections(prev => {
      const newState = {
        ...prev,
        [sectionId]: !prev[sectionId]
      };
      console.log('New collapsed state:', newState);
      return newState;
    });
  };

  const notifications = [
    { icon: '🐛', type: 'bug', message: 'You have a bug that needs...', time: 'Just now' },
    { icon: '👤', type: 'user', message: 'New user registered', time: '59 minutes ago' },
    { icon: '🐛', type: 'bug', message: 'You have a bug that needs...', time: '12 hours ago' },
    { icon: '📶', type: 'wifi', message: 'Andi Lane subscribed to you', time: 'Today, 11:59 AM' }
  ];

  const activities = [
    { avatar: '👤', color: 'green', message: 'You have a bug that needs...', time: 'Just now' },
    { avatar: '👨', color: 'blue', message: 'Released a new version', time: '59 minutes ago' },
    { avatar: '👤', color: 'purple', message: 'Submitted a bug', time: '12 hours ago' },
    { avatar: '👨‍💼', color: 'orange', message: 'Modified A data in Page X', time: 'Today, 11:59 AM' },
    { avatar: '👨', color: 'blue', message: 'Deleted a page in Project X', time: 'Feb 2, 2023' }
  ];

  const contacts = [
    { name: 'Natali Craig', initials: 'NC' },
    { name: 'Drew Cano', initials: 'DC' },
    { name: 'Orlando Diggs', initials: 'OD' },
    { name: 'Andi Lane', initials: 'AL' },
    { name: 'Kate Morrison', initials: 'KM' },
    { name: 'Koray Okumus', initials: 'KO' }
  ];

  return (
    <aside className="right-sidebar">
      <div className="sidebar-section">
        <div 
          className="sidebar-section-header" 
          onClick={() => toggleSection('notifications')}
          title={`${collapsedSections.notifications ? 'Expand' : 'Collapse'} Notifications`}
        >
          <h3 className="sidebar-title">Notifications</h3>
          <button 
            className={`section-toggle ${collapsedSections.notifications ? 'collapsed' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleSection('notifications');
            }}
            title={`${collapsedSections.notifications ? 'Expand' : 'Collapse'} Notifications`}
          >
            <span className="toggle-icon">{collapsedSections.notifications ? '▶' : '▼'}</span>
          </button>
        </div>
        <div className={`sidebar-content ${collapsedSections.notifications ? 'collapsed' : ''}`}>
          <div className="notification-list">
            {notifications.map((notification, index) => (
              <div key={index} className="notification-item">
                <div className={`notification-icon ${notification.type}`}>
                  {notification.icon}
                </div>
                <div className="notification-content">
                  <p>{notification.message}</p>
                  <span className="notification-time">{notification.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sidebar-section">
        <div 
          className="sidebar-section-header" 
          onClick={() => toggleSection('activities')}
          title={`${collapsedSections.activities ? 'Expand' : 'Collapse'} Activities`}
        >
          <h3 className="sidebar-title">Activities</h3>
          <button 
            className={`section-toggle ${collapsedSections.activities ? 'collapsed' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleSection('activities');
            }}
            title={`${collapsedSections.activities ? 'Expand' : 'Collapse'} Activities`}
          >
            <span className="toggle-icon">{collapsedSections.activities ? '▶' : '▼'}</span>
          </button>
        </div>
        <div className={`sidebar-content ${collapsedSections.activities ? 'collapsed' : ''}`}>
          <div className="activity-list">
            {activities.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className={`activity-avatar ${activity.color}`}>
                  {activity.avatar}
                </div>
                <div className="activity-content">
                  <p>{activity.message}</p>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sidebar-section">
        <div 
          className="sidebar-section-header" 
          onClick={() => toggleSection('contacts')}
          title={`${collapsedSections.contacts ? 'Expand' : 'Collapse'} Contacts`}
        >
          <h3 className="sidebar-title">Contacts</h3>
          <button 
            className={`section-toggle ${collapsedSections.contacts ? 'collapsed' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleSection('contacts');
            }}
            title={`${collapsedSections.contacts ? 'Expand' : 'Collapse'} Contacts`}
          >
            <span className="toggle-icon">{collapsedSections.contacts ? '▶' : '▼'}</span>
          </button>
        </div>
        <div className={`sidebar-content ${collapsedSections.contacts ? 'collapsed' : ''}`}>
          <div className="contacts-list">
            {contacts.map((contact, index) => (
              <div key={index} className="contact-item">
                <div className="contact-avatar">{contact.initials}</div>
                <span className="contact-name">{contact.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
