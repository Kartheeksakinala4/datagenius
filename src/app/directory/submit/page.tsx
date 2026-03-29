'use client';

import { useState } from 'react';
import Link from 'next/link';

const services = ['HDD Recovery', 'SSD/NVMe Recovery', 'USB/SD Card Recovery', 'RAID Recovery', 'CCTV/DVR Recovery', 'Mobile Recovery', 'Database Recovery', 'Laptop Recovery', 'Server Recovery', 'Photo/Video Repair', 'Clean Room Recovery', 'Forensic Recovery'];

const plans = [
  { name: 'Free Basic', price: '₹0', period: 'forever', features: ['Basic listing', 'Name, city, services', 'Phone & email display', 'Customer reviews'], color: 'border-surface-border', cta: 'List for Free', ctaStyle: 'border border-surface-border hover:border-primary/40 text-white' },
  { name: 'Featured', price: '₹499', period: 'per month', badge: 'Popular', features: ['Everything in Free', 'Priority placement in search', '⭐ Featured badge', 'Full lab profile page', 'Link to your website', 'Photo gallery (up to 5)'], color: 'border-primary/40 ring-1 ring-primary/20', cta: 'Go Featured — ₹499/mo', ctaStyle: 'bg-primary hover:bg-primary-dark text-white' },
  { name: 'Premium', price: '₹1,999', period: 'per month', features: ['Everything in Featured', 'Top of city results', 'Display ads on blog pages', 'Dedicated lab profile URL', 'Lead generation form', 'DataGenius CRM integration', 'FREE CRM subscription (₹999/mo)'], color: 'border-surface-border', cta: 'Go Premium — ₹1,999/mo', ctaStyle: 'bg-amber/10 text-amber border border-amber/30 hover:bg-amber/20' },
];

export default function SubmitLabPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (s: string) => setSelectedServices(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);

  return (
    <div className="min-h-screen bg-surface-dark">
      {/* Hero */}
      <section className="border-b border-surface-border py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <Link href="/directory" className="text-primary-light text-sm hover:text-white transition-colors mb-4 inline-block">← Back to Directory</Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">List Your Recovery Lab</h1>
          <p className="text-slate-400">Reach thousands of people searching for data recovery services in India. Free listing takes 2 minutes.</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="lg:grid lg:grid-cols-3 lg:gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="glass-card rounded-2xl p-10 text-center">
                <div className="text-6xl mb-4">✅</div>
                <h2 className="text-2xl font-bold text-white mb-3">Listing Submitted!</h2>
                <p className="text-slate-400 mb-6">We&apos;ll review your listing within 24 hours and email you when it&apos;s live.</p>
                <Link href="/directory" className="bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-full transition-all text-sm">Back to Directory →</Link>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                <div className="glass-card rounded-2xl p-7">
                  <h2 className="font-bold text-white mb-5">Lab Information</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[['Lab Name *', 'text', 'e.g. DataRestore Mumbai'], ['Contact Person *', 'text', 'Your name'], ['Phone Number *', 'tel', '+91 98XXX XXXXX'], ['Email Address *', 'email', 'lab@example.com'], ['Website', 'url', 'https://yourlabwebsite.com'], ['City *', 'text', 'e.g. Mumbai']].map(([label, type, placeholder]) => (
                      <div key={String(label)}>
                        <label className="block text-xs font-semibold text-slate-400 mb-1.5">{label}</label>
                        <input type={String(type)} placeholder={String(placeholder)} required={String(label).includes('*')} className="w-full bg-surface-dark border border-surface-border rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 transition-colors" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">Full Address *</label>
                    <textarea rows={2} placeholder="Street, area, city, pincode" required className="w-full bg-surface-dark border border-surface-border rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 resize-none" />
                  </div>
                  <div className="mt-4">
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">Lab Description</label>
                    <textarea rows={3} placeholder="Brief description of your lab, experience, and specialities..." className="w-full bg-surface-dark border border-surface-border rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 resize-none" />
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-7">
                  <h2 className="font-bold text-white mb-1">Services Offered</h2>
                  <p className="text-slate-500 text-xs mb-4">Select all that apply</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {services.map((s) => (
                      <label key={s} className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-all ${selectedServices.includes(s) ? 'border-primary/50 bg-primary/10' : 'border-surface-border hover:border-surface-border/70'}`}>
                        <input type="checkbox" className="sr-only" checked={selectedServices.includes(s)} onChange={() => toggleService(s)} />
                        <span className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center text-xs ${selectedServices.includes(s) ? 'bg-primary border-primary text-white' : 'border-surface-border'}`}>
                          {selectedServices.includes(s) ? '✓' : ''}
                        </span>
                        <span className="text-xs text-slate-300">{s}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button type="submit" className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-4 rounded-full transition-all text-sm">
                  Submit Free Listing →
                </button>
              </form>
            )}
          </div>

          {/* Plans */}
          <aside className="mt-8 lg:mt-0 space-y-4">
            <h3 className="font-bold text-white text-sm uppercase tracking-wider">Listing Plans</h3>
            {plans.map((plan) => (
              <div key={plan.name} className={`glass-card rounded-2xl p-5 border relative ${plan.color}`}>
                {plan.badge && <span className="absolute -top-2.5 left-4 bg-primary text-white text-xs font-bold px-3 py-0.5 rounded-full">{plan.badge}</span>}
                <div className="flex items-baseline justify-between mb-3">
                  <h4 className="font-bold text-white">{plan.name}</h4>
                  <div className="text-right">
                    <span className="font-bold text-white">{plan.price}</span>
                    <span className="text-xs text-slate-500 ml-1">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-1.5 mb-4">
                  {plan.features.map((f) => (
                    <li key={f} className="text-xs text-slate-400 flex items-start gap-1.5">
                      <span className="text-accent mt-0.5 flex-shrink-0">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-2.5 rounded-full text-xs font-semibold transition-all ${plan.ctaStyle}`}>{plan.cta}</button>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </div>
  );
}
