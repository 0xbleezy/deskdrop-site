import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import MobileStickyCTA from "./components/MobileStickyCTA";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Get Replies When Outreach Stops Working | Prospect Gifting Solutions",
  description: "The outbound play your prospects notice. Physical touchpoint that breaks through inbox fatigue and earns replies. 30%+ reply rate. Perfect for ABM strategies and sales teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased text-neutral-900 pb-20 md:pb-0 bg-page`}
      >
        <Navigation />
        {children}
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
