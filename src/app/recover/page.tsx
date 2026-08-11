import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Data Recovery Services — DataGenius',
  description: 'Professional data recovery for hard drives, SSDs, NVMe, RAID arrays, mobile devices, and more. No data, no charge. Free diagnosis in Hyderabad.',
};

const services = [
  {
    id: 'hdd',
    icon: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
    title: 'Hard Drive Recovery',
    subtitle: 'HDD & Mechanical Drives',
    desc: 'Clicking, grinding, or undetected drives. We recover from physical damage, bad sectors, corrupted file systems, and accidental formatting.',
    tags: ['Seagate', 'Western Digital', 'Toshiba', 'HGST', '2.5" & 3.5"'],
    success: '96%',
  },
  {
    id: 'ssd',
    icon: 'M12 3v1m0 16v1M4.22 4.22l.707.707M18.364 18.364l.707.707M1 12h1m20 0h1M4.22 19.778l.707-.707M18.364 5.636l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z',
    title: 'SSD & NVMe Recovery',
    subtitle: 'Flash Storage',
    desc: 'Failed firmware, wear-levelling issues, controller faults, and deleted partitions on SATA SSDs, M.2, and NVMe drives.',
    tags: ['Samsung', 'Kingston', 'Crucial', 'WD Blue/Black', 'Intel'],
    success: '91%',
  },
  {
    id: 'raid',
    icon: 'M5 12H3m18 0h-2M5.636 5.636L4.222 4.222m15.556 15.556l-1.414-1.414M12 5V3m0 18v-2m6.364-13.364l-1.414 1.414M5.636 18.364l-1.414 1.414',
    title: 'RAID & NAS Recovery',
    subtitle: 'Multi-Drive Arrays',
    desc: 'RAID 0, 1, 5, 6, 10 array failures. Synology, QNAP, Drobo, and custom NAS systems. We rebuild degraded arrays and restore all your files.',
    tags: ['RAID 0', 'RAID 5', 'RAID 6', 'RAID 10', 'Synology', 'QNAP'],
    success: '88%',
  },
  {
    id: 'mobile',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    title: 'Mobile Recovery',
    subtitle: 'Phones & Tablets',
    desc: 'Water damage, screen cracks, failed updates, and deleted contacts, photos, and messages from Android and iOS devices.',
    tags: ['Samsung Galaxy', 'OnePlus', 'Xiaomi', 'iPhone', 'iPad'],
    success: '82%',
  },
  {
    id: 'flash',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    title: 'USB & Flash Recovery',
    subtitle: 'Thumb Drives & Memory Cards',
    desc: 'Broken USB connectors, corrupt memory cards, and unrecognized flash drives. We recover photos, documents, and videos.',
    tags: ['SD Card', 'microSD', 'CF Card', 'USB 2.0/3.0', 'OTG Drives'],
    success: '85%',
  },
  {
    id: 'cctv',
    icon: 'M15 10l4.553-2.069A1 1 0 0121 8.867V15.133a1 1 0 01-1.447.902L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    title: 'CCTV & DVR Recovery',
    subtitle: 'Surveillance Footage',
    desc: 'Recover critical surveillance footage from DVRs, NVRs, and IP camera hard drives — even after overwriting begins.',
    tags: ['Hikvision', 'Dahua', 'CP Plus', 'Bosch', 'Hanwha'],
    success: '79%',
  },
];

const steps = [
  { n: '01', title: 'Free Diagnosis', desc: 'Bring or ship your drive. We assess the damage at no cost and provide a clear, upfront quote before any work begins.' },
  { n: '02', title: 'Lab Evaluation', desc: 'Our technicians inspect the drive in a clean environment and map out the recovery path.' },
  { n: '03', title: 'Data Recovery', desc: 'We use specialized hardware and software tools to extract and reconstruct your files safely.' },
  { n: '04', title: 'Verification', desc: 'You review a file list before we finalize. You only pay when you confirm your data is there.' },
  { n: '05', title: 'Secure Delivery', desc: 'Recovered data is delivered on a new drive or securely uploaded — your choice.' },
];

export default function RecoverPage() {
  return (
    <>
      <section className="bg-hero section-pad">
        <div className="container-xl">
          <div className="max-w-3xl">
            <span className="badge badge-blue mb-5">Data Recovery</span>
            <h1 className="display-1 text-ink-900 mb-6">
              Your lost data is{' '}
              <span className="gradient-text">probably recoverable.</span>
            </h1>
            <p className="lead mb-8">
              Whether your hard drive stopped spinning, your SSD disappeared, or you accidentally deleted years of photos — we can help. Free diagnosis, transparent pricing, and a no-data-no-charge guarantee.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Get Free Diagnosis
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
              <Link href="/contact" className="btn btn-outline btn-lg">Talk to an Expert</Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-blue-100">
              {[['96%','Max recovery rate'],['2–5 days','Avg. turnaround'],['₹0','Diagnosis cost'],['No data, no charge','Our guarantee']].map(([v,l]) => (
                <div key={l}>
                  <p className="text-2xl font-bold text-brand-800">{v}</p>
                  <p className="text-sm text-ink-400">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl">
          <div className="text-center mb-14">
            <h2 className="display-2 text-ink-900 mb-4">What we recover</h2>
            <p className="lead max-w-2xl mx-auto">Every device type is different. Our team has experience across all major storage technologies.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.id} id={s.id} className="card p-7">
                <div className="icon-box mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={s.icon}/>
                  </svg>
                </div>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-ink-900 text-lg">{s.title}</h3>
                    <p className="text-sm text-ink-400">{s.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-brand-700">{s.success}</p>
                    <p className="text-xs text-ink-400">success rate</p>
                  </div>
                </div>
                <p className="text-sm text-ink-500 leading-relaxed mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map(t => <span key={t} className="badge badge-blue text-xs">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-section-alt section-pad">
        <div className="container-xl">
          <div className="text-center mb-14">
            <h2 className="display-2 text-ink-900 mb-4">How recovery works</h2>
            <p className="lead max-w-xl mx-auto">Simple, transparent, and risk-free. You&apos;re in control at every step.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map(s => (
              <div key={s.n} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-brand-800 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">{s.n}</div>
                <h3 className="font-semibold text-ink-900 mb-2">{s.title}</h3>
                <p className="text-sm text-ink-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-deep section-pad">
        <div className="container-xl text-center">
          <h2 className="display-2 text-white mb-4">Don&apos;t wait — every hour matters</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">Continued use of a failing drive can permanently overwrite recoverable data. Contact us today for a free evaluation.</p>
          <Link href="/contact" className="btn btn-ghost btn-lg">Start Free Diagnosis</Link>
        </div>
      </section>
    </>
  );
}
