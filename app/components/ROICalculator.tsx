'use client';

import { useState } from 'react';

export default function ROICalculator() {
  const [prospects, setProspects] = useState(100);
  const [costPerGift, setCostPerGift] = useState(30);
  const [replyRate, setReplyRate] = useState(30);
  const [avgDealValue, setAvgDealValue] = useState(10000);
  const [closeRate, setCloseRate] = useState(20);

  const totalCost = prospects * costPerGift;
  const replies = Math.round(prospects * (replyRate / 100));
  const closedDeals = Math.round(replies * (closeRate / 100));
  const totalRevenue = closedDeals * avgDealValue;
  const roi = totalRevenue > 0 ? ((totalRevenue - totalCost) / totalCost) * 100 : 0;
  const roas = totalRevenue > 0 ? totalRevenue / totalCost : 0;

  return (
    <section className="py-20 bg-gradient-to-br from-chocolate-50 to-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-chocolate-600 mb-4">
            Calculate Your ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the potential return on investment for your prospecting gift campaign
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Inputs */}
          <div className="bg-white rounded-2xl p-8 shadow-luxury-lg border border-gray-200">
            <h3 className="text-2xl font-display font-bold text-chocolate-700 mb-6">
              Campaign Parameters
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Prospects
                </label>
                <input
                  type="number"
                  value={prospects}
                  onChange={(e) => setProspects(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  min="1"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Cost per Gift ($)
                </label>
                <input
                  type="number"
                  value={costPerGift}
                  onChange={(e) => setCostPerGift(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  min="1"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Expected Reply Rate (%)
                </label>
                <input
                  type="number"
                  value={replyRate}
                  onChange={(e) => setReplyRate(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  min="0"
                  max="100"
                />
                <p className="text-xs text-gray-500 mt-1">Industry average: 30%+</p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Average Deal Value ($)
                </label>
                <input
                  type="number"
                  value={avgDealValue}
                  onChange={(e) => setAvgDealValue(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  min="1"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Close Rate from Replies (%)
                </label>
                <input
                  type="number"
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  min="0"
                  max="100"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-chocolate-600 to-chocolate-700 rounded-2xl p-8 shadow-luxury-lg text-white">
            <h3 className="text-2xl font-display font-bold mb-6">
              Projected Results
            </h3>
            <div className="space-y-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-sm text-white/80 mb-2">Total Campaign Cost</div>
                <div className="text-4xl font-bold">${totalCost.toLocaleString()}</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-sm text-white/80 mb-2">Expected Replies</div>
                <div className="text-4xl font-bold">{replies}</div>
                <div className="text-sm text-white/80 mt-2">
                  ({replyRate}% of {prospects} prospects)
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-sm text-white/80 mb-2">Projected Closed Deals</div>
                <div className="text-4xl font-bold">{closedDeals}</div>
                <div className="text-sm text-white/80 mt-2">
                  ({closeRate}% of {replies} replies)
                </div>
              </div>
              <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm border-2 border-gold-400">
                <div className="text-sm text-white/90 mb-2">Total Revenue</div>
                <div className="text-5xl font-bold">${totalRevenue.toLocaleString()}</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-xs text-white/80 mb-1">ROI</div>
                  <div className="text-3xl font-bold text-gold-300">
                    {roi.toFixed(0)}%
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-xs text-white/80 mb-1">ROAS</div>
                  <div className="text-3xl font-bold text-gold-300">
                    {roas.toFixed(1)}x
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            * Calculations are estimates based on industry averages. Actual results may vary.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-chocolate-600 text-white rounded-lg font-semibold text-lg hover:bg-chocolate-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started with Your Campaign
          </a>
        </div>
      </div>
    </section>
  );
}

