'use client';

import { useEffect, useState } from 'react';

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // Show after scrolling past 50% of viewport
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4">
      <button
        onClick={scrollToContact}
        className="glass-button w-full px-6 py-4 text-white text-sm uppercase tracking-widest font-light transition-all"
        style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%, rgba(255,255,255,0.03) 100%), linear-gradient(145deg, hsl(0 0% 12% / 0.45), hsl(0 0% 6% / 0.4))' }}
      >
        Request a Sample
      </button>
    </div>
  );
}
