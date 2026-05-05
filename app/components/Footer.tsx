import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="glass-nav border-t border-white/10">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw] py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center mb-4" aria-label="DeskDrop home">
              <Image
                src="/images/deskdrop-wordmark-white.png"
                alt="DeskDrop"
                width={2945}
                height={570}
                className="h-7 w-auto"
                unoptimized
              />
            </Link>
            <p className="text-sm text-neutral-400 font-light leading-relaxed mb-4">
              The outbound play your prospects notice.
            </p>
            <ul className="space-y-2">
              <li className="text-sm text-neutral-400 font-light">(312) 772-4009</li>
              <li><a href="mailto:hello@thedeskdrop.com" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">hello@thedeskdrop.com</a></li>
            </ul>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-xs text-neutral-300 uppercase tracking-widest font-light mb-4">Navigate</h4>
            <ul className="space-y-2">
              <li><Link href="/how-it-works" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">How It Works</Link></li>
              <li><Link href="/pricing" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Pricing</Link></li>
              <li><Link href="/sample" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Gift Recipients</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs text-neutral-300 uppercase tracking-widest font-light mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link href="/use-case/sales" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Sales</Link></li>
              <li><Link href="/use-case/marketing" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Marketing</Link></li>
              <li><Link href="/use-case/revenue" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Revenue</Link></li>
              <li><Link href="/solutions/prospect-gifting" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Prospect Gifting</Link></li>
              <li><Link href="/solutions/abm" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">ABM Gifting</Link></li>
              <li><Link href="/solutions/custom" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Custom Solutions</Link></li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs text-neutral-300 uppercase tracking-widest font-light mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/product/gifts" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Gifts</Link></li>
              <li><Link href="/product/features" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Features</Link></li>
              <li><Link href="/product/customization" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Customization</Link></li>
              <li><Link href="/product/packaging" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Packaging</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs text-neutral-300 uppercase tracking-widest font-light mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/resources/blog" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Blog</Link></li>
              <li><Link href="/resources/customers" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Customers</Link></li>
              <li><Link href="/resources/help" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Help Center</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-xs text-neutral-500 font-light text-center">
            © {new Date().getFullYear()} DeskDrop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
