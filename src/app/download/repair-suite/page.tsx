import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Download DataGenius Repair Suite — Fix Corrupted Files Free',
  description: 'Download DataGenius Repair Suite free. Repair corrupted photos, videos, documents, and archives. Preview repaired files before purchasing. Windows 10/11.',
};

export default function DownloadRepairSuitePage() {
  return (
    <div className="min-h-screen bg-surface-dark">
      <section className="relative overflow-hidden border-b border-surface-border py-20 px-4">
        <div className="absolute inset-0 hero-mesh-bg opacity-40" />
        <div className="relative max-w-5xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <span className="inline-block bg-accent/10 text-accent rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-4">Free Download</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">DataGenius Repair Suite</h1>
              <p className="text-slate-400 mb-6">Fix corrupted photos, videos, documents, and archives — all in one app. Preview repaired files for free before purchasing a licence.</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#download" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-7 py-4 rounded-full transition-all text-sm">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  Download Free — v1.4.0
                </a>
                <Link href="/pricing" className="inline-flex items-center justify-center border border-surface-border hover:border-primary/40 text-white text-sm font-medium px-6 py-4 rounded-full transition-all">
                  View Plans from ₹1,999 →
                </Link>
              </div>
              <p className="text-xs text-slate-500">Windows 10 / 11 · 64-bit · v1.4.0 · 62 MB</p>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="glass-card rounded-2xl p-6">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Supported File Types</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { type: 'Photos', formats: 'JPEG, PNG, TIFF, BMP, CR2, NEF, ARW, DNG + 40 more RAW formats' },
                    { type: 'Videos', formats: 'MP4, MOV, AVI, MKV, MTS, 3GP, FLV, WEBM, M4V, WMV, MPEG' },
                    { type: 'Documents', formats: 'PDF, DOCX, XLSX, PPTX, PST/OST, MDB/ACCDB, SQL databases' },
                    { type: 'Archives', formats: 'ZIP, RAR, 7Z, TAR, GZ' },
                  ].map((item) => (
                    <div key={item.type} className="bg-surface-dark rounded-xl p-3">
                      <p className="text-xs font-bold text-white mb-1">{item.type}</p>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.formats}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="py-14 px-4 border-b border-surface-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-10">Download Options</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              { name: 'Windows Installer', size: '62 MB', desc: 'Full installer with context menu integration. Recommended for most users.', icon: '🖥️' },
              { name: 'Portable Version', size: '65 MB', desc: 'No installation needed. Run directly from USB or any folder.', icon: '💾' },
            ].map((v) => (
              <div key={v.name} className="glass-card rounded-2xl p-6">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-white mb-1">{v.name}</h3>
                <p className="text-slate-500 text-xs mb-3">Size: {v.size} · Windows 10/11 · 64-bit</p>
                <p className="text-slate-400 text-xs leading-relaxed mb-5">{v.desc}</p>
                <button className="w-full bg-accent hover:bg-accent-dark text-white text-sm font-semibold py-2.5 rounded-full transition-all">Download</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Changelog</h2>
          <div className="space-y-5">
            {[
              { version: '1.4.0', date: 'Feb 2026', changes: ['Added batch repair for photos (up to 1000 files at once)', 'Support for 12 new Sony ARW camera models', 'Improved MP4 stream reconstruction algorithm', 'New progress dashboard with ETA display'], latest: true },
              { version: '1.3.0', date: 'Nov 2025', changes: ['Added PDF repair module', 'Microsoft PST/OST email repair', 'Drag-and-drop file import', 'Dark mode UI'], latest: false },
            ].map((v) => (
              <div key={v.version} className="glass-card rounded-2xl p-6">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="font-bold text-white">v{v.version}</span>
                  <span className="text-xs bg-primary/10 text-primary-light rounded-full px-2 py-0.5">{v.date}</span>
                  {v.latest && <span className="text-xs bg-accent/10 text-accent rounded-full px-2 py-0.5">Latest</span>}
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
