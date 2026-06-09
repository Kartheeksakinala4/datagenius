'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { value: 500, suffix: '+', label: 'Recovery Labs Served' },
  { value: 50000, suffix: '+', label: 'Cases Resolved' },
  { value: 150, suffix: '+', label: 'Hardware Products' },
  { value: 30, suffix: '+', label: 'Countries Reached' },
];

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Trusted by Law Enforcement',
    desc: 'Our tools are used by forensic investigators and law enforcement agencies globally for evidence recovery.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Advanced Hardware Solutions',
    desc: 'Professional-grade docking stations, enclosures, and diagnostic monitors built for intensive data recovery.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Professional Certification',
    desc: 'Industry-recognized training programs for data recovery specialists and forensic professionals.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: '24/7 Technical Support',
    desc: 'Expert remote assistance, hardware troubleshooting, and firmware diagnostics from our certified engineers.',
  },
];

const recoveryTools = [
  {
    id: 'logical',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: 'Logical Data Recovery',
    desc: 'Advanced software and techniques for recovering deleted, formatted, and corrupted data from any storage device.',
    href: '/data-recovery-tools#logical',
  },
  {
    id: 'cctv',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'CCTV Data Recovery',
    desc: 'Specialized recovery for DVR, NVR, CCTV surveillance systems, and video evidence extraction.',
    href: '/data-recovery-tools#cctv',
  },
  {
    id: 'usb-sata',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'USB to SATA Adapter',
    desc: 'Professional-grade adapters for connecting SATA drives through USB interfaces for diagnostics and recovery.',
    href: '/data-recovery-tools#usb-sata',
  },
  {
    id: 'sd',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V9l-6-6zM9 3v6h6M9 3l6 6" />
      </svg>
    ),
    title: 'SD / microSD Pinouts',
    desc: 'Technical reference guides, pinout diagrams, and recovery resources for damaged SD and microSD media.',
    href: '/data-recovery-tools#sd-pinouts',
  },
];

const hardwareProducts = [
  {
    icon: '🖥️',
    title: 'Docking Stations',
    desc: 'Multi-drive SATA/IDE docking with high-speed transfer capabilities.',
    href: '/hardware-products#docking',
  },
  {
    icon: '📦',
    title: 'Moisture-Free Enclosures',
    desc: 'Anti-humidity design for secure storage of sensitive recovery media.',
    href: '/hardware-products#enclosures',
  },
  {
    icon: '📊',
    title: 'Hardware Monitors',
    desc: 'Real-time SMART analysis and disk health monitoring systems.',
    href: '/hardware-products#monitors',
  },
];

const blogPosts = [
  { slug: 'recover-data-dead-hard-drive', title: 'How to Recover Data from a Dead Hard Drive', category: 'Recovery Guides', date: 'Mar 15, 2026', readTime: '8 min' },
  { slug: 'hikvision-dvr-recovery-guide', title: 'Hikvision DVR Recovery: Complete 2026 Guide', category: 'CCTV Recovery', date: 'Mar 10, 2026', readTime: '12 min' },
  { slug: 'ssd-recovery-techniques', title: 'Advanced SSD Recovery Techniques', category: 'SSD Recovery', date: 'Mar 5, 2026', readTime: '10 min' },
  { slug: 'digital-forensics-best-practices', title: 'Digital Forensics Best Practices 2026', category: 'Digital Forensics', date: 'Feb 28, 2026', readTime: '9 min' },
];

