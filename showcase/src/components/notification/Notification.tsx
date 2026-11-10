import React from 'react';
import './notification.css';
import icon from './assets/notification.svg';

export const Notification: React.FC = () => {
  return (
    <div className="ds-component ds-notification">
      <img src={icon} className="h-full w-auto object-contain" alt="notification" />
    </div>
  );
};
