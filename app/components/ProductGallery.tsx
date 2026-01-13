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
    <section className="py-20" style={{ backgroundColor: '#f9f8fa' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-chocolate-600 mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our prospecting gift from every angle
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-luxury-lg aspect-[4/3]">
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
              <p className="text-lg font-semibold text-chocolate-700">
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
                className={`relative rounded-xl overflow-hidden shadow-md aspect-square transition-all duration-300 ${
                  selectedImage === index
                    ? 'ring-4 ring-gold-500 scale-105'
                    : 'hover:scale-102 opacity-75 hover:opacity-100'
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

        {/* Lifestyle Shots Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="relative rounded-xl overflow-hidden shadow-luxury aspect-[4/3]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1606312619070-d48b4bdc5e3b?w=800&q=80')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <p className="text-white font-semibold text-lg">Modern Office</p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-luxury aspect-[4/3]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1606312619070-d48b4bdc5e3b?w=800&q=80')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <p className="text-white font-semibold text-lg">Executive Desk</p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-luxury aspect-[4/3]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1606312619070-d48b4bdc5e3b?w=800&q=80')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <p className="text-white font-semibold text-lg">Home Office</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

