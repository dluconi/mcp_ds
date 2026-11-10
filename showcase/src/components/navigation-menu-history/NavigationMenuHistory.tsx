import React from 'react';
import './navigation-menu-history.css';
import icon from './assets/navigation.svg';

export const NavigationMenuHistory: React.FC = () => {
  return (
    <div className="ds-component ds-navigation-menu-history">
      <img src={icon} className="h-full w-auto object-contain" alt="navigation-menu.history" />
    </div>
  );
};
