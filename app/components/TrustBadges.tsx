export default function TrustBadges() {
  const logos = [
    '/images/Trusted by/Abbott.png',
    '/images/Trusted by/Airoom.png',
    '/images/Trusted by/CIBC.png',
    '/images/Trusted by/Edelman.png',
    '/images/Trusted by/gopuff.png',
    '/images/Trusted by/Reed Smith.png',
    '/images/Trusted by/Wells Fargo.png',
    '/images/Trusted by/ring-logo.webp',
    '/images/Trusted by/0a4465cd-6369-4d15-957d-c0c571ba6afd.png',
    '/images/Trusted by/0e4cd352-30e9-4208-8556-006085ccf610.png',
    '/images/Trusted by/2301bfd7-4200-4d5f-ab1f-0f9f158fbb5b.png',
    '/images/Trusted by/5a67ad2d-f885-4db7-9ced-dd28e3085fce.png',
    '/images/Trusted by/60a416ab-e308-409d-b9d4-482970807971.png',
    '/images/Trusted by/b6fecb2b-858b-42dc-8750-dcc1d4a184ac.png',
    '/images/Trusted by/b93fe6b9-1042-43cd-b222-14ee2d64e56d.png',
  ];

  return (
    <section className="py-16 overflow-hidden" style={{ backgroundColor: '#f5f3f0' }}>
      <div className="text-center mb-12">
        <p className="text-base text-neutral-600 font-semibold">
          Trusted by teams like
        </p>
      </div>
      <div className="relative">
        {/* Gradient fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f5f3f0] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f5f3f0] to-transparent z-10 pointer-events-none" />
        
        {/* Marquee track */}
        <div className="marquee-track">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-12 flex items-center">
              <img
                src={logo}
                alt=""
                className="h-8 w-auto max-w-[150px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
