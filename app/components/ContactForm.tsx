'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { sendContact, type ContactState } from '../actions/sendContact';

const INITIAL_STATE: ContactState = { status: 'idle' };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="glass-button w-full px-6 py-4 text-white text-xs uppercase tracking-widest font-light transition-all disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? 'Sending…' : 'Request a Sample'}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(sendContact, INITIAL_STATE);

  if (state.status === 'success') {
    return (
      <div className="text-center py-8">
        <h3 className="text-2xl font-display font-light text-neutral-950 mb-2">Thanks — we&apos;ll be in touch.</h3>
        <p className="text-neutral-600 font-light">
          Your request landed in our inbox. We&apos;ll reach out shortly to design your pilot.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="block text-xs uppercase tracking-widest text-neutral-500 font-light mb-2">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full px-4 py-3 bg-white/60 border border-neutral-300 rounded-md text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/20 focus:border-neutral-900 transition-colors"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-xs uppercase tracking-widest text-neutral-500 font-light mb-2">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full px-4 py-3 bg-white/60 border border-neutral-300 rounded-md text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/20 focus:border-neutral-900 transition-colors"
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-xs uppercase tracking-widest text-neutral-500 font-light mb-2">
          Phone
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className="w-full px-4 py-3 bg-white/60 border border-neutral-300 rounded-md text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/20 focus:border-neutral-900 transition-colors"
        />
      </div>

      {state.status === 'error' && (
        <p role="alert" className="text-sm text-red-700 font-light">
          {state.error}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}
