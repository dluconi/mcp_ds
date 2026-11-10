import React from 'react';
import './type-body.css';
import icon from './assets/type.svg';

export const TypeBody: React.FC = () => {
  return (
    <div className="ds-component ds-type-body">
      <img src={icon} className="h-full w-auto object-contain" alt="type=body" />
    </div>
  );
};
