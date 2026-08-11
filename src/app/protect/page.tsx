import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Data Protection & Backup — DataGenius',
  description: 'Automated backups, encryption, and multi-location storage so your data is always safe. Home and business backup solutions in Hyderabad.',
};

const plans = [
  {
    name: 'Home Essentials',
    price: '₹1,499',
    period: '/month',
    desc: 'Perfect for individuals and families protecting documents, photos, and memories.',
    features: ['2 TB cloud backup storage','Automatic daily backups','Up to 3 devices','Photo & video optimization','90-day version history','Mobile app access'],
    cta: 'Start Free Trial',
    highlight: false,
  },
  {
    name: 'Home Pro',
    price: '₹3,499',
    period: '/month',
    desc: 'For families with larger libraries, home offices, and creative professionals.',
    features: ['10 TB cloud backup storage','Real-time continuous backup','Up to 8 devices','NAS & external drive sync','1-year version history','Priority support','On-site setup included'],
    cta: 'Get Started',
    highlight: true,
  },
  {
    name: 'Business Shield',
    price: 'Custom',
    period: 'pricing',
    desc: 'For small businesses that need reliable, compliant data protection without complexity.',
    features: ['Unlimited storage','Server & workstation backup','Microsoft 365 backup','Offsite encrypted replication','Compliance-ready reporting','Dedicated account manager'],
    cta: 'Request Quote',
    highlight: false,
  },
];

const features = [
  { icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', title: 'End-to-End Encryption', desc: 'Your data is encrypted before it leaves your device. Only you hold the keys.' },
  { icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15', title: 'Automatic & Silent', desc: 'Set once and forget. Backups run in the background without interrupting your work.' },
  { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', title: '3-2-1 Strategy', desc: '3 copies, on 2 different media, with 1 offsite. The gold standard for data safety.' },
  { icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', title: 'Version History', desc: 'Accidentally overwrote a file? Go back in time and restore any previous version.' },
  { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Fast Restore', desc: 'Recover individual files or your entire system quickly — no full reinstall needed.' },
  { icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9', title: 'Instant Alerts', desc: 'Get notified if a backup fails, storage is low, or a file gets unexpectedly deleted.' },
];

export default function ProtectPage() {
  return (
    <>
      <section className="bg-hero section-pad">
        <div className="container-xl">
          <div className="max-w-3xl">
            <span className="badge badge-green mb-5">Protect & Backup</span>
            <h1 className="display-1 text-ink-900 mb-6">
              Your backup should run{' '}
              <span className="gradient-text">before something goes wrong.</span>
            </h1>
            <p className="lead mb-8">
              Hard drives fail. Phones get lost. Ransomware happens. The only guarantee against data loss is a backup that runs automatically, stores securely, and restores reliably.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary btn-lg">Get Started Today</Link>
              <Link href="#plans" className="btn btn-outline btn-lg">View Plans</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl">
          <div className="text-center mb-14">
            <h2 className="display-2 text-ink-900 mb-4">Built on backup best practices</h2>
            <p className="lead max-w-2xl mx-auto">We don&apos;t just copy files — we build a resilient safety net around your data.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="card p-7">
                <div className="icon-box mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={f.icon}/>
                  </svg>
                </div>
                <h3 className="font-bold text-ink-900 text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="plans" className="bg-section-alt section-pad">
        <div className="container-xl">
          <div className="text-center mb-14">
            <h2 className="display-2 text-ink-900 mb-4">Simple, honest pricing</h2>
            <p className="lead max-w-xl mx-auto">No surprise fees. No data caps on what you can restore. Cancel anytime.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map(p => (
              <div key={p.name} className={`rounded-2xl p-8 ${p.highlight ? 'bg-brand-800 text-white shadow-blue' : 'bg-white border border-surface-border'}`}>
                <h3 className={`text-xl font-bold mb-1 ${p.highlight ? 'text-white' : 'text-ink-900'}`}>{p.name}</h3>
                <p className={`text-sm mb-5 ${p.highlight ? 'text-blue-200' : 'text-ink-400'}`}>{p.desc}</p>
                <p className={`text-4xl font-extrabold mb-1 ${p.highlight ? 'text-white' : 'text-ink-900'}`}>{p.price}</p>
                <p className={`text-sm mb-7 ${p.highlight ? 'text-blue-200' : 'text-ink-400'}`}>{p.period}</p>
                <ul className="space-y-3 mb-8">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${p.highlight ? 'text-blue-300' : 'text-brand-600'}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      <span className={p.highlight ? 'text-blue-100' : 'text-ink-500'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`btn w-full justify-center ${p.highlight ? 'bg-white text-brand-800 hover:bg-blue-50' : 'btn-primary'}`}>{p.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-deep section-pad">
        <div className="container-xl text-center">
          <h2 className="display-2 text-white mb-4">Start your backup today — it takes 15 minutes</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">We handle setup, configuration, and ongoing monitoring. You just use your computer.</p>
          <Link href="/contact" className="btn btn-ghost btn-lg">Book a Free Setup Call</Link>
        </div>
      </section>
    </>
  );
}
