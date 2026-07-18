/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { Save, Globe, Mail, Link as LinkIcon } from 'lucide-react';

export default function SettingsPage() {
  const [s, setS] = useState({
    siteName: 'Chiranjibi Khanal',
    siteDescription: 'Cinematic photography and videography portfolio',
    adminEmail: 'admin@chiranjibikhanal.com',
    contactEmail: 'hi@chiranjibikhanal.com',
    contactPhone: '+977-XXXXXXXX',
    address: 'Kathmandu, Nepal',
    instagram: '#', vimeo: '#', youtube: '#', linkedin: '#',
  });
  const [saved, setSaved] = useState(false);
  const [dirty, setDirty] = useState(false);

  const update = (key: string, val: string) => { setDirty(true); setSaved(false); setS((p) => ({ ...p, [key]: val })); };
  const save = () => {
    localStorage.setItem('siteSettings', JSON.stringify(s));
    setSaved(true); setDirty(false);
    setTimeout(() => setSaved(false), 2500);
  };

  const groups = [
    { title: 'General Settings', icon: Globe, fields: [
      { key: 'siteName', label: 'Site Name' },
      { key: 'siteDescription', label: 'Site Description' },
      { key: 'adminEmail', label: 'Admin Email' },
    ]},
    { title: 'Contact Information', icon: Mail, fields: [
      { key: 'contactEmail', label: 'Contact Email' },
      { key: 'contactPhone', label: 'Phone Number' },
      { key: 'address', label: 'Address' },
    ]},
    { title: 'Social Links', icon: LinkIcon, fields: [
      { key: 'instagram', label: 'Instagram URL' },
      { key: 'vimeo', label: 'Vimeo URL' },
      { key: 'youtube', label: 'YouTube URL' },
      { key: 'linkedin', label: 'LinkedIn URL' },
    ]},
  ];

  return (
    <div className="flex flex-col h-screen">
      {/* Topbar */}
      <div className="admin-topbar">
        <div>
          <h1 className="admin-heading">Settings</h1>
          <p className="admin-muted mt-0.5">Manage site configuration</p>
        </div>
        <div className="flex items-center gap-3">
          {dirty && <span className="admin-badge text-[10px]">Unsaved</span>}
          <button
            onClick={save}
            disabled={!dirty && !saved}
            className={`admin-btn ${saved ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'admin-btn-primary'}`}
          >
            <Save size={16} strokeWidth={1.5} />
            {saved ? 'Saved' : 'Save Changes'}
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto admin-scroll p-6 lg:p-8">
        <div className="max-w-2xl mx-auto space-y-6">
          {groups.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.title} className="admin-card">
                <div className="flex items-center gap-3 mb-6">
                  <Icon size={20} strokeWidth={1.5} className="text-[var(--color-admin-text)]" />
                  <h2 className="text-sm font-semibold text-[var(--color-admin-text)]">{group.title}</h2>
                </div>
                <div className="space-y-5">
                  {group.fields.map((f) => (
                    <div key={f.key}>
                      <label className="admin-label block mb-1.5">{f.label}</label>
                      <input value={(s as any)[f.key]} onChange={(e) => update(f.key, e.target.value)} className="admin-input" />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
