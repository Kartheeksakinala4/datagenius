'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const stats = [
  { value: 1000, suffix: '+', label: 'File Formats' },
  { value: 50, suffix: '+', label: 'Storage Devices' },
  { value: 10000, suffix: '+', label: 'Newsletter Subscribers' },
  { value: 500, suffix: '+', label: 'Recovery Labs' },
];

const blogPosts = [
  { slug: 'recover-data-dead-hard-drive', title: 'How to Recover Data from a Dead Hard Drive', category: 'Recovery Guides', readTime: '8 min read', date: 'Mar 15, 2026' },
  { slug: 'hikvision-dvr-recovery-guide', title: 'Hikvision DVR Recovery: Complete 2026 Guide', category: 'CCTV Recovery', readTime: '12 min read', date: 'Mar 10, 2026' },
  { slug: 'best-external-hard-drives-2026', title: 'Best External Hard Drives for Backup in 2026', category: 'Product Reviews', readTime: '6 min read', date: 'Mar 5, 2026' },
  { slug: '3-2-1-backup-strategy', title: '3-2-1 Backup Strategy: The Only Guide You Need', category: 'Data Protection', readTime: '5 min read', date: 'Feb 28, 2026' },
];

const testimonials = [
  { name: 'Sarah J.', role: 'Photographer', quote: 'Recovered 4 years of client photos I thought were gone. Incredible.' },
  { name: 'Rajesh K.', role: 'IT Admin, Mumbai', quote: 'The CRM transformed how we run our lab. Case tracking is seamless.' },
  { name: 'Priya S.', role: 'Data Recovery Lab Owner', quote: 'CCTV module is the only affordable tool that handles Hikvision footage.' },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center hero-mesh-bg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-mesh" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-mesh" style={{ animationDelay: '2s' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 text-center w-full">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-slate-300">Trusted by 50,000+ users across India</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Lost Your Data?{' '}
            <span className="gradient-text">We&apos;ll Help</span>
            <br />You Get It Back.
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Free data recovery tools, expert guides, and professional-grade software trusted by 50,000+ users across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/download/data-recovery"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold text-lg px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Free Recovery Tool
            </Link>
            <Link
              href="/tools/recovery-advisor"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all hover:bg-white/5"
            >
              Get AI Recovery Advice →
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
            <span>Compatible with:</span>
            {['Seagate', 'WD', 'Samsung', 'Toshiba', 'Hikvision', 'Dahua'].map((brand) => (
              <span key={brand} className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-slate-300">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-surface-card border-y border-surface-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Professional Recovery Software
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Industry-grade tools built for data recovery professionals and everyday users alike.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'DataGenius Data Recovery',
              desc: 'Recover deleted files from any storage device',
              badge: '1000+ formats',
              icon: '💾',
              ctaHref: '/download/data-recovery',
              cta: 'Download Free',
              price: '₹2,999 Pro',
              priceHref: '/pricing',
            },
            {
              title: 'DataGenius Repair Suite',
              desc: 'Fix corrupted photos, videos, documents',
              badge: 'Fix ANY file type',
              icon: '🔧',
              ctaHref: '/download/repair-suite',
              cta: 'Download Free',
              price: '₹1,999 Standard',
              priceHref: '/pricing',
            },
            {
              title: 'DataGenius Recovery CRM',
              desc: 'Run your recovery lab like a pro',
              badge: '14-day free trial',
              icon: '📊',
              ctaHref: '/products/recovery-crm',
              cta: 'Start Free Trial',
              price: null,
              priceHref: null,
            },
          ].map((product) => (
            <div
              key={product.title}
              className="glass-card rounded-2xl p-8 hover:border-white/20 transition-all hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{product.icon}</div>
              <span className="text-xs font-semibold bg-primary/20 text-primary-light rounded-full px-3 py-1">
                {product.badge}
              </span>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">{product.title}</h3>
              <p className="text-slate-400 text-sm mb-6">{product.desc}</p>
              <div className="flex flex-col gap-3">
                <Link
                  href={product.ctaHref}
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-all"
                >
                  {product.cta}
                </Link>
                {product.price && (
                  <Link
                    href={product.priceHref!}
                    className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 text-slate-300 hover:text-white text-sm font-medium px-4 py-2.5 rounded-full transition-all"
                  >
                    {product.price}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Free Tools Section */}
      <section className="bg-surface-card border-y border-surface-border py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-4">
            <span className="text-xs font-semibold bg-accent/10 text-accent rounded-full px-4 py-2 uppercase tracking-wider">
              No Download Required
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">Free Online Tools</h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Powerful utilities accessible directly in your browser — no installation needed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Storage Calculator', desc: 'Calculate exactly how much storage you need based on your files, photos, and videos.', href: '/tools/storage-calculator', icon: '🗄️' },
              { title: 'AI Recovery Advisor', desc: 'Describe your data loss situation and get a step-by-step recovery plan powered by AI.', href: '/tools/recovery-advisor', icon: '🤖' },
              { title: 'SMART Health Checker', desc: 'Paste your drive SMART data and get a plain-English health report.', href: '/tools/smart-checker', icon: '🩺' },
            ].map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="group glass-card rounded-2xl p-8 hover:border-accent/30 transition-all hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{tool.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{tool.desc}</p>
                <span className="text-accent text-sm font-medium">Try Free →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Latest from the Blog</h2>
            <p className="text-slate-400">Expert guides, tutorials, and recovery tips</p>
          </div>
          <Link href="/blog" className="hidden sm:flex items-center gap-2 text-primary-light hover:text-white transition-colors text-sm font-medium">
            View all posts →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group glass-card rounded-2xl overflow-hidden hover:border-white/20 transition-all hover:-translate-y-1"
            >
              <div className="h-40 bg-gradient-to-br from-primary/30 to-accent/10 flex items-center justify-center">
                <span className="text-5xl">📖</span>
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-accent">{post.category}</span>
                <h3 className="text-sm font-semibold text-white mt-2 mb-3 leading-snug group-hover:text-primary-light transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-br from-primary/20 to-accent/10 border-y border-surface-border py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-semibold bg-primary/20 text-primary-light rounded-full px-4 py-2 uppercase tracking-wider">
            Data Pulse by DataGenius
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-6 mb-4">
            Join 10,000+ Subscribers
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Weekly recovery tips, storage news, product updates, and exclusive discounts delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-10">
            {subscribed ? (
              <div className="flex-1 bg-accent/20 border border-accent/30 rounded-full px-6 py-3 text-accent text-center font-medium">
                ✓ You&apos;re subscribed! Welcome aboard.
              </div>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 text-sm"
                />
                <button
                  onClick={() => email && setSubscribed(true)}
                  className="bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-full transition-all text-sm"
                >
                  Subscribe
                </button>
              </>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Issue #47: SSD Endurance Deep Dive', date: 'Mar 20, 2026' },
              { title: 'Issue #46: Windows 12 Recovery Guide', date: 'Mar 13, 2026' },
              { title: 'Issue #45: Ransomware Prevention 2026', date: 'Mar 6, 2026' },
            ].map((issue) => (
              <div key={issue.title} className="glass-card rounded-xl p-4 text-left">
                <p className="text-sm text-white font-medium leading-snug">{issue.title}</p>
                <p className="text-xs text-slate-500 mt-1">{issue.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Trusted by Professionals</h2>
          <p className="text-slate-400">What our users say about DataGenius</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-slate-300 text-sm leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary-light font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-primary/30 via-primary/20 to-accent/20 border-y border-surface-border py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Start Recovering Your Data Today
          </h2>
          <p className="text-slate-400 mb-8">
            Free forever for basic recovery. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/download/data-recovery"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold text-lg px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-accent/25"
            >
              Download Free — Windows 10/11
            </Link>
            <Link
              href="/tools/recovery-advisor"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all hover:bg-white/5"
            >
              Talk to AI Advisor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
