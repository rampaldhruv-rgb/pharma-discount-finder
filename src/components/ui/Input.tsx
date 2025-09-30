import React from 'react';
import { Video as LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helpText,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  const baseClasses = 'w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const stateClasses = error 
    ? 'border-error-300 focus:border-error-500 focus:ring-error-200' 
    : 'border-gray-300 focus:border-primary focus:ring-primary-200';
    
  const iconClasses = Icon ? (iconPosition === 'left' ? 'pl-12' : 'pr-12') : '';

  return (
    <div className="space-y-2">
      {label && (
        <label 
          htmlFor={inputId} 
          className="block text-sm font-semibold text-text"
        >
          {label}
        </label>
      )}
      
      <div className="relative">
        {Icon && (
          <div className={`absolute inset-y-0 ${iconPosition === 'left' ? 'left-0 pl-4' : 'right-0 pr-4'} flex items-center pointer-events-none`}>
            <Icon 
              size={20} 
              className={error ? 'text-error-400' : 'text-gray-400'} 
            />
          </div>
        )}
        
        <input
          id={inputId}
          className={`${baseClasses} ${stateClasses} ${iconClasses} ${className}`}
          {...props}
        />
      </div>
      
      {error && (
        <p className="text-sm text-error-600">
          {error}
        </p>
      )}
      
      {helpText && !error && (
        <p className="text-sm text-gray-600">
          {helpText}
        </p>
      )}
    </div>
  );
};