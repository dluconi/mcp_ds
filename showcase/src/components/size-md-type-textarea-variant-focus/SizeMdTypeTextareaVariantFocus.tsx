import React from 'react';
import './size-md-type-textarea-variant-focus.css';
import icon from './assets/size.svg';

export const SizeMdTypeTextareaVariantFocus: React.FC = () => {
  return (
    <div className="ds-component ds-size-md-type-textarea-variant-focus">
      <img src={icon} className="h-full w-auto object-contain" alt="size=md, type=textarea, variant=focus" />
    </div>
  );
};
