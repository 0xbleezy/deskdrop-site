export default function TrustBadges() {
  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Trusted by Leading Companies
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity">
          {/* Placeholder company logos - can be replaced with actual logos */}
          <div className="text-2xl font-bold text-gray-400">TechCorp</div>
          <div className="text-2xl font-bold text-gray-400">GrowthCo</div>
          <div className="text-2xl font-bold text-gray-400">Enterprise</div>
          <div className="text-2xl font-bold text-gray-400">SalesPro</div>
          <div className="text-2xl font-bold text-gray-400">MarketHub</div>
          <div className="text-2xl font-bold text-gray-400">BizSuite</div>
        </div>
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>1000+ Corporate Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>75+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Award Winning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

