import React from 'react';
import './icon-credit-card.css';
import icon from './assets/icon.svg';

export const IconCreditCard: React.FC = () => {
  return (
    <div className="ds-component ds-icon-credit-card">
      <img src={icon} className="h-full w-auto object-contain" alt="icon=credit-card" />
    </div>
  );
};
