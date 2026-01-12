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
      <div className="bg-chocolate-600 text-white p-4 shadow-luxury-lg">
        <button
          onClick={scrollToContact}
          className="w-full px-6 py-4 bg-white text-chocolate-700 rounded-lg font-semibold text-lg hover:bg-cream-50 transition-colors shadow-lg"
        >
          Request a Sample
        </button>
      </div>
    </div>
  );
}

