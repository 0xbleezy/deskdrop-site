import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import MobileStickyCTA from "./components/MobileStickyCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chocolate Corporate Gifting | Prospect Gifting Solutions",
  description: "Win desk ad space with our prospecting gift. Cut through digital noise with physical touchpoints. 30%+ reply rate. Perfect for account-based marketing and sales strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased text-neutral-900 pb-20 md:pb-0`}
        style={{ backgroundColor: '#f9f8fa' }}
      >
        <Navigation />
        {children}
        <MobileStickyCTA />
      </body>
    </html>
  );
}
