import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="glass-nav border-t border-white/10">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw] py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-white font-display font-light text-xl tracking-tight uppercase">NC</span>
              <span className="text-neutral-400 text-xs font-display font-light tracking-widest uppercase">Gifting</span>
            </Link>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              The outbound play your prospects notice.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs text-neutral-300 uppercase tracking-widest font-light mb-4">Navigate</h4>
            <ul className="space-y-2">
              <li><Link href="/how-it-works" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">How It Works</Link></li>
              <li><Link href="/pricing" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Pricing</Link></li>
              <li><Link href="/product/features" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Features</Link></li>
              <li><Link href="/product/gifts" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">Gifts</Link></li>
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
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs text-neutral-300 uppercase tracking-widest font-light mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm text-neutral-400 font-light">(630) 793-0331</li>
              <li><a href="mailto:hello@ncgifting.com" className="text-sm text-neutral-400 hover:text-white transition-colors font-light">hello@ncgifting.com</a></li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}
