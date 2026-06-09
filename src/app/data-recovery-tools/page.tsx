import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Data Recovery Tools — Logical, CCTV, USB-SATA & SD Recovery | Data Genius',
  description: 'Professional data recovery tools including logical recovery software, CCTV DVR/NVR recovery, USB to SATA adapters, and SD/microSD card recovery resources.',
};

const tools = [
  {
    id: 'logical',
    title: 'Logical Data Recovery',
    badge: 'Software',
    badgeColor: '#2196f3',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    description: 'Advanced software and techniques for recovering deleted, formatted, and corrupted data from storage devices including HDDs, SSDs, flash drives, and optical media.',
    specs: [
      { label: 'Supported File Systems', value: 'NTFS, FAT32, exFAT, EXT2/3/4, APFS, HFS+' },
      { label: 'Recovery Scenarios', value: 'Deleted, Formatted, Corrupted, RAW' },
      { label: 'Storage Devices', value: 'HDD, SSD, USB, NVMe, Optical' },
      { label: 'OS Compatibility', value: 'Windows 10/11, macOS, Linux' },
      { label: 'Max Drive Size', value: 'Up to 64TB' },
      { label: 'File Formats', value: '1000+ supported' },
    ],
    features: ['Deep scan algorithm', 'Preview before recovery', 'Sector-by-sector imaging', 'RAID reconstruction', 'Batch recovery mode', 'Forensic acquisition'],
  },
  {
    id: 'cctv',
    title: 'CCTV Data Recovery',
    badge: 'Surveillance',
    badgeColor: '#7c3aed',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    description: 'Specialized recovery solutions for DVR, NVR, and CCTV surveillance systems. Extract video evidence from Hikvision, Dahua, CP Plus, Axis, Bosch, and 200+ other brands.',
    specs: [
      { label: 'Supported Brands', value: 'Hikvision, Dahua, CP Plus, Axis, Bosch, Hanwha' },
      { label: 'File Systems', value: 'DHFS, HIKVISION FS, EXT4, XFS' },
      { label: 'Video Formats', value: 'H.264, H.265, MJPEG, MPEG-4' },
      { label: 'Recovery Type', value: 'DVR, NVR, IP Camera, Analog' },
      { label: 'Output Formats', value: 'AVI, MP4, MKV, MOV' },
      { label: 'Evidence Mode', value: 'Chain-of-custody compliant' },
    ],
    features: ['200+ DVR/NVR brands', 'Timestamp preservation', 'Frame-by-frame extraction', 'Evidence export', 'Proprietary FS support', 'Court-ready output'],
  },
  {
    id: 'usb-sata',
    title: 'USB to SATA Adapter',
    badge: 'Hardware',
    badgeColor: '#059669',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    description: 'Professional-grade USB to SATA adapters for connecting SATA drives through USB interfaces. Designed for diagnostics, imaging, and data recovery operations in lab and field environments.',
    specs: [
      { label: 'Interface', value: 'USB 3.2 Gen 2 (10Gbps)' },
      { label: 'SATA Compatibility', value: 'SATA I, II, III (1.5/3/6 Gbps)' },
      { label: 'Drive Support', value: '2.5" and 3.5" HDD/SSD' },
      { label: 'Power Supply', value: '12V/5V included adapter' },
      { label: 'Write Block', value: 'Optional hardware write blocker' },
      { label: 'Certifications', value: 'CE, FCC, RoHS' },
    ],
    features: ['Hot-swap capable', 'UASP protocol support', 'LED activity indicator', 'Write protect switch', 'Driver-free operation', 'Forensic write blocking'],
  },
  {
    id: 'sd-pinouts',
    title: 'SD / microSD Card Pinouts',
    badge: 'Reference',
    badgeColor: '#d97706',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V9l-6-6zM9 3v6h6M9 3l6 6" />
      </svg>
    ),
    description: 'Comprehensive technical reference guides, pinout diagrams, and recovery resources for damaged SD and microSD storage media. Essential toolkit for card-level data recovery specialists.',
    specs: [
      { label: 'Card Standards', value: 'SD, SDHC, SDXC, microSD, microSDHC' },
      { label: 'Speed Classes', value: 'Class 2/4/6/10, UHS-I/II/III, A1/A2' },
      { label: 'Pinout Diagrams', value: 'Full pin mapping with voltages' },
      { label: 'Recovery Methods', value: 'Direct NAND reading, chip-off' },
      { label: 'Controller Support', value: 'Phison, Silicon Motion, Sandisk' },
      { label: 'Format Coverage', value: 'FAT16, FAT32, exFAT' },
    ],
    features: ['Detailed pin diagrams', 'Voltage specifications', 'Recovery flowcharts', 'Chip-off guides', 'NAND reading procedures', 'Controller bypass methods'],
  },
];

