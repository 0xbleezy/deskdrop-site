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

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const newErrors = {
      name: formData.name.trim() ? '' : 'Name is required',
      email: formData.email.trim() ? (validateEmail(formData.email) ? '' : 'Please enter a valid email address') : 'Email is required',
    };

    setErrors(newErrors);

    // If there are errors, don't submit
    if (newErrors.name || newErrors.email) {
      return;
    }

    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
    });
  };

  const focusForm = () => {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    if (nameInput) {
      nameInput.focus();
    }
  };

  return (
    <section id="contact" className="py-32" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-editorial mx-auto px-8 lg:px-16 xl:px-20">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-display font-light text-neutral-950 mb-8 leading-tight">
            Get Started Today
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light">
            Request a sample, get a custom quote, or speak with our team about integrating prospect 
            gifting into your outbound strategy
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
                  className={`w-full px-0 py-3 border-0 border-b bg-transparent text-neutral-950 font-light focus:ring-0 focus:border-neutral-950 ${
                    errors.name ? 'border-red-400' : 'border-neutral-300'
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-400 mt-2 font-light">{errors.name}</p>
                )}
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
                  className={`w-full px-0 py-3 border-0 border-b bg-transparent text-neutral-950 font-light focus:ring-0 focus:border-neutral-950 ${
                    errors.email ? 'border-red-400' : 'border-neutral-300'
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-400 mt-2 font-light">{errors.email}</p>
                )}
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
                <p className="text-base text-neutral-950 font-light">(630) 793-0331</p>
              </div>
              <div>
                <h4 className="text-xs text-neutral-500 uppercase tracking-widest font-light mb-2">Email</h4>
                <p className="text-base text-neutral-950 font-light">gifting@ncchocolatier.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center border-t border-neutral-200 pt-16">
          <p className="text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light">
            Typical campaigns: Minimum of 50 jars (large size recommended), scalable to hundreds of prospects. Production takes 2 weeks. We'll help you plan timing with your sales cadence.
          </p>
        </div>
      </div>
    </section>
  );
}
