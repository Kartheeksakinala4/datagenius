import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Business Backup Solutions — DataGenius',
  description: 'Enterprise-grade data protection for small and medium businesses. Automated backup, disaster recovery, and compliance-ready solutions in Hyderabad.',
};

const solutions = [
  { icon: 'M5 12H3m18 0h-2M5.636 5.636L4.222 4.222m15.556 15.556l-1.414-1.414M12 5V3m0 18v-2', title: 'Server Backup', desc: 'Full system image backups of your Windows or Linux servers. Restore to bare metal or a new server in hours — not days.' },
  { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', title: 'Microsoft 365 Backup', desc: 'Microsoft does NOT backup your email, Teams, or SharePoint. We protect your Microsoft 365 data with daily automated backups and 1-year retention.' },
  { icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4', title: 'Database Backup', desc: 'Application-consistent backups of SQL Server, MySQL, PostgreSQL, and other databases.' },
  { icon: 'M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2', title: 'Workstation Backup', desc: 'Every employee laptop and desktop backed up automatically. Recover a single document or an entire machine — centrally managed.' },
  { icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12', title: 'Offsite Replication', desc: 'A second copy of your backups stored in a geographically separate location — protection against site-wide disasters.' },
  { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', title: 'Disaster Recovery Planning', desc: 'A documented, tested plan so your team knows exactly what to do when something goes wrong. RTO and RPO defined and measured.' },
];

const industries = [
  { name: 'Medical & Healthcare', icon: '🏥', concern: 'Patient records, HIPAA compliance, EHR backups' },
  { name: 'Legal & Finance', icon: '⚖️', concern: 'Client files, contracts, transaction records' },
  { name: 'Architecture & Design', icon: '🏗️', concern: 'Large CAD files, project deliverables, client assets' },
  { name: 'Retail & E-Commerce', icon: '🛍️', concern: 'Inventory, orders, customer data, POS systems' },
  { name: 'Education', icon: '🎓', concern: 'Student records, research data, learning materials' },
  { name: 'Manufacturing', icon: '🏗️', concern: 'Design files, production records, supplier contracts' },
];

export default function BusinessBackupPage() {
  return (
    <>
      <section className="bg-hero section-pad">
        <div className="container-xl">
          <div className="max-w-3xl">
            <span className="badge badge-blue mb-5">Business Backup</span>
            <h1 className="display-1 text-ink-900 mb-6">
              60% of businesses close within 6 months{' '}
              <span className="gradient-text">of major data loss.</span>
            </h1>
            <p className="lead mb-8">
              Your business data is your most valuable asset. A fire, ransomware attack, or hardware failure shouldn&apos;t mean the end of your business. We build backup systems that get you back to work in hours — not weeks.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary btn-lg">Get a Free Assessment</Link>
              <Link href="#solutions" className="btn btn-outline btn-lg">View Solutions</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[['< 4 hrs','Recovery time objective'],['15 min','Data loss maximum (RPO)'],['3 copies','Minimum redundancy'],['99.9%','Backup success rate']].map(([v,l]) => (
              <div key={l}><p className="text-3xl font-extrabold mb-1">{v}</p><p className="text-blue-200 text-sm">{l}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="section-pad">
        <div className="container-xl">
          <div className="text-center mb-14">
            <h2 className="display-2 text-ink-900 mb-4">Complete protection for every layer</h2>
            <p className="lead max-w-2xl mx-auto">Servers, workstations, email, databases — we protect everything that matters to your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map(s => (
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
            <h2 className="display-2 text-ink-900 mb-4">We serve businesses across all sectors</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map(i => (
              <div key={i.name} className="card p-6 flex gap-4 items-start">
                <div className="text-3xl flex-shrink-0">{i.icon}</div>
                <div>
                  <h3 className="font-bold text-ink-900 mb-1">{i.name}</h3>
                  <p className="text-sm text-ink-500">{i.concern}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-deep section-pad">
        <div className="container-xl text-center">
          <h2 className="display-2 text-white mb-4">Protect your business — starting today</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">Contact us for a free 30-minute business data assessment.</p>
          <Link href="/contact" className="btn btn-ghost btn-lg">Get Free Assessment</Link>
        </div>
      </section>
    </>
  );
}
