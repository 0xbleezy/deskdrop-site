'use client';

export default function MobileStickyCTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden p-4">
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
