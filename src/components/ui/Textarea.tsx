'use client';

import { TextareaHTMLAttributes, forwardRef } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  maxLength?: number;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, maxLength, className = '', id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
    const baseStyles = `w-full min-h-[160px] p-4 text-[15px] rounded-[10px] transition-all duration-150 resize-y
      bg-transparent border text-[#F1F5F9] placeholder-[#7C8596]
      focus:outline-none focus:border-[#3B82F6] focus:ring-[4px] focus:ring-[rgba(37,99,235,0.15)]
      disabled:opacity-40 disabled:cursor-not-allowed`;
    const borderStyles = error
      ? 'border-[#EF4444]'
      : 'border-[#2A2F38] hover:border-[#3A4455]';

    return (
      <div className="space-y-1.5">
        {label && (
          <label htmlFor={inputId} className="block text-[13px] font-medium text-[#94A3B8] mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          className={`${baseStyles} ${borderStyles} ${className}`}
          {...props}
        />
        <div className="flex justify-between items-center mt-1.5">
          {hint && !error && <p className="text-xs text-[#64748B]">{hint}</p>}
          {error && <p className="text-xs text-[#EF4444]">{error}</p>}
          {maxLength && (
            <p className="text-xs text-[#64748B] ml-auto">
              {String(props.value || '').length}/{maxLength}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
export default Textarea;
