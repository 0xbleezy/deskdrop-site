export default function IntegrationsShowcase() {
  const integrations = [
    'HubSpot', 'Salesforce', 'Outreach', 'Zoom', 'Slack',
    'Gmail', 'LinkedIn', 'Microsoft', 'Zapier', 'Stripe',
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-neutral-900 mb-6 leading-tight">
            Connect your favorite apps
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Works within your go-to-market tech stack, adding the impact of intelligent gifting 
            without adding extra steps to your existing workflows
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="text-neutral-600 text-lg font-medium hover:text-neutral-900 transition-colors p-4"
            >
              {integration}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="text-base text-neutral-900 font-semibold hover:text-neutral-700 transition-colors underline"
          >
            See integrations
          </a>
        </div>
      </div>
    </section>
  );
}
