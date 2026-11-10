import React from 'react';
import './variants-default.css';
import icon from './assets/variants.svg';

export const VariantsDefault: React.FC = () => {
  return (
    <div className="ds-component ds-variants-default">
      <img src={icon} className="h-full w-auto object-contain" alt="variants=default" />
    </div>
  );
};
