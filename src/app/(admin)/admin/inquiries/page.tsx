'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

interface Inquiry {
  id: number; name: string; email: string; subject: string; message: string;
  status: 'unread' | 'read' | 'replied' | 'archived'; date: string;
}

const demos: Inquiry[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', subject: 'Wedding Photography', message: 'Hi Chiranjibi, I am interested in booking you for my wedding in December. Please let me know your availability.', status: 'unread', date: 'Jul 10' },
  { id: 2, name: 'Jane Smith', email: 'jane@agency.com', subject: 'Commercial Project', message: 'We are looking for a cinematographer for an upcoming shoot.', status: 'read', date: 'Jul 8' },
  { id: 3, name: 'Mike Johnson', email: 'mike@gmail.com', subject: 'Portrait Session', message: 'Looking to book a portrait session.', status: 'unread', date: 'Jul 5' },
];

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState(demos);
  const [selected, setSelected] = useState<Inquiry | null>(null);

  const markAs = (id: number, status: Inquiry['status']) => {
    setInquiries((p) => p.map((i) => (i.id === id ? { ...i, status } : i)));
    if (selected?.id === id) setSelected((p) => (p ? { ...p, status } : null));
  };

  const unread = inquiries.filter((i) => i.status === 'unread').length;
  const statuses: Inquiry['status'][] = ['unread', 'read', 'replied', 'archived'];

  return (
    <div className="flex flex-col h-screen">
      {/* Topbar */}
      <div className="admin-topbar">
        <div>
          <h1 className="admin-heading">Inquiries</h1>
          <p className="admin-muted mt-0.5">{unread > 0 ? `${unread} unread` : 'No unread messages'}</p>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto admin-scroll p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* List */}
          <div className="md:col-span-1 space-y-3">
            {inquiries.map((inq) => (
              <button
                key={inq.id}
                onClick={() => setSelected(inq)}
                className={`w-full text-left admin-card cursor-pointer ${
                  selected?.id === inq.id ? 'border-[var(--color-admin-border-light)]' : 'admin-card-hover'
                }`}
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  {inq.status === 'unread' && <span className="w-2 h-2 rounded-full bg-[var(--color-admin-text)] flex-shrink-0" />}
                  <p className={`text-sm flex-1 truncate ${inq.status === 'unread' ? 'font-semibold text-[var(--color-admin-text)]' : 'text-[var(--color-admin-text-muted)]'}`}>
                    {inq.name}
                  </p>
                  <span className="text-xs text-[var(--color-admin-text-muted)] flex-shrink-0">{inq.date}</span>
                </div>
                <p className="text-xs text-[var(--color-admin-text-muted)] truncate pl-4">{inq.subject}</p>
              </button>
            ))}
          </div>

          {/* Detail */}
          <div className="md:col-span-2">
            {selected ? (
              <div className="admin-card">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="text-base font-semibold text-[var(--color-admin-text)]">{selected.name}</p>
                    <p className="text-sm text-[var(--color-admin-text-muted)] mt-0.5">{selected.email}</p>
                    <p className="text-xs text-[var(--color-admin-text-muted)] mt-2">{selected.date}</p>
                  </div>
                  <div className="flex gap-1.5 flex-wrap">
                    {statuses.map((s) => (
                      <button
                        key={s}
                        onClick={() => markAs(selected.id, s)}
                        className={`admin-badge cursor-pointer transition-all duration-150 ${selected.status === s ? 'active' : ''}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="border-t border-[var(--color-admin-border)] pt-5">
                  <p className="text-xs font-semibold text-[var(--color-admin-text-muted)] uppercase tracking-wider mb-3">{selected.subject}</p>
                  <p className="text-sm text-[var(--color-admin-text-secondary)] leading-relaxed">{selected.message}</p>
                </div>
              </div>
            ) : (
              <div className="admin-card flex flex-col items-center justify-center py-20 text-center">
                <Mail size={32} strokeWidth={1.5} className="text-[var(--color-admin-text-muted)]/30 mb-3" />
                <p className="admin-muted">Select a message to read</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
