import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Download DataGenius Data Recovery — Free for Windows 10/11',
  description: 'Download DataGenius Data Recovery free. Recover deleted files, formatted drives, and lost data from HDDs, SSDs, USB drives, and SD cards. Windows 10/11 compatible.',
};

const changelog = [
  { version: '2.1.0', date: 'March 2026', changes: ['Added CP Plus DVR file system support', 'Improved SSD deep scan speed by 40%', 'Fixed APFS partition detection on M1 Mac drives via USB', 'New "Filter by file date" feature in results view'] },
  { version: '2.0.0', date: 'January 2026', changes: ['Complete UI redesign with dark mode', 'New CCTV/DVR Recovery module (Hikvision + Dahua)', 'Background scan with system tray indicator', 'Portable mode — run without installation'] },
  { version: '1.9.5', date: 'November 2025', changes: ['Added NVMe drive support', 'Improved NTFS journal recovery', 'Fixed hang on certain WD external drives', 'New bulk export feature'] },
];

export default function DownloadDataRecoveryPage() {
  return (
    <div className="min-h-screen bg-surface-dark">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-surface-border py-20 px-4">
        <div className="absolute inset-0 hero-mesh-bg opacity-40" />
        <div className="relative max-w-5xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <span className="inline-block bg-accent/10 text-accent rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-4">Free Download</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">DataGenius Data Recovery</h1>
              <p className="text-slate-400 mb-6">Recover deleted files, formatted drives, and lost data from any storage device. Scan and preview for free — only pay when you&apos;re ready to recover.</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#download" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-7 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-accent/20 text-sm">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  Download Free — v2.1.0
                </a>
                <Link href="/pricing" className="inline-flex items-center justify-center border border-surface-border hover:border-primary/40 text-white text-sm font-medium px-6 py-4 rounded-full transition-all">
                  View Pro Plans ₹2,999 →
                </Link>
              </div>
              <p className="text-xs text-slate-500">Windows 10 / 11 · 64-bit · v2.1.0 · 48 MB</p>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="glass-card rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="text-accent text-lg">✓</span> Free scan + file preview (no licence required)
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="text-accent text-lg">✓</span> No installation required (portable mode available)
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="text-accent text-lg">✓</span> 100% read-only — never writes to your source drive
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="text-accent text-lg">✓</span> Supports HDD, SSD, NVMe, USB, SD, CF cards
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="text-accent text-lg">✓</span> CCTV/DVR recovery module (Pro)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Options */}
      <section id="download" className="py-14 px-4 border-b border-surface-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-10">Choose Your Version</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { name: 'Windows Installer', os: 'Windows 10/11 · 64-bit', size: '48 MB', type: 'Recommended', icon: '🖥️', desc: 'Standard installer. Integrates with Windows context menu for right-click recovery.' },
              { name: 'Portable Version', os: 'Windows 10/11 · 64-bit', size: '51 MB', type: 'No installation', icon: '💾', desc: 'Run from a USB drive. No installation needed. Ideal for recovery scenarios where you can\'t install software.' },
              { name: 'Windows 7/8 Legacy', os: 'Windows 7/8 · 64-bit', size: '44 MB', type: 'Older systems', icon: '🕰️', desc: 'Legacy version for older Windows systems. Does not include CCTV module or NVMe support.' },
            ].map((v) => (
              <div key={v.name} className="glass-card rounded-2xl p-6">
                <div className="text-4xl mb-3">{v.icon}</div>
                <span className="text-xs bg-primary/10 text-primary-light rounded-full px-2 py-0.5 font-semibold">{v.type}</span>
                <h3 className="font-bold text-white mt-3 mb-1">{v.name}</h3>
                <p className="text-slate-400 text-xs mb-1">{v.os}</p>
                <p className="text-slate-500 text-xs mb-3">Size: {v.size}</p>
                <p className="text-slate-400 text-xs leading-relaxed mb-5">{v.desc}</p>
                <button className="w-full bg-accent hover:bg-accent-dark text-white text-sm font-semibold py-2.5 rounded-full transition-all">
                  Download
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8 glass-card rounded-xl p-5 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-500 space-y-1">
              <p>📋 MD5 Checksum (v2.1.0 Installer): <span className="font-mono text-slate-400">a4f3e8d2c1b9f7a6...</span></p>
              <p>🔏 SHA-256: <span className="font-mono text-slate-400">8b3c2e1f9a7d4b6c...</span></p>
            </div>
            <p className="text-xs text-slate-500">Last updated: March 1, 2026</p>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-14 px-4 border-b border-surface-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">System Requirements</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-4">Minimum</h3>
              <div className="space-y-3">
                {[['OS', 'Windows 10 (64-bit)'], ['CPU', 'Intel Core i3 / AMD Ryzen 3'], ['RAM', '4 GB'], ['Storage', '200 MB free space'], ['Display', '1280×720']].map(([k, v]) => (
                  <div key={String(k)} className="flex justify-between text-sm">
                    <span className="text-slate-500">{k}</span>
                    <span className="text-slate-300">{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-4">Recommended</h3>
              <div className="space-y-3">
                {[['OS', 'Windows 11 (64-bit)'], ['CPU', 'Intel Core i5 / AMD Ryzen 5 or better'], ['RAM', '8 GB or more'], ['Storage', '1 GB free space'], ['Display', '1920×1080 or higher']].map(([k, v]) => (
                  <div key={String(k)} className="flex justify-between text-sm">
                    <span className="text-slate-500">{k}</span>
                    <span className="text-slate-300">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Changelog */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Changelog</h2>
          <div className="space-y-5">
            {changelog.map((v) => (
              <div key={v.version} className="glass-card rounded-2xl p-6">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="font-bold text-white">v{v.version}</span>
                  <span className="text-xs bg-primary/10 text-primary-light rounded-full px-2 py-0.5">{v.date}</span>
                  {v.version === '2.1.0' && <span className="text-xs bg-accent/10 text-accent rounded-full px-2 py-0.5">Latest</span>}
                </div>
                <ul className="space-y-1.5">
                  {v.changes.map((c) => (
                    <li key={c} className="text-sm text-slate-400 flex items-start gap-2">
                      <span className="text-accent flex-shrink-0 mt-0.5">+</span>{c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
