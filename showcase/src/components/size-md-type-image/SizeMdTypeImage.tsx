import React from 'react';
import './size-md-type-image.css';
import icon from './assets/size.svg';

export const SizeMdTypeImage: React.FC = () => {
  return (
    <div className="ds-component ds-size-md-type-image">
      <img src={icon} className="h-full w-auto object-contain" alt="size=md, type=image" />
    </div>
  );
};
