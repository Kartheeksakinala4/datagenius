'use client';

import { useState } from 'react';

const faqs = [
  ['How do I activate my licence after purchase?', 'Open the software, click "Activate Licence" in the top menu, and enter your order email and licence key from your purchase confirmation email.'],
  ['My scan found files but they appear corrupted — why?', 'Files recovered from a physically damaged drive may have partial data corruption. Use DataGenius Repair Suite to attempt to fix the recovered files.'],
  ['Can I recover data from an SSD that has been TRIM\'d?', 'TRIM permanently zeroes deleted file data on SSDs, making recovery extremely difficult. However, if TRIM hasn\'t run yet (e.g., immediately after deletion), recovery is often possible.'],
  ['Do you offer a no-data, no-fee guarantee?', 'Our software products have a free preview mode — you can see what\'s recoverable before purchasing. This effectively serves as our "no data, no fee" policy.'],
  ['How do I cancel my CRM subscription?', 'Log in to your DataGenius account, go to Settings → Billing → Cancel Subscription. Your data will be retained for 90 days after cancellation.'],
  ['I bought the wrong plan — can I get a refund?', 'Yes. We offer 30-day refunds on all desktop software. Email support@datagenius.in with your order ID within 30 days of purchase.'],
  ['Is my data safe when using DataGenius tools?', 'Completely. All desktop software processes data locally on your machine. Nothing is ever uploaded to our servers. See our Privacy Policy for details.'],
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-surface-dark">
      {/* Hero */}
      <section className="border-b border-surface-border py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Get in Touch</h1>
          <p className="text-slate-400">Questions, feedback, enterprise enquiries, or just want to talk data recovery — we&apos;re here.</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="lg:grid lg:grid-cols-5 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-bold text-white mb-6">Send Us a Message</h2>
            {sent ? (
              <div className="glass-card rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">✉️</div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400 text-sm">We typically respond within 4–8 business hours. Check your inbox (and spam folder).</p>
                <button onClick={() => setSent(false)} className="mt-6 text-primary-light text-sm hover:text-white transition-colors">Send another message →</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[['Full Name *', 'text', 'Your name'], ['Email Address *', 'email', 'your@email.com']].map(([label, type, placeholder]) => (
                    <div key={String(label)}>
                      <label className="block text-xs font-semibold text-slate-400 mb-1.5">{label}</label>
                      <input type={String(type)} placeholder={String(placeholder)} required className="w-full bg-surface-card border border-surface-border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 transition-colors" />
                    </div>
                  ))}
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">Subject *</label>
                    <select required className="w-full bg-surface-card border border-surface-border rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-primary/50 transition-colors appearance-none">
                      <option value="">Select a subject...</option>
                      {['Technical Support', 'Sales / Licensing', 'CRM Enquiry', 'Partnership / Affiliate', 'Press & Media', 'Bug Report', 'Feature Request', 'Other'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">Company / Lab Name</label>
                    <input type="text" placeholder="Optional" className="w-full bg-surface-card border border-surface-border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5">Message *</label>
                  <textarea required rows={5} placeholder="Describe your situation in detail. Include your OS, the affected drive/device model, and what happened before the data loss (if applicable)." className="w-full bg-surface-card border border-surface-border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-4 rounded-full transition-all text-sm">
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* Info + FAQ */}
          <aside className="lg:col-span-2 mt-10 lg:mt-0 space-y-5">
            {/* Info cards */}
            {[
              { icon: '📧', title: 'Email Support', detail: 'support@datagenius.in', sub: 'Response in 4–8 business hours' },
              { icon: '📞', title: 'Phone', detail: '+91 98XXX XXXXX', sub: 'Mon–Sat, 10am–7pm IST' },
              { icon: '💬', title: 'WhatsApp', detail: '+91 98XXX XXXXX', sub: 'Quick queries — usually instant reply' },
              { icon: '🚨', title: 'Emergency Recovery', detail: 'emergency@datagenius.in', sub: '24/7 for critical data loss situations' },
            ].map((card) => (
              <div key={card.title} className="glass-card rounded-2xl p-5 flex gap-4">
                <div className="text-2xl flex-shrink-0">{card.icon}</div>
                <div>
                  <p className="font-semibold text-white text-sm">{card.title}</p>
                  <p className="text-primary-light text-sm">{card.detail}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{card.sub}</p>
                </div>
              </div>
            ))}

            {/* FAQ */}
            <div className="glass-card rounded-2xl p-5">
              <h3 className="font-bold text-white mb-4 text-sm">Quick FAQ</h3>
              <div className="space-y-2">
                {faqs.map(([q, a], i) => (
                  <div key={String(q)} className="border-b border-surface-border/50 last:border-0 pb-2 last:pb-0">
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex items-start justify-between w-full text-left gap-2 py-1">
                      <span className="text-xs font-medium text-slate-300 leading-snug">{q}</span>
                      <span className={`text-slate-500 text-sm flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>↓</span>
                    </button>
                    {openFaq === i && <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{a}</p>}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
