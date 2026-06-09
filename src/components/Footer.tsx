'use client';

import Link from 'next/link';

const DataGeniusLogo = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="8" fill="#1565C0" fillOpacity="0.2" />
    <rect x="1" y="1" width="34" height="34" rx="7" stroke="#1565C0" strokeOpacity="0.4" strokeWidth="1" />
    <path d="M18 6L28 10V18C28 23.5 23.5 28.5 18 30C12.5 28.5 8 23.5 8 18V10L18 6Z" fill="#1565C0" fillOpacity="0.3" stroke="#2196F3" strokeWidth="1.5" strokeLinejoin="round" />
    <line x1="13" y1="16" x2="23" y2="16" stroke="#90caf9" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="13" y1="19" x2="21" y2="19" stroke="#90caf9" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="13" y1="22" x2="19" y2="22" stroke="#90caf9" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="24" cy="12" r="2" fill="#42a5f5" />
  </svg>
);

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Data Recovery Tools', href: '/data-recovery-tools' },
  { name: 'Hardware Products', href: '/hardware-products' },
  { name: 'Training & Support', href: '/training-support' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const blogLinks = [
  { name: 'How to Recover Data from Dead HDD', href: '/blog/recover-data-dead-hard-drive' },
  { name: 'CCTV Recovery: 2026 Complete Guide', href: '/blog/hikvision-dvr-recovery-guide' },
  { name: 'SSD Recovery Techniques Explained', href: '/blog/ssd-recovery-techniques' },
  { name: 'Digital Forensics Best Practices', href: '/blog/digital-forensics-best-practices' },
  { name: 'RAID Recovery: Step-by-Step', href: '/blog/raid-recovery-guide' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#060f1f', borderTop: '1px solid rgba(30, 58, 95, 0.8)' }}>
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 - Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <DataGeniusLogo />
              <div>
                <span className="text-lg font-bold text-white leading-none block">
                  Data <span style={{ color: '#42a5f5' }}>Genius</span>
                </span>
                <span className="text-xs" style={{ color: '#475569' }}>Data Recovery Solutions</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#64748b' }}>
              Professional Data Recovery Solutions, Hardware Products, Training, and Technical Support for forensic investigators, law enforcement, and enterprises.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                {
                  label: 'LinkedIn',
                  href: 'https://linkedin.com/company/data-genius',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  label: 'Facebook',
                  href: 'https://facebook.com/datagenius',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  label: 'X (Twitter)',
                  href: 'https://x.com/datagenius',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  label: 'YouTube',
                  href: 'https://youtube.com/@datagenius',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg transition-all"
                  style={{ backgroundColor: 'rgba(13, 31, 60, 0.8)', border: '1px solid rgba(30, 58, 95, 0.8)', color: '#64748b' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = '#42a5f5';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(33, 150, 243, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = '#64748b';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(30, 58, 95, 0.8)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-sm transition-colors group"
                    style={{ color: '#64748b' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#94a3b8')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
                  >
                    <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#1565c0' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Latest Blog */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Latest Blog</h3>
            <ul className="space-y-4">
              {blogLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm leading-snug transition-colors block"
                    style={{ color: '#64748b' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#94a3b8')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Contact Us</h3>
            <ul className="space-y-4">
              {[
                {
                  icon: (
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  text: '+1 (800) DATA-GEN',
                },
                {
                  icon: (
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  text: 'support@datagenius.in',
                },
                {
                  icon: (
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  text: 'Hyderabad, Telangana, India',
                },
                {
                  icon: (
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  text: 'Mon–Sat: 9:00 AM – 6:00 PM IST',
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span style={{ color: '#1565c0' }}>{item.icon}</span>
                  <span className="text-sm" style={{ color: '#64748b' }}>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(30, 58, 95, 0.8), transparent)' }} />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm" style={{ color: '#475569' }}>
            © 2026 Data Genius. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { name: 'Privacy Policy', href: '/privacy' },
              { name: 'Terms of Service', href: '/terms' },
              { name: 'Cookie Policy', href: '/cookies' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs transition-colors"
                style={{ color: '#475569' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#64748b')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
