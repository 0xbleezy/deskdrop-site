import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import MobileStickyCTA from "./components/MobileStickyCTA";

export const metadata: Metadata = {
  title: "DeskDrop — The Physical Touchpoint for Outbound Sales",
  description: "The outbound play your prospects notice. A custom-branded desk drop that breaks through inbox fatigue and earns replies. 20–30% reply rate.",
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "DeskDrop — The Physical Touchpoint for Outbound Sales",
    description: "A custom-branded desk drop that breaks through inbox fatigue and earns replies. 20–30% reply rate.",
    url: "https://thedeskdrop.com",
    siteName: "DeskDrop",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeskDrop — The Physical Touchpoint for Outbound Sales",
    description: "A custom-branded desk drop that breaks through inbox fatigue and earns replies. 20–30% reply rate.",
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
