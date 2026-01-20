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
    <main className="min-h-screen" style={{ backgroundColor: '#f9f8fa' }}>
      {/* Hero */}
      <section className="py-32 pt-40" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-20">
          <div className="max-w-4xl">
            <div className="text-sm font-medium text-neutral-600 uppercase tracking-widest mb-6">
              Resources
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-neutral-900 mb-8 leading-tight">
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
      <section className="py-24" style={{ backgroundColor: '#f9f8fa' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-20">
          <div className="grid md:grid-cols-2 gap-12">
            {posts.map((post, index) => (
              <Link
                key={index}
                href="#"
                className="bg-white p-8 rounded border border-neutral-200 hover:shadow-md transition-shadow"
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
      <section className="py-24" style={{ backgroundColor: '#e6f7f9' }}>
        <div className="max-w-4xl mx-auto px-8 lg:px-16 xl:px-20 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-light text-neutral-900 mb-8 leading-tight">
            Ready to get started?
          </h2>
          <p className="text-xl text-neutral-700 mb-10 leading-relaxed font-light">
            See how prospect gifting can help you break through inbox fatigue and drive revenue.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-neutral-900 text-white text-base font-light rounded hover:bg-neutral-800 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
