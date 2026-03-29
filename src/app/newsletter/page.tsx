'use client';

import { useState } from 'react';

const pastIssues = [
  { num: 47, title: 'SSD Endurance Deep Dive: How Many TBW Does Your Drive Actually Have?', date: 'Mar 20, 2026', preview: 'We analysed endurance ratings across 50 SSDs and found shocking discrepancies between rated and actual TBW figures...' },
  { num: 46, title: 'Windows 12 Data Recovery: Everything Changed', date: 'Mar 13, 2026', preview: 'Microsoft\'s new file system changes how deleted files are handled. We break down what it means for recovery...' },
  { num: 45, title: 'Ransomware Prevention 2026: The Definitive Checklist', date: 'Mar 6, 2026', preview: 'With ransomware attacks up 340% in India last year, we compiled the definitive prevention checklist for businesses...' },
  { num: 44, title: 'CCTV Storage Guide: How Long Does DVR Footage Last?', date: 'Feb 27, 2026', preview: 'A 2TB DVR drive doesn\'t last as long as you think. Our calculation guide helps you size your storage correctly...' },
  { num: 43, title: 'Interview: Running a ₹1 Crore/Year Data Recovery Lab', date: 'Feb 20, 2026', preview: 'We sat down with the owner of one of Mumbai\'s largest recovery labs. His advice on tools, pricing, and growth...' },
];

const tiers = [
  {
    name: 'Free',
    price: '₹0',
    period: 'forever',
    color: 'border-surface-border',
    features: ['Weekly recovery tips', 'Storage news digest', 'Product announcements', 'Basic tutorial links'],
    cta: 'Subscribe Free',
    ctaStyle: 'border border-surface-border hover:border-primary/40 text-white',
  },
  {
    name: 'Pro',
    price: '₹299',
    period: 'per month',
    color: 'border-primary/50 ring-1 ring-primary/30',
    badge: 'Most Popular',
    features: ['Everything in Free', 'Full newsletter archive access', 'Exclusive tool discount codes (20–40% off)', 'Priority early access to new features', 'Monthly deep-dive case study', 'Ask the Expert Q&A (monthly)'],
    cta: 'Start Pro — ₹299/mo',
    ctaStyle: 'bg-primary hover:bg-primary-dark text-white',
  },
  {
    name: 'Enterprise',
    price: '₹999',
    period: 'per month',
    color: 'border-surface-border',
    features: ['Everything in Pro', 'Team sharing (up to 10 members)', 'Custom curated content for your industry', 'Quarterly 1-on-1 strategy call', 'API access to newsletter content', 'White-label newsletter option'],
    cta: 'Contact Sales',
    ctaStyle: 'border border-surface-border hover:border-primary/40 text-white',
  },
];

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="min-h-screen bg-surface-dark">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-surface-border py-24 px-4">
        <div className="absolute inset-0 hero-mesh-bg opacity-50" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block bg-primary/10 text-primary-light rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-4">
            Data Pulse by DataGenius
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            The #1 Newsletter for <span className="gradient-text">Data Recovery</span> Enthusiasts
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10">
            Every Thursday: Recovery tips, storage device news, exclusive software discounts, and expert insights. Trusted by <strong className="text-white">10,000+ subscribers</strong> across India and beyond.
          </p>

          {subscribed ? (
            <div className="inline-flex items-center gap-3 bg-accent/20 border border-accent/30 rounded-full px-8 py-4 text-accent font-semibold text-lg">
              <span>✓</span> You&apos;re subscribed! Welcome to Data Pulse.
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/5 border border-white/15 rounded-full px-6 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50"
              />
              <button
                onClick={() => email && setSubscribed(true)}
                className="bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-accent/20"
              >
                Subscribe Free
              </button>
            </div>
          )}
          <p className="text-xs text-slate-500 mt-4">Free forever · No spam · Unsubscribe anytime</p>

          {/* Trust stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mt-12">
            {[['10,000+', 'Subscribers'], ['47', 'Issues published'], ['4.9/5', 'Avg. rating']].map(([val, label]) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-bold gradient-text">{val}</p>
                <p className="text-xs text-slate-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you'll get */}
      <section className="py-20 px-4 border-b border-surface-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">What&apos;s Inside Every Issue</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🔧', title: 'Recovery Tip of the Week', desc: 'One actionable tip you can apply immediately to improve your data recovery workflow or backup strategy.' },
              { icon: '📦', title: 'Storage News Digest', desc: 'The most important storage industry news, product launches, and security vulnerabilities — curated and summarised.' },
              { icon: '🎁', title: 'Exclusive Discounts', desc: 'Pro subscribers get 20–40% off DataGenius products and partner tools. Free tier gets monthly deals.' },
              { icon: '📖', title: 'Deep Dive Article', desc: 'One long-form technical guide or case study per week — the kind you\'ll bookmark and reference for years.' },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-white mb-2 text-sm">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4 border-b border-surface-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Choose Your Plan</h2>
            <p className="text-slate-400">Free tier gets you the weekly newsletter. Pro and Enterprise unlock the full experience.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div key={tier.name} className={`glass-card rounded-2xl p-7 border relative ${tier.color}`}>
                {tier.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">{tier.badge}</span>
                )}
                <h3 className="font-bold text-white text-lg mb-1">{tier.name}</h3>
                <div className="mb-5">
                  <span className="text-3xl font-bold text-white">{tier.price}</span>
                  <span className="text-slate-500 text-sm ml-1">/{tier.period}</span>
                </div>
                <ul className="space-y-2.5 mb-7">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-accent mt-0.5 flex-shrink-0">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold text-sm transition-all ${tier.ctaStyle}`}>
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Issues */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Recent Issues</h2>
            <p className="text-slate-400">See what you&apos;re getting before you subscribe.</p>
          </div>
          <div className="space-y-4">
            {pastIssues.map((issue) => (
              <div key={issue.num} className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light font-bold text-sm">
                  #{issue.num}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-sm leading-snug mb-1">{issue.title}</h3>
                  <p className="text-xs text-slate-500 mb-2">{issue.preview}</p>
                  <span className="text-xs text-slate-600">{issue.date}</span>
                </div>
                <button className="flex-shrink-0 text-xs border border-surface-border rounded-full px-4 py-2 text-slate-400 hover:border-primary/40 hover:text-white transition-all">
                  Read Issue →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
