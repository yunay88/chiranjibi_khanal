'use client';

import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

interface ToastItem {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}

interface ToastCtx {
  toast: (msg: string, type?: ToastItem['type']) => void;
}

const Ctx = createContext<ToastCtx>({ toast: () => {} });
export const useToast = () => useContext(Ctx);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const toast = (message: string, type: ToastItem['type'] = 'info') => {
    const id = Math.random().toString(36).slice(2);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000);
  };

  const colors: Record<string, string> = {
    success: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    error: 'bg-red-500/10 border-red-500/20 text-red-400',
    info: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    warning: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
  };

  return (
    <Ctx.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[100] space-y-2" style={{ width: '360px' }}>
        {toasts.map(t => (
          <div
            key={t.id}
            className={`h-[72px] px-4 py-3 rounded-[14px] border flex items-center gap-4 shadow-lg animate-in ${colors[t.type]}`}
          >
            <p className="text-sm flex-1">{t.message}</p>
            <button onClick={() => setToasts(prev => prev.filter(x => x.id !== t.id))} className="text-current/60 hover:text-current text-xs">✕</button>
          </div>
        ))}
      </div>
    </Ctx.Provider>
  );
}
