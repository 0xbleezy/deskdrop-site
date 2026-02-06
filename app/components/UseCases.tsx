'use client';

import { useScrollReveal } from '../hooks/useScrollReveal';

export default function UseCases() {
  const { ref, isVisible } = useScrollReveal();

  const useCases = [
    {
      bestFor: 'Sales',
      title: 'Cold or Ignored Outbound',
      description: 'Warm cold prospects before your first outreach with a physical desk drop.',
      metrics: ['Up to 40% higher meeting acceptance', '2x faster response times', 'Breaks through inbox fatigue'],
    },
    {
      bestFor: 'ABM',
      title: 'Stalled High-Value Deals',
      description: "Rekindle stalled conversations with decision-makers who've gone quiet.",
      metrics: ['3x engagement vs. email re-engagement', 'Faster deal velocity on revived opps', 'Reduces "radio silence" response times'],
    },
    {
      bestFor: 'Enterprise',
      title: 'Strategic Account Penetration',
      description: 'Get noticed across an entire buying committee simultaneously.',
      metrics: ['Penetrate multi-stakeholder accounts', 'Higher awareness across committees', 'Better positioning for enterprise deals'],
    },
    {
      bestFor: 'Events',
      title: 'Conference Follow-Up',
      description: 'Stand out after in-person connections with a physical follow-up.',
      metrics: ['60% better follow-up response', 'Higher conversion from event leads', 'Bridges online/offline touchpoints'],
    },
  ];

  return (
    <section 
      ref={ref as any}
      className={`py-16 sm:py-24 fade-in-on-scroll ${isVisible ? 'visible' : ''}`}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-[7vw]">
        <div className="text-center mb-10">
          <p className="text-xs text-neutral-400 uppercase tracking-[0.3em] font-light mb-4">Use Cases</p>
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-950 mb-4">
            When It Works Best
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
            Prospect gifting that delivers real pipeline results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="glass-card p-8">
              {/* Best for badge */}
              <p className="text-xs uppercase tracking-widest text-neutral-400 font-light mb-4">
                Best for {useCase.bestFor}
              </p>
              
              {/* Title */}
              <h3 className="text-xl font-display font-light text-neutral-950 mb-3 leading-tight">
                {useCase.title}
              </h3>
              
              {/* Description — one sentence */}
              <p className="text-base text-neutral-600 font-light leading-relaxed">
                {useCase.description}
              </p>
              
              {/* Key results */}
              <p className="text-xs uppercase tracking-widest text-neutral-400 font-light mt-6 mb-3">
                Key Results
              </p>
              <ul className="space-y-2">
                {useCase.metrics.map((metric, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[0.45rem] w-1.5 h-1.5 rounded-full bg-neutral-300 flex-shrink-0" />
                    <span className="text-sm text-neutral-600 font-light">{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
