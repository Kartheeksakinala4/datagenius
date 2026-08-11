'use client';
import { useState } from 'react';
import Link from 'next/link';

/* ─── SVG Icons ────────────────────────────────────────── */
const Icon = ({ d, size = 20 }: { d: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);
const ic = {
  hdd:     'M2 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6z M6 18h.01M10 18h.01',
  ssd:     'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
  raid:    'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
  mobile:  'M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z',
  cctv:    'M15 10l4.553-2.069A1 1 0 0121 8.82v6.362a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z',
  onsite:  'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  cloud:   'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
  m365:    'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z M4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z M16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
  enc:     'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  offline: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636',
  photo:   'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
  disc:    'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
  video:   'M15 10l4.553-2.069A1 1 0 0121 8.82v6.362a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z',
  vault:   'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4',
  migrate: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
  heart:   'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  check:   'M5 13l4 4L19 7',
  arrow:   'M17 8l4 4m0 0l-4 4m4-4H3',
  chevron: 'M19 9l-7 7-7-7',
  star:    'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
  shield:  'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  nas:     'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
  whatsapp:'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347',
};

/* ─── Hero illustration ────────────────────────────────── */
const HeroIllustration = () => (
  <div className="relative w-full max-w-[520px] mx-auto select-none">
    {/* Glow */}
    <div className="absolute inset-0 rounded-3xl" style={{background:'radial-gradient(ellipse at 50% 50%,rgba(59,130,246,.18) 0%,transparent 70%)'}}/>
    {/* Main card – NAS */}
    <div className="card p-6 relative z-10 animate-float">
      {/* NAS visual */}
      <div className="rounded-2xl p-5 mb-4" style={{background:'linear-gradient(135deg,#1E3A8A,#1E40AF)'}}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs font-semibold text-blue-200 uppercase tracking-wider">DataGenius NAS</p>
            <p className="text-white font-bold text-lg">Home Cloud Active</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
            <svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={ic.nas}/>
            </svg>
          </div>
        </div>
        {/* Drive bays */}
        {[
          { label:'Drive 1 – 4TB', pct:72, status:'Healthy' },
          { label:'Drive 2 – 4TB', pct:68, status:'Healthy' },
          { label:'Drive 3 – 2TB', pct:41, status:'OK' },
        ].map(d => (
          <div key={d.label} className="mb-2.5">
            <div className="flex justify-between text-xs text-blue-100 mb-1">
              <span>{d.label}</span><span className="text-blue-300">{d.status}</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/10">
              <div className="h-full rounded-full bg-blue-300" style={{width:`${d.pct}%`}}/>
            </div>
          </div>
        ))}
        <div className="mt-4 flex gap-3">
          {['Photos','Videos','Docs','Work'].map(tag => (
            <span key={tag} className="text-xs font-medium px-2 py-1 rounded-lg" style={{background:'rgba(255,255,255,.1)',color:'#BAE6FD'}}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Recovery progress */}
      <div className="rounded-xl p-4 mb-3" style={{background:'#F0FDF4',border:'1px solid #BBF7D0'}}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{background:'#D1FAE5'}}>
            <svg className="w-3.5 h-3.5" fill="none" stroke="#065F46" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={ic.check}/></svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-green-800">Recovery Complete</p>
            <p className="text-xs text-green-600">4,823 files restored</p>
          </div>
        </div>
        <div className="h-1.5 rounded-full bg-green-100">
          <div className="h-full rounded-full bg-green-500 w-full"/>
        </div>
      </div>

      {/* File thumbnails */}
      <div className="grid grid-cols-5 gap-1.5">
        {['🏡','📸','🎬','📄','📊','🎵','🏖️','📋','👶','🎂'].map((em, i) => (
          <div key={i} className="h-10 rounded-lg flex items-center justify-center text-lg" style={{background:'#F1F5F9'}}>
            {em}
          </div>
        ))}
      </div>
    </div>

    {/* Floating badges */}
    <div className="absolute -top-3 -right-3 card px-3 py-2 text-xs font-semibold text-green-700 flex items-center gap-1.5" style={{background:'#ECFDF5',border:'1px solid #A7F3D0'}}>
      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-soft"/>
      95% Success Rate
    </div>
    <div className="absolute -bottom-3 -left-3 card px-3 py-2 text-xs font-semibold" style={{background:'#EFF6FF',border:'1px solid #BFDBFE',color:'#1E40AF'}}>
      🔒 Confidential Handling
    </div>
  </div>
);

/* ─── Data Resilience Dashboard ────────────────────────── */
const ResilienceDashboard = () => {
  const metrics = [
    { label:'Backup Readiness', score:82, color:'#1E40AF' },
    { label:'Storage Health',   score:94, color:'#059669' },
    { label:'Encryption Status',score:61, color:'#D97706' },
    { label:'Recovery Readiness',score:75, color:'#1E40AF' },
    { label:'Archive Safety',   score:45, color:'#DC2626' },
  ];
  const overall = Math.round(metrics.reduce((s,m) => s + m.score, 0) / metrics.length);
  return (
    <div className="card p-8 max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-8 items-center">
        {/* Ring */}
        <div className="flex-shrink-0 text-center">
          <div className="relative w-32 h-32 mx-auto mb-2">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="42" fill="none" stroke="#DBEAFE" strokeWidth="10"/>
              <circle cx="50" cy="50" r="42" fill="none" stroke="#1E40AF" strokeWidth="10"
                strokeDasharray={`${overall * 2.64} 264`} strokeLinecap="round"/>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-black" style={{color:'#1E40AF'}}>{overall}</span>
              <span className="text-xs text-ink-300 font-medium">/100</span>
            </div>
          </div>
          <p className="text-sm font-semibold text-ink-500">Data Resilience Score</p>
          <span className="badge badge-orange mt-2">Needs Attention</span>
        </div>
        {/* Metrics */}
        <div className="flex-1 space-y-4 w-full">
          {metrics.map(m => (
            <div key={m.label}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-ink-500 font-medium">{m.label}</span>
                <span className="font-bold" style={{color:m.color}}>{m.score}%</span>
              </div>
              <div className="h-2 rounded-full bg-surface-muted">
                <div className="h-full rounded-full transition-all" style={{width:`${m.score}%`,background:m.color}}/>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-surface-border text-center">
        <Link href="/data-health-check" className="btn btn-primary">
          Get My Free Data Health Check
          <Icon d={ic.arrow} size={16}/>
        </Link>
      </div>
    </div>
  );
};

/* ─── FAQ ───────────────────────────────────────────────── */
const faqs = [
  { q:'Is the diagnosis completely free?', a:'Yes. We offer a no-obligation free diagnosis for all logical recovery cases. You only pay if we successfully recover your data (for logical cases). Physical recovery cases require an upfront assessment fee, which is fully transparent.' },
  { q:'Is my data kept confidential?', a:'Absolutely. We operate under strict confidentiality. All data handled at DataGenius is treated with professional discretion. We do not access your personal content beyond what is necessary for recovery, and we never share your data with third parties.' },
  { q:'Can you recover data from physically damaged drives?', a:'Yes, we handle physically damaged drives — including drives with seized motors, damaged heads, PCB failures, and platters with scratch damage. These cases are handled under clean-room conditions by experienced engineers.' },
  { q:'Do you provide home cloud setup?', a:'Yes, home cloud setup is one of our most popular services. We help you choose, configure, and integrate a NAS device into your home network so your photos, videos, and documents are always backed up and accessible from any device.' },
  { q:'Do you offer pickup and delivery service?', a:'Yes, we offer doorstep pickup and delivery within Hyderabad. For outstation clients, we provide secure courier guidance and insured shipping labels so your device reaches us safely.' },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {faqs.map((f, i) => (
        <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
          <button
            className="w-full flex items-center justify-between p-5 text-left gap-4"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="text-sm font-semibold text-ink-700">{f.q}</span>
            <svg className={`w-4 h-4 text-ink-300 flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={ic.chevron}/>
            </svg>
          </button>
          {open === i && (
            <div className="px-5 pb-5 text-sm text-ink-400 leading-relaxed border-t border-surface-border pt-4">
              {f.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════ */
export default function HomePage() {
  const [formData, setFormData] = useState({ name:'', email:'', phone:'', message:'' });
  const [formSent, setFormSent] = useState(false);

  return (
    <div className="overflow-x-hidden">

      {/* ── 1. HERO ─────────────────────────────────────── */}
      <section className="bg-hero section-pad">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge badge-blue mb-6">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="4"/></svg>
                Hyderabad&apos;s Data Continuity Experts
              </span>
              <h1 className="display-1 text-ink-900 mb-6">
                Your Data. <span className="gradient-text">Safe, Recoverable,</span> and Future-Ready.
              </h1>
              <p className="lead mb-10">
                From failed hard drives and deleted files to home cloud backup and long-term digital preservation,
                DataGenius keeps your memories and business data protected.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Free Recovery Diagnosis
                  <Icon d={ic.arrow} size={18}/>
                </Link>
                <Link href="/home-cloud" className="btn btn-outline btn-lg">
                  Explore Home Cloud
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-8">
                {['No Data – No Fee','ISO-Handled','Fully Confidential','Doorstep Pickup'].map(t => (
                  <span key={t} className="flex items-center gap-1.5 text-xs font-medium text-ink-400">
                    <svg className="w-4 h-4" style={{color:'#059669'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={ic.check}/>
                    </svg>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div><HeroIllustration/></div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST BAR ────────────────────────────────── */}
      <section className="trust-bar">
        <div className="container-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { val:'10,000+', label:'Recovery Cases' },
              { val:'95%',     label:'Logical Recovery Rate' },
              { val:'100%',    label:'Confidential Handling' },
              { val:'₹0',      label:'If We Don\'t Recover (logical)' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-2xl sm:text-3xl font-black text-white mb-1">{s.val}</div>
                <div className="text-xs text-blue-200 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. RECOVER ──────────────────────────────────── */}
      <section className="section-pad" id="recover">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="badge badge-blue mb-4">Recovery Services</span>
            <h2 className="display-2 text-ink-900 mb-4">Whatever You&apos;ve Lost, We Can Help Recover It</h2>
            <p className="lead max-w-2xl mx-auto">
              Professional data recovery from any storage device, any failure type — handled with care and confidentiality.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ic.hdd,    title:'Hard Drive Recovery',      desc:'Mechanical failures, head crashes, PCB damage, and corrupted file systems on desktop and laptop HDDs.', href:'/recover#hdd' },
              { icon: ic.ssd,    title:'SSD & NVMe Recovery',      desc:'NAND flash failures, controller issues, and deleted data recovery from SATA SSDs and M.2 NVMe drives.', href:'/recover#ssd' },
              { icon: ic.raid,   title:'RAID / NAS Recovery',      desc:'RAID 0, 1, 5, 6, and 10 array reconstruction. Synology, QNAP, WD My Cloud, and custom servers.', href:'/recover#raid' },
              { icon: ic.mobile, title:'Mobile Data Recovery',     desc:'Deleted photos, messages, and contacts from Android and iOS devices, including water-damaged phones.', href:'/recover#mobile' },
              { icon: ic.cctv,   title:'CCTV / DVR Recovery',      desc:'Overwritten or corrupted surveillance footage from Hikvision, Dahua, CP Plus, and other DVR/NVR brands.', href:'/recover#cctv' },
              { icon: ic.onsite, title:'Emergency On-Site Recovery',desc:'When your server or NAS can\'t be moved, we come to you. Emergency response for business-critical data.', href:'/recover#onsite' },
            ].map(c => (
              <div key={c.title} className="card p-6 group">
                <div className="icon-box icon-box-lg mb-5">
                  <Icon d={c.icon} size={24}/>
                </div>
                <h3 className="text-base font-bold text-ink-900 mb-2">{c.title}</h3>
                <p className="text-sm text-ink-400 leading-relaxed mb-5">{c.desc}</p>
                <Link href={c.href} className="text-sm font-semibold text-brand-800 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <Icon d={ic.arrow} size={14}/>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/recover" className="btn btn-primary">
              All Recovery Services <Icon d={ic.arrow} size={16}/>
            </Link>
          </div>
        </div>
      </section>

      <div className="divider"/>

      {/* ── 4. PROTECT ──────────────────────────────────── */}
      <section className="section-pad bg-section-alt" id="protect">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge badge-blue mb-4">Backup & Protection</span>
              <h2 className="display-2 text-ink-900 mb-4">Private Backup Without Depending Only on Public Cloud</h2>
              <p className="lead mb-8">
                We set up reliable, private, and encrypted backup systems — from home NAS devices
                to offline drives — so your data is always where you need it.
              </p>
              <div className="space-y-4">
                {[
                  { icon: ic.nas,     label:'Home Cloud Setup',               desc:'Synology or QNAP NAS configured for seamless home backup.' },
                  { icon: ic.m365,    label:'Microsoft 365 Backup',           desc:'Protect emails, SharePoint, OneDrive, and Teams data.' },
                  { icon: ic.cloud,   label:'Google Workspace Backup',        desc:'Full backup of Gmail, Drive, Calendar, and Contacts.' },
                  { icon: ic.enc,     label:'Encrypted Backup Drives',        desc:'AES-256 hardware-encrypted portable drives for sensitive data.' },
                  { icon: ic.offline, label:'Ransomware-Safe Offline Backup', desc:'Air-gapped backup strategy that ransomware cannot reach.' },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-4 p-4 rounded-2xl transition-colors hover:bg-surface-muted">
                    <div className="icon-box flex-shrink-0"><Icon d={item.icon} size={20}/></div>
                    <div>
                      <p className="text-sm font-bold text-ink-900 mb-0.5">{item.label}</p>
                      <p className="text-sm text-ink-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/protect" className="btn btn-primary mt-8">
                Protect My Data <Icon d={ic.arrow} size={16}/>
              </Link>
            </div>
            {/* Visual */}
            <div>
              <div className="card p-8">
                <p className="text-sm font-bold text-ink-900 mb-6">Your Devices, Always Backed Up</p>
                {/* Device grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { em:'📱', label:'Phone' },
                    { em:'💻', label:'Laptop' },
                    { em:'🖥️', label:'Desktop' },
                  ].map(d => (
                    <div key={d.label} className="rounded-2xl p-4 text-center" style={{background:'#EFF6FF',border:'1px solid #DBEAFE'}}>
                      <span className="text-3xl block mb-1">{d.em}</span>
                      <span className="text-xs font-medium text-ink-500">{d.label}</span>
                    </div>
                  ))}
                </div>
                {/* Arrows */}
                <div className="flex justify-center mb-6">
                  <div className="flex flex-col items-center">
                    {[0,1,2].map(i => (
                      <div key={i} className="w-0.5 h-3 rounded-full my-0.5" style={{background:'#BFDBFE'}}/>
                    ))}
                    <div className="text-xs font-semibold text-ink-300 py-1">Syncing</div>
                    {[0,1,2].map(i => (
                      <div key={i} className="w-0.5 h-3 rounded-full my-0.5" style={{background:'#BFDBFE'}}/>
                    ))}
                  </div>
                </div>
                {/* NAS */}
                <div className="rounded-2xl p-4 text-center" style={{background:'linear-gradient(135deg,#1E40AF,#2563EB)'}}>
                  <span className="text-3xl block mb-1">🗄️</span>
                  <p className="text-sm font-bold text-white">Home NAS Cloud</p>
                  <p className="text-xs text-blue-200 mt-0.5">Always-on · Private · Encrypted</p>
                </div>
                <div className="mt-4 flex justify-center gap-2">
                  {['Cloud','Offline Drive','External HDD'].map(label => (
                    <span key={label} className="badge badge-gray text-xs">{label}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"/>

      {/* ── 5. PRESERVE ─────────────────────────────────── */}
      <section className="section-pad" id="preserve">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="badge badge-blue mb-4">Preservation</span>
            <h2 className="display-2 text-ink-900 mb-4">Preserve What Cannot Be Recreated</h2>
            <p className="lead max-w-2xl mx-auto">
              Your parents&apos; wedding album. Your child&apos;s first video. Grandma&apos;s VHS tapes.
              Some things exist only in physical form — until now.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: ic.photo,   title:'Old Photo Digitization',    desc:'Scan, restore, and digitize printed photos, negatives, and slides to full HD — bringing memories back to life.', em:'📸' },
              { icon: ic.disc,    title:'CD / DVD Archive Recovery', desc:'Recover data from scratched or degraded optical discs. Archival-grade scanning with error correction.', em:'💿' },
              { icon: ic.video,   title:'VHS & Camcorder Digitization',desc:'Convert VHS tapes, Hi8, Mini-DV, and 8mm camcorder tapes to high-quality digital files.', em:'📹' },
              { icon: ic.vault,   title:'Family Archive Vault',       desc:'A private, organized digital archive of your family\'s history — categorized, searchable, and future-proof.', em:'🏛️' },
              { icon: ic.migrate, title:'Device-to-Device Migration', desc:'Moving to a new phone, laptop, or Mac? We migrate everything — apps, files, contacts, settings — completely.', em:'🔄' },
            ].map(c => (
              <div key={c.title} className="card p-6">
                <div className="text-4xl mb-4">{c.em}</div>
                <h3 className="text-base font-bold text-ink-900 mb-2">{c.title}</h3>
                <p className="text-sm text-ink-400 leading-relaxed">{c.desc}</p>
              </div>
            ))}
            {/* Emotional CTA card */}
            <div className="card p-6" style={{background:'linear-gradient(135deg,#EFF6FF,#DBEAFE)',border:'1px solid #BFDBFE'}}>
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-base font-bold text-ink-900 mb-2">Every Memory Matters</h3>
              <p className="text-sm text-ink-400 leading-relaxed mb-5">
                Don&apos;t let deteriorating media take your irreplaceable family moments. Start preserving today.
              </p>
              <Link href="/preserve" className="btn btn-primary btn-sm">
                Start Preserving <Icon d={ic.arrow} size={14}/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"/>

      {/* ── 6. MAINTAIN ─────────────────────────────────── */}
      <section className="section-pad bg-section-alt" id="maintain">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="badge badge-blue mb-4">Data Health</span>
            <h2 className="display-2 text-ink-900 mb-4">Know the Health of Your Data</h2>
            <p className="lead max-w-2xl mx-auto">
              Most data loss is preventable. Our Data Resilience Score gives you a clear, actionable picture
              of how protected your data really is — and what to fix first.
            </p>
          </div>
          <ResilienceDashboard/>
        </div>
      </section>

      {/* ── 7. PRODUCTS ─────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="badge badge-blue mb-4">Shop</span>
            <h2 className="display-2 text-ink-900 mb-4">Recommended Products</h2>
            <p className="lead max-w-2xl mx-auto">
              Curated, configured, and ready to use. We supply the best-in-class hardware and set it up for you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { em:'🗄️', name:'2-Bay Home NAS',                price:'From ₹18,999', desc:'Synology or QNAP. We install, configure, and connect it to all your devices.', badge:'Most Popular' },
              { em:'💾', name:'Encrypted Portable SSD',        price:'From ₹7,499',  desc:'256-bit AES hardware encryption. Up to 2TB. Perfect for professionals on the move.' },
              { em:'📦', name:'Offline Backup Kit',            price:'From ₹12,999', desc:'3 drives + rotational strategy + our setup visit. A complete 3-2-1 backup for families.' },
              { em:'🖥️', name:'Small Business Backup Appliance',price:'From ₹44,999', desc:'Pre-configured NAS server with cloud sync, offsite backup, and quarterly health checks.' },
            ].map(p => (
              <div key={p.name} className="card p-6 relative">
                {p.badge && (
                  <span className="badge badge-blue absolute -top-3 left-5">{p.badge}</span>
                )}
                <div className="text-5xl mb-5 mt-2">{p.em}</div>
                <h3 className="text-sm font-bold text-ink-900 mb-1">{p.name}</h3>
                <p className="text-lg font-black mb-3" style={{color:'#1E40AF'}}>{p.price}</p>
                <p className="text-xs text-ink-400 leading-relaxed mb-5">{p.desc}</p>
                <Link href="/contact" className="btn btn-outline btn-sm w-full justify-center">
                  Request & Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. PRICING ──────────────────────────────────── */}
      <section className="section-pad bg-blue-deep">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="badge mb-4" style={{background:'rgba(255,255,255,.12)',color:'#BFDBFE'}}>Pricing</span>
            <h2 className="display-2 text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-blue-200 text-lg max-w-xl mx-auto">No hidden charges. No surprise bills. Just clear value.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                name:'Family Backup', price:'₹9,999', period:'one-time setup',
                desc:'Perfect for families who want their photos, videos, and memories protected.',
                features:['Home NAS assessment & setup','2-device backup configuration','Photo & video archive','3-month support'],
                cta:'Get Started',
              },
              {
                name:'Home Cloud', price:'₹24,999', period:'one-time setup',
                desc:'Your own private cloud — accessible from anywhere, controlled by you.',
                features:['Full NAS hardware setup','All-device sync & access','Remote access configuration','Encrypted offsite backup','1-year health monitoring'],
                cta:'Choose Home Cloud', featured:true,
              },
              {
                name:'Business Continuity', price:'₹5,999', period:'/month',
                desc:'For clinics, offices, and small businesses that cannot afford downtime.',
                features:['Business NAS or cloud setup','Daily automated backups','Microsoft 365 backup','Quarterly health check','Priority recovery support'],
                cta:'Talk to Us',
              },
            ].map(p => (
              <div
                key={p.name}
                className="rounded-2xl p-7"
                style={{
                  background: p.featured ? '#fff' : 'rgba(255,255,255,.07)',
                  border: p.featured ? 'none' : '1px solid rgba(255,255,255,.12)',
                }}
              >
                {p.featured && <span className="badge badge-blue mb-4">Most Popular</span>}
                <h3 className={`text-lg font-bold mb-1 ${p.featured ? 'text-ink-900' : 'text-white'}`}>{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-3xl font-black ${p.featured ? 'text-brand-800' : 'text-white'}`}>{p.price}</span>
                  <span className={`text-sm ${p.featured ? 'text-ink-400' : 'text-blue-300'}`}>{p.period}</span>
                </div>
                <p className={`text-sm leading-relaxed mb-5 ${p.featured ? 'text-ink-400' : 'text-blue-200'}`}>{p.desc}</p>
                <ul className="space-y-2.5 mb-7">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke={p.featured?'#059669':'#86EFAC'} strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={ic.check}/>
                      </svg>
                      <span className={p.featured ? 'text-ink-500' : 'text-blue-100'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`btn w-full justify-center ${p.featured ? 'btn-primary' : 'btn-ghost'}`}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. WHY DATAGENIUS TIMELINE ──────────────────── */}
      <section className="section-pad">
        <div className="container-xl">
          <div className="text-center mb-16">
            <span className="badge badge-blue mb-4">The DataGenius Way</span>
            <h2 className="display-2 text-ink-900 mb-4">Your Complete Data Continuity Partner</h2>
            <p className="lead max-w-2xl mx-auto">
              We don&apos;t just fix problems — we build a complete data continuity strategy so you never face the same problem twice.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {[
              { step:'01', phase:'Recover',  color:'#1E40AF', desc:'We recover what was lost — files, photos, business data — from any device or failure type.',       icon: ic.hdd },
              { step:'02', phase:'Protect',  color:'#2563EB', desc:'We build a backup architecture that is private, encrypted, and reliable — cloud, NAS, or offline.',  icon: ic.shield },
              { step:'03', phase:'Preserve', color:'#3B82F6', desc:'We digitize and archive your irreplaceable memories and documents for generations to come.',          icon: ic.vault },
              { step:'04', phase:'Maintain', color:'#60A5FA', desc:'We monitor the health of your data systems and alert you before problems happen.',                   icon: ic.nas },
            ].map((s, i) => (
              <div key={s.phase} className="relative">
                {i < 3 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 z-0"
                    style={{background:'linear-gradient(90deg,#BFDBFE,transparent)',width:'calc(100% - 3rem)',marginLeft:'1.5rem'}}/>
                )}
                <div className="card p-6 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-black text-ink-200">{s.step}</span>
                    <div
                      className="icon-box"
                      style={{background:`${s.color}18`,color:s.color}}
                    >
                      <Icon d={s.icon} size={20}/>
                    </div>
                  </div>
                  <h3 className="text-lg font-black mb-2" style={{color:s.color}}>{s.phase}</h3>
                  <p className="text-sm text-ink-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. TESTIMONIALS ────────────────────────────── */}
      <section className="section-pad bg-section-alt">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="badge badge-blue mb-4">Testimonials</span>
            <h2 className="display-2 text-ink-900 mb-4">Real Stories, Real Relief</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name:'Meenakshi R.',
                role:'Home User, Hyderabad',
                quote:'I thought I&apos;d lost 14 years of family photos when my laptop hard drive failed. The DataGenius team recovered 98% of them in just two days. I can&apos;t describe the relief. My daughter&apos;s childhood photos are back.',
                rating:5, em:'👩‍👧',
              },
              {
                name:'Dr. Ramesh Babu',
                role:'Clinic Owner, Secunderabad',
                quote:'Patient records, billing data, X-rays — all of it is now backed up through DataGenius&apos;s business continuity plan. They set up a NAS and cloud backup in one day. I sleep easy now knowing nothing will be lost.',
                rating:5, em:'🏥',
              },
              {
                name:'Pradeep Technologies',
                role:'12-person Office, Hitec City',
                quote:'Our RAID 5 NAS failed on a Friday evening. By Saturday afternoon, DataGenius had recovered our 3 years of project files. Their emergency response and professionalism saved our business.',
                rating:5, em:'🏢',
              },
            ].map(t => (
              <div key={t.name} className="card p-7">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="#F59E0B" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-sm text-ink-500 leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-5 border-t border-surface-border">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl" style={{background:'#EFF6FF'}}>
                    {t.em}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink-900">{t.name}</p>
                    <p className="text-xs text-ink-300">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. FAQ ─────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="badge badge-blue mb-4">FAQ</span>
            <h2 className="display-2 text-ink-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <FAQ/>
        </div>
      </section>

      {/* ── 12. CONTACT ─────────────────────────────────── */}
      <section className="section-pad bg-section-alt" id="contact">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="badge badge-blue mb-4">Get in Touch</span>
            <h2 className="display-2 text-ink-900 mb-4">Let&apos;s Talk About Your Data</h2>
            <p className="lead max-w-xl mx-auto">No pressure, no jargon. Just tell us what happened and we&apos;ll tell you what we can do.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact info */}
            <div className="space-y-6">
              {[
                { icon: ic.mobile,    label:'Phone', value:'+91 92999 XXXXX', href:'tel:+919299900000' },
                { icon: ic.whatsapp,  label:'WhatsApp', value:'Chat on WhatsApp', href:'https://wa.me/919299900000' },
                { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label:'Email', value:'hello@datagenius.in', href:'mailto:hello@datagenius.in' },
                { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', label:'Location', value:'Hyderabad, Telangana, India', href:'#' },
              ].map(item => (
                <a key={item.label} href={item.href} className="flex items-center gap-4 p-5 card hover:no-underline">
                  <div className="icon-box"><Icon d={item.icon} size={20}/></div>
                  <div>
                    <p className="text-xs font-semibold text-ink-300 uppercase tracking-wider mb-0.5">{item.label}</p>
                    <p className="text-sm font-bold text-ink-900">{item.value}</p>
                  </div>
                </a>
              ))}
              <div className="card p-5" style={{background:'#EFF6FF',border:'1px solid #BFDBFE'}}>
                <p className="text-sm font-bold text-ink-900 mb-1">🕐 Working Hours</p>
                <p className="text-sm text-ink-400">Monday – Saturday: 9:00 AM – 7:00 PM</p>
                <p className="text-sm text-ink-400">Emergency support available 24/7</p>
              </div>
            </div>

            {/* Form */}
            <div className="card p-8">
              <h3 className="text-lg font-bold text-ink-900 mb-6">Send Us a Message</h3>
              {formSent ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{background:'#D1FAE5'}}>
                    <svg className="w-8 h-8" fill="none" stroke="#059669" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={ic.check}/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-ink-900 mb-2">Message Sent!</h4>
                  <p className="text-sm text-ink-400">We&apos;ll get back to you within a few hours.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {[
                    { label:'Your Name', key:'name', type:'text', placeholder:'Ravi Kumar' },
                    { label:'Email Address', key:'email', type:'email', placeholder:'ravi@example.com' },
                    { label:'Phone Number', key:'phone', type:'tel', placeholder:'+91 98765 43210' },
                  ].map(f => (
                    <div key={f.key}>
                      <label className="block text-xs font-semibold text-ink-500 uppercase tracking-wider mb-1.5">{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={(formData as Record<string,string>)[f.key]}
                        onChange={e => setFormData(d => ({...d, [f.key]: e.target.value}))}
                        className="w-full text-sm px-4 py-3 rounded-xl outline-none transition-all"
                        style={{border:'1.5px solid #E2E8F0',background:'#F8FAFC',color:'#1E293B'}}
                        onFocus={e => e.currentTarget.style.borderColor='#93C5FD'}
                        onBlur={e => e.currentTarget.style.borderColor='#E2E8F0'}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-semibold text-ink-500 uppercase tracking-wider mb-1.5">How can we help?</label>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe your situation — e.g. hard drive not detected, need home cloud setup, old VHS tapes..."
                      value={formData.message}
                      onChange={e => setFormData(d => ({...d, message: e.target.value}))}
                      className="w-full text-sm px-4 py-3 rounded-xl outline-none transition-all resize-none"
                      style={{border:'1.5px solid #E2E8F0',background:'#F8FAFC',color:'#1E293B'}}
                      onFocus={e => e.currentTarget.style.borderColor='#93C5FD'}
                      onBlur={e => e.currentTarget.style.borderColor='#E2E8F0'}
                    />
                  </div>
                  <button
                    onClick={() => { if (formData.name && formData.email) setFormSent(true); }}
                    className="btn btn-primary w-full justify-center"
                  >
                    Send Message <Icon d={ic.arrow} size={16}/>
                  </button>
                  <p className="text-xs text-center text-ink-300">No spam. No sharing. Just a reply from a real person.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 13. FINAL CTA ───────────────────────────────── */}
      <section className="section-pad bg-blue-soft">
        <div className="container-xl text-center">
          <h2 className="display-2 text-ink-900 mb-4">
            Start with a Free Diagnosis — <span className="gradient-text">No Commitment</span>
          </h2>
          <p className="lead max-w-xl mx-auto mb-10">
            Tell us what happened. We&apos;ll assess it, explain your options, and give you an honest recommendation.
            No pressure. No jargon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Free Recovery Diagnosis <Icon d={ic.arrow} size={18}/>
            </Link>
            <Link href="/data-health-check" className="btn btn-outline btn-lg">
              Check My Data Health
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
