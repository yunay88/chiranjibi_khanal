import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/layout/SmoothScroll';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollToTop from '@/components/layout/ScrollToTop';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <ScrollToTop>
        <SmoothScroll>
          <main className="flex-1 pt-[88px]">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </ScrollToTop>
    </>
  );
}