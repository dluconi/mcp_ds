import React from 'react';
import './size-md-variant-default.css';
import icon from './assets/size.svg';

export const SizeMdVariantDefault: React.FC = () => {
  return (
    <div className="ds-component ds-size-md-variant-default">
      <img src={icon} className="h-full w-auto object-contain" alt="size=md, variant=default" />
    </div>
  );
};
