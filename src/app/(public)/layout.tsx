import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/layout/SmoothScroll';
import CustomCursor from '@/components/layout/CustomCursor';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <SmoothScroll>
        <main className="flex-1">{children}</main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
