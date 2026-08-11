import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home Cloud & NAS Setup — DataGenius',
  description: 'Build your own private home cloud with NAS storage. We design, install, and configure Synology, QNAP, or custom home server solutions in Hyderabad.',
};

const useCases = [
  { emoji: '📷', title: 'Photo & Video Library', desc: 'One central home for every photo and video from every device — organized, searchable, and accessible from anywhere.' },
  { emoji: '🎥', title: 'Home Media Server', desc: 'Stream your movie and TV collection to any screen in the house with Plex, Emby, or Jellyfin running on your own hardware.' },
  { emoji: '💾', title: 'Automatic Device Backup', desc: 'Every phone, laptop, and desktop backs up to your NAS overnight — no subscription, no cloud storage fees.' },
  { emoji: '🔒', title: 'Private File Sync', desc: 'Sync files across all your devices like Dropbox — but completely private, on hardware you own, with no monthly cost.' },
  { emoji: '📚', title: 'Family Archive', desc: 'A permanent home for family documents, home videos, school projects, and memories that matter.' },
  { emoji: '🏡', title: 'Smart Home Hub', desc: 'Centralize home camera footage, smart home automations, and IoT data on your own private server.' },
];

const whyOwnCloud = [
  { title: 'No monthly subscription', body: 'Pay once for hardware. After that, it\'s yours — no per-GB fees, no annual renewals, no price hikes.' },
  { title: 'Unlimited storage', body: 'Add drives as you need them. Start with 4 TB and expand to 40 TB over time — no artificial caps.' },
  { title: 'Complete privacy', body: 'Your data never leaves your home network unless you choose to share it. No company scans your files.' },
  { title: 'Fast local access', body: 'Transferring files over your home network is up to 100× faster than uploading to the cloud and downloading back.' },
  { title: 'Survives internet outages', body: 'Your local cloud works perfectly even when your internet is down. Access everything on your network.' },
  { title: 'You own it forever', body: "No service shutdowns, no account termination risks. It's hardware in your home — it stays as long as you do." },
];

export default function HomeCloudPage() {
  return (
    <>
      <section className="bg-hero section-pad">
        <div className="container-xl">
          <div className="max-w-3xl">
            <span className="badge badge-blue mb-5">Home Cloud Setup</span>
            <h1 className="display-1 text-ink-900 mb-6">
              Your own private cloud —{' '}
              <span className="gradient-text">no subscription required.</span>
            </h1>
            <p className="lead mb-8">
              A home NAS gives you all the convenience of Dropbox, Google Photos, and iCloud — without the monthly fees, privacy concerns, or storage limits. We set it up for you from start to finish.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary btn-lg">Book a Free Consultation</Link>
              <Link href="#how-it-works" className="btn btn-outline btn-lg">How It Works</Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-blue-100">
              {[['₹0/month','After setup'],['1 visit','Complete installation'],['10+ years','Device lifespan'],['100%','Data privacy']].map(([v,l]) => (
                <div key={l}><p className="text-2xl font-bold text-brand-800">{v}</p><p className="text-sm text-ink-400">{l}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl">
          <div className="text-center mb-14">
            <h2 className="display-2 text-ink-900 mb-4">What your home cloud can do</h2>
            <p className="lead max-w-2xl mx-auto">One device in your home replaces six different cloud subscriptions.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map(u => (
              <div key={u.title} className="card p-7">
                <div className="text-4xl mb-4">{u.emoji}</div>
                <h3 className="font-bold text-ink-900 text-lg mb-3">{u.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-section-alt section-pad">
        <div className="container-xl">
          <div className="text-center mb-14">
            <h2 className="display-2 text-ink-900 mb-4">Why own your cloud?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyOwnCloud.map(w => (
              <div key={w.title} className="flex gap-4">
                <svg className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                <div>
                  <h3 className="font-semibold text-ink-900 mb-1">{w.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{w.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="display-2 text-ink-900 mb-6">The math is simple</h2>
              <p className="lead mb-8">Cloud subscriptions feel small monthly — but they add up fast. A home NAS pays for itself in 1–2 years.</p>
              <Link href="/contact" className="btn btn-primary btn-lg">Calculate Your Savings</Link>
            </div>
            <div className="space-y-4">
              <div className="card p-6">
                <p className="text-sm text-ink-400 mb-1">5 years of cloud storage (2 TB each)</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-ink-900">Google One + iCloud + Dropbox</span>
                  <span className="text-2xl font-bold text-red-500">₹1.8L+</span>
                </div>
                <p className="text-xs text-ink-400 mt-1">Recurring, with price increases</p>
              </div>
              <div className="card p-6" style={{borderColor:'#BFDBFE'}}>
                <p className="text-sm text-ink-400 mb-1">Home NAS (one-time)</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-ink-900">4-bay NAS + 12 TB storage + setup</span>
                  <span className="text-2xl font-bold text-brand-700">₹50,000</span>
                </div>
                <p className="text-xs text-ink-400 mt-1">Unlimited storage. No monthly fee. Yours forever.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-section-alt section-pad">
        <div className="container-xl">
          <div className="text-center mb-14">
            <h2 className="display-2 text-ink-900 mb-4">How we set it up</h2>
            <p className="lead max-w-xl mx-auto">You don&apos;t need to be technical. We handle everything from hardware to configuration.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { n:'01', title:'Needs Assessment', desc:'We understand your storage needs, usage habits, and budget to recommend the right setup.' },
              { n:'02', title:'Hardware Selection', desc:'We recommend and source the right NAS device, drives, and network gear for your home.' },
              { n:'03', title:'On-Site Installation', desc:'Our technician visits your home, sets up the hardware, and configures everything from scratch.' },
              { n:'04', title:'App & Access Setup', desc:'We set up mobile apps, desktop sync clients, and secure remote access.' },
              { n:'05', title:'Data Migration', desc:'We move your existing photos, documents, and files onto the new system.' },
              { n:'06', title:'Handover & Training', desc:'We walk you through everything — how to add files, share folders, and keep it running.' },
            ].map(s => (
              <div key={s.n} className="card p-7">
                <div className="w-12 h-12 rounded-2xl bg-brand-800 text-white flex items-center justify-center text-lg font-bold mb-4">{s.n}</div>
                <h3 className="font-bold text-ink-900 mb-2">{s.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-deep section-pad">
        <div className="container-xl text-center">
          <h2 className="display-2 text-white mb-4">Ready for your own private cloud?</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">Book a free 30-minute consultation. We&apos;ll design a system that fits your home, your needs, and your budget.</p>
          <Link href="/contact" className="btn btn-ghost btn-lg">Book Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