// SVG illustration of data recovery hardware
const HeroIllustration = () => (
  <div className="relative w-full max-w-lg mx-auto">
    {/* Main workstation */}
    <div
      className="relative rounded-2xl p-6 animate-float"
      style={{
        background: 'linear-gradient(135deg, rgba(13, 31, 60, 0.9) 0%, rgba(10, 22, 40, 0.95) 100%)',
        border: '1px solid rgba(33, 150, 243, 0.3)',
        boxShadow: '0 20px 60px rgba(21, 101, 192, 0.2), inset 0 1px 0 rgba(33, 150, 243, 0.1)',
      }}
    >
      {/* Monitor top bar */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
        <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
        <div className="flex-1 h-5 rounded ml-2" style={{ backgroundColor: 'rgba(21, 101, 192, 0.2)' }} />
      </div>
      {/* Screen content */}
      <div className="rounded-xl p-4 mb-4" style={{ backgroundColor: 'rgba(6, 15, 31, 0.8)', border: '1px solid rgba(30, 58, 95, 0.6)' }}>
        <div className="text-xs font-mono mb-3" style={{ color: '#42a5f5' }}>DataGenius Recovery Suite v4.2</div>
        <div className="space-y-2">
          {[
            { label: 'Drive Analysis', pct: 94, color: '#2196f3' },
            { label: 'Sector Scan', pct: 71, color: '#42a5f5' },
            { label: 'File Recovery', pct: 58, color: '#90caf9' },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between text-xs mb-1" style={{ color: '#64748b' }}>
                <span>{item.label}</span>
                <span style={{ color: item.color }}>{item.pct}%</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ backgroundColor: 'rgba(30, 58, 95, 0.6)' }}>
                <div
                  className="h-full rounded-full"
                  style={{ width: `${item.pct}%`, backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}80` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            { label: 'HDD', val: '3', icon: '💾' },
            { label: 'SSD', val: '2', icon: '⚡' },
            { label: 'SD', val: '5', icon: '📱' },
          ].map((d) => (
            <div key={d.label} className="text-center py-2 rounded-lg" style={{ backgroundColor: 'rgba(21, 101, 192, 0.1)' }}>
              <div className="text-lg">{d.icon}</div>
              <div className="text-xs font-bold text-white">{d.val}</div>
              <div className="text-xs" style={{ color: '#475569' }}>{d.label}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Drive slots */}
      <div className="grid grid-cols-4 gap-2">
        {[
          { type: 'HDD', active: true },
          { type: 'SSD', active: true },
          { type: 'SD', active: false },
          { type: 'USB', active: true },
        ].map((slot, i) => (
          <div
            key={i}
            className="rounded-lg py-2 px-1 text-center text-xs"
            style={{
              backgroundColor: slot.active ? 'rgba(21, 101, 192, 0.15)' : 'rgba(13, 31, 60, 0.6)',
              border: `1px solid ${slot.active ? 'rgba(33, 150, 243, 0.3)' : 'rgba(30, 58, 95, 0.5)'}`,
              color: slot.active ? '#90caf9' : '#475569',
            }}
          >
            {slot.type}
          </div>
        ))}
      </div>
    </div>

    {/* Floating badges */}
    <div
      className="absolute -top-4 -right-4 px-3 py-2 rounded-xl text-xs font-semibold"
      style={{
        backgroundColor: 'rgba(21, 101, 192, 0.9)',
        border: '1px solid rgba(33, 150, 243, 0.5)',
        color: 'white',
        boxShadow: '0 8px 24px rgba(21, 101, 192, 0.4)',
      }}
    >
      ✓ RAID Recovery
    </div>
    <div
      className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl text-xs font-semibold"
      style={{
        backgroundColor: 'rgba(13, 31, 60, 0.95)',
        border: '1px solid rgba(30, 58, 95, 0.9)',
        color: '#90caf9',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
      }}
    >
      🔒 Forensic Grade
    </div>
  </div>
);

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="hero-bg relative min-h-screen flex items-center overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute animate-mesh"
            style={{
              top: '15%', left: '5%',
              width: '500px', height: '500px',
              background: 'radial-gradient(circle, rgba(21, 101, 192, 0.35) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
          <div
            className="absolute animate-mesh"
            style={{
              bottom: '10%', right: '5%',
              width: '400px', height: '400px',
              background: 'radial-gradient(circle, rgba(13, 71, 161, 0.25) 0%, transparent 70%)',
              filter: 'blur(40px)',
              animationDelay: '3s',
            }}
          />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'linear-gradient(rgba(33, 150, 243, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(33, 150, 243, 0.5) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8"
                style={{ backgroundColor: 'rgba(21, 101, 192, 0.15)', border: '1px solid rgba(33, 150, 243, 0.25)' }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#42a5f5' }} />
                <span className="text-sm font-medium" style={{ color: '#90caf9' }}>
                  Trusted by 500+ Recovery Labs & Law Enforcement
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Professional{' '}
                <span className="gradient-text">Data Recovery</span>{' '}
                Solutions, Hardware &amp; Training
              </h1>

              <p className="text-lg mb-10 leading-relaxed" style={{ color: '#94a3b8' }}>
                Providing advanced data recovery tools, hardware solutions, technical expertise, and professional training for forensic investigators, data recovery specialists, law enforcement agencies, and enterprises.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/data-recovery-tools" className="btn-primary inline-flex items-center justify-center gap-2 text-base">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Explore Products
                </Link>
                <Link href="/contact" className="btn-outline inline-flex items-center justify-center gap-2 text-base">
                  Contact Us
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-3">
                {[
                  { label: 'ISO Certified', icon: '🏆' },
                  { label: 'Forensic Grade', icon: '🔒' },
                  { label: 'GDPR Compliant', icon: '✓' },
                  { label: '24/7 Support', icon: '📞' },
                ].map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg"
                    style={{
                      backgroundColor: 'rgba(13, 31, 60, 0.8)',
                      border: '1px solid rgba(30, 58, 95, 0.8)',
                      color: '#94a3b8',
                    }}
                  >
                    <span>{badge.icon}</span>
                    {badge.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Hero Illustration */}
            <div className="hidden lg:block">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm" style={{ color: '#64748b' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-dark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="badge badge-blue mb-4">Why Data Genius</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Enterprise-Grade Data Recovery
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748b' }}>
              Trusted by forensic investigators, law enforcement agencies, and enterprise IT teams worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="silver-card rounded-2xl p-6 text-center"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: 'rgba(21, 101, 192, 0.15)', color: '#42a5f5' }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Recovery Tools */}
      <section className="section-navy py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="badge badge-blue mb-3">Recovery Tools</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Data Recovery Solutions</h2>
            </div>
            <Link
              href="/data-recovery-tools"
              className="text-sm font-medium transition-colors flex items-center gap-1.5"
              style={{ color: '#42a5f5' }}
            >
              View All Tools
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recoveryTools.map((tool) => (
              <Link
                key={tool.id}
                href={tool.href}
                className="silver-card rounded-2xl p-6 group"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: 'rgba(21, 101, 192, 0.12)', color: '#42a5f5', border: '1px solid rgba(33, 150, 243, 0.2)' }}
                >
                  {tool.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors" style={{ ['--tw-text-opacity' as string]: '1' }}>
                  {tool.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748b' }}>{tool.desc}</p>
                <span className="text-xs font-semibold flex items-center gap-1" style={{ color: '#42a5f5' }}>
                  Learn More
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Products */}
      <section className="section-dark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge badge-silver mb-4">Hardware Products</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Professional Recovery Hardware
              </h2>
              <p className="text-lg mb-8" style={{ color: '#64748b' }}>
                Purpose-built hardware solutions for data recovery professionals. From multi-drive docking stations to moisture-free enclosures.
              </p>
              <div className="space-y-4 mb-8">
                {hardwareProducts.map((product) => (
                  <Link
                    key={product.title}
                    href={product.href}
                    className="flex items-start gap-4 p-4 rounded-xl transition-all group"
                    style={{ backgroundColor: 'rgba(13, 31, 60, 0.6)', border: '1px solid rgba(30, 58, 95, 0.6)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(33, 150, 243, 0.3)')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(30, 58, 95, 0.6)')}
                  >
                    <span className="text-3xl">{product.icon}</span>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1">{product.title}</h3>
                      <p className="text-xs" style={{ color: '#64748b' }}>{product.desc}</p>
                    </div>
                    <svg className="w-4 h-4 ml-auto mt-0.5 flex-shrink-0 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#42a5f5' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                ))}
              </div>
              <Link href="/hardware-products" className="btn-primary inline-flex items-center gap-2 text-sm">
                Explore Hardware Products
              </Link>
            </div>
            {/* Hardware visual */}
            <div className="hidden lg:block">
              <div
                className="rounded-2xl p-8"
                style={{ background: 'linear-gradient(135deg, rgba(13, 31, 60, 0.9), rgba(10, 22, 40, 0.95))', border: '1px solid rgba(30, 58, 95, 0.8)' }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Docking Station', specs: 'SATA/IDE • USB 3.0 • 4-Bay', icon: '🖥️', status: 'In Stock' },
                    { label: 'HD Enclosure', specs: 'IP67 • Anti-humidity • 2.5/3.5"', icon: '📦', status: 'In Stock' },
                    { label: 'SMART Monitor', specs: 'Real-time • Multi-drive • Alerts', icon: '📊', status: 'In Stock' },
                    { label: 'Write Blocker', specs: 'Forensic • Read-Only • Fast', icon: '🔒', status: 'Limited' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl p-4"
                      style={{ backgroundColor: 'rgba(21, 101, 192, 0.08)', border: '1px solid rgba(33, 150, 243, 0.15)' }}
                    >
                      <span className="text-3xl block mb-3">{item.icon}</span>
                      <h4 className="text-sm font-semibold text-white mb-1">{item.label}</h4>
                      <p className="text-xs mb-2" style={{ color: '#64748b' }}>{item.specs}</p>
                      <span
                        className="text-xs font-medium px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: item.status === 'In Stock' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                          color: item.status === 'In Stock' ? '#34d399' : '#f59e0b',
                        }}
                      >
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Support */}
      <section className="section-navy py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="badge badge-blue mb-4">Training & Support</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Professional Certification Programs
            </h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: '#64748b' }}>
              Industry-recognized training from beginner to advanced levels. Certify your team and gain hands-on expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                level: 'Beginner',
                badge: 'Foundation',
                color: '#42a5f5',
                courses: ['Storage Fundamentals', 'File Systems Overview', 'Recovery Basics', 'Data Triage'],
                duration: '2 weeks',
              },
              {
                level: 'Advanced',
                badge: 'Professional',
                color: '#2196f3',
                courses: ['SSD Recovery', 'RAID Recovery', 'CCTV Recovery', 'Flash Media Recovery'],
                duration: '4 weeks',
                featured: true,
              },
              {
                level: 'Expert',
                badge: 'Certification',
                color: '#1565c0',
                courses: ['Forensic Investigation', 'Court-Ready Reports', 'Lab Management', 'Advanced Imaging'],
                duration: '6 weeks',
              },
            ].map((course) => (
              <div
                key={course.level}
                className={`silver-card rounded-2xl p-6 ${course.featured ? 'ring-2' : ''}`}
                style={course.featured ? { ['--tw-ring-color' as string]: 'rgba(33, 150, 243, 0.4)' } : {}}
              >
                {course.featured && (
                  <div
                    className="text-xs font-bold uppercase tracking-wider text-center py-1.5 rounded-full mb-4"
                    style={{ backgroundColor: 'rgba(21, 101, 192, 0.2)', color: '#90caf9' }}
                  >
                    Most Popular
                  </div>
                )}
                <div
                  className="inline-block badge mb-4"
                  style={{ backgroundColor: `${course.color}20`, color: course.color, borderColor: `${course.color}30` }}
                >
                  {course.badge}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{course.level}</h3>
                <p className="text-xs mb-4" style={{ color: '#64748b' }}>Duration: {course.duration}</p>
                <ul className="space-y-2 mb-6">
                  {course.courses.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm" style={{ color: '#94a3b8' }}>
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: course.color }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {c}
                    </li>
                  ))}
                </ul>
                <Link href="/training-support" className="btn-outline w-full text-sm text-center block">
                  View Curriculum
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/training-support#support" className="btn-primary inline-flex items-center gap-2 text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Get Technical Support
            </Link>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="section-dark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-12 gap-4">
            <div>
              <span className="badge badge-silver mb-3">Knowledge Base</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Latest from the Blog</h2>
            </div>
            <Link
              href="/blog"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium transition-colors"
              style={{ color: '#42a5f5' }}
            >
              View All Posts
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="silver-card rounded-2xl overflow-hidden group"
              >
                <div
                  className="h-36 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(21, 101, 192, 0.2) 0%, rgba(13, 71, 161, 0.1) 100%)' }}
                >
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'rgba(66, 165, 245, 0.5)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold" style={{ color: '#42a5f5' }}>{post.category}</span>
                  <h3 className="text-sm font-semibold text-white mt-2 mb-3 leading-snug group-hover:text-blue-300 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs" style={{ color: '#475569' }}>
                    <span>{post.date}</span>
                    <span>{post.readTime} read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-navy py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <span className="badge badge-blue mb-4">Newsletter</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
            Stay Updated
          </h2>
          <p className="mb-8 text-lg" style={{ color: '#64748b' }}>
            Get the latest data recovery tips, product updates, and technical guides delivered to your inbox.
          </p>
          {subscribed ? (
            <div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
              style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#34d399' }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              You&apos;re subscribed! Welcome aboard.
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 text-sm px-5 py-3 rounded-full outline-none"
                style={{
                  backgroundColor: 'rgba(13, 31, 60, 0.8)',
                  border: '1px solid rgba(30, 58, 95, 0.8)',
                  color: '#e2e8f0',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(33, 150, 243, 0.5)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(30, 58, 95, 0.8)')}
              />
              <button
                onClick={() => email && setSubscribed(true)}
                className="btn-primary text-sm px-6 py-3 whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-20"
        style={{
          background: 'linear-gradient(135deg, rgba(21, 101, 192, 0.2) 0%, rgba(13, 31, 60, 0.4) 50%, rgba(6, 15, 31, 0.6) 100%)',
          borderTop: '1px solid rgba(30, 58, 95, 0.6)',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Recover Your Critical Data?
          </h2>
          <p className="mb-8 text-lg" style={{ color: '#64748b' }}>
            Speak with our data recovery experts today. Enterprise pricing available for labs and agencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/data-recovery-tools" className="btn-primary inline-flex items-center justify-center gap-2 text-base">
              Explore Products
            </Link>
            <Link href="/contact" className="btn-outline inline-flex items-center justify-center gap-2 text-base">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
