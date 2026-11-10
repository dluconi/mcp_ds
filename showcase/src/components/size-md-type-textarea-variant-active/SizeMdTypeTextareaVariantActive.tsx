import React from 'react';
import './size-md-type-textarea-variant-active.css';
import icon from './assets/size.svg';

export const SizeMdTypeTextareaVariantActive: React.FC = () => {
  return (
    <div className="ds-component ds-size-md-type-textarea-variant-active">
      <img src={icon} className="h-full w-auto object-contain" alt="size=md, type=textarea, variant=active" />
    </div>
  );
};
