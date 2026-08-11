import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ongoing Maintenance & Monitoring — DataGenius',
  description: 'Proactive drive health monitoring, scheduled cleanups, and annual data audits to keep your storage healthy and your data safe.',
};

const services = [
  {
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    title: 'Drive Health Monitoring',
    desc: 'Continuous S.M.A.R.T. monitoring alerts you to early warning signs — reallocated sectors, pending sectors, or temperature spikes — before a drive fails.',
  },
  {
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    title: 'Backup Verification',
    desc: 'Monthly spot checks confirm your backups actually restore. Many people discover their backup was broken only when they need it.',
  },
  {
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    title: 'Storage Cleanup',
    desc: 'Remove duplicate files, old caches, and unused software. Free up space and improve performance without losing anything important.',
  },
  {
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    title: 'Annual Data Audit',
    desc: 'A thorough yearly review of your storage ecosystem: what you have, where it lives, how it\'s backed up, and what needs attention.',
  },
  {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Firmware & Software Updates',
    desc: 'Keep your NAS, drives, and backup software updated. Outdated firmware is a leading cause of preventable data loss.',
  },
  {
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
    title: 'On-Demand Support',
    desc: 'Questions, concerns, or something feels off? Maintenance plan members get priority access to our team — call, chat, or remote session.',
  },
];

const plans = [
  { name: 'Basic Care', price: '₹799', period: '/month', features: ['Drive health monitoring', 'Monthly backup check', 'Email alerts', 'Quarterly cleanup'] },
  { name: 'Pro Care', price: '₹1,999', period: '/month', highlight: true, features: ['Everything in Basic', 'Weekly backup verification', 'Annual data audit', 'Storage optimization', 'Priority support', '1 remote session/month'] },
  { name: 'Business Care', price: 'Custom', period: 'pricing', features: ['Everything in Pro', 'Server & NAS monitoring', 'Compliance reporting', 'On-site visits included', 'SLA guarantee', 'Dedicated engineer'] },
];

export default function MaintainPage() {
  return (
    <>
      <section className="bg-hero section-pad">
        <div className="container-xl">
          <div className="max-w-3xl">
            <span className="badge badge-gray mb-5">Maintain & Monitor</span>
            <h1 className="display-1 text-ink-900 mb-6">
              Most drives warn you{' '}
              <span className="gradient-text">before they fail. Are you listening?</span>
            </h1>
            <p className="lead mb-8">
              Hard drives emit hundreds of health signals every day. Our maintenance plans keep a constant eye on your storage, so we catch problems early — before they become emergencies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary btn-lg">Start a Maintenance Plan</Link>
              <Link href="/data-health-check" className="btn btn-outline btn-lg">Free Health Check</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[['80%','of drives show warning signs before failing'],['3×','more likely to recover data with early detection'],['< 24 hrs','average alert response time'],['₹0','cost of prevention vs. recovery']].map(([v,l]) => (
              <div key={l}><p className="text-3xl font-extrabold mb-1">{v}</p><p className="text-blue-200 text-sm">{l}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl">
          <div className="text-center mb-14">
            <h2 className="display-2 text-ink-900 mb-4">What&apos;s included</h2>
            <p className="lead max-w-2xl mx-auto">Proactive maintenance that keeps your storage ecosystem healthy, fast, and reliable.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.title} className="card p-7">
                <div className="icon-box mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={s.icon}/>
                  </svg>
                </div>
                <h3 className="font-bold text-ink-900 text-lg mb-3">{s.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-section-alt section-pad">
        <div className="container-xl">
          <div className="text-center mb-14">
            <h2 className="display-2 text-ink-900 mb-4">Choose your plan</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map(p => (
              <div key={p.name} className={`rounded-2xl p-8 ${'highlight' in p && p.highlight ? 'bg-brand-800 text-white shadow-blue' : 'bg-white border border-surface-border'}`}>
                <h3 className={`text-xl font-bold mb-4 ${'highlight' in p && p.highlight ? 'text-white' : 'text-ink-900'}`}>{p.name}</h3>
                <p className={`text-4xl font-extrabold mb-1 ${'highlight' in p && p.highlight ? 'text-white' : 'text-ink-900'}`}>{p.price}</p>
                <p className={`text-sm mb-7 ${'highlight' in p && p.highlight ? 'text-blue-200' : 'text-ink-400'}`}>{p.period}</p>
                <ul className="space-y-3 mb-8">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${'highlight' in p && p.highlight ? 'text-blue-300' : 'text-brand-600'}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      <span className={'highlight' in p && p.highlight ? 'text-blue-100' : 'text-ink-500'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`btn w-full justify-center ${'highlight' in p && p.highlight ? 'bg-white text-brand-800 hover:bg-blue-50' : 'btn-primary'}`}>Get Started</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-deep section-pad">
        <div className="container-xl text-center">
          <h2 className="display-2 text-white mb-4">Prevention costs 10× less than recovery</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">A maintenance plan is the cheapest insurance you can buy for your data. Start with a free health check.</p>
          <Link href="/data-health-check" className="btn btn-ghost btn-lg">Get Free Health Check</Link>
        </div>
      </section>
    </>
  );
}
