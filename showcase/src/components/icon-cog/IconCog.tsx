import React from 'react';
import './icon-cog.css';
import icon from './assets/icon.svg';

export const IconCog: React.FC = () => {
  return (
    <div className="ds-component ds-icon-cog">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=cog" />
    </div>
  );
};
