import React from 'react';
import './size-md-type-textarea-variant-placeholder.css';
import icon from './assets/size.svg';

export const SizeMdTypeTextareaVariantPlaceholder: React.FC = () => {
  return (
    <div className="ds-component ds-size-md-type-textarea-variant-placeholder">
      <img src={icon} className="h-full w-auto object-contain" alt="size=md, type=textarea, variant=placeholder" />
    </div>
  );
};
