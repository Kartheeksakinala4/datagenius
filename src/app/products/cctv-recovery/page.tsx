import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CCTV Recovery — Recover DVR/NVR Footage | DataGenius',
  description: 'Recover surveillance footage from dead DVR/NVR systems. Supports Hikvision, Dahua, CP Plus, Swann, and more. India\'s only affordable CCTV recovery tool.',
  openGraph: {
    title: 'CCTV Footage Recovery — DataGenius',
    description: 'Recover surveillance footage from dead or damaged DVR/NVR systems.',
    url: 'https://datagenius.in/products/cctv-recovery',
    siteName: 'DataGenius',
    type: 'website',
  },
};

const supportedSystems = [
  'Hikvision DVR/NVR', 'Dahua DVR/NVR', 'CP Plus', 'Swann', 'Q-See', 'Uniview (UNV)',
  'Reolink', 'Annke', 'Lorex', 'Samsung Wisenet', 'Bosch', 'Axis',
  'Vivotek', 'Amcrest', 'Hanwha', 'Pelco',
];

const useCases = [
  { icon: '🔍', title: 'Crime Scene Investigation', desc: 'Law enforcement and security professionals recovering critical footage from damaged or overwritten DVRs after incidents.' },
  { icon: '🏢', title: 'Business Incidents', desc: 'Recovering footage of theft, accidents, or HR incidents from DVRs that malfunctioned at critical moments.' },
  { icon: '🏠', title: 'Home Security', desc: 'Recovering home surveillance footage after a break-in when the DVR itself was damaged or stolen.' },
  { icon: '⚠️', title: 'Disaster Recovery', desc: 'Recovering CCTV data after floods, fires, or power surges that damaged the recording equipment.' },
];

export default function CCTVRecoveryPage() {
  return (
    <div>
      <section className="hero-mesh-bg py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-red-400 text-sm font-semibold">📹 CCTV Module Add-on</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Recover Surveillance Footage from{' '}
            <span className="gradient-text">Dead DVR/NVR Systems</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            The only affordable tool that understands proprietary CCTV file systems. Recover Hikvision, Dahua, CP Plus footage when standard recovery tools fail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold text-lg px-8 py-4 rounded-full transition-all">
              Get CCTV Module — ₹2,999
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all hover:bg-white/5">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Why CCTV is different */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Why CCTV Recovery Is Different</h2>
        <div className="glass-card rounded-2xl p-8 mt-8">
          <p className="text-slate-300 leading-relaxed mb-4">
            Standard data recovery tools fail on CCTV drives because DVR/NVR systems use <strong className="text-white">proprietary file systems</strong> — not the standard NTFS or FAT32 that consumer tools understand.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Hikvision uses the <strong className="text-white">HIKFS file system</strong>. Dahua uses a custom format. CP Plus and others have their own proprietary storage structures. These systems are intentionally undocumented to protect intellectual property.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            DataGenius CCTV Module includes reverse-engineered decoders for 16+ major CCTV brands. It can read the proprietary file system, reconstruct the recording timeline, and export footage to standard MP4/AVI format that plays in any media player.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Professional forensic labs charge ₹15,000–₹50,000 for this service. Our tool puts the same capability in your hands for ₹2,999 as an add-on to DataGenius Data Recovery.
          </p>
        </div>
      </section>

      {/* Supported Systems */}
      <section className="bg-surface-card border-y border-surface-border py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Supported CCTV Systems</h2>
          <p className="text-slate-400 text-center mb-12">16+ major brands supported with dedicated recovery engines</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {supportedSystems.map((s) => (
              <div key={s} className="glass-card rounded-xl px-4 py-3 text-center text-sm text-slate-300 hover:text-white transition-colors">
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Common Use Cases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {useCases.map((uc) => (
            <div key={uc.title} className="glass-card rounded-2xl p-6 flex gap-4">
              <span className="text-3xl flex-shrink-0">{uc.icon}</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{uc.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{uc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="bg-gradient-to-r from-primary/30 to-accent/20 border-y border-surface-border py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">CCTV Recovery Module</h2>
          <div className="text-5xl font-bold gradient-text mb-4">₹2,999</div>
          <p className="text-slate-400 mb-2">One-time purchase • Add-on to DataGenius Data Recovery</p>
          <p className="text-slate-500 text-sm mb-8">Requires DataGenius Data Recovery Pro (₹2,999) — or get the bundle for ₹4,999</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold text-lg px-8 py-4 rounded-full transition-all">
              Buy CCTV Module — ₹2,999
            </Link>
            <Link href="/pricing" className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all hover:bg-white/5">
              View Bundle Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
