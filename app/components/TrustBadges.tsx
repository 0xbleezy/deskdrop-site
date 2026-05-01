'use client';

import Image from 'next/image';
import { useScrollReveal } from '../hooks/useScrollReveal';

type Logo = { src: string; alt: string };

const LOGOS: Logo[] = [
  { src: '/images/Trusted by/Abbott.png', alt: 'Abbott' },
  { src: '/images/Trusted by/Airoom.png', alt: 'Airoom' },
  { src: '/images/Trusted by/CIBC.png', alt: 'CIBC' },
  { src: '/images/Trusted by/Edelman.png', alt: 'Edelman' },
  { src: '/images/Trusted by/gopuff.png', alt: 'GoPuff' },
  { src: '/images/Trusted by/Reed Smith.png', alt: 'Reed Smith' },
  { src: '/images/Trusted by/Wells Fargo.png', alt: 'Wells Fargo' },
  { src: '/images/Trusted by/ring-logo.webp', alt: 'Ring' },
  { src: '/images/Trusted by/0a4465cd-6369-4d15-957d-c0c571ba6afd.png', alt: '' },
  { src: '/images/Trusted by/0e4cd352-30e9-4208-8556-006085ccf610.png', alt: '' },
  { src: '/images/Trusted by/2301bfd7-4200-4d5f-ab1f-0f9f158fbb5b.png', alt: '' },
  { src: '/images/Trusted by/5a67ad2d-f885-4db7-9ced-dd28e3085fce.png', alt: '' },
  { src: '/images/Trusted by/60a416ab-e308-409d-b9d4-482970807971.png', alt: '' },
  { src: '/images/Trusted by/b6fecb2b-858b-42dc-8750-dcc1d4a184ac.png', alt: '' },
  { src: '/images/Trusted by/b93fe6b9-1042-43cd-b222-14ee2d64e56d.png', alt: '' },
];

export default function TrustBadges() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className={`py-12 sm:py-16 overflow-hidden bg-warm fade-in-on-scroll ${isVisible ? 'visible' : ''}`}>
      <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw] text-center mb-6 sm:mb-12">
        <p className="text-base text-neutral-600 font-semibold">
          Trusted by teams like
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-[#f5f3f0] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-[#f5f3f0] to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {[...LOGOS, ...LOGOS].map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-6 sm:mx-12 flex items-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={300}
                height={120}
                className="h-8 w-auto max-w-[9.375rem] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
