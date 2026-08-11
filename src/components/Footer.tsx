import Link from 'next/link';

const cols = [
  {
    heading: 'Services',
    links: [
      { label: 'Recover Data',      href: '/recover' },
      { label: 'Protect & Backup',  href: '/protect' },
      { label: 'Preserve & Archive',href: '/preserve' },
      { label: 'Maintain & Monitor',href: '/maintain' },
      { label: 'Home Cloud Setup',  href: '/home-cloud' },
      { label: 'Business Backup',   href: '/business-backup' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'Hard Drive Recovery',   href: '/recover#hdd' },
      { label: 'SSD & NVMe Recovery',   href: '/recover#ssd' },
      { label: 'RAID / NAS Recovery',   href: '/recover#raid' },
      { label: 'Mobile Recovery',       href: '/recover#mobile' },
      { label: 'Photo Digitization',    href: '/preserve#photos' },
      { label: 'Data Health Check',     href: '/data-health-check' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About DataGenius', href: '/about' },
      { label: 'Contact Us',       href: '/contact' },
      { label: 'Privacy Policy',   href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background:'#0F172A', color:'#94A3B8' }}>
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#1E40AF"/>
                <rect x="8" y="8" width="7" height="7" rx="1.5" fill="white" fillOpacity=".9"/>
                <rect x="17" y="8" width="7" height="7" rx="1.5" fill="white" fillOpacity=".6"/>
                <rect x="8" y="17" width="7" height="7" rx="1.5" fill="white" fillOpacity=".6"/>
                <rect x="17" y="17" width="7" height="7" rx="1.5" fill="#93C5FD"/>
              </svg>
              <span className="text-lg font-bold text-white">DataGenius</span>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Recovery · Storage · Preservation · Continuity
            </p>
            <p className="text-xs leading-relaxed" style={{color:'#64748B'}}>
              DataGenius is a specialized data continuity division of{' '}
              <span className="text-blue-400 font-medium">PYNEK Technologies</span>.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { label:'LinkedIn', path:'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                { label:'Facebook', path:'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { label:'X', path:'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
              ].map(s => (
                <a key={s.label} href="#" aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                  style={{background:'rgba(255,255,255,.06)'}}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.path}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {cols.map(col => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">{col.heading}</h3>
              <ul className="space-y-3">
                {col.links.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm hover:text-white transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="rounded-2xl p-6 mb-10 grid grid-cols-1 sm:grid-cols-3 gap-6"
          style={{background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.08)'}}
        >
          {[
            { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', text:'+91 92999 XXXXX' },
            { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', text:'hello@datagenius.in' },
            { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', text:'Hyderabad, Telangana' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{background:'rgba(59,130,246,.2)'}}>
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={item.icon}/>
                </svg>
              </div>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t" style={{borderColor:'rgba(255,255,255,.08)'}}>
          <p className="text-xs" style={{color:'#475569'}}>
            &copy; 2026 DataGenius — a division of PYNEK Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs" style={{color:'#475569'}}>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
