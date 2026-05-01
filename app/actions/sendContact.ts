'use server';

import { Resend } from 'resend';

export type ContactState =
  | { status: 'idle' }
  | { status: 'success' }
  | { status: 'error'; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const phone = String(formData.get('phone') ?? '').trim();

  if (!name || !email || !phone) {
    return { status: 'error', error: 'Please fill in name, email, and phone.' };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: 'error', error: 'That email address looks invalid.' };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[sendContact] RESEND_API_KEY missing — submission could not be delivered.', { name, email, phone });
    return { status: 'error', error: 'Sorry — our form is temporarily unavailable. Please email us directly.' };
  }

  const to = process.env.CONTACT_TO_EMAIL ?? 'eyn@thedeskdrop.com';
  const from = process.env.CONTACT_FROM_EMAIL ?? 'noreply@thedeskdrop.com';

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `DeskDrop Site <${from}>`,
      to,
      replyTo: email,
      subject: `New sample request from ${name}`,
      text: `Name:  ${name}\nEmail: ${email}\nPhone: ${phone}\n`,
    });
    if (error) {
      console.error('[sendContact] Resend returned error:', error);
      return { status: 'error', error: 'Could not send your request. Please try again.' };
    }
    return { status: 'success' };
  } catch (err) {
    console.error('[sendContact] Unexpected error:', err);
    return { status: 'error', error: 'Could not send your request. Please try again.' };
  }
}
