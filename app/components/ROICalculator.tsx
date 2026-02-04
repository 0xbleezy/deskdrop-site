'use client';

import { useState } from 'react';

export default function ROICalculator() {
  const [prospects, setProspects] = useState(100);
  const [costPerGift, setCostPerGift] = useState(40);
  const [meetingRate, setMeetingRate] = useState(14);
  const [avgDealValue, setAvgDealValue] = useState(15000);
  const [closeRate, setCloseRate] = useState(25);

  const totalCost = prospects * costPerGift;
  const meetings = Math.round(prospects * (meetingRate / 100));
  const closedDeals = Math.round(meetings * (closeRate / 100));
  const totalRevenue = closedDeals * avgDealValue;
  const roi = totalCost > 0 ? ((totalRevenue - totalCost) / totalCost) * 100 : 0;
  const roas = totalCost > 0 ? totalRevenue / totalCost : 0;

  return (
    <section className="py-24 border-t border-neutral-200" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-6xl mx-auto px-8 lg:px-16 xl:px-20">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-neutral-950 mb-8 leading-tight">
            Estimate Your Pipeline Impact
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light">
            Input your campaign parameters to see projected meetings and pipeline impact 
            based on your deal sizes and conversion assumptions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Inputs */}
          <div className="border-t border-neutral-200 pt-12">
            <h3 className="text-2xl font-display font-light text-neutral-950 mb-12">
              Campaign Parameters
            </h3>
            <div className="space-y-8">
              <div>
                <label className="block text-xs text-neutral-600 mb-3 uppercase tracking-widest font-light">
                  Number of Prospects
                </label>
                <input
                  type="number"
                  value={prospects}
                  onChange={(e) => setProspects(Math.max(1, Number(e.target.value) || 0))}
                  className="w-full px-0 py-3 border-0 border-b border-neutral-300 focus:ring-0 focus:border-neutral-950 bg-transparent text-neutral-950 font-light text-2xl"
                  min="1"
                />
              </div>
              <div>
                <label className="block text-xs text-neutral-600 mb-3 uppercase tracking-widest font-light">
                  Cost per Gift ($)
                </label>
                <input
                  type="number"
                  value={costPerGift}
                  onChange={(e) => setCostPerGift(Math.max(1, Number(e.target.value) || 0))}
                  className="w-full px-0 py-3 border-0 border-b border-neutral-300 focus:ring-0 focus:border-neutral-950 bg-transparent text-neutral-950 font-light text-2xl"
                  min="1"
                />
              </div>
              <div>
                <label className="block text-xs text-neutral-600 mb-3 uppercase tracking-widest font-light">
                  Expected Meeting Rate (%)
                </label>
                <input
                  type="number"
                  value={meetingRate}
                  onChange={(e) => {
                    const val = Number(e.target.value) || 0;
                    setMeetingRate(Math.max(0, Math.min(100, val)));
                  }}
                  className="w-full px-0 py-3 border-0 border-b border-neutral-300 focus:ring-0 focus:border-neutral-950 bg-transparent text-neutral-950 font-light text-2xl"
                  min="0"
                  max="100"
                />
                <p className="text-xs text-neutral-500 mt-2 font-light">Industry average: 12-15%</p>
              </div>
              <div>
                <label className="block text-xs text-neutral-600 mb-3 uppercase tracking-widest font-light">
                  Average Deal Value ($)
                </label>
                <input
                  type="number"
                  value={avgDealValue}
                  onChange={(e) => setAvgDealValue(Math.max(1, Number(e.target.value) || 0))}
                  className="w-full px-0 py-3 border-0 border-b border-neutral-300 focus:ring-0 focus:border-neutral-950 bg-transparent text-neutral-950 font-light text-2xl"
                  min="1"
                />
              </div>
              <div>
                <label className="block text-xs text-neutral-600 mb-3 uppercase tracking-widest font-light">
                  Close Rate from Meetings (%)
                </label>
                <input
                  type="number"
                  value={closeRate}
                  onChange={(e) => {
                    const val = Number(e.target.value) || 0;
                    setCloseRate(Math.max(0, Math.min(100, val)));
                  }}
                  className="w-full px-0 py-3 border-0 border-b border-neutral-300 focus:ring-0 focus:border-neutral-950 bg-transparent text-neutral-950 font-light text-2xl"
                  min="0"
                  max="100"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="border-t border-neutral-200 pt-12">
            <h3 className="text-2xl font-display font-light text-neutral-950 mb-12">
              Projected Results
            </h3>
            <div className="space-y-8">
              <div className="border-b border-neutral-200 pb-6">
                <div className="text-xs text-neutral-600 uppercase tracking-widest font-light mb-2">Total Campaign Cost</div>
                <div className="text-2xl font-display font-light text-neutral-950">${totalCost.toLocaleString()}</div>
              </div>
              <div className="border-b border-neutral-200 pb-6">
                <div className="text-xs text-neutral-600 uppercase tracking-widest font-light mb-2">Expected Meetings</div>
                <div className="text-2xl font-display font-light text-neutral-950 mb-2">{meetings}</div>
                <div className="text-sm text-neutral-600 font-light">
                  ({meetingRate}% of {prospects} prospects)
                </div>
              </div>
              <div className="border-b border-neutral-200 pb-6">
                <div className="text-xs text-neutral-600 uppercase tracking-widest font-light mb-2">Projected Closed Deals</div>
                <div className="text-2xl font-display font-light text-neutral-950 mb-2">{closedDeals}</div>
                <div className="text-sm text-neutral-600 font-light">
                  ({closeRate}% of {meetings} meetings)
                </div>
              </div>
              <div className="border-b border-neutral-200 pb-6">
                <div className="text-xs text-neutral-600 uppercase tracking-widest font-light mb-2">Total Revenue</div>
                <div className="text-2xl font-display font-light text-neutral-950">${totalRevenue.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </div>

        {/* ROI/ROAS - Full Width Section */}
        <div className="mt-24 border-t border-neutral-200 pt-20">
          <div className="grid grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-xs text-neutral-600 uppercase tracking-widest font-light mb-4">ROI</div>
              <div className="text-5xl md:text-6xl lg:text-8xl font-display font-bold text-neutral-950">
                {roi.toFixed(0)}%
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-neutral-600 uppercase tracking-widest font-light mb-4">ROAS</div>
              <div className="text-5xl md:text-6xl lg:text-8xl font-display font-bold text-neutral-950">
                {roas.toFixed(1)}x
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center border-t border-neutral-200 pt-16">
          <a
            href="#contact"
            className="inline-block px-12 py-4 bg-neutral-950 text-white text-sm uppercase tracking-widest font-light hover:bg-neutral-800 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
