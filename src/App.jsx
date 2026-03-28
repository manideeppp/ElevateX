import { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import Starfield from './components/Starfield';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
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
      <Starfield />
      <div className="noise-overlay" />
      <CursorGlow />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <Hero loaded />
      <TrustBar />
      <Services />
      <Portfolio />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
