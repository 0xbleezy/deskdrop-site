export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Identify Targets',
      description: 'Identify your target accounts, stalled deals, or prospects who need re-engagement. Works for both targeted campaigns and broader outreach programs.',
      image: '/images/identify target accounts.png',
    },
    {
      number: '02',
      title: 'Plan Your Outreach',
      description: 'Choose your timing. We maintain inventory in our warehouse, ready to ship same-day or scheduled delivery. Perfect for planned campaigns or on-demand sends when opportunities arise.',
      image: '/images/Plan Your Outreach.png',
    },
    {
      number: '03',
      title: 'Deliver the Touchpoint',
      description: 'A thoughtfully designed gift arrives and takes its place on their desk. No coordination needed. We handle all logistics and delivery confirmations.',
      image: '/images/Deliver the Touchpoint.png',
    },
    {
      number: '04',
      title: 'Follow Up with Purpose',
      description: 'Reach out after delivery with a genuine check-in. The gift gives you a natural reason to re-engage that doesn\'t feel like a demand for their time.',
      image: '/images/follow up with purpose.png',
    },
  ];

  return (
    <section className="py-20 border-t border-neutral-200" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-editorial mx-auto px-8 lg:px-16 xl:px-20">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-neutral-950 mb-8 leading-tight">
            How It Works
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light">
            How prospect gifting fits into your sales motion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border-t border-neutral-200 pt-8"
            >
              <div className="text-4xl font-display font-light text-neutral-400 mb-6">
                {step.number}
              </div>
              <div className="mb-6 aspect-[4/3] max-w-full">
                <div 
                  className="w-full h-full bg-cover bg-center border border-neutral-200"
                  style={{
                    backgroundImage: `url('${step.image}')`
                  }}
                ></div>
              </div>
              <h3 className="text-2xl font-display font-light text-neutral-950 mb-6 leading-tight">
                {step.title}
              </h3>
              <p className="text-base text-neutral-600 leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
