import { ReactNode } from 'react';

type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
}

const variants: Record<BadgeVariant, string> = {
  default: 'bg-[#1E2330] text-[#94A3B8] border-[#2A2F38]',
  success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  error: 'bg-red-500/10 text-red-400 border-red-500/20',
  info: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
};

export default function Badge({ children, variant = 'default', size = 'sm' }: BadgeProps) {
  const height = size === 'sm' ? 'h-6' : 'h-7';
  return (
    <span
      className={`inline-flex items-center ${height} px-2 text-[12px] font-medium rounded-full border ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
