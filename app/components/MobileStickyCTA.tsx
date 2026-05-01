'use client';

import { useRouter } from 'next/navigation';

export default function MobileStickyCTA() {
  const router = useRouter();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#contact');
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden p-4">
      <button
        onClick={scrollToContact}
        aria-label="Request a sample — scroll to contact form"
        className="glass-button w-full px-6 py-4 text-white text-sm uppercase tracking-widest font-light transition-all focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-neutral-900"
        style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%, rgba(255,255,255,0.03) 100%), linear-gradient(145deg, hsl(0 0% 12% / 0.45), hsl(0 0% 6% / 0.4))' }}
      >
        Request a Sample
      </button>
    </div>
  );
}
