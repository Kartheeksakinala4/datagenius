import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recovery CRM — Software for Data Recovery Businesses | DataGenius',
  description: 'Run your data recovery lab like a pro. Case management, customer portal, invoicing, and more. Trusted by 200+ recovery labs across India.',
  openGraph: {
    title: 'Recovery CRM — DataGenius',
    description: 'The operating system for data recovery businesses.',
    url: 'https://datagenius.in/products/recovery-crm',
    siteName: 'DataGenius',
    type: 'website',
  },
};

const features = [
  { icon: '📋', title: 'Case Management', desc: 'Track every recovery job from intake to delivery. Custom statuses, priority flags, and automated reminders keep nothing falling through the cracks.' },
  { icon: '👥', title: 'Customer Portal', desc: 'Give your customers a branded portal to check their case status, download recovered files, and pay invoices online.' },
  { icon: '💰', title: 'Invoicing & Payments', desc: 'Create professional invoices, accept UPI/card payments via Razorpay, and track payment status. GST-compliant billing built in.' },
  { icon: '📦', title: 'Inventory Management', desc: 'Track donor drives, spare parts, clean room supplies, and equipment. Get low-stock alerts and purchase order automation.' },
  { icon: '📊', title: 'Analytics Dashboard', desc: 'Revenue reports, case success rates, average turnaround time, and customer lifetime value — all in one dashboard.' },
  { icon: '🔔', title: 'SMS & Email Alerts', desc: 'Automated status updates to customers via SMS and email. Reduce "where is my drive?" calls by 80%.' },
  { icon: '🔧', title: 'Technician Management', desc: 'Assign cases to technicians, track their workload, and measure performance with built-in productivity metrics.' },
];

const pricing = [
  { name: 'Starter', price: '₹999/mo', cases: '50 cases/mo', users: '2 users', features: ['Case management', 'Email notifications', 'Basic reporting', 'Customer portal'], primary: false },
  { name: 'Growth', price: '₹2,499/mo', cases: '200 cases/mo', users: '5 users', features: ['Everything in Starter', 'SMS notifications', 'Invoicing & payments', 'Inventory management'], primary: true },
  { name: 'Pro', price: '₹4,999/mo', cases: 'Unlimited cases', users: '15 users', features: ['Everything in Growth', 'Advanced analytics', 'API access', 'Custom branding', 'Priority support'], primary: false },
  { name: 'Enterprise', price: '₹12,999/mo', cases: 'Unlimited', users: 'Unlimited', features: ['Everything in Pro', 'Dedicated account manager', 'SLA guarantee', 'Custom integrations', 'Training sessions'], primary: false },
];

const testimonials = [
  { name: 'Arvind M.', role: 'Owner, DataFix Solutions, Delhi', quote: 'Before CRM we used spreadsheets. Now we handle 3x the cases with the same team. The customer portal alone saved us hours per week.' },
  { name: 'Meena T.', role: 'Manager, Hyderabad Data Recovery', quote: 'The SMS alerts cut our customer calls in half. People love getting automatic updates on their case.' },
  { name: 'Kumar Labs', role: 'Bangalore', quote: 'The invoicing integration with Razorpay was a game changer. Payments come in 2x faster now.' },
];

export default function RecoveryCRMPage() {
  return (
    <div>
      <section className="hero-mesh-bg py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-green-400 text-sm font-semibold">📊 DataGenius Recovery CRM</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            The Operating System for{' '}
            <span className="gradient-text">Data Recovery Businesses</span>
          </h1>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Case management, customer portals, invoicing, SMS alerts, and analytics — everything your recovery lab needs in one platform.
          </p>
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-5 py-2 mb-8">
            <span className="text-accent text-sm font-medium">Trusted by 200+ recovery labs across India</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#pricing" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold text-lg px-8 py-4 rounded-full transition-all">
              Start 14-Day Free Trial
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all hover:bg-white/5">
              Schedule a Demo
            </Link>
          </div>
          <p className="text-slate-500 text-sm mt-4">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Built for Recovery Labs, by Recovery Professionals</h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">Every feature designed to solve real problems in data recovery operations.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="glass-card rounded-2xl p-6 hover:border-white/20 transition-all">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface-card border-y border-surface-border py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Labs Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Pricing</h2>
        <p className="text-slate-400 text-center mb-16">Start free for 14 days. No credit card required.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricing.map((tier) => (
            <div key={tier.name} className={`rounded-2xl p-6 ${tier.primary ? 'bg-primary/20 border-2 border-primary/50' : 'glass-card'}`}>
              {tier.primary && <span className="text-xs bg-primary text-white font-semibold rounded-full px-3 py-1 mb-3 inline-block">Most Popular</span>}
              <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
              <div className="text-2xl font-bold text-white mb-1">{tier.price}</div>
              <p className="text-xs text-slate-500 mb-1">{tier.cases} • {tier.users}</p>
              <ul className="space-y-2 my-5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-accent mt-0.5">✓</span>{f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className={`block w-full text-center text-sm font-semibold py-2.5 rounded-full transition-all ${tier.primary ? 'bg-primary hover:bg-primary-dark text-white' : 'border border-white/20 hover:border-white/40 text-slate-300 hover:text-white'}`}>
                {tier.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
