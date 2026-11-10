import React from 'react';
import './size-lg-type-image.css';
import icon from './assets/size.svg';

export const SizeLgTypeImage: React.FC = () => {
  return (
    <div className="ds-component ds-size-lg-type-image">
      <img src={icon} className="h-full w-auto object-contain" alt="size=lg, type=image" />
    </div>
  );
};
