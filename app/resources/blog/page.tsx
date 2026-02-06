import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    {
      title: 'How to Use Prospect Gifting in Your ABM Strategy',
      excerpt: 'Learn how to integrate prospect gifting into your account-based marketing campaigns to increase engagement and accelerate pipeline.',
      category: 'ABM',
    },
    {
      title: 'Breaking Through Inbox Fatigue: The Power of Physical Touchpoints',
      excerpt: 'Discover how physical gifts can cut through digital noise and create meaningful connections with prospects when emails go unanswered.',
      category: 'Sales',
    },
    {
      title: 'ROI of Prospect Gifting: Measuring Campaign Effectiveness',
      excerpt: 'Learn how to measure the impact of your gifting campaigns and calculate ROI to optimize your spend and maximize results.',
      category: 'Revenue',
    },
    {
      title: 'Best Practices for Scaling Prospect Gifting Programs',
      excerpt: 'Tips and strategies for scaling your prospect gifting program from small tests to enterprise-wide campaigns.',
      category: 'Strategy',
    },
  ];

  return (
    <main className="min-h-screen bg-page">
      {/* Hero */}
      <section className="py-32 pt-40 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-6">
              Resources
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-light text-neutral-900 mb-8 leading-tight">
              Blog
            </h1>
            <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light max-w-3xl">
              Insights, strategies, and best practices for using prospect gifting to drive revenue 
              and build stronger relationships with your target accounts.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-24 bg-page">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw]">
          <div className="grid md:grid-cols-2 gap-12">
            {posts.map((post, index) => (
              <Link
                key={index}
                href="#"
                className="glass-card p-8 rounded hover:shadow-lg transition-shadow"
              >
                <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-4">
                  {post.category}
                </div>
                <h3 className="text-2xl font-display font-light text-neutral-900 mb-4 leading-tight">
                  {post.title}
                </h3>
                <p className="text-base text-neutral-700 leading-relaxed font-light mb-4">
                  {post.excerpt}
                </p>
                <div className="text-sm font-light text-neutral-600">
                  Read more →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-warm">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw] text-center">
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-8 leading-tight">
            Ready to get started?
          </h2>
          <p className="text-lg text-neutral-700 mb-10 leading-relaxed font-light">
            See how prospect gifting can help you break through inbox fatigue and drive revenue.
          </p>
          <Link
            href="/#contact"
            className="glass-button inline-block px-8 py-4 text-white text-base font-light rounded transition-all"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
