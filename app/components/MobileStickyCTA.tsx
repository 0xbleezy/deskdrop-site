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
      <div className="bg-neutral-900 text-white p-4 border-t border-neutral-800">
        <button
          onClick={scrollToContact}
          className="w-full px-6 py-4 bg-white text-neutral-900 text-sm font-light hover:bg-neutral-100 transition-colors rounded"
        >
          Let's Chat
        </button>
      </div>
    </div>
  );
}
