import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import MobileStickyCTA from "./components/MobileStickyCTA";

export const metadata: Metadata = {
  title: "Get Replies When Outreach Stops Working | Prospect Gifting Solutions",
  description: "The outbound play your prospects notice. Physical touchpoint that breaks through inbox fatigue and earns replies. 30%+ reply rate. Perfect for ABM strategies and sales teams.",
  openGraph: {
    title: "Get Replies When Outreach Stops Working | DeskDrop",
    description: "Physical touchpoint that breaks through inbox fatigue and earns replies. 30%+ reply rate.",
    url: "https://thedeskdrop.com",
    siteName: "DeskDrop",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Replies When Outreach Stops Working | DeskDrop",
    description: "Physical touchpoint that breaks through inbox fatigue and earns replies. 30%+ reply rate.",
  },
  alternates: { canonical: "https://thedeskdrop.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-neutral-900 pb-20 sm:pb-0 bg-page">
        <Navigation />
        {children}
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
