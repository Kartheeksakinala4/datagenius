import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Support — DataGenius Knowledge Base & Help Centre',
  description: 'Find answers to common questions about DataGenius products. Browse guides, FAQs, and tutorials or contact our support team.',
};

const categories = [
  { icon: '💾', title: 'Data Recovery', desc: 'Installation, scanning, recovery, file formats', articles: 24, href: '#' },
  { icon: '🔧', title: 'Repair Suite', desc: 'Photo repair, video repair, document repair', articles: 18, href: '#' },
  { icon: '📊', title: 'Recovery CRM', desc: 'Account setup, billing, case management', articles: 32, href: '#' },
  { icon: '📷', title: 'CCTV Recovery', desc: 'Hikvision, Dahua, CP Plus guides', articles: 15, href: '#' },
  { icon: '💳', title: 'Billing & Licencing', desc: 'Payments, refunds, licence transfers', articles: 12, href: '#' },
  { icon: '🔒', title: 'Privacy & Security', desc: 'Data handling, privacy policy questions', articles: 8, href: '#' },
];

const popularArticles = [
  { title: 'How to install DataGenius Data Recovery on Windows 11', category: 'Data Recovery', readTime: '2 min' },
  { title: 'Licence key not working — how to activate manually', category: 'Billing', readTime: '3 min' },
  { title: 'Why is my scan not finding all my deleted files?', category: 'Data Recovery', readTime: '4 min' },
  { title: 'How to connect a Hikvision drive to DataGenius CCTV module', category: 'CCTV Recovery', readTime: '5 min' },
  { title: 'DataGenius CRM: Setting up your first case pipeline', category: 'Recovery CRM', readTime: '6 min' },
  { title: 'Repair Suite fails to repair my video file — troubleshooting', category: 'Repair Suite', readTime: '4 min' },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-surface-dark">
      {/* Hero */}
      <section className="border-b border-surface-border py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">How Can We Help?</h1>
          <div className="flex gap-3 max-w-xl mx-auto">
            <input type="text" placeholder="Search the knowledge base..." className="flex-1 bg-surface-card border border-surface-border rounded-full px-6 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 text-sm" />
            <button className="bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3.5 rounded-full transition-all text-sm">Search</button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-14 px-4 border-b border-surface-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-8">Browse by Product</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <Link key={cat.title} href={cat.href} className="group glass-card rounded-2xl p-6 hover:border-white/20 transition-all">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-3xl">{cat.icon}</span>
                  <div>
                    <h3 className="font-bold text-white group-hover:text-primary-light transition-colors">{cat.title}</h3>
                    <span className="text-xs text-slate-500">{cat.articles} articles</span>
                  </div>
                </div>
                <p className="text-slate-400 text-xs">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular */}
      <section className="py-14 px-4 border-b border-surface-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">Most Popular Articles</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {popularArticles.map((a) => (
              <Link key={a.title} href="#" className="group glass-card rounded-xl p-5 hover:border-white/20 transition-all flex items-start gap-4">
                <span className="text-slate-600 text-lg mt-0.5">📄</span>
                <div>
                  <p className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors leading-snug">{a.title}</p>
                  <div className="flex gap-3 mt-1.5 text-xs text-slate-500">
                    <span>{a.category}</span>
                    <span>·</span>
                    <span>{a.readTime} read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-5">
          {[
            { icon: '💬', title: 'Live Chat', desc: 'Chat with a support agent in real time during business hours.', cta: 'Start Chat', href: '#' },
            { icon: '📧', title: 'Email Support', desc: 'Get a detailed response within 4–8 hours. Best for complex issues.', cta: 'Email Us', href: '/contact' },
            { icon: '📚', title: 'Video Tutorials', desc: 'Watch step-by-step guides on our YouTube channel.', cta: 'Watch Now', href: '#' },
          ].map((item) => (
            <div key={item.title} className="glass-card rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-white mb-2 text-sm">{item.title}</h3>
              <p className="text-slate-400 text-xs mb-4 leading-relaxed">{item.desc}</p>
              <Link href={item.href} className="inline-block border border-surface-border hover:border-primary/40 text-slate-300 hover:text-white text-xs font-semibold px-4 py-2 rounded-full transition-all">{item.cta} →</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
