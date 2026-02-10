'use client';

import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const DEFAULTS = {
  prospects: 100,
  avgDealValue: 15000,
  jarType: 'desk' as 'scale' | 'desk' | 'office',
};

const JAR_PRICES = {
  scale: 35,
  desk: 40,
  office: 50,
};

const JAR_LABELS = {
  scale: 'Scale',
  desk: 'Desk',
  office: 'Office',
};

// Fixed assumptions (not user-editable)
const MEETING_RATE = 0.14;
const CLOSE_RATE = 0.18;

// Stepper button classes — glass style matching site
const stepperBtnClass =
  'w-10 h-10 rounded-lg glass-button-outline-on-light transition-all flex items-center justify-center text-neutral-600';

function Stepper({
  label,
  value,
  onChange,
  min = 1,
  max = 999999,
  step = 1,
  prefix = '',
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
  prefix?: string;
}) {
  const decrement = () => onChange(Math.max(min, value - step));
  const increment = () => onChange(Math.min(max, value + step));

  return (
    <div className="glass-card p-5">
      <label className="block text-xs text-neutral-500 uppercase tracking-widest font-light mb-3">
        {label}
      </label>
      <div className="flex items-center justify-between gap-4">
        <button onClick={decrement} className={stepperBtnClass} aria-label={`Decrease ${label}`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
          </svg>
        </button>
        <div className="flex-1 text-center">
          <span className="text-2xl font-light text-neutral-950">
            {prefix}{value.toLocaleString()}
          </span>
        </div>
        <button onClick={increment} className={stepperBtnClass} aria-label={`Increase ${label}`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function JarSelector({
  value,
  onChange,
}: {
  value: 'scale' | 'desk' | 'office';
  onChange: (v: 'scale' | 'desk' | 'office') => void;
}) {
  const options: Array<'scale' | 'desk' | 'office'> = ['office', 'desk', 'scale'];

  return (
    <div className="glass-card p-5">
      <label className="block text-xs text-neutral-500 uppercase tracking-widest font-light mb-3">
        Gift Size
      </label>
      <div className="grid grid-cols-3 gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`py-3 px-2 rounded-lg text-center transition-all ${
              value === option
                ? 'bg-neutral-900 text-white border border-neutral-800'
                : 'glass-button-outline-on-light text-neutral-600'
            }`}
          >
            <div className="text-sm font-light">{JAR_LABELS[option]}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ROICalculator() {
  const { ref, isVisible } = useScrollReveal();
  const [prospects, setProspects] = useState(DEFAULTS.prospects);
  const [avgDealValue, setAvgDealValue] = useState(DEFAULTS.avgDealValue);
  const [jarType, setJarType] = useState<'scale' | 'desk' | 'office'>(DEFAULTS.jarType);

  const costPerGift = JAR_PRICES[jarType];
  const totalCost = prospects * costPerGift;
  const meetings = Math.round(prospects * MEETING_RATE);
  const closedDeals = Math.round(meetings * CLOSE_RATE);
  const totalRevenue = closedDeals * avgDealValue;

  return (
    <section ref={ref as any} className={`py-16 sm:py-24 fade-in-on-scroll ${isVisible ? 'visible' : ''}`}>
      <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
        <div className="text-center mb-12">
          <p className="text-xs text-neutral-400 uppercase tracking-[0.3em] font-light mb-4">ROI Calculator</p>
          <h2 className="text-3xl md:text-5xl font-display font-light text-neutral-950">
            Estimate Your Pipeline Impact
          </h2>
        </div>

        {/* Main GlassCard container */}
        <div className="glass-card p-6 sm:p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            {/* Left: Inputs */}
            <div className="h-full flex flex-col space-y-4">
              <Stepper
                label="Number of Prospects"
                value={prospects}
                onChange={setProspects}
                min={1}
                step={10}
              />
              <JarSelector
                value={jarType}
                onChange={setJarType}
              />
              <Stepper
                label="Average Deal Size"
                value={avgDealValue}
                onChange={setAvgDealValue}
                min={1000}
                step={1000}
                prefix="$"
              />
            </div>

            {/* Right: Results */}
            <div className="h-full flex flex-col">
              <div className="glass-card p-6 bg-white/40 flex-1 flex flex-col">
                {/* Key metrics grid */}
                <div className="grid grid-cols-2 gap-6 flex-1">
                  <div className="text-center">
                    <div className="text-xs text-neutral-500 uppercase tracking-widest font-light mb-1">Total Cost</div>
                    <div className="text-3xl font-light text-neutral-950">${totalCost.toLocaleString()}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-neutral-500 uppercase tracking-widest font-light mb-1">Expected Meetings</div>
                    <div className="text-3xl font-light text-neutral-950">{meetings}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-neutral-500 uppercase tracking-widest font-light mb-1">Projected Deals</div>
                    <div className="text-3xl font-light text-neutral-950">{closedDeals}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-neutral-500 uppercase tracking-widest font-light mb-1">Total Revenue</div>
                    <div className="text-3xl font-light text-neutral-950">${totalRevenue.toLocaleString()}</div>
                  </div>
                </div>

                {/* CTA pinned to bottom */}
                <div className="mt-auto pt-6 border-t border-black/5 text-center">
                  <a
                    href="#contact"
                    className="glass-button inline-block px-10 py-4 text-white text-xs uppercase tracking-widest font-light transition-colors"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
