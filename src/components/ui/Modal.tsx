'use client';

import { useEffect, useCallback, ReactNode } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  maxWidth?: string;
}

export default function Modal({ open, onClose, children, title, maxWidth = '720px' }: ModalProps) {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [open, handleKey]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-[#181C23] border border-[#2A2F38] rounded-[18px] w-full mx-4 max-h-[85vh] overflow-auto animate-in"
        style={{ maxWidth }}
        onClick={e => e.stopPropagation()}
      >
        {title && (
          <div className="flex items-center justify-between p-8 border-b border-[#2A2F38] sticky top-0 bg-[#181C23] z-10">
            <h2 className="text-lg font-medium text-[#F1F5F9]">{title}</h2>
            <button onClick={onClose} className="w-10 h-10 flex items-center justify-center rounded-[10px] text-[#64748B] hover:bg-[#1E2330] transition-all duration-150">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        )}
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
