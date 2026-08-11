import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Digital Preservation & Archiving — DataGenius',
  description: 'Convert old photos, slides, film, VHS tapes, and documents into lasting digital formats. Professional digitization and archiving in Hyderabad.',
};

const services = [
  { icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', title: 'Photo Digitization', desc: 'Printed photos, slides, and negatives scanned at archival quality (600–2400 DPI). We restore faded colors and remove dust.', id: 'photos' },
  { icon: 'M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z', title: 'Video & Film Transfer', desc: 'VHS, Hi8, Betamax, Super 8, and 16mm film converted to MP4 or archival-quality formats. Relive every moment in full clarity.', id: 'video' },
  { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', title: 'Document Archiving', desc: 'Legal documents, business records, family histories, and handwritten letters digitized, OCR-processed, and indexed for easy search.', id: 'disc' },
  { icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z', title: 'Audio Restoration', desc: 'Cassette tapes, vinyl records, and reel-to-reel audio digitized with noise reduction and dynamic range optimization.', id: 'audio' },
  { icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', title: 'Legacy Format Migration', desc: 'Old floppy disks (5.25", 3.5"), ZIP drives, optical discs, and obsolete formats rescued before the hardware disappears forever.', id: 'legacy' },
  { icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4', title: 'Digital Vault Storage', desc: 'Your digitized collection stored in our secure, redundant archive with private family access and 25-year durability guarantee.', id: 'vault' },
];

const whyPreserve = [
  { title: 'Physical media degrades', body: 'Printed photos fade in 40–50 years. VHS tapes lose signal quality within 20 years. Film deteriorates. The window to preserve is closing.' },
  { title: 'Devices become obsolete', body: 'Floppy disk drives, VHS players, and film projectors are disappearing. Once the hardware is gone, the media becomes unreadable forever.' },
  { title: 'Originals can be lost or damaged', body: 'Floods, fires, and moving damage originals. A digital copy stored in multiple locations survives any single physical disaster.' },
  { title: 'Future generations deserve access', body: "Your grandchildren won't have a VHS player. Digital files can be shared, printed, and enjoyed by anyone, anywhere, forever." },
];

export default function PreservePage() {
  return (
    <>
      <section className="bg-hero section-pad">
        <div className="container-xl">
          <div className="max-w-3xl">
            <span className="badge badge-orange mb-5">Preserve & Archive</span>
            <h1 className="display-1 text-ink-900 mb-6">
              Your memories are{' '}
              <span className="gradient-text">fading. Let&apos;s fix that.</span>
            </h1>
            <p className="lead mb-8">
              Every year you wait, your photos fade a little more, your tapes degrade a little further, and your floppy disks become a little harder to read. We digitize and preserve your irreplaceable memories before time runs out.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary btn-lg">Start Preserving Today</Link>
              <Link href="#services" className="btn btn-outline btn-lg">See All Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-pad">
        <div className="container-xl">
          <div className="text-center mb-14">
            <h2 className="display-2 text-ink-900 mb-4">What we digitize</h2>
            <p className="lead max-w-2xl mx-auto">If it holds memories, we can preserve it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.id} id={s.id} className="card p-7">
                <div className="icon-box mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={s.icon}/>
                  </svg>
                </div>
                <h3 className="font-bold text-ink-900 text-lg mb-3">{s.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-section-alt section-pad">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="display-2 text-ink-900 mb-6">Why now — not later?</h2>
              <p className="lead mb-8">Physical media is in a race against time.</p>
              <div className="space-y-6">
                {whyPreserve.map(w => (
                  <div key={w.title} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-brand-600 mt-2 flex-shrink-0"/>
                    <div>
                      <h3 className="font-semibold text-ink-900 mb-1">{w.title}</h3>
                      <p className="text-sm text-ink-500 leading-relaxed">{w.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden bg-blue-deep p-10 text-center">
              <div className="text-7xl mb-4">📼</div>
              <p className="text-white text-xl font-bold mb-3">Average VHS tape lifespan:</p>
              <p className="text-blue-200 text-6xl font-extrabold mb-2">20 yrs</p>
              <p className="text-blue-300 text-sm">Most family VHS tapes recorded in the 1990s–2000s are already degrading right now.</p>
              <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
                {[['50 yrs','Photo prints'],['10–15 yrs','CD/DVD discs'],['20–30 yrs','Cassette tapes']].map(([y,l]) => (
                  <div key={l}><p className="text-white font-bold text-xl">{y}</p><p className="text-blue-300 text-xs">{l}</p></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl">
          <div className="text-center mb-14">
            <h2 className="display-2 text-ink-900 mb-4">How it works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n:'01', title:'Send or drop off', desc:'Bring your box of photos, tapes, or media to our studio — or ship it safely.' },
              { n:'02', title:'We digitize', desc:'Your items are professionally scanned or transferred at archival quality.' },
              { n:'03', title:'Quality review', desc:'Every file is checked for quality. Faded photos are color-corrected.' },
              { n:'04', title:'Delivered & stored', desc:'Files delivered on USB, hard drive, or uploaded to your private archive.' },
            ].map(s => (
              <div key={s.n} className="card p-7 text-center">
                <div className="w-12 h-12 rounded-2xl bg-brand-800 text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">{s.n}</div>
                <h3 className="font-bold text-ink-900 mb-2">{s.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-deep section-pad">
        <div className="container-xl text-center">
          <h2 className="display-2 text-white mb-4">Preserve your family&apos;s story — before it fades</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">Contact us for a free consultation.</p>
          <Link href="/contact" className="btn btn-ghost btn-lg">Get a Free Estimate</Link>
        </div>
      </section>
    </>
  );
}
