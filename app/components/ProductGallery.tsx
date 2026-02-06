'use client';

import { useState } from 'react';

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      url: '/images/prospecting jar on desk.png',
      alt: 'Prospecting gift on desk',
      title: 'Desk Presence',
    },
    {
      url: '/images/Prospect Gifting.png',
      alt: 'Prospect gifting presentation',
      title: 'Prospect Gifting',
    },
    {
      url: '/images/desk no jar.png',
      alt: 'Office desk setting',
      title: 'Office Setting',
    },
    {
      url: '/images/prospecting jar on desk.png',
      alt: 'Prospecting gift close-up',
      title: 'The Gift',
    },
  ];

  return (
    <section className="py-20 border-t border-neutral-100" >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-[7vw]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-950 mb-4">
            See It In Action
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
            The physical presence that earns attention on decision-makers' desks
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Image */}
          <div className="relative">
            <div className="relative border border-neutral-200 aspect-[4/3] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                style={{
                  backgroundImage: `url('${images[selectedImage].url}')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-base font-light text-neutral-950">
                {images[selectedImage].title}
              </p>
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative border border-neutral-200 aspect-square transition-all duration-300 ${
                  selectedImage === index
                    ? 'border-neutral-950 scale-105'
                    : 'hover:border-neutral-400 opacity-75 hover:opacity-100'
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${image.url}')`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-black/10 hover:bg-black/5 transition-colors"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-sm font-semibold drop-shadow-lg">
                    {image.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

