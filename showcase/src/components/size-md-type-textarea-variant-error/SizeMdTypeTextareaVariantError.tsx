import React from 'react';
import './size-md-type-textarea-variant-error.css';
import icon from './assets/size.svg';

export const SizeMdTypeTextareaVariantError: React.FC = () => {
  return (
    <div className="ds-component ds-size-md-type-textarea-variant-error">
      <img src={icon} className="h-full w-auto object-contain" alt="size=md, type=textarea, variant=error" />
    </div>
  );
};
