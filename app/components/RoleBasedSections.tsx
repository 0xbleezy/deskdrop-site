import Link from 'next/link';

export default function RoleBasedSections() {
  const roles = [
    {
      title: 'Marketing',
      description: 'Generate more leads with personalized gifting in ABM, field marketing, and brand strategies.',
      benefit: 'Increase conversion rates',
      link: '/use-case/marketing',
    },
    {
      title: 'Sales',
      description: 'Increase meetings booked, deal velocity, and close rates with personalized gifts.',
      benefit: 'Personalize your outreach',
      link: '/use-case/sales',
    },
    {
      title: 'Revenue',
      description: 'Build customer loyalty and advocacy by celebrating milestones and big wins.',
      benefit: 'Connect at the right time',
      link: '/use-case/revenue',
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: '#ffffff' }}>
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-[7vw]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-light text-neutral-900 mb-8 leading-tight">
            Equip every team to build strong relationships
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <Link
              key={index}
              href={role.link}
              className="glass-card p-8 rounded hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                {role.title}
              </h3>
              <p className="text-base text-neutral-700 mb-6 leading-relaxed font-light">
                {role.description}
              </p>
              <p className="text-sm font-medium text-neutral-900">
                {role.benefit}
              </p>
              <div className="mt-6 text-sm font-light text-neutral-600">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
