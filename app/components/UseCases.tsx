'use client';

import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface UseCase {
  id: string;
  bestFor: string;
  title: string;
  description: string;
  metrics: string[];
}

function UseCaseCard({
  useCase,
  isOpen,
  onToggle,
  hasExpanded,
}: {
  useCase: UseCase;
  isOpen: boolean;
  onToggle: () => void;
  hasExpanded: boolean;
}) {
  const detailsId = `usecase-details-${useCase.id}`;

  return (
    <div
      className={`glass-card p-8 transition-all duration-300 ${
        isOpen
          ? 'shadow-md ring-1 ring-neutral-200/60'
          : hasExpanded
            ? 'opacity-[0.85]'
            : ''
      }`}
    >
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

      {/* Expandable details */}
      <div
        id={detailsId}
        role="region"
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
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
      </div>

      {/* Toggle affordance */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={detailsId}
        className="mt-5 ml-auto flex items-center gap-1.5 text-xs text-neutral-400 hover:text-neutral-600 transition-colors cursor-pointer"
      >
        <span>{isOpen ? 'Hide details' : 'View details'}</span>
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
    </div>
  );
}

export default function UseCases() {
  const { ref, isVisible } = useScrollReveal();
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const useCases: UseCase[] = [
    {
      id: 'sales',
      bestFor: 'Sales',
      title: 'Cold or ignored outbound',
      description: 'Warm cold prospects before your first outreach with a physical desk drop.',
      metrics: ['Up to 40% higher meeting acceptance', '2x faster response times', 'Breaks through inbox fatigue'],
    },
    {
      id: 'abm',
      bestFor: 'ABM',
      title: 'Stalled high-value deals',
      description: "Rekindle stalled conversations with decision-makers who've gone quiet.",
      metrics: ['3x engagement vs. email re-engagement', 'Faster deal velocity on revived opps', 'Reduces "radio silence" response times'],
    },
    {
      id: 'enterprise',
      bestFor: 'Enterprise',
      title: 'Strategic account penetration',
      description: 'Get noticed across an entire buying committee simultaneously.',
      metrics: ['Penetrate multi-stakeholder accounts', 'Higher awareness across committees', 'Better positioning for enterprise deals'],
    },
    {
      id: 'events',
      bestFor: 'Events',
      title: 'Conference follow-up',
      description: 'Stand out after in-person connections with a physical follow-up.',
      metrics: ['60% better follow-up response', 'Higher conversion from event leads', 'Bridges online/offline touchpoints'],
    },
  ];

  const hasExpanded = activeCardId !== null;

  return (
    <section
      ref={ref}
      className={`py-16 sm:py-24 fade-in-on-scroll ${isVisible ? 'visible' : ''}`}
    >
      <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
        <div className="text-center mb-10">
          <p className="text-xs text-neutral-400 uppercase tracking-[0.3em] font-light mb-4">Use Cases</p>
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-950 mb-4">
            When it works best
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
            Prospect gifting that delivers real pipeline results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase) => (
            <UseCaseCard
              key={useCase.id}
              useCase={useCase}
              isOpen={activeCardId === useCase.id}
              hasExpanded={hasExpanded}
              onToggle={() =>
                setActiveCardId((prev) => (prev === useCase.id ? null : useCase.id))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
