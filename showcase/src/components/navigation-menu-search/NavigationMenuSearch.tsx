import React from 'react';
import './navigation-menu-search.css';
import icon from './assets/navigation.svg';

export const NavigationMenuSearch: React.FC = () => {
  return (
    <div className="ds-component ds-navigation-menu-search">
      <img src={icon} className="h-full w-auto object-contain" alt="navigation-menu.search" />
    </div>
  );
};