export default function DataRecoveryToolsPage() {
  return (
    <div style={{ backgroundColor: '#060f1f' }}>
      {/* Hero */}
      <section
        className="py-20"
        style={{
          background: 'linear-gradient(180deg, rgba(21, 101, 192, 0.15) 0%, rgba(6, 15, 31, 0) 100%)',
          borderBottom: '1px solid rgba(30, 58, 95, 0.6)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: 'rgba(21, 101, 192, 0.15)', border: '1px solid rgba(33, 150, 243, 0.25)', color: '#90caf9' }}
          >
            Data Recovery Tools
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Professional Data Recovery Solutions
          </h1>
          <p className="text-lg max-w-3xl mx-auto mb-8" style={{ color: '#94a3b8' }}>
            Industry-grade tools and resources for data recovery specialists, forensic investigators, and enterprise IT teams. Covering logical recovery, CCTV systems, hardware adapters, and memory card recovery.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {['Logical Recovery', 'CCTV & DVR', 'USB-SATA', 'SD/microSD'].map((tag) => (
              <span
                key={tag}
                className="text-sm px-4 py-2 rounded-full"
                style={{
                  backgroundColor: 'rgba(13, 31, 60, 0.8)',
                  border: '1px solid rgba(30, 58, 95, 0.8)',
                  color: '#64748b',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-16">
            {tools.map((tool, idx) => (
              <div
                key={tool.id}
                id={tool.id}
                className="scroll-mt-24 rounded-3xl p-8 lg:p-12"
                style={{
                  background: 'linear-gradient(135deg, rgba(13, 31, 60, 0.8) 0%, rgba(10, 22, 40, 0.9) 100%)',
                  border: '1px solid rgba(30, 58, 95, 0.8)',
                }}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-start ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Content */}
                  <div className={idx % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${tool.badgeColor}15`, color: tool.badgeColor, border: `1px solid ${tool.badgeColor}25` }}
                      >
                        {tool.icon}
                      </div>
                      <div>
                        <span
                          className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2 inline-block"
                          style={{ backgroundColor: `${tool.badgeColor}15`, color: tool.badgeColor, border: `1px solid ${tool.badgeColor}25` }}
                        >
                          {tool.badge}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">{tool.title}</h2>
                      </div>
                    </div>

                    <p className="text-base mb-8 leading-relaxed" style={{ color: '#94a3b8' }}>{tool.description}</p>

                    {/* Key Features */}
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#64748b' }}>Key Features</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {tool.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm" style={{ color: '#94a3b8' }}>
                            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: tool.badgeColor }}>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
                        style={{
                          background: `linear-gradient(135deg, ${tool.badgeColor} 0%, ${tool.badgeColor}cc 100%)`,
                          color: 'white',
                          boxShadow: `0 4px 14px ${tool.badgeColor}40`,
                        }}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Learn More
                      </Link>
                      <button
                        className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
                        style={{
                          backgroundColor: 'rgba(13, 31, 60, 0.8)',
                          border: '1px solid rgba(30, 58, 95, 0.8)',
                          color: '#94a3b8',
                        }}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Datasheet
                      </button>
                    </div>
                  </div>

                  {/* Specs */}
                  <div className={idx % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div
                      className="rounded-2xl p-6"
                      style={{ backgroundColor: 'rgba(6, 15, 31, 0.6)', border: '1px solid rgba(30, 58, 95, 0.6)' }}
                    >
                      <h3 className="text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: '#64748b' }}>
                        Technical Specifications
                      </h3>
                      <div className="space-y-4">
                        {tool.specs.map((spec) => (
                          <div key={spec.label} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 pb-4" style={{ borderBottom: '1px solid rgba(30, 58, 95, 0.5)' }}>
                            <span className="text-sm font-medium flex-shrink-0" style={{ color: '#64748b', minWidth: '160px' }}>
                              {spec.label}
                            </span>
                            <span className="text-sm text-right" style={{ color: '#e2e8f0' }}>{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{
          background: 'linear-gradient(135deg, rgba(21, 101, 192, 0.15) 0%, rgba(6, 15, 31, 0) 100%)',
          borderTop: '1px solid rgba(30, 58, 95, 0.6)',
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
          <p className="mb-8 text-lg" style={{ color: '#64748b' }}>
            Our engineers work with law enforcement, forensic labs, and enterprises to develop tailored data recovery workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-full transition-all"
              style={{
                background: 'linear-gradient(135deg, #1565c0 0%, #1976d2 100%)',
                color: 'white',
                boxShadow: '0 4px 14px rgba(21, 101, 192, 0.4)',
              }}
            >
              Contact Our Engineers
            </Link>
            <Link
              href="/training-support"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-full transition-all"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid rgba(33, 150, 243, 0.4)',
                color: '#90caf9',
              }}
            >
              View Training Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
