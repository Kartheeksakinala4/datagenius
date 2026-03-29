import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing — DataGenius Software, CRM & Newsletter Plans',
  description: 'Transparent pricing for all DataGenius products. Data Recovery from ₹0, Repair Suite from ₹1,999, Recovery CRM from ₹999/month. Pay with UPI, Razorpay, or Stripe.',
};

const recoveryPlans = [
  { name: 'Free', price: '₹0', period: '', highlight: false, features: ['Scan + preview files', 'Recover up to 500MB', 'Basic file types (JPEG, PDF, DOCX)', 'Email support'] },
  { name: 'Pro · 1 Year', price: '₹2,999', period: '/year', highlight: false, features: ['1 PC licence', 'Unlimited recovery', 'All 1000+ file formats', 'NTFS, exFAT, APFS, ext4', 'Priority email support', '1 year free updates'] },
  { name: 'Pro · Lifetime', price: '₹4,999', period: 'one-time', highlight: true, badge: 'Best Value', features: ['1 PC licence', 'Unlimited recovery', 'All file formats', 'All file systems', 'Lifetime free updates', 'Priority support'] },
  { name: 'Technician', price: '₹9,999', period: '/year', highlight: false, features: ['5 PC licences', 'Commercial licence', 'All Pro features', 'CCTV add-on included', '24/7 priority support', 'Onboarding call'] },
  { name: 'CCTV Add-on', price: '₹2,999', period: 'one-time', highlight: false, features: ['Add-on to any Pro plan', 'Hikvision FS support', 'Dahua DHFS support', 'CP Plus support', 'Export to standard MP4/AVI'] },
];

const repairPlans = [
  { name: 'Free', price: '₹0', period: '', highlight: false, features: ['Preview repaired files', 'No save (evaluation only)', 'See what can be fixed'] },
  { name: 'Standard · 1 Year', price: '₹1,999', period: '/year', highlight: false, features: ['1 PC licence', 'Photo repair (JPEG, PNG, RAW)', 'Video repair (MP4, MOV, AVI)', '1 year updates', 'Email support'] },
  { name: 'Complete · 1 Year', price: '₹3,499', period: '/year', highlight: true, badge: 'Most Popular', features: ['1 PC licence', 'ALL file types', 'Photo + Video + Docs + Archives', 'PDF, DOCX, XLSX, PST, ZIP, RAR', 'Priority support', '1 year updates'] },
  { name: 'Technician', price: '₹7,999', period: '/year', highlight: false, features: ['5 PC licences', 'Commercial licence', 'Batch processing', '24/7 priority support', 'Dedicated account manager'] },
];

const crmPlans = [
  { name: 'Solo Tech', price: '₹999', period: '/month', users: '1 technician', cases: '50 cases/month', features: ['Case management', 'Device tracking', 'Customer updates (SMS)', 'Basic invoicing'] },
  { name: 'Lab', price: '₹2,999', period: '/month', users: 'Up to 5 technicians', cases: '200 cases/month', highlight: true, badge: 'Most Popular', features: ['Everything in Solo', 'WhatsApp notifications', 'Full invoicing + Razorpay', 'Customer portal', 'Knowledge base'] },
  { name: 'Enterprise', price: '₹7,999', period: '/month', users: 'Unlimited', cases: 'Unlimited cases', features: ['Everything in Lab', 'Multi-location support', 'Dashboard & analytics', 'API access', '24/7 support', 'Onboarding & training'] },
  { name: 'White Label', price: '₹14,999', period: '/month', users: 'Unlimited', cases: 'Unlimited', features: ['Your branding, your domain', 'Customer portal white-labeled', 'Custom email domain', 'Dedicated infrastructure', 'SLA guarantee'] },
];

