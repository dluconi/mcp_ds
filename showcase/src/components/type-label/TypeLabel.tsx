import React from 'react';
import './type-label.css';
import icon from './assets/type.svg';

export const TypeLabel: React.FC = () => {
  return (
    <div className="ds-component ds-type-label">
      <img src={icon} className="h-full w-auto object-contain" alt="type=label" />
    </div>
  );
};
