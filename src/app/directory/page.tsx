import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Data Recovery Lab Directory — Find a Lab Near You | DataGenius',
  description: 'Find certified data recovery labs near you across India. Search by city. 500+ labs listed. Hikvision, HDD, SSD, RAID recovery specialists.',
};

const labs = [
  { name: 'DataRestore Mumbai', city: 'Mumbai', area: 'Andheri West', services: ['HDD Recovery', 'SSD Recovery', 'RAID', 'CCTV Recovery'], rating: 4.9, reviews: 234, phone: '+91 98200 XXXXX', featured: true, crm: true },
  { name: 'Delhi Data Rescue', city: 'Delhi', area: 'Connaught Place', services: ['HDD Recovery', 'Laptop Recovery', 'Forensics'], rating: 4.8, reviews: 189, phone: '+91 98100 XXXXX', featured: true, crm: false },
  { name: 'TechRecovery Bangalore', city: 'Bangalore', area: 'Koramangala', services: ['SSD Recovery', 'RAID', 'Server Recovery', 'Database'], rating: 4.7, reviews: 156, phone: '+91 98440 XXXXX', featured: false, crm: true },
  { name: 'Chennai Data Lab', city: 'Chennai', area: 'T. Nagar', services: ['HDD Recovery', 'CCTV Recovery', 'Mobile Recovery'], rating: 4.8, reviews: 203, phone: '+91 98400 XXXXX', featured: false, crm: false },
  { name: 'Hyderabad Data Recovery', city: 'Hyderabad', area: 'Hitech City', services: ['HDD Recovery', 'SSD Recovery', 'RAID', 'Cloud'], rating: 4.6, reviews: 121, phone: '+91 98490 XXXXX', featured: true, crm: true },
  { name: 'Pune Data Solutions', city: 'Pune', area: 'Kothrud', services: ['HDD Recovery', 'USB Recovery', 'Photo Recovery'], rating: 4.5, reviews: 98, phone: '+91 98220 XXXXX', featured: false, crm: false },
  { name: 'Kolkata Recovery Center', city: 'Kolkata', area: 'Salt Lake', services: ['HDD Recovery', 'RAID', 'Mobile Recovery', 'CCTV Recovery'], rating: 4.7, reviews: 145, phone: '+91 98310 XXXXX', featured: false, crm: true },
  { name: 'Ahmedabad DataPro', city: 'Ahmedabad', area: 'Satellite', services: ['HDD Recovery', 'SSD Recovery', 'USB Recovery'], rating: 4.6, reviews: 87, phone: '+91 98250 XXXXX', featured: false, crm: false },
];

const cities = ['All Cities', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata', 'Ahmedabad'];

export default function DirectoryPage() {
  return (
    <div className="min-h-screen bg-surface-dark">
      {/* Hero */}
      <section className="border-b border-surface-border py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block bg-primary/10 text-primary-light rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-4">500+ Labs Listed</span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">Find a Data Recovery Lab Near You</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Browse certified data recovery professionals across India. All listed labs are vetted and reviewed by real customers.
          </p>
          {/* Search */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <input type="text" placeholder="Search by lab name or service..." className="flex-1 bg-surface-card border border-surface-border rounded-full px-6 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50" />
            <select className="bg-surface-card border border-surface-border rounded-full px-6 py-3 text-slate-300 focus:outline-none focus:border-primary/50 appearance-none">
              {cities.map((c) => <option key={c}>{c}</option>)}
            </select>
            <button className="bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-full transition-all">Search</button>
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="text-slate-400 text-sm">{labs.length} labs found</p>
            <Link href="/directory/submit" className="inline-flex items-center gap-2 border border-surface-border hover:border-primary/40 text-slate-400 hover:text-white text-sm px-4 py-2 rounded-full transition-all">
              + List Your Lab
            </Link>
          </div>

          <div className="space-y-4">
            {labs.map((lab) => (
              <div key={lab.name} className={`glass-card rounded-2xl p-6 flex flex-col sm:flex-row gap-5 ${lab.featured ? 'border-primary/30' : ''} hover:border-white/20 transition-all`}>
                {/* Logo placeholder */}
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">
                  🔬
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-bold text-white">{lab.name}</h3>
                    {lab.featured && <span className="text-xs bg-amber/10 text-amber font-semibold px-2 py-0.5 rounded-full">⭐ Featured</span>}
                    {lab.crm && <span className="text-xs bg-primary/10 text-primary-light font-semibold px-2 py-0.5 rounded-full">✓ DataGenius CRM</span>}
                  </div>
                  <p className="text-slate-400 text-sm mb-2">📍 {lab.area}, {lab.city}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {lab.services.map((s) => (
                      <span key={s} className="text-xs bg-surface-dark border border-surface-border rounded-full px-2.5 py-0.5 text-slate-400">{s}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span>⭐ {lab.rating} <span className="text-slate-600">({lab.reviews} reviews)</span></span>
                    <span>📞 {lab.phone}</span>
                  </div>
                </div>
                <div className="flex flex-row sm:flex-col gap-2 flex-shrink-0">
                  <button className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-5 py-2 rounded-full transition-all whitespace-nowrap">Contact Lab</button>
                  <button className="border border-surface-border hover:border-primary/40 text-slate-400 hover:text-white text-sm px-5 py-2 rounded-full transition-all whitespace-nowrap">View Profile</button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 glass-card rounded-2xl p-8 text-center border-primary/20">
            <h2 className="text-xl font-bold text-white mb-3">Own a Data Recovery Lab?</h2>
            <p className="text-slate-400 mb-5 text-sm max-w-lg mx-auto">
              List your lab for free and reach thousands of potential customers searching for recovery services near them. Labs using DataGenius CRM get a free Featured listing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/directory/submit" className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-full transition-all text-sm">Submit Your Lab →</Link>
              <Link href="/products/recovery-crm" className="border border-surface-border hover:border-primary/40 text-slate-400 hover:text-white text-sm font-medium px-6 py-3 rounded-full transition-all">Learn About CRM</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
