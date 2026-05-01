import Link from 'next/link';

export default function PilotPlan() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
        <div className="glass-card p-8 sm:p-12 rounded max-w-3xl mx-auto text-center">
          <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4 font-display">
            Start Small
          </div>
          <h3 className="text-3xl md:text-4xl font-display font-light text-neutral-900 mb-6 leading-tight">
            The pilot plan
          </h3>
          <p className="text-lg text-neutral-700 mb-6 leading-relaxed font-light max-w-xl mx-auto">
            Not ready to commit? Start with a single campaign of 50 gifts to test the impact.
            No subscription, no long-term commitment—just results.
          </p>
          <ul className="space-y-3 text-base text-neutral-700 font-light mb-8 inline-block text-left">
            <li className="flex items-start gap-2"><span className="text-neutral-400">✓</span> 50 custom-branded gifts shipped to your prospects</li>
            <li className="flex items-start gap-2"><span className="text-neutral-400">✓</span> Follow-up sequence playbook included</li>
            <li className="flex items-start gap-2"><span className="text-neutral-400">✓</span> 2-week production, then direct delivery</li>
            <li className="flex items-start gap-2"><span className="text-neutral-400">✓</span> No subscription required</li>
          </ul>
          <div>
            <Link
              href="/#contact"
              className="glass-button inline-block px-8 py-4 text-white text-base font-light rounded transition-all font-display"
            >
              Start a Pilot
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
