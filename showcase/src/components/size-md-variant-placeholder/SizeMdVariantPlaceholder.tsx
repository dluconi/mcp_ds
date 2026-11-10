import React from 'react';
import './size-md-variant-placeholder.css';
import icon from './assets/size.svg';

export const SizeMdVariantPlaceholder: React.FC = () => {
  return (
    <div className="ds-component ds-size-md-variant-placeholder">
      <img src={icon} className="h-full w-auto object-contain" alt="size=md, variant=placeholder" />
    </div>
  );
};
