'use client';

import { useState } from 'react';

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1606312619070-d48b4bdc5e3b?w=1200&q=80',
      alt: 'Prospecting gift on desk',
      title: 'Desk Presence',
    },
    {
      url: 'https://images.unsplash.com/photo-1606312619070-d48b4bdc5e3b?w=1200&q=80',
      alt: 'Close-up of branded wrappers',
      title: 'Branded Wrappers',
    },
    {
      url: 'https://images.unsplash.com/photo-1606312619070-d48b4bdc5e3b?w=1200&q=80',
      alt: 'Product in office setting',
      title: 'Office Setting',
    },
    {
      url: 'https://images.unsplash.com/photo-1606312619070-d48b4bdc5e3b?w=1200&q=80',
      alt: 'Custom packaging',
      title: 'Custom Packaging',
    },
  ];

  return (
    <section className="py-20 border-t border-neutral-200" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-950 mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
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

