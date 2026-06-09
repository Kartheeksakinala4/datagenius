'use client';

import Link from 'next/link';

const products = [
  {
    id: 'docking',
    title: 'Docking Station',
    subtitle: 'DG-DOCK Pro 4',
    badge: 'Multi-Drive',
    badgeColor: '#2196f3',
    rating: 4.9,
    reviews: 187,
    price: 'Request Quote',
    icon: '🖥️',
    description: 'Professional multi-drive docking station supporting simultaneous SATA and IDE drives. Built for intensive recovery environments with high-speed transfer and comprehensive compatibility.',
    images: [
      { label: 'Front View', desc: 'Dual-bay hot-swap interface with LED indicators' },
      { label: 'Rear Panel', desc: 'USB 3.2 Gen 2 & eSATA connectivity' },
      { label: 'Internal', desc: 'Active cooling with dust filter' },
    ],
    features: [
      { icon: '⚡', title: 'Multi-Drive Support', desc: 'Up to 4 drives simultaneously — mix SATA and IDE without adapters' },
      { icon: '🔗', title: 'SATA/IDE Compatible', desc: '2.5" & 3.5" SATA I/II/III and 44-pin / 40-pin IDE support' },
      { icon: '🚀', title: 'High-Speed Transfer', desc: 'USB 3.2 Gen 2 (10Gbps) and eSATA 6Gbps interfaces' },
      { icon: '🌡️', title: 'Active Cooling', desc: 'Temperature-regulated fan with SMART thermal monitoring' },
      { icon: '🔒', title: 'Write Block Mode', desc: 'Hardware-level write protection for forensic use' },
      { icon: '💡', title: 'LED Activity Panel', desc: 'Per-bay power, access and error LED indicators' },
    ],
    specs: [
      { label: 'Drive Bays', value: '4 (2×3.5" SATA + 1×2.5" SATA + 1×IDE)' },
      { label: 'Interface (Host)', value: 'USB 3.2 Gen 2, eSATA 6Gbps' },
      { label: 'Transfer Speed', value: 'Up to 10 Gbps (USB), 6 Gbps (eSATA)' },
      { label: 'Power Supply', value: 'External 12V/5A adapter (included)' },
      { label: 'OS Support', value: 'Windows, macOS, Linux (driver-free)' },
      { label: 'Dimensions', value: '180 × 120 × 75 mm' },
      { label: 'Weight', value: '650 g' },
      { label: 'Certifications', value: 'CE, FCC, RoHS, WEEE' },
    ],
  },
  {
    id: 'enclosures',
    title: 'Moisture-Free Hardware Enclosure',
    subtitle: 'DG-SAFE Pro Series',
    badge: 'IP67 Rated',
    badgeColor: '#059669',
    rating: 4.8,
    reviews: 134,
    price: 'Request Quote',
    icon: '📦',
    description: 'Military-grade moisture-free hardware enclosure designed to protect sensitive recovery media and drives from humidity, dust, and static. Essential for evidence storage and media transport.',
    images: [
      { label: 'External Shell', desc: 'IP67-rated ABS composite casing' },
      { label: 'Interior', desc: 'Anti-static foam lining with drive cradles' },
      { label: 'Seal System', desc: 'Double O-ring perimeter seal' },
    ],
    features: [
      { icon: '💧', title: 'Anti-Humidity Design', desc: 'IP67 rated — fully dust-tight and water-resistant up to 1m depth' },
      { icon: '🔐', title: 'Secure Locking', desc: 'Dual-latch stainless steel locks with optional padlock loop' },
      { icon: '🛡️', title: 'ESD Protection', desc: 'Anti-static interior foam prevents electrostatic discharge damage' },
      { icon: '🌡️', title: 'Temperature Stable', desc: 'Operates -20°C to +60°C storage range' },
      { icon: '📏', title: 'Multiple Sizes', desc: 'Available in 2.5", 3.5" and multi-drive configurations' },
      { icon: '🏷️', title: 'Evidence Labeling', desc: 'Built-in evidence label panel with tamper-evident seal' },
    ],
    specs: [
      { label: 'Protection Rating', value: 'IP67 (dust-tight, 1m immersion)' },
      { label: 'Interior Material', value: 'Anti-static conductive foam' },
      { label: 'Shell Material', value: 'Impact-resistant ABS composite' },
      { label: 'Temperature Range', value: '-20°C to +60°C storage' },
      { label: 'Humidity Resistance', value: '0–95% RH non-condensing' },
      { label: 'Lock Type', value: 'Dual stainless steel latches' },
      { label: 'Available Sizes', value: '2.5" Single, 3.5" Single, 8-Bay Multi' },
      { label: 'Certifications', value: 'IEC 60529, MIL-STD-810G' },
    ],
  },
  {
    id: 'monitors',
    title: 'Hardware Monitors',
    subtitle: 'DG-MONITOR SMART 8',
    badge: 'Real-Time',
    badgeColor: '#d97706',
    rating: 4.9,
    reviews: 98,
    price: 'Request Quote',
    icon: '📊',
    description: 'Professional hardware monitoring system providing real-time disk health analysis, SMART attribute tracking, and predictive failure alerts for multi-drive recovery environments.',
    images: [
      { label: 'Dashboard View', desc: 'Color-coded health status for up to 8 drives' },
      { label: 'SMART Panel', desc: 'Real-time attribute graphs and thresholds' },
      { label: 'Alert System', desc: 'LED + audio + email alert capabilities' },
    ],
    features: [
      { icon: '🩺', title: 'Disk Health Monitoring', desc: 'Continuous health monitoring with color-coded status for up to 8 drives' },
      { icon: '📈', title: 'SMART Analysis', desc: 'Full SMART attribute monitoring with historical trending and threshold alerts' },
      { icon: '⚡', title: 'Real-Time Diagnostics', desc: 'Live read/write speed, error rate tracking, and temperature graphs' },
      { icon: '🔔', title: 'Predictive Alerts', desc: 'AI-based failure prediction with 72-hour advance warning' },
      { icon: '📊', title: 'Detailed Reports', desc: 'Export detailed health reports in PDF, CSV, and JSON formats' },
      { icon: '🌐', title: 'Network Monitoring', desc: 'Remote monitoring via LAN/WAN with web dashboard access' },
    ],
    specs: [
      { label: 'Drive Capacity', value: 'Up to 8 drives simultaneously' },
      { label: 'Interface', value: 'USB 3.0, eSATA, SATA (internal)' },
      { label: 'SMART Attributes', value: 'All 62 standard + vendor-specific' },
      { label: 'Polling Interval', value: 'Configurable: 1s to 60 min' },
      { label: 'Alert Methods', value: 'LED, buzzer, email, SNMP, Webhook' },
      { label: 'Display', value: '3.5" color TFT LCD (optional)' },
      { label: 'Power', value: '5V USB or 12V DC adapter' },
      { label: 'OS Support', value: 'Windows, macOS, Linux, web browser' },
    ],
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className="w-4 h-4" fill={star <= Math.floor(rating) ? '#f59e0b' : 'none'} viewBox="0 0 20 20" stroke="#f59e0b" strokeWidth="1">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function HardwareProductsPage() {
  return (
    <div style={{ backgroundColor: '#060f1f' }}>
      {/* Hero */}
      <section
        className="py-20"
        style={{
          background: 'linear-gradient(180deg, rgba(21, 101, 192, 0.12) 0%, rgba(6, 15, 31, 0) 100%)',
          borderBottom: '1px solid rgba(30, 58, 95, 0.6)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: 'rgba(21, 101, 192, 0.15)', border: '1px solid rgba(33, 150, 243, 0.25)', color: '#90caf9' }}
          >
            Hardware Products
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Professional Recovery Hardware
          </h1>
          <p className="text-lg max-w-3xl mx-auto mb-8" style={{ color: '#94a3b8' }}>
            Purpose-built hardware for data recovery professionals. From multi-drive docking stations to forensic-grade enclosures and intelligent monitoring systems.
          </p>

          {/* Quick nav */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {products.map((product) => (
              <a
                key={product.id}
                href={`#${product.id}`}
                className="flex items-center gap-2 text-sm px-4 py-2 rounded-full transition-all"
                style={{
                  backgroundColor: 'rgba(13, 31, 60, 0.8)',
                  border: '1px solid rgba(30, 58, 95, 0.8)',
                  color: '#64748b',
                }}
              >
                <span>{product.icon}</span>
                {product.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
          {products.map((product) => (
            <div
              key={product.id}
              id={product.id}
              className="scroll-mt-24"
            >
              {/* Product header */}
              <div
                className="rounded-3xl p-8 lg:p-12"
                style={{
                  background: 'linear-gradient(135deg, rgba(13, 31, 60, 0.85) 0%, rgba(10, 22, 40, 0.9) 100%)',
                  border: '1px solid rgba(30, 58, 95, 0.8)',
                }}
              >
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left — Info */}
                  <div>
                    {/* Title row */}
                    <div className="flex items-start gap-4 mb-6">
                      <span className="text-5xl">{product.icon}</span>
                      <div>
                        <span
                          className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-2"
                          style={{ backgroundColor: `${product.badgeColor}15`, color: product.badgeColor, border: `1px solid ${product.badgeColor}30` }}
                        >
                          {product.badge}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">{product.title}</h2>
                        <p className="text-sm font-mono" style={{ color: '#64748b' }}>{product.subtitle}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <StarRating rating={product.rating} />
                          <span className="text-sm font-bold text-white">{product.rating}</span>
                          <span className="text-xs" style={{ color: '#64748b' }}>({product.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-base mb-8 leading-relaxed" style={{ color: '#94a3b8' }}>{product.description}</p>

                    {/* Image gallery mockup */}
                    <div className="grid grid-cols-3 gap-3 mb-8">
                      {product.images.map((img) => (
                        <div
                          key={img.label}
                          className="rounded-xl p-3 cursor-pointer transition-all"
                          style={{
                            backgroundColor: 'rgba(6, 15, 31, 0.6)',
                            border: '1px solid rgba(30, 58, 95, 0.6)',
                          }}
                          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = `${product.badgeColor}40`)}
                          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(30, 58, 95, 0.6)')}
                        >
                          <div
                            className="h-12 rounded-lg flex items-center justify-center mb-2"
                            style={{ backgroundColor: `${product.badgeColor}10` }}
                          >
                            <span className="text-xl">{product.icon}</span>
                          </div>
                          <p className="text-xs font-semibold text-white mb-0.5">{img.label}</p>
                          <p className="text-xs leading-tight" style={{ color: '#475569' }}>{img.desc}</p>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full transition-all"
                        style={{
                          background: `linear-gradient(135deg, ${product.badgeColor} 0%, ${product.badgeColor}cc 100%)`,
                          color: 'white',
                          boxShadow: `0 4px 14px ${product.badgeColor}30`,
                        }}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Request Quote
                      </Link>
                      <button
                        className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full transition-all"
                        style={{
                          backgroundColor: 'transparent',
                          border: '1px solid rgba(33, 150, 243, 0.3)',
                          color: '#90caf9',
                        }}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Datasheet
                      </button>
                    </div>
                  </div>

                  {/* Right — Specs & Features */}
                  <div className="space-y-6">
                    {/* Key features */}
                    <div
                      className="rounded-2xl p-6"
                      style={{ backgroundColor: 'rgba(6, 15, 31, 0.5)', border: '1px solid rgba(30, 58, 95, 0.5)' }}
                    >
                      <h3 className="text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: '#64748b' }}>Key Features</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {product.features.map((feature) => (
                          <div key={feature.title} className="flex items-start gap-3">
                            <span className="text-xl flex-shrink-0">{feature.icon}</span>
                            <div>
                              <p className="text-sm font-semibold text-white mb-0.5">{feature.title}</p>
                              <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{feature.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specifications */}
                    <div
                      className="rounded-2xl p-6"
                      style={{ backgroundColor: 'rgba(6, 15, 31, 0.5)', border: '1px solid rgba(30, 58, 95, 0.5)' }}
                    >
                      <h3 className="text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: '#64748b' }}>Specifications</h3>
                      <div className="space-y-3">
                        {product.specs.map((spec) => (
                          <div key={spec.label} className="flex items-start justify-between gap-3 pb-3" style={{ borderBottom: '1px solid rgba(30, 58, 95, 0.4)' }}>
                            <span className="text-sm flex-shrink-0" style={{ color: '#64748b', minWidth: '130px' }}>{spec.label}</span>
                            <span className="text-sm text-right" style={{ color: '#e2e8f0' }}>{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{
          background: 'linear-gradient(135deg, rgba(21, 101, 192, 0.12) 0%, rgba(6, 15, 31, 0) 100%)',
          borderTop: '1px solid rgba(30, 58, 95, 0.6)',
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Volume & Enterprise Pricing</h2>
          <p className="text-lg mb-8" style={{ color: '#64748b' }}>
            Special pricing available for recovery labs, law enforcement agencies, and enterprise customers. Contact our sales team for a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #1565c0 0%, #1976d2 100%)',
                color: 'white',
                boxShadow: '0 4px 14px rgba(21, 101, 192, 0.4)',
              }}
            >
              Request Enterprise Quote
            </Link>
            <Link
              href="/data-recovery-tools"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-full"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid rgba(33, 150, 243, 0.3)',
                color: '#90caf9',
              }}
            >
              View Recovery Software
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
