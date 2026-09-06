import { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Admin from './components/Admin';

export default function App() {
  const { theme, toggle } = useTheme();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check initial URL
    const checkRoute = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      setIsAdmin(path === '/admin' || hash === '#admin');
    };

    checkRoute();
    window.addEventListener('hashchange', checkRoute);
    window.addEventListener('popstate', checkRoute);

    return () => {
      window.removeEventListener('hashchange', checkRoute);
      window.removeEventListener('popstate', checkRoute);
    };
  }, []);

  const goToAdmin = () => {
    window.history.pushState({}, '', '/admin');
    setIsAdmin(true);
  };

  const goToSite = () => {
    window.history.pushState({}, '', '/');
    setIsAdmin(false);
  };

  if (isAdmin) {
    return (
      <div data-theme={theme}>
        <Admin onBack={goToSite} />
      </div>
    );
  }

  return (
    <>
      <Navbar onToggleTheme={toggle} />
      <Hero loaded />
      <TrustBar />
      <Process />
      <Portfolio />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
