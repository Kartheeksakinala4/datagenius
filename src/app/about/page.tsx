import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About DataGenius — India\'s Data Recovery Platform',
  description: 'Learn about DataGenius — our mission, story, and team. Built in India to solve India\'s data loss crisis with accessible, professional-grade tools.',
};

const stats = [
  { value: '3', label: 'Products launched' },
  { value: '10,000+', label: 'Newsletter subscribers' },
  { value: '500+', label: 'Recovery labs on CRM' },
  { value: '50,000+', label: 'Users helped' },
];

const values = [
  { icon: '🔒', title: 'Data Privacy First', desc: 'Our desktop tools process everything locally. Your files never leave your machine. We don\'t collect your recovered data — ever.' },
  { icon: '🎯', title: 'Technical Accuracy', desc: 'Every guide, tool, and feature is reviewed by practising data recovery engineers. We don\'t publish guesswork.' },
  { icon: '🇮🇳', title: 'Made in India', desc: 'Built for India\'s storage landscape: Hikvision DVRs, CP Plus cameras, regional ISPs, and UPI payments. Not just an imported product.' },
  { icon: '🌍', title: 'Accessibility', desc: 'Data loss is stressful. We make professional-grade tools affordable and our content free — because everyone deserves a chance to recover their data.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface-dark">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-surface-border py-20 px-4">
        <div className="absolute inset-0 hero-mesh-bg opacity-40" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block bg-primary/10 text-primary-light rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-4">Our Story</span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            We Built DataGenius Because<br />
            <span className="gradient-text">Data Loss Is Devastating</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            DataGenius was born from frustration. A failed hard drive. Four years of irreplaceable photos. Professional recovery services quoting ₹40,000. A decision: build the tools we wished existed.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 border-b border-surface-border">
        <div className="max-w-3xl mx-auto space-y-6 text-slate-300 leading-relaxed">
          <p>
            In 2021, our founder — a data recovery engineer with 10+ years of experience at enterprise storage firms — lost access to a personal hard drive. The data was recoverable. But the tools available were either <em>too expensive</em>, <em>too complicated</em>, or <em>not designed for Indian use cases</em> (no UPI support, no Hindi UI, no Hikvision/CP Plus compatibility).
          </p>
          <p>
            That frustration became a mission: build world-class data recovery tools that are <strong className="text-white">affordable for individuals</strong>, powerful enough for <strong className="text-white">professional technicians</strong>, and tailored to <strong className="text-white">India&apos;s unique storage environment</strong>.
          </p>
          <p>
            Today, DataGenius is India&apos;s most comprehensive data recovery platform — with 3 software products, a 10,000-subscriber newsletter, free web tools, 500+ recovery labs on our CRM, and a growing community of data recovery professionals.
          </p>
          <p>
            We&apos;re not just a software company. We&apos;re a <strong className="text-white">data recovery media and tools ecosystem</strong> — building the infrastructure that the Indian data recovery industry needs.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-surface-card border-b border-surface-border">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-bold gradient-text mb-2">{s.value}</p>
              <p className="text-sm text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 border-b border-surface-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">What We Stand For</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="glass-card rounded-2xl p-6">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-white mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 border-b border-surface-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">The Team</h2>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto">
            DataGenius is a small, focused team of data recovery engineers, software developers, and content specialists — all obsessed with data protection.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { initials: 'AK', name: 'Arjun Kumar', role: 'Founder & CEO', desc: '12 years in data recovery. Ex-Seagate, ex-WD. Certified CCTV forensics specialist.' },
              { initials: 'PS', name: 'Priya Sharma', role: 'Lead Engineer', desc: 'Software architect behind the DataGenius scan engine. 8 years in storage systems.' },
              { initials: 'RJ', name: 'Rohan Joshi', role: 'Head of Content', desc: 'Data recovery journalist. Writes the Data Pulse newsletter and manages the blog.' },
            ].map((member) => (
              <div key={member.name} className="glass-card rounded-2xl p-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary-light font-bold text-lg mx-auto mb-4">{member.initials}</div>
                <h3 className="font-bold text-white mb-1">{member.name}</h3>
                <p className="text-xs text-primary-light font-semibold mb-3">{member.role}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">Want to Work With Us?</h2>
          <p className="text-slate-400 mb-8">We&apos;re always open to partnerships, content collaborations, and speaking to recovery lab owners about their needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3 rounded-full transition-all text-sm">Get in Touch →</Link>
            <Link href="/products/recovery-crm" className="border border-surface-border hover:border-primary/40 text-white text-sm font-medium px-8 py-3 rounded-full transition-all">Recovery CRM for Labs</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
