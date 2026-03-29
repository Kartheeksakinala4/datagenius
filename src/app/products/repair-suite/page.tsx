'use client';

import { useState } from 'react';
import Link from 'next/link';

const repairTabs = [
  {
    name: 'Photo',
    icon: '🖼️',
    formats: ['JPEG', 'PNG', 'RAW', 'NEF', 'CR2', 'ARW', 'DNG', 'HEIC', 'TIFF', 'BMP', 'GIF', 'WebP'],
    desc: 'Repair corrupted photos from cameras, phones, and memory cards. Fix color corruption, incomplete downloads, and file system errors.',
  },
  {
    name: 'Video',
    icon: '🎬',
    formats: ['MP4', 'MOV', 'AVI', 'MKV', 'MTS', 'AVCHD', 'GoPro', 'DJI', 'WMV', 'FLV', 'WebM', 'M4V'],
    desc: 'Restore videos that won\'t play, have audio/video sync issues, missing thumbnails, or are corrupted mid-file.',
  },
  {
    name: 'Document',
    icon: '📄',
    formats: ['DOCX', 'XLSX', 'PPTX', 'PDF', 'ODT', 'ODS', 'CSV', 'DOC', 'XLS', 'PPT', 'RTF', 'TXT'],
    desc: 'Recover corrupted Word documents, Excel spreadsheets, PowerPoint presentations, and PDF files.',
  },
  {
    name: 'Archive',
    icon: '🗜️',
    formats: ['ZIP', 'RAR', 'TAR', 'GZ', '7Z', 'ISO', 'CAB', 'BZ2', 'XZ', 'LZH', 'ACE', 'ARJ'],
    desc: 'Fix damaged ZIP, RAR, and 7-Zip archives. Extract files from partially corrupted backups.',
  },
];

const pricing = [
  { name: 'Free', price: '₹0', features: ['5 files/month', 'Photos only (JPEG, PNG)', 'Basic repair'], cta: 'Download Free', primary: false },
  { name: 'Standard', price: '₹1,999', features: ['100 files/month', 'Photos + Documents', 'Priority queue'], cta: 'Buy Standard', primary: false },
  { name: 'Pro', price: '₹3,999', features: ['Unlimited files', 'All formats', 'Videos included', 'Batch repair', 'Phone support'], cta: 'Buy Pro', primary: true },
  { name: 'Lab', price: '₹9,999/yr', features: ['3 PC licenses', 'All Pro features', 'API access', 'SLA support'], cta: 'Buy Lab', primary: false },
];

const faqs = [
  { q: 'What makes Repair Suite different from competitors?', a: 'Competitors sell separate tools for photos, videos, and documents — often ₹3,000–₹8,000 each. We bundle everything into one app at a fraction of the cost.' },
  { q: 'Can it repair videos shot on GoPro or DJI drones?', a: 'Yes! Repair Suite has dedicated repair engines for action cameras including GoPro (HERO series), DJI Osmo, and DJI drone footage in both MP4 and MOV format.' },
  { q: 'How does document repair work?', a: 'We analyze the file structure, identify corruption points, reconstruct damaged segments using redundancy in the file format, and rebuild the document with maximum content preservation.' },
  { q: 'What are the success rates?', a: 'For photos: 92%+. For videos: 78%+. For documents: 88%+. Results depend on the extent of corruption.' },
  { q: 'Is there a preview before I buy?', a: 'Yes! You can scan and preview repairs for free. You only pay when you want to save the repaired file.' },
];

export default function RepairSuitePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <section className="hero-mesh-bg py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-400 text-sm font-semibold">🔧 DataGenius Repair Suite</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Fix Corrupted Files —{' '}
            <span className="gradient-text">One App Repairs Everything</span>
          </h1>
          <p className="text-xl text-slate-400 mb-6 max-w-2xl mx-auto">
            Repair corrupted photos, videos, documents, and archives with a single tool. Competitors charge ₹3,000–₹8,000 per category. We do it all in one.
          </p>
          <div className="inline-flex items-center gap-3 bg-amber/10 border border-amber/20 rounded-xl px-5 py-3 mb-8">
            <span className="text-amber text-sm font-medium">💡 Competitors sell separate tools for ₹3,000–₹8,000 each. We bundle all in one.</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/download/repair-suite" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold text-lg px-8 py-4 rounded-full transition-all">
              Download Free
            </Link>
            <Link href="/pricing" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold text-lg px-8 py-4 rounded-full transition-all">
              Buy Standard — ₹1,999
            </Link>
          </div>
        </div>
      </section>

      {/* Repair Tabs */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Repair Any File Type</h2>
        <p className="text-slate-400 text-center mb-12">Four dedicated repair engines in one application.</p>
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {repairTabs.map((tab, i) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === i ? 'bg-primary text-white' : 'border border-white/20 text-slate-300 hover:text-white hover:border-white/40'}`}
            >
              {tab.icon} {tab.name}
            </button>
          ))}
        </div>
        <div className="glass-card rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <span className="text-4xl">{repairTabs[activeTab].icon}</span>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{repairTabs[activeTab].name} Repair</h3>
              <p className="text-slate-400">{repairTabs[activeTab].desc}</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Supported Formats</p>
            <div className="flex flex-wrap gap-2">
              {repairTabs[activeTab].formats.map((fmt) => (
                <span key={fmt} className="bg-white/5 border border-white/10 text-slate-300 text-xs px-3 py-1.5 rounded-lg font-mono">
                  {fmt}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-surface-card border-y border-surface-border py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Pricing</h2>
          <p className="text-slate-400 text-center mb-16">Preview repairs free. Pay only to save.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((tier) => (
              <div key={tier.name} className={`rounded-2xl p-6 ${tier.primary ? 'bg-primary/20 border-2 border-primary/50' : 'glass-card'}`}>
                {tier.primary && <span className="text-xs bg-primary text-white font-semibold rounded-full px-3 py-1 mb-3 inline-block">Most Popular</span>}
                <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
                <div className="text-2xl font-bold text-white mb-4">{tier.price}</div>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-accent mt-0.5">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href="/pricing" className={`block w-full text-center text-sm font-semibold py-2.5 rounded-full transition-all ${tier.primary ? 'bg-primary hover:bg-primary-dark text-white' : 'border border-white/20 hover:border-white/40 text-slate-300 hover:text-white'}`}>
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-12">FAQ</h2>
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
    </div>
  );
}
