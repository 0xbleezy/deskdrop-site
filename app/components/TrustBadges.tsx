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
    <section className="py-16" style={{ backgroundColor: '#e6f7f9' }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-20">
        <div className="text-center mb-12">
          <p className="text-base text-neutral-600 mb-8 font-light">
            Trusted by
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center justify-items-center opacity-60">
          {companies.map((company, index) => (
            <div
              key={index}
              className="text-neutral-700 text-lg font-light hover:opacity-100 transition-opacity"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
