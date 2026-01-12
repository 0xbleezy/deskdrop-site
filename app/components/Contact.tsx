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
    // Handle form submission
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
    <section id="contact" className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-chocolate-700 mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Request a quote, sample, or speak with our corporate gifting specialists
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-luxury-lg border border-gray-200">
            <h3 className="text-2xl font-display font-bold text-chocolate-700 mb-6">
              Request a Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="Tell us about your gifting needs..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-chocolate-600 text-white rounded-xl font-semibold text-lg hover:bg-chocolate-700 transition-all shadow-luxury hover:shadow-luxury-lg transform hover:-translate-y-1"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-luxury border border-gray-200 mb-8">
              <h3 className="text-2xl font-display font-bold text-chocolate-700 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📞</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">(310) 826-3380</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-4">✉️</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">support@chocolategifting.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-4">🕒</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Multiple CTA Buttons */}
            <div className="space-y-4">
              <button 
                onClick={focusForm}
                className="w-full px-6 py-4 bg-chocolate-600 text-white rounded-xl font-semibold hover:bg-chocolate-700 transition-all shadow-luxury hover:shadow-luxury-lg transform hover:-translate-y-1"
              >
                Contact Us
              </button>
              <button 
                onClick={focusForm}
                className="w-full px-6 py-4 bg-white text-chocolate-700 border-2 border-chocolate-600 rounded-xl font-semibold hover:bg-cream-50 transition-all shadow-luxury hover:shadow-luxury-lg transform hover:-translate-y-1"
              >
                Get Started
              </button>
              <button 
                onClick={focusForm}
                className="w-full px-6 py-4 bg-cream-100 text-chocolate-700 rounded-xl font-semibold hover:bg-cream-200 transition-all"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

