import Link from 'next/link';

export default function EnterpriseSolutions() {
  const solutions = [
    {
      title: 'Prospect Gifting Solution',
      tagline: 'Engage your audience',
      description: 'Automate and integrate your offline programs with a curated, global marketplace.',
      link: '/solutions/prospect-gifting',
    },
    {
      title: 'ABM Gifting Strategy',
      tagline: 'Build brand value',
      description: 'Execute on your ABM strategy with the comprehensive campaign dashboard to help nurture target accounts at scale.',
      link: '/solutions/abm',
    },
    {
      title: 'Custom Solutions',
      tagline: 'Execute on your strategy',
      description: 'Tailored gifting solutions for your business with first-class onboarding and dedicated support.',
      link: '/solutions/custom',
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: '#ffffff' }}>
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-[7vw]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-light text-neutral-900 mb-8 leading-tight">
            Enterprise solutions for{' '}
            <br className="hidden md:block" />
            go-to-market teams
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Link
              key={index}
              href={solution.link}
              className="glass-card p-8 rounded hover:shadow-lg transition-shadow"
            >
              <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-3">
                {solution.tagline}
              </div>
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                {solution.title}
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                {solution.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
