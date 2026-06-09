'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const navLinks = [
  {
    name: 'Data Recovery Tools',
    href: '/data-recovery-tools',
    dropdown: [
      { name: 'Logical Data Recovery', href: '/data-recovery-tools#logical', desc: 'Recover deleted & formatted data' },
      { name: 'CCTV Data Recovery', href: '/data-recovery-tools#cctv', desc: 'DVR, NVR & surveillance systems' },
      { name: 'USB to SATA Adapter', href: '/data-recovery-tools#usb-sata', desc: 'Professional diagnostic adapters' },
      { name: 'SD / microSD Pinouts', href: '/data-recovery-tools#sd-pinouts', desc: 'Reference guides & recovery tools' },
    ],
  },
  {
    name: 'Hardware Products',
    href: '/hardware-products',
    dropdown: [
      { name: 'Docking Stations', href: '/hardware-products#docking', desc: 'Multi-drive SATA/IDE docking' },
      { name: 'Hardware Enclosures', href: '/hardware-products#enclosures', desc: 'Moisture-free secure storage' },
      { name: 'Hardware Monitors', href: '/hardware-products#monitors', desc: 'SMART diagnostics & health' },
    ],
  },
  {
    name: 'Training & Support',
    href: '/training-support',
    dropdown: [
      { name: 'Beginner Courses', href: '/training-support#beginner', desc: 'Storage fundamentals & basics' },
      { name: 'Advanced Courses', href: '/training-support#advanced', desc: 'SSD, RAID & CCTV recovery' },
      { name: 'Certifications', href: '/training-support#certifications', desc: 'Professional certification programs' },
      { name: 'Technical Support', href: '/training-support#support', desc: 'Expert assistance & consulting' },
    ],
  },
  { name: 'Blog', href: '/blog' },
];

const DataGeniusLogo = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="8" fill="#1565C0" fillOpacity="0.2" />
    <rect x="1" y="1" width="34" height="34" rx="7" stroke="#1565C0" strokeOpacity="0.4" strokeWidth="1" />
    {/* Shield shape */}
    <path d="M18 6L28 10V18C28 23.5 23.5 28.5 18 30C12.5 28.5 8 23.5 8 18V10L18 6Z" fill="#1565C0" fillOpacity="0.3" stroke="#2196F3" strokeWidth="1.5" strokeLinejoin="round" />
    {/* Data lines inside shield */}
    <line x1="13" y1="16" x2="23" y2="16" stroke="#90caf9" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="13" y1="19" x2="21" y2="19" stroke="#90caf9" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="13" y1="22" x2="19" y2="22" stroke="#90caf9" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="24" cy="12" r="2" fill="#42a5f5" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  const handleDropdownEnter = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-800/95 backdrop-blur-md border-b shadow-2xl'
          : 'bg-navy-900/80 backdrop-blur-sm border-b'
      }`}
      style={{ borderColor: 'rgba(30, 58, 95, 0.8)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <DataGeniusLogo />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white leading-none">
                Data <span className="text-blue-400" style={{ color: '#42a5f5' }}>Genius</span>
              </span>
              <span className="text-xs" style={{ color: '#64748b', letterSpacing: '0.05em' }}>Data Recovery Solutions</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(link.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all rounded-lg"
                    style={{ color: activeDropdown === link.name ? '#e2e8f0' : '#94a3b8' }}
                    onMouseEnter={() => handleDropdownEnter(link.name)}
                  >
                    {link.name}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  {activeDropdown === link.name && (
                    <div
                      className="absolute top-full left-0 mt-1 w-72 rounded-xl shadow-2xl py-2 z-50"
                      style={{ backgroundColor: '#0d1f3c', border: '1px solid rgba(30, 58, 95, 0.9)' }}
                      onMouseEnter={() => handleDropdownEnter(link.name)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(33, 150, 243, 0.3), transparent)', margin: '0 0 8px' }} />
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex flex-col px-4 py-3 transition-all group/item"
                          style={{ borderRadius: '8px', margin: '2px 8px' }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(21, 101, 192, 0.1)')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                        >
                          <span className="text-sm font-semibold text-white">{item.name}</span>
                          <span className="text-xs mt-0.5" style={{ color: '#64748b' }}>{item.desc}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium transition-all rounded-lg hover:text-white"
                  style={{ color: '#94a3b8' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#e2e8f0')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="hidden sm:flex items-center">
              {searchOpen ? (
                <div className="flex items-center gap-2">
                  <input
                    ref={searchRef}
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Escape' && setSearchOpen(false)}
                    className="w-48 text-sm px-4 py-1.5 rounded-full outline-none transition-all"
                    style={{
                      backgroundColor: 'rgba(13, 31, 60, 0.9)',
                      border: '1px solid rgba(33, 150, 243, 0.4)',
                      color: '#e2e8f0',
                    }}
                  />
                  <button
                    onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                    className="p-1 transition-colors"
                    style={{ color: '#64748b' }}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 rounded-lg transition-all"
                  style={{ color: '#64748b' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#94a3b8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
                  aria-label="Search"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              )}
            </div>

            {/* Contact Us */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
              style={{
                background: 'linear-gradient(135deg, #1565c0 0%, #1976d2 100%)',
                color: 'white',
                border: '1px solid rgba(33, 150, 243, 0.3)',
                boxShadow: '0 4px 14px rgba(21, 101, 192, 0.3)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(21, 101, 192, 0.5)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 14px rgba(21, 101, 192, 0.3)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              Contact Us
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors"
              style={{ color: '#94a3b8' }}
              aria-label="Toggle menu"
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

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t"
          style={{ backgroundColor: '#0a1628', borderColor: 'rgba(30, 58, 95, 0.8)' }}
        >
          <div className="px-4 py-4 space-y-1">
            {/* Mobile search */}
            <div className="relative mb-4">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#64748b' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className="w-full text-sm pl-9 pr-4 py-2.5 rounded-xl outline-none"
                style={{
                  backgroundColor: 'rgba(13, 31, 60, 0.8)',
                  border: '1px solid rgba(30, 58, 95, 0.8)',
                  color: '#e2e8f0',
                }}
              />
            </div>

            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-semibold rounded-lg"
                  style={{ color: '#cbd5e1' }}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="ml-4 space-y-1 mb-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm rounded-lg"
                        style={{ color: '#64748b' }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-3 border-t" style={{ borderColor: 'rgba(30, 58, 95, 0.6)' }}>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full text-sm font-semibold px-4 py-3 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #1565c0 0%, #1976d2 100%)',
                  color: 'white',
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
