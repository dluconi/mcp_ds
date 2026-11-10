import React from 'react';
import './icon-user.css';
import icon from './assets/icon.svg';

export const IconUser: React.FC = () => {
  return (
    <div className="ds-component ds-icon-user">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=user" />
    </div>
  );
};
