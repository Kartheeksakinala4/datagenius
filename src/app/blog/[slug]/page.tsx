import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Recover Data from a Dead Hard Drive | DataGenius Blog',
  description: 'Complete step-by-step guide to recovering data from a dead hard drive. Diagnose the failure type, choose the right recovery method, and get your files back.',
  openGraph: {
    title: 'How to Recover Data from a Dead Hard Drive',
    description: 'Diagnose the problem and recover your data with this expert guide.',
    url: 'https://datagenius.in/blog/recover-data-dead-hard-drive',
    siteName: 'DataGenius',
    type: 'article',
  },
};

const relatedPosts = [
  { slug: 'smart-attributes-explained', title: 'SMART Attributes Explained: Know When Your Drive Is Dying', category: 'Recovery Guides' },
  { slug: 'recover-formatted-sd-card', title: 'How to Recover Data from a Formatted SD Card', category: 'Recovery Guides' },
  { slug: 'top-5-data-recovery-software-2026', title: 'Top 5 Data Recovery Software Compared (2026)', category: 'Product Reviews' },
];

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-surface-dark">
      {/* Breadcrumb */}
      <div className="border-b border-surface-border px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-slate-400">How to Recover Data from a Dead Hard Drive</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="lg:grid lg:grid-cols-4 lg:gap-10">
          {/* Article */}
          <article className="lg:col-span-3">
            {/* Header */}
            <div className="mb-10">
              <span className="inline-block bg-blue-500/10 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">Recovery Guides</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                How to Recover Data from a Dead Hard Drive
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary-light font-bold text-xs">DG</div>
                  <div>
                    <span className="text-slate-300 font-medium">DataGenius Team</span>
                    <span className="block text-xs">Data Recovery Engineers</span>
                  </div>
                </div>
                <span>·</span>
                <span>March 15, 2026</span>
                <span>·</span>
                <span>8 min read</span>
              </div>
              {/* Social Share */}
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-500">Share:</span>
                {['Twitter', 'LinkedIn', 'WhatsApp', 'Copy Link'].map((s) => (
                  <button key={s} className="text-xs border border-surface-border rounded-full px-3 py-1.5 text-slate-400 hover:border-primary/40 hover:text-white transition-all">{s}</button>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="h-64 bg-gradient-to-br from-primary/30 to-accent/10 rounded-2xl flex items-center justify-center mb-10">
              <span className="text-8xl">💾</span>
            </div>

            {/* Article Body */}
            <div className="prose-content text-slate-300">
              <p>
                A dead hard drive is one of the most stressful data loss scenarios. Unlike an accidentally deleted file, a drive failure can mean all your data is inaccessible with no obvious path to recovery. But don&apos;t panic — in most cases, data recovery is possible, and the key to success is acting correctly in the first few minutes.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Step 1: Identify the Type of Failure</h2>
              <p>
                Before attempting any recovery, you need to understand <em>why</em> your drive is dead. Hard drive failures fall into four categories, each requiring a completely different approach:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 my-6 not-prose">
                {[
                  { type: 'Logical Failure', icon: '🖥️', desc: 'Drive is detected but files are missing, partition is corrupt, or file system errors occur. Usually recoverable with software.', difficulty: 'Easy', color: 'bg-accent/10 border-accent/20' },
                  { type: 'Firmware Failure', icon: '⚙️', desc: 'Drive\'s own operating system has become corrupt. Drive may spin up but not be detected correctly. Requires specialist tools.', difficulty: 'Medium', color: 'bg-amber/10 border-amber/20' },
                  { type: 'PCB Failure', icon: '🔌', desc: 'The controller board has failed. Drive spins but isn\'t detected. A matching donor PCB can sometimes fix this.', difficulty: 'Hard', color: 'bg-orange-500/10 border-orange-500/20' },
                  { type: 'Mechanical Failure', icon: '🔧', desc: 'Internal components (heads, platters, motor) are physically damaged. Clicking or grinding noises. Requires clean-room lab.', difficulty: 'Critical', color: 'bg-red-500/10 border-red-500/20' },
                ].map((f) => (
                  <div key={f.type} className={`glass-card rounded-xl p-4 border ${f.color}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{f.icon}</span>
                      <div>
                        <p className="text-white font-semibold text-sm">{f.type}</p>
                        <span className="text-xs text-slate-500">Difficulty: {f.difficulty}</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Step 2: What NOT to Do</h2>
              <p>These common mistakes can make recovery impossible:</p>
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5 my-4 not-prose">
                <p className="text-red-400 font-semibold mb-3">⚠️ CRITICAL WARNINGS</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  {[
                    'Do NOT write any new data to the affected drive',
                    'Do NOT run chkdsk or format the drive — this overwrites your data',
                    'Do NOT run recovery software on the same drive you\'re recovering FROM',
                    'Do NOT open the drive outside a cleanroom — dust particles destroy platters',
                    'Do NOT freeze the drive — this is a myth that causes condensation damage',
                    'Do NOT try the same failed approach repeatedly',
                  ].map((w) => (
                    <li key={w} className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>{w}
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Step 3: Software Recovery (Logical Failures)</h2>
              <p>
                If your drive is detected by your computer but files are missing or the partition is corrupt, software recovery has a high success rate. Here&apos;s exactly how to do it:
              </p>
              <ol className="space-y-4 my-4 text-sm">
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary-light font-bold text-xs flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <p className="font-semibold text-white">Download DataGenius Data Recovery</p>
                    <p className="text-slate-400 mt-0.5">Install it on a different drive — never on the drive you&apos;re recovering from. The free version lets you scan and preview files before purchasing.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary-light font-bold text-xs flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <p className="font-semibold text-white">Select the affected drive and run a Deep Scan</p>
                    <p className="text-slate-400 mt-0.5">The quick scan takes 5–10 minutes. The deep scan can take hours but finds significantly more files — always use deep scan for dead drives.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary-light font-bold text-xs flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <p className="font-semibold text-white">Preview recoverable files</p>
                    <p className="text-slate-400 mt-0.5">DataGenius lets you preview photos, documents, and videos before recovery. This tells you if your files are intact before you buy a license.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary-light font-bold text-xs flex-shrink-0 mt-0.5">4</span>
                  <div>
                    <p className="font-semibold text-white">Recover to a different drive</p>
                    <p className="text-slate-400 mt-0.5">Always recover to a separate drive or external storage. Recovering to the same drive can overwrite files that haven&apos;t been recovered yet.</p>
                  </div>
                </li>
              </ol>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Step 4: When to Call a Professional</h2>
              <p>Software recovery won&apos;t work for physical failures. You need a professional clean-room lab if:</p>
              <ul className="space-y-2 text-sm my-4">
                {[
                  'The drive makes clicking, grinding, or beeping noises',
                  'The drive is not detected at all (not even in BIOS/UEFI)',
                  'The drive was dropped, got wet, or was exposed to fire',
                  'Software recovery returns 0 files after a full deep scan',
                  'The drive spins but produces a burning smell',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-amber mt-0.5 flex-shrink-0">⚠</span>{item}
                  </li>
                ))}
              </ul>
              <p>
                Use our <Link href="/directory" className="text-primary-light hover:underline">Recovery Lab Directory</Link> to find a certified professional near you. Professional recovery costs ₹5,000–₹50,000 depending on the failure type and drive capacity, but most labs offer free diagnostics with a no-data, no-fee guarantee.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Prevention: How to Avoid This Next Time</h2>
              <p>The best data recovery is the one you never need. Implement the <strong className="text-white">3-2-1 backup rule</strong>:</p>
              <ul className="space-y-1.5 text-sm my-4">
                <li><strong className="text-white">3</strong> copies of your data</li>
                <li><strong className="text-white">2</strong> different storage media types (e.g., internal drive + external drive)</li>
                <li><strong className="text-white">1</strong> offsite backup (e.g., cloud storage or backup drive at a different location)</li>
              </ul>
              <p>
                Read our complete guide: <Link href="/blog/3-2-1-backup-strategy" className="text-primary-light hover:underline">3-2-1 Backup Strategy: The Only Guide You Need →</Link>
              </p>

              {/* Newsletter CTA Inline */}
              <div className="bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 rounded-2xl p-6 my-8 not-prose">
                <p className="text-xs font-semibold text-primary-light uppercase tracking-wider mb-2">Data Pulse Newsletter</p>
                <h3 className="text-lg font-bold text-white mb-2">Get weekly recovery tips in your inbox</h3>
                <p className="text-slate-400 text-sm mb-4">Join 10,000+ subscribers. Every Thursday. Free forever.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input type="email" placeholder="Your email..." className="flex-1 bg-surface-dark/50 border border-surface-border rounded-full px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none" />
                  <button className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-5 py-2 rounded-full transition-all">Subscribe</button>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-12 border-t border-surface-border pt-10">
              <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
              <div className="grid sm:grid-cols-3 gap-5">
                {relatedPosts.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="group glass-card rounded-xl p-5 hover:border-white/20 transition-all">
                    <span className="text-xs font-semibold text-accent">{p.category}</span>
                    <h4 className="text-sm font-semibold text-white mt-2 group-hover:text-primary-light transition-colors leading-snug">{p.title}</h4>
                  </Link>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 glass-card rounded-2xl p-6">
              <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">On This Page</h3>
              <nav className="space-y-2">
                {[
                  'Step 1: Identify the Failure Type',
                  'Step 2: What NOT to Do',
                  'Step 3: Software Recovery',
                  'Step 4: Call a Professional',
                  'Prevention & Backups',
                ].map((item) => (
                  <button key={item} className="block text-xs text-slate-400 hover:text-white transition-colors text-left py-1 border-l-2 border-transparent hover:border-primary pl-3">
                    {item}
                  </button>
                ))}
              </nav>
              <div className="mt-6 pt-6 border-t border-surface-border">
                <Link href="/download/data-recovery" className="block bg-accent hover:bg-accent-dark text-white text-xs font-semibold text-center py-3 rounded-full transition-all">
                  Download Free Recovery Tool
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
