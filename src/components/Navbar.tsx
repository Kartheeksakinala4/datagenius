'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const productLinks = [
  { name: 'Data Recovery', href: '/products/data-recovery', desc: 'Recover deleted & lost files' },
  { name: 'Repair Suite', href: '/products/repair-suite', desc: 'Fix corrupted files' },
  { name: 'Recovery CRM', href: '/products/recovery-crm', desc: 'Manage your recovery lab' },
  { name: 'CCTV Recovery', href: '/products/cctv-recovery', desc: 'Recover DVR/NVR footage' },
];

const toolLinks = [
  { name: 'Storage Calculator', href: '/tools/storage-calculator', desc: 'Calculate storage needs' },
  { name: 'AI Recovery Advisor', href: '/tools/recovery-advisor', desc: 'AI-powered recovery help' },
  { name: 'SMART Checker', href: '/tools/smart-checker', desc: 'Analyze drive health' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {announcementVisible && (
        <div className="bg-amber text-slate-900 text-sm py-2 px-4 flex items-center justify-center gap-3 relative">
          <span>🎉 DataGenius v2.0 is live — Download Free</span>
          <Link href="/download/data-recovery" className="font-semibold underline hover:no-underline">
            Download Free →
          </Link>
          <button
            onClick={() => setAnnouncementVisible(false)}
            className="absolute right-4 text-slate-700 hover:text-slate-900 font-bold text-lg leading-none"
            aria-label="Dismiss announcement"
          >
            ×
          </button>
        </div>
      )}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface-dark/90 backdrop-blur-md border-b border-surface-border shadow-lg'
            : 'bg-surface-dark/70 backdrop-blur-sm border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-primary">
                <rect width="28" height="28" rx="6" fill="#1565C0" fillOpacity="0.15" />
                <circle cx="7" cy="7" r="2" fill="#1565C0" />
                <circle cx="14" cy="7" r="2" fill="#2196F3" />
                <circle cx="21" cy="7" r="2" fill="#1565C0" />
                <circle cx="7" cy="14" r="2" fill="#2196F3" />
                <circle cx="14" cy="14" r="3" fill="#10B981" />
                <circle cx="21" cy="14" r="2" fill="#2196F3" />
                <circle cx="7" cy="21" r="2" fill="#1565C0" />
                <circle cx="14" cy="21" r="2" fill="#2196F3" />
                <circle cx="21" cy="21" r="2" fill="#1565C0" />
                <line x1="7" y1="7" x2="14" y2="14" stroke="#1565C0" strokeWidth="1" strokeOpacity="0.6" />
                <line x1="21" y1="7" x2="14" y2="14" stroke="#1565C0" strokeWidth="1" strokeOpacity="0.6" />
                <line x1="7" y1="21" x2="14" y2="14" stroke="#1565C0" strokeWidth="1" strokeOpacity="0.6" />
                <line x1="21" y1="21" x2="14" y2="14" stroke="#1565C0" strokeWidth="1" strokeOpacity="0.6" />
              </svg>
              <span className="text-lg font-bold text-white">
                Data<span className="text-primary-light">Genius</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                  Products
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'products' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-surface-card border border-surface-border rounded-xl shadow-xl py-2">
                    {productLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex flex-col px-4 py-3 hover:bg-white/5 transition-colors"
                      >
                        <span className="text-sm font-medium text-white">{link.name}</span>
                        <span className="text-xs text-slate-400">{link.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('tools')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                  Tools
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'tools' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-surface-card border border-surface-border rounded-xl shadow-xl py-2">
                    {toolLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex flex-col px-4 py-3 hover:bg-white/5 transition-colors"
                      >
                        <span className="text-sm font-medium text-white">{link.name}</span>
                        <span className="text-xs text-slate-400">{link.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {[
                { name: 'Blog', href: '/blog' },
                { name: 'Newsletter', href: '/newsletter' },
                { name: 'Academy', href: '/academy' },
                { name: 'Pricing', href: '/pricing' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/download/data-recovery"
                className="hidden sm:inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-4 py-2 rounded-full transition-all hover:shadow-lg hover:shadow-accent/20"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Free
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-surface-card border-t border-surface-border">
            <div className="px-4 py-4 space-y-1">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Products</p>
              {productLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-4 mb-2">Free Tools</p>
              {toolLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-surface-border mt-3 space-y-1">
                {[
                  { name: 'Blog', href: '/blog' },
                  { name: 'Newsletter', href: '/newsletter' },
                  { name: 'Academy', href: '/academy' },
                  { name: 'Pricing', href: '/pricing' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="pt-3">
                <Link
                  href="/download/data-recovery"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-4 py-3 rounded-full transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Free
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
