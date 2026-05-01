'use client';

import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ComparisonTable() {
  const { ref, isVisible } = useScrollReveal();

  const features = [
    {
      feature: 'Reply Rate',
      deskDrop: 'Up to 30%',
      email: '2-3%',
      coldCall: '1-2%',
    },
    {
      feature: 'Brand Visibility',
      deskDrop: '24/7 on desk',
      email: 'Opened once',
      coldCall: 'No visibility',
    },
    {
      feature: 'Repeated Exposure',
      deskDrop: 'Multiple daily',
      email: 'Once (if opened)',
      coldCall: 'One interaction',
    },
    {
      feature: 'Deal Velocity',
      deskDrop: 'Often 2-3x faster',
      email: 'Standard',
      coldCall: 'Standard',
    },
    {
      feature: 'Goodwill Creation',
      deskDrop: 'High',
      email: 'Low',
      coldCall: 'Negative',
    },
    {
      feature: 'Cost per Touchpoint',
      deskDrop: '$25-40 per prospect',
      email: '$0.10-1',
      coldCall: '$50-100',
    },
    {
      feature: 'Cut Through Noise',
      deskDrop: 'Yes - Physical',
      email: 'No - Digital clutter',
      coldCall: 'No - Interruptive',
    },
  ];

  return (
    <section 
      ref={ref} 
      className={`py-16 sm:py-20 bg-gradient-to-b from-neutral-50/80 to-transparent fade-in-on-scroll ${isVisible ? 'visible' : ''}`}
    >
      <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
        <div className="text-center mb-10">
          <p className="text-xs text-neutral-400 uppercase tracking-[0.3em] font-light mb-4">Comparison</p>
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-950 mb-4 leading-tight">
            Why this works where<br />other channels stall
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light">
            Behavioral advantages that drive different outcomes
          </p>
        </div>

        {/* Glass container for table + callout + CTA */}
        <div className="glass-card p-6 md:p-10">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-black/10">
                  <th className="px-3 md:px-6 py-4 md:py-5 text-left text-xs font-medium text-neutral-950 uppercase tracking-[0.15em]">
                    Feature
                  </th>
                  <th className="px-3 md:px-6 py-4 md:py-5 text-left text-xs font-medium text-neutral-950 uppercase tracking-[0.15em] bg-black/[0.03]">
                    <span>DeskDrop</span>
                  </th>
                  <th className="px-3 md:px-6 py-4 md:py-5 text-left text-xs font-medium text-neutral-500 uppercase tracking-[0.15em]">
                    Email
                  </th>
                  <th className="px-3 md:px-6 py-4 md:py-5 text-left text-xs font-medium text-neutral-500 uppercase tracking-[0.15em]">
                    <span className="md:hidden">Call</span>
                    <span className="hidden md:inline">Cold Call</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((item, index) => (
                  <tr key={index} className="border-b border-black/5">
                    <td className="px-3 md:px-6 py-4 md:py-5 text-xs md:text-sm font-light text-neutral-950">
                      {item.feature}
                    </td>
                    <td className="px-3 md:px-6 py-4 md:py-5 text-xs md:text-sm font-light text-neutral-950 bg-black/[0.03]">
                      {item.deskDrop}
                    </td>
                    <td className="px-3 md:px-6 py-4 md:py-5 text-xs md:text-sm text-neutral-500 font-light">
                      {item.email}
                    </td>
                    <td className="px-3 md:px-6 py-4 md:py-5 text-xs md:text-sm text-neutral-500 font-light">
                      {item.coldCall}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA inset */}
          <div className="mt-8 bg-white/40 backdrop-blur-sm border border-black/[0.08] rounded-xl px-6 py-8 text-center">
            <p className="text-lg text-neutral-700 font-light mb-6">
              Ready to see what this looks like for your accounts?
            </p>
            <a
              href="#contact"
              className="glass-button inline-block px-10 py-4 text-white text-xs uppercase tracking-widest font-light transition-colors"
            >
              Request a Sample
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
