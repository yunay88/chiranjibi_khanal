import '@/styles/admin.css';
import AdminAuthCheck from '@/components/admin/AdminAuthCheck';

export default function AdminGroupLayout({ children }: { children: React.ReactNode }) {
  return <AdminAuthCheck>{children}</AdminAuthCheck>;
}
