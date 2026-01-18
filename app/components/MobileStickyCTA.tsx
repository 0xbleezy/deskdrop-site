'use client';

export default function MobileStickyCTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-neutral-950 text-white p-4 border-t border-neutral-200">
        <button
          onClick={scrollToContact}
          className="w-full px-6 py-4 bg-white text-neutral-950 text-sm uppercase tracking-widest font-light hover:bg-neutral-50 transition-colors"
        >
          Request a Sample
        </button>
      </div>
    </div>
  );
}

