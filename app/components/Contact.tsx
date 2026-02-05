'use client';

import Script from 'next/script';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-32" style={{ backgroundColor: 'transparent' }}>
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-[7vw]">
        <div className="text-center mb-12 sm:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-neutral-950 mb-8 leading-tight">
            Get Started Today
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light">
            Request a sample, get a quote, or speak with our team about incorporating prospect 
            gifting into your outbound strategy
          </p>
        </div>

        {/* Contact Form */}
        <div className="border-t border-neutral-200 pt-8 sm:pt-12 mb-12 sm:mb-20">
          <Script
            src="https://js.hsforms.net/forms/embed/23669867.js"
            strategy="lazyOnload"
          />
          <div
            className="hs-form-frame"
            data-region="na1"
            data-form-id="f351de3d-bb39-4ed4-b39e-ba1ad7e909be"
            data-portal-id="23669867"
          ></div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-neutral-200 pt-12">
          <h3 className="text-2xl font-display font-light text-neutral-950 mb-12">
            Contact Information
          </h3>
          <div className="space-y-10">
            <div>
              <h4 className="text-xs text-neutral-500 uppercase tracking-widest font-light mb-2">Phone</h4>
              <p className="text-base text-neutral-950 font-light">(630) 793-0331</p>
            </div>
            <div>
              <h4 className="text-xs text-neutral-500 uppercase tracking-widest font-light mb-2">Email</h4>
              <p className="text-base text-neutral-950 font-light">hello@ncgifting.com</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
