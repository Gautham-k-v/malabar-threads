import { useEffect, useRef } from 'react';
import { ShopProvider } from './context/ShopContext';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import NewArrivals from './components/NewArrivals';
import Collections from './components/Collections';
import BrandStory from './components/BrandStory';
import FestiveBanner from './components/FestiveBanner';
import Testimonials from './components/Testimonials';
import InstagramSection from './components/InstagramSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import SearchModal from './components/SearchModal';
import ProductModal from './components/ProductModal';
import Toast from './components/Toast';

function Site() {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return undefined;
    const update = () => {
      document.documentElement.style.setProperty('--header-h', `${header.offsetHeight}px`);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#top">
        Skip to content
      </a>
      <header className="site-header" ref={headerRef}>
        <AnnouncementBar />
        <Navbar />
      </header>
      <main>
        <Hero />
        <CategorySection />
        <NewArrivals />
        <Collections />
        <BrandStory />
        <FestiveBanner />
        <Testimonials />
        <InstagramSection />
        <ContactSection />
      </main>
      <Footer />
      <CartDrawer />
      <WishlistDrawer />
      <SearchModal />
      <ProductModal />
      <Toast />
    </>
  );
}

export default function App() {
  return (
    <ShopProvider>
      <Site />
    </ShopProvider>
  );
}
