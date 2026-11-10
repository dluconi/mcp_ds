import React from 'react';
import './icon-users.css';
import icon from './assets/icon.svg';

export const IconUsers: React.FC = () => {
  return (
    <div className="ds-component ds-icon-users">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=users" />
    </div>
  );
};
