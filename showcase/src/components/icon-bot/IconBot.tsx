import React from 'react';
import './icon-bot.css';
import icon from './assets/icon.svg';

export const IconBot: React.FC = () => {
  return (
    <div className="ds-component ds-icon-bot">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=bot" />
    </div>
  );
};
