import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/layout/SmoothScroll';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { getContent } from '@/lib/content';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const content = getContent();
  const footerContent = content.footer;

  return (
    <>
      <CustomCursor />
      <Navbar />
      <ScrollToTop>
        <SmoothScroll>
          <main className="flex-1 pt-[88px]">
            {children}
          </main>
          <Footer
            email={footerContent.email}
            phone={footerContent.phone}
            social={footerContent.social}
          />
        </SmoothScroll>
      </ScrollToTop>
    </>
  );
}
