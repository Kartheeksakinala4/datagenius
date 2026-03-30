'use client';

import { useState } from 'react';
import Link from 'next/link';

const features = [
  { icon: '🔍', title: 'Deep Scan Technology', desc: 'Our proprietary deep scan engine searches every sector of your storage device to find files others miss.' },
  { icon: '📁', title: '1000+ File Formats', desc: 'Recover photos, videos, documents, archives, emails, databases, and virtually any file type.' },
  { icon: '💿', title: 'All Storage Types', desc: 'HDD, SSD, USB drives, SD cards, memory cards, RAID arrays, NAS devices, and more.' },
  { icon: '🔒', title: 'Safe Read-Only Scan', desc: 'Never writes to your original drive during scanning — your data stays protected throughout the process.' },
  { icon: '⚡', title: 'Preview Before Recover', desc: 'See your files before recovering them. Preview photos, documents, and videos to pick exactly what you need.' },
  { icon: '🌐', title: 'Multiple File Systems', desc: 'NTFS, FAT32, exFAT, ext4, APFS, HFS+, and more — works with all major file systems.' },
];

const steps = [
  { n: 1, title: 'Select Your Drive', desc: 'Choose the storage device you want to recover data from. DataGenius detects all connected drives automatically.' },
  { n: 2, title: 'Scan & Preview', desc: 'Run a quick scan or deep scan. Preview recoverable files before you commit to anything.' },
  { n: 3, title: 'Recover Your Files', desc: 'Select the files you need and recover them to a safe location. Takes just minutes.' },
];

const pricing = [
  { name: 'Free', price: '₹0', features: ['Up to 1GB recovery', 'JPEG & PNG only', 'Quick scan', 'Email support'], cta: 'Download Free', primary: false },
  { name: 'Standard', price: '₹1,499', features: ['Up to 10GB recovery', '100+ formats', 'Deep scan', 'Priority email support'], cta: 'Buy Standard', primary: false },
  { name: 'Pro', price: '₹2,999', features: ['Unlimited recovery', '1000+ formats', 'RAID support', 'Phone support', 'Bootable media'], cta: 'Buy Pro', primary: true },
  { name: 'Business', price: '₹7,999', features: ['5 PC licenses', 'All Pro features', 'Dedicated support', 'Site license option'], cta: 'Buy Business', primary: false },
  { name: 'Enterprise', price: '₹24,999/yr', features: ['Unlimited PCs', 'All features', 'SLA support', 'API access', 'White-label'], cta: 'Contact Sales', primary: false },
];

const faqs = [
  { q: 'Is DataGenius Data Recovery really free?', a: 'Yes! The free version lets you recover up to 1GB of data with support for JPEG and PNG files. No credit card required.' },
  { q: 'Can I recover data from a formatted drive?', a: 'Yes, DataGenius can recover data from formatted drives using our deep scan technology, which looks for file signatures regardless of the file system state.' },
  { q: 'Does it work on SSDs?', a: 'Yes, DataGenius supports SSD recovery. Note that on SSDs with TRIM enabled, recovery success rates may vary depending on how long ago the data was deleted.' },
  { q: 'What operating systems are supported?', a: 'DataGenius Data Recovery currently supports Windows 10 and Windows 11 (both 32-bit and 64-bit). Mac version coming Q3 2026.' },
  { q: 'Can I recover data from a physically damaged drive?', a: 'DataGenius works with logically damaged drives. For physically damaged drives (clicking, burning smell, water damage), we recommend professional cleanroom recovery services.' },
  { q: 'How long does a scan take?', a: 'Quick scan takes 5–15 minutes for most drives. Deep scan can take 1–6 hours depending on drive size and condition.' },
  { q: 'Is my data kept private during recovery?', a: 'Absolutely. DataGenius operates entirely offline. No data is ever uploaded to our servers during the recovery process.' },
  { q: 'What is your refund policy?', a: 'We offer a 30-day money-back guarantee if you\'re not satisfied. Contact support@datagenius.in for refunds.' },
];

export default function DataRecoveryPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="hero-mesh-bg py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <span className="text-accent text-sm font-semibold">💾 DataGenius Data Recovery</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Recover Any File from{' '}
            <span className="gradient-text">Any Device</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            The most powerful data recovery software for Windows. Recover deleted files, formatted drives, corrupted partitions, and more — with one tool.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/download/data-recovery"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold text-lg px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-accent/25"
            >
              Download Free
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold text-lg px-8 py-4 rounded-full transition-all"
            >
              Buy Pro — ₹2,999
            </Link>
          </div>
          <p className="text-slate-500 text-sm mt-4">No credit card required for free version • Windows 10/11</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Everything You Need to Recover Data</h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">Built with professional-grade technology, available to everyone.</p>
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

      {/* How it works */}
      <section className="bg-surface-card border-y border-surface-border py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Recover in 3 Simple Steps</h2>
          <p className="text-slate-400 text-center mb-16">No technical knowledge required.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.n} className="text-center">
                <div className="w-12 h-12 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center text-primary-light font-bold text-xl mx-auto mb-4">
                  {step.n}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Devices */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Supported Storage Devices</h2>
        <p className="text-slate-400 text-center mb-12">50+ device types covered</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {['HDD', 'SSD', 'USB Drive', 'SD Card', 'Memory Stick', 'RAID 0/1/5', 'NAS', 'External HDD', 'Camera Card', 'Pen Drive', 'eMMC', 'Virtual Disk'].map((d) => (
            <div key={d} className="glass-card rounded-xl px-4 py-3 text-center text-sm text-slate-300">
              {d}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-surface-card border-y border-surface-border py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-400 text-center mb-16">Start free, upgrade when you need more.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {pricing.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-6 ${tier.primary ? 'bg-primary/20 border-2 border-primary/50 ring-1 ring-primary/20' : 'glass-card'}`}
              >
                {tier.primary && (
                  <span className="text-xs bg-primary text-white font-semibold rounded-full px-3 py-1 mb-3 inline-block">Most Popular</span>
                )}
                <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
                <div className="text-2xl font-bold text-white mb-4">{tier.price}</div>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-accent mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.name === 'Free' ? '/download/data-recovery' : '/pricing'}
                  className={`block w-full text-center text-sm font-semibold py-2.5 rounded-full transition-all ${tier.primary ? 'bg-primary hover:bg-primary-dark text-white' : 'border border-white/20 hover:border-white/40 text-slate-300 hover:text-white'}`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-sm font-semibold text-white">{faq.q}</span>
                <svg className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-primary/30 to-accent/20 border-y border-surface-border py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Recover Your Data?</h2>
          <p className="text-slate-400 mb-8">Join 50,000+ users who trust DataGenius for data recovery.</p>
          <Link
            href="/download/data-recovery"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold text-lg px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-accent/25"
          >
            Download Free — No Credit Card Required
          </Link>
        </div>
      </section>
    </div>
  );
}