function PlanCard({ plan, cta, ctaHref }: { plan: { name: string; price: string; period: string; highlight?: boolean; badge?: string; features: string[]; users?: string; cases?: string }; cta: string; ctaHref: string }) {
  return (
    <div className={`glass-card rounded-2xl p-7 flex flex-col border relative ${plan.highlight ? 'border-primary/50 ring-1 ring-primary/20' : 'border-surface-border'}`}>
      {plan.badge && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">{plan.badge}</span>}
      <h3 className="font-bold text-white mb-2">{plan.name}</h3>
      <div className="mb-1">
        <span className="text-3xl font-bold text-white">{plan.price}</span>
        <span className="text-slate-500 text-sm ml-1">{plan.period}</span>
      </div>
      {(plan.users || plan.cases) && (
        <div className="text-xs text-slate-500 mb-4 space-y-0.5">
          {plan.users && <p>👤 {plan.users}</p>}
          {plan.cases && <p>📋 {plan.cases}</p>}
        </div>
      )}
      <ul className="space-y-2 flex-1 mb-6">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
            <span className="text-accent mt-0.5 flex-shrink-0 text-xs">✓</span>{f}
          </li>
        ))}
      </ul>
      <Link href={ctaHref} className={`block text-center py-3 rounded-full font-semibold text-sm transition-all ${plan.highlight ? 'bg-primary hover:bg-primary-dark text-white' : 'border border-surface-border hover:border-primary/40 text-white'}`}>
        {cta}
      </Link>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-surface-dark">
      {/* Hero */}
      <section className="border-b border-surface-border py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">Simple, Transparent Pricing</h1>
          <p className="text-slate-400 text-lg mb-6">All products include a free tier. No hidden fees. Cancel anytime.</p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {['💳 UPI accepted', '🏦 NetBanking', '💰 Razorpay', '🌍 Stripe (international)', '✓ 30-day refund'].map((item) => (
              <span key={item} className="bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-slate-400">{item}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {/* Data Recovery */}
        <div>
          <div className="text-center mb-10">
            <span className="inline-block bg-primary/10 text-primary-light rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-3">Desktop App</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">DataGenius Data Recovery</h2>
            <p className="text-slate-400">One-time purchase. No subscription required. Includes lifetime updates on Lifetime plan.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {recoveryPlans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} cta={plan.price === '₹0' ? 'Download Free' : 'Buy Now'} ctaHref={plan.price === '₹0' ? '/download/data-recovery' : '/products/data-recovery'} />
            ))}
          </div>
        </div>

        {/* Repair Suite */}
        <div>
          <div className="text-center mb-10">
            <span className="inline-block bg-accent/10 text-accent rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-3">Desktop App</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">DataGenius Repair Suite</h2>
            <p className="text-slate-400">Fix corrupted files — one app, all file types. No separate tools needed.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {repairPlans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} cta={plan.price === '₹0' ? 'Download Free' : 'Buy Now'} ctaHref={plan.price === '₹0' ? '/download/repair-suite' : '/products/repair-suite'} />
            ))}
          </div>
        </div>

        {/* CRM */}
        <div>
          <div className="text-center mb-10">
            <span className="inline-block bg-purple-500/10 text-purple-400 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-3">SaaS — Web App</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">DataGenius Recovery CRM</h2>
            <p className="text-slate-400">Run your data recovery lab like a pro. Trusted by 500+ labs across India.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {crmPlans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} cta="Start Free Trial" ctaHref="/products/recovery-crm" />
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-bold text-white text-center mb-8">Pricing FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {[
              ['Do you offer refunds?', '30-day no-questions-asked refund on all desktop software purchases. CRM subscriptions can be cancelled anytime; refunds are available within 7 days of the billing cycle.'],
              ['What payment methods do you accept?', 'We accept UPI (all apps), NetBanking, debit/credit cards via Razorpay (India) and Stripe (international). NEFT/RTGS available for Enterprise orders.'],
              ['Can I transfer my licence to a new computer?', 'Yes. Pro and Technician licences can be deactivated from one machine and activated on another. Contact support with your order ID.'],
              ['Is there a discount for NGOs or students?', 'Yes — 50% off all individual plans for verified students and registered NGOs. Contact support@datagenius.in with verification.'],
              ['Can I upgrade my plan later?', 'Yes. You can upgrade at any time. We\'ll prorate the remaining value of your current plan toward the upgrade.'],
            ].map(([q, a]) => (
              <details key={String(q)} className="glass-card rounded-xl overflow-hidden group">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-white font-medium text-sm">
                  {q}
                  <span className="text-slate-400 group-open:rotate-180 transition-transform text-lg">↓</span>
                </summary>
                <div className="px-6 pb-4 text-slate-400 text-sm leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
