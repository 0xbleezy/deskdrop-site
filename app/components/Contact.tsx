'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  const focusForm = () => {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    if (nameInput) {
      nameInput.focus();
    }
  };

  return (
    <section id="contact" className="py-32" style={{ backgroundColor: '#f9f8fa' }}>
      <div className="max-w-editorial mx-auto px-8">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-display font-light text-neutral-950 mb-8 leading-tight">
            Get Started Today
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light">
            Request a quote, sample, or speak with our corporate gifting specialists
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div className="border-t border-neutral-200 pt-12">
            <h3 className="text-2xl font-display font-light text-neutral-950 mb-12">
              Request a Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-xs text-neutral-600 mb-3 uppercase tracking-widest font-light">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 border-0 border-b border-neutral-300 focus:ring-0 focus:border-neutral-950 bg-transparent text-neutral-950 font-light"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs text-neutral-600 mb-3 uppercase tracking-widest font-light">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 border-0 border-b border-neutral-300 focus:ring-0 focus:border-neutral-950 bg-transparent text-neutral-950 font-light"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-xs text-neutral-600 mb-3 uppercase tracking-widest font-light">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-0 border-b border-neutral-300 focus:ring-0 focus:border-neutral-950 bg-transparent text-neutral-950 font-light"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs text-neutral-600 mb-3 uppercase tracking-widest font-light">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-0 border-b border-neutral-300 focus:ring-0 focus:border-neutral-950 bg-transparent text-neutral-950 font-light"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs text-neutral-600 mb-3 uppercase tracking-widest font-light">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-0 py-3 border-0 border-b border-neutral-300 focus:ring-0 focus:border-neutral-950 bg-transparent text-neutral-950 font-light resize-none"
                  placeholder="Tell us about your gifting needs..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-neutral-950 text-white text-xs uppercase tracking-widest font-light hover:bg-neutral-800 transition-colors mt-8"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="border-t border-neutral-200 pt-12">
            <h3 className="text-2xl font-display font-light text-neutral-950 mb-12">
              Contact Information
            </h3>
            <div className="space-y-10">
              <div>
                <h4 className="text-xs text-neutral-500 uppercase tracking-widest font-light mb-2">Phone</h4>
                <p className="text-base text-neutral-950 font-light">(310) 826-3380</p>
              </div>
              <div>
                <h4 className="text-xs text-neutral-500 uppercase tracking-widest font-light mb-2">Email</h4>
                <p className="text-base text-neutral-950 font-light">support@chocolategifting.com</p>
              </div>
              <div>
                <h4 className="text-xs text-neutral-500 uppercase tracking-widest font-light mb-2">Business Hours</h4>
                <p className="text-base text-neutral-950 font-light">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
