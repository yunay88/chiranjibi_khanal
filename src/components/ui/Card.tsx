'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const paddings = { sm: 'p-4', md: 'p-6', lg: 'p-8' };

export default function Card({ children, className = '', hover = false, padding = 'md' }: CardProps) {
  return (
    <div
      className={`bg-[#181C23] border border-[#2A2F38] rounded-[16px] ${paddings[padding]}
        ${hover ? 'hover:border-[#3A4455] transition-all duration-150' : ''}
        ${className}`}
    >
      {children}
    </div>
  );
}

export function CardHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: ReactNode }) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        <h3 className="text-lg font-medium text-[#F1F5F9]">{title}</h3>
        {subtitle && <p className="text-sm text-[#64748B] mt-0.5">{subtitle}</p>}
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
}

export function StatCard({ number, label, trend }: { number: string; label: string; trend?: { value: string; positive: boolean } }) {
  return (
    <Card padding="lg">
      <p className="text-[42px] font-semibold text-[#F1F5F9] leading-none">{number}</p>
      <p className="text-sm text-[#64748B] mt-2">{label}</p>
      {trend && (
        <p className={`text-xs mt-2 ${trend.positive ? 'text-[#22C55E]' : 'text-[#EF4444]'}`}>
          {trend.value}
        </p>
      )}
    </Card>
  );
}
