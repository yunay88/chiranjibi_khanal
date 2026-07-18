'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LogIn } from 'lucide-react';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) { setError('Email and password are required.'); return; }
    setLoading(true);
    setTimeout(() => {
      if (email === 'admin@chiranjibikhanal.com' && password === 'admin123') {
        document.cookie = 'admin_authed=true; path=/';
        router.push('/admin/dashboard');
      } else {
        setError('Invalid email or password.');
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen admin-body flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-[400px]">
        <div className="text-center mb-10">
          <Link href="/" className="inline-block text-sm text-[var(--color-admin-text-muted)] hover:text-[var(--color-admin-text-secondary)] transition-colors mb-10">
            ← Back to site
          </Link>
          <h1 className="text-2xl font-bold text-[var(--color-admin-text)] mb-2">Welcome back</h1>
          <p className="text-sm text-[var(--color-admin-text-muted)]">Sign in to manage your website.</p>
        </div>

        <form onSubmit={handleSubmit} className="admin-card space-y-5">
          <div className="space-y-1.5">
            <label className="admin-label">Email</label>
            <input type="email" placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="admin-input" />
          </div>
          <div className="space-y-1.5">
            <label className="admin-label">Password</label>
            <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="admin-input" />
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
              <p className="text-sm text-red-400">{error}</p>
            </div>
          )}

          <button type="submit" disabled={loading} className="admin-btn admin-btn-primary w-full justify-center h-11">
            <LogIn size={16} strokeWidth={1.5} />
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-[var(--color-admin-text-muted)] leading-relaxed">
            Demo: <span className="text-[var(--color-admin-text-secondary)]">admin@chiranjibikhanal.com</span>
            <br />
            Password: <span className="text-[var(--color-admin-text-secondary)]">admin123</span>
          </p>
        </div>
      </div>
    </div>
  );
}
