import type { Metadata } from 'next';
import PricingContent from './PricingContent';

export const metadata: Metadata = {
  title: 'Pricing — Prospect Gifting Plans | DeskDrop',
  description: 'Simple, transparent pricing for prospect gifting campaigns. Single campaign from $2,000 or monthly plans starting at $25/prospect. Custom branding included.',
  openGraph: {
    title: 'Pricing — Prospect Gifting Plans | DeskDrop',
    description: 'Simple, transparent pricing for prospect gifting campaigns. Single campaign or monthly plans. Custom branding included.',
    url: 'https://thedeskdrop.com/pricing',
    siteName: 'DeskDrop',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing — Prospect Gifting Plans | DeskDrop',
    description: 'Simple, transparent pricing for prospect gifting campaigns. Custom branding included.',
  },
  alternates: { canonical: 'https://thedeskdrop.com/pricing' },
};

export default function PricingPage() {
  return <PricingContent />;
}
