'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary: 'bg-[#2563EB] text-white hover:bg-[#1D4ED8] active:bg-[#1E40AF]',
  secondary: 'bg-transparent border border-[#2A2F38] text-[#F1F5F9] hover:bg-[#1E2330] active:bg-[#252B3A]',
  ghost: 'bg-transparent text-[#94A3B8] hover:bg-[#1E2330] active:bg-[#252B3A]',
  danger: 'bg-[#EF4444] text-white hover:bg-[#DC2626] active:bg-[#B91C1C]',
};

const sizeStyles: Record<Size, string> = {
  sm: 'h-9 px-3 text-xs rounded-[8px]',
  md: 'h-11 px-5 text-sm rounded-[10px]',
  lg: 'h-12 px-6 text-base rounded-[12px]',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading, disabled, className = '', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={`inline-flex items-center justify-center gap-2.5 font-medium transition-all duration-150
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${(disabled || loading) ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
          ${className}`}
        {...props}
      >
        {loading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
