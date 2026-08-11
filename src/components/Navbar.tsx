'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Recover',  href: '/recover' },
  { label: 'Protect',  href: '/protect' },
  { label: 'Preserve', href: '/preserve' },
  { label: 'Maintain', href: '/maintain' },
  { label: 'About',    href: '/about' },
  { label: 'Contact',  href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,.95)' : '#fff',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: '1px solid #E2E8F0',
        boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,.07)' : 'none',
      }}
    >
      <div className="container-xl">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#1E40AF"/>
              <rect x="8" y="8" width="7" height="7" rx="1.5" fill="white" fillOpacity=".9"/>
              <rect x="17" y="8" width="7" height="7" rx="1.5" fill="white" fillOpacity=".6"/>
              <rect x="8" y="17" width="7" height="7" rx="1.5" fill="white" fillOpacity=".6"/>
              <rect x="17" y="17" width="7" height="7" rx="1.5" fill="#93C5FD"/>
            </svg>
            <span className="text-lg font-bold text-ink-900">
              Data<span style={{color:'#1E40AF'}}>Genius</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm font-medium text-ink-500 rounded-lg transition-colors hover:text-ink-900 hover:bg-surface-soft"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="btn btn-primary btn-sm">
              Free Diagnosis
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-ink-400 hover:text-ink-700 hover:bg-surface-soft"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen
              ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
              : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
            }
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-surface-border py-4 mobile-menu">
            {navLinks.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium text-ink-500 hover:text-ink-900 hover:bg-surface-soft rounded-xl"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-surface-border">
              <Link href="/contact" className="btn btn-primary w-full justify-center" onClick={() => setMobileOpen(false)}>
                Free Diagnosis
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
