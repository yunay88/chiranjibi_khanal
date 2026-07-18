'use client';

import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className = '', id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
    const baseStyles = `w-full h-12 px-4 text-[15px] rounded-[10px] transition-all duration-150
      bg-transparent border text-[#F1F5F9] placeholder-[#7C8596]
      focus:outline-none focus:border-[#3B82F6] focus:ring-[4px] focus:ring-[rgba(37,99,235,0.15)]
      disabled:opacity-40 disabled:cursor-not-allowed`;
    const borderStyles = error
      ? 'border-[#EF4444] focus:border-[#EF4444] focus:ring-red-500/20'
      : 'border-[#2A2F38] hover:border-[#3A4455]';

    return (
      <div className="space-y-1.5">
        {label && (
          <label htmlFor={inputId} className="block text-[13px] font-medium text-[#94A3B8] mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`${baseStyles} ${borderStyles} ${className}`}
          {...props}
        />
        {hint && !error && <p className="text-xs text-[#64748B] mt-1.5">{hint}</p>}
        {error && <p className="text-xs text-[#EF4444] mt-1.5">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
