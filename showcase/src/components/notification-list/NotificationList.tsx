import React from 'react';
import './notification-list.css';
import icon from './assets/notification.svg';

export const NotificationList: React.FC = () => {
  return (
    <div className="ds-component ds-notification-list">
      <img src={icon} className="h-full w-auto object-contain" alt="notification-list" />
    </div>
  );
};
