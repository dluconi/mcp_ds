import React from 'react';
import './type-heading.css';
import icon from './assets/type.svg';

export const TypeHeading: React.FC = () => {
  return (
    <div className="ds-component ds-type-heading">
      <img src={icon} className="h-full w-auto object-contain" alt="type=heading" />
    </div>
  );
};
