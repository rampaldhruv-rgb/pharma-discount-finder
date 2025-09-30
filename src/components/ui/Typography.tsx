import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const H1: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h1 className={`text-4xl font-bold text-text leading-tight ${className}`}>
    {children}
  </h1>
);

export const H2: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h2 className={`text-3xl font-bold text-text leading-tight ${className}`}>
    {children}
  </h2>
);

export const H3: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h3 className={`text-2xl font-bold text-text leading-tight ${className}`}>
    {children}
  </h3>
);

export const H4: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h4 className={`text-xl font-bold text-text leading-tight ${className}`}>
    {children}
  </h4>
);

export const H5: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h5 className={`text-lg font-bold text-text leading-tight ${className}`}>
    {children}
  </h5>
);

export const H6: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h6 className={`text-base font-bold text-text leading-tight ${className}`}>
    {children}
  </h6>
);

export const Body: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <p className={`text-base text-text leading-relaxed ${className}`}>
    {children}
  </p>
);

export const BodySmall: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <p className={`text-sm text-text leading-relaxed ${className}`}>
    {children}
  </p>
);

export const Caption: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <p className={`text-xs text-gray-600 leading-relaxed ${className}`}>
    {children}
  </p>
);