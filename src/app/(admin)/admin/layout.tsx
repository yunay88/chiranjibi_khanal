'use client';

import { useState } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen admin-body flex">
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setSidebarOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-64 max-w-[85vw]">
            <AdminSidebar onClose={() => setSidebarOpen(false)} />
          </div>
        </div>
      )}
      <div className="hidden md:block flex-shrink-0">
        <AdminSidebar />
      </div>
      <div className="flex-1 flex flex-col min-h-screen max-w-full overflow-hidden">
        {children}
      </div>
    </div>
  );
}
