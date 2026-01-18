export default function TrustBadges() {
  const companies = [
    'gopuff',
    'CIBC',
    'Morgan Stanley',
    'Abbott',
    'WELLS FARGO',
    'HINSHAW',
    'AIROOM',
    'Dykema',
    'RIPPLING',
    'Reed Smith',
  ];

  return (
    <section className="py-24 border-t border-neutral-200 bg-white/50" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-6xl mx-auto px-8 lg:px-16 xl:px-20">
        <div className="text-center mb-16">
          <p className="text-sm text-neutral-700 uppercase tracking-widest font-light mb-2">
            Trusted by leading revenue teams
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center justify-items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="text-neutral-700 text-lg font-light opacity-70 hover:opacity-100 transition-opacity"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
