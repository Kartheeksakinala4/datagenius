import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles, getArticle } from '@/lib/blog-articles';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: 'Article Not Found — DataGenius Blog' };
  return {
    title: `${article.title} | DataGenius Blog`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://datagenius.in/blog/${article.slug}`,
      siteName: 'DataGenius',
      type: 'article',
    },
  };
}

/* ─── Full article bodies ─────────────────────────────────────────────── */

function ArticleBodyDeadHDD() {
  return (
    <div className="prose-content text-slate-300 space-y-4">
      <p>A dead hard drive is one of the most stressful data loss scenarios. Unlike an accidentally deleted file, a drive failure can mean all your data is inaccessible with no obvious path to recovery. But don&apos;t panic — in most cases, data recovery is possible, and the key to success is acting correctly in the first few minutes.</p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Step 1: Identify the Type of Failure</h2>
      <p>Before attempting any recovery, you need to understand <em>why</em> your drive is dead. Hard drive failures fall into four categories:</p>
      <div className="grid sm:grid-cols-2 gap-4 my-6 not-prose">
        {[
          { type: 'Logical Failure', icon: '🖥️', desc: 'Drive is detected but files are missing, partition is corrupt, or file system errors occur. Usually recoverable with software.', difficulty: 'Easy', color: 'bg-accent/10 border-accent/20' },
          { type: 'Firmware Failure', icon: '⚙️', desc: "Drive's own operating system has become corrupt. Drive may spin up but not be detected correctly. Requires specialist tools.", difficulty: 'Medium', color: 'bg-amber/10 border-amber/20' },
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
            "Do NOT run recovery software on the same drive you're recovering FROM",
            'Do NOT open the drive outside a cleanroom — dust particles destroy platters',
            'Do NOT freeze the drive — this is a myth that causes condensation damage',
          ].map((w) => (
            <li key={w} className="flex items-start gap-2">
              <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>{w}
            </li>
          ))}
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Step 3: Software Recovery (Logical Failures)</h2>
      <p>If your drive is detected by your computer but files are missing or the partition is corrupt, software recovery has a high success rate.</p>
      <ol className="space-y-4 my-4 text-sm">
        {[
          ['Download DataGenius Data Recovery', "Install it on a different drive — never on the drive you're recovering from. The free version lets you scan and preview files before purchasing."],
          ['Select the affected drive and run a Deep Scan', 'The quick scan takes 5–10 minutes. The deep scan can take hours but finds significantly more files — always use deep scan for dead drives.'],
          ['Preview recoverable files', 'DataGenius lets you preview photos, documents, and videos before recovery. This tells you if your files are intact before you buy a license.'],
          ['Recover to a different drive', 'Always recover to a separate drive or external storage. Recovering to the same drive can overwrite files that have not been recovered yet.'],
        ].map(([title, desc], i) => (
          <li key={i} className="flex gap-3">
            <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary-light font-bold text-xs flex-shrink-0 mt-0.5">{i + 1}</span>
            <div>
              <p className="font-semibold text-white">{title}</p>
              <p className="text-slate-400 mt-0.5">{desc}</p>
            </div>
          </li>
        ))}
      </ol>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Step 4: When to Call a Professional</h2>
      <p>Software recovery won&apos;t work for physical failures. You need a professional clean-room lab if:</p>
      <ul className="space-y-2 text-sm my-4">
        {[
          'The drive makes clicking, grinding, or beeping noises',
          'The drive is not detected at all (not even in BIOS/UEFI)',
          'The drive was dropped, got wet, or was exposed to fire',
          'Software recovery returns 0 files after a full deep scan',
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-amber mt-0.5 flex-shrink-0">⚠</span>{item}
          </li>
        ))}
      </ul>
      <p>Use our <Link href="/directory" className="text-primary-light hover:underline">Recovery Lab Directory</Link> to find a certified professional near you.</p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Prevention &amp; Backups</h2>
      <p>Implement the <strong className="text-white">3-2-1 backup rule</strong>: 3 copies of your data, on 2 different media types, with 1 offsite. Read our complete guide: <Link href="/blog/3-2-1-backup-strategy" className="text-primary-light hover:underline">3-2-1 Backup Strategy →</Link></p>
    </div>
  );
}

function ArticleBodyHikvision() {
  return (
    <div className="prose-content text-slate-300 space-y-4">
      <p>Hikvision is the world&apos;s largest CCTV manufacturer, with millions of DVRs and NVRs deployed across homes, offices, and factories in India. When a Hikvision DVR fails — whether from a power surge, hard drive failure, or corrupted firmware — recovering the footage requires specialised knowledge of Hikvision&apos;s proprietary storage format.</p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Understanding Hikvision Storage</h2>
      <p>Hikvision DVRs do not use a standard file system like NTFS or FAT32. They use a proprietary format that stores video in continuous streams with custom index tables. This means standard data recovery software cannot read Hikvision drives without specialised support — which is why DataGenius includes a dedicated CCTV Recovery module.</p>
      <div className="glass-card rounded-xl p-5 border border-primary/20 my-6 not-prose">
        <p className="text-primary-light font-semibold mb-2 text-sm">📋 Supported Hikvision Models</p>
        <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
          {['DS-7100 Series (DVR)', 'DS-7200 Series (DVR)', 'DS-7300 Series (DVR)', 'DS-7600 Series (DVR)', 'DS-7700 Series (NVR)', 'DS-9600 Series (NVR)', 'iDS-7200 AI DVR', 'DS-E Series (eDVR)'].map((m) => (
            <span key={m} className="flex items-center gap-1"><span className="text-accent">✓</span>{m}</span>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Common Failure Scenarios</h2>
      <p>Hikvision DVR failures typically fall into three categories: hard drive failure (most common), power surge damage, or firmware corruption. In all three cases, the video data may still be intact on the drive even when the DVR itself won&apos;t boot.</p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Using DataGenius CCTV Module</h2>
      <p>The DataGenius CCTV Recovery module can read Hikvision drives directly on your Windows PC. Simply remove the hard drive from the DVR, connect it via USB-to-SATA adapter, launch the CCTV module, and run a scan. The software will decode the proprietary index, list all recoverable channels and timeframes, and let you export footage as standard MP4 files.</p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Manual Recovery Steps</h2>
      <ol className="space-y-3 text-sm my-4">
        {[
          'Power off the DVR completely and remove the hard drive',
          'Connect the drive to a Windows PC using a USB-to-SATA adapter',
          'Launch DataGenius → CCTV Recovery module → Select Hikvision',
          'Run a full scan and wait for the channel/timeframe index to rebuild',
          'Select the footage you need by camera channel and date/time range',
          'Export to MP4 format on a separate drive',
        ].map((step, i) => (
          <li key={i} className="flex gap-3">
            <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary-light font-bold text-xs flex-shrink-0 mt-0.5">{i + 1}</span>
            <span className="text-slate-300">{step}</span>
          </li>
        ))}
      </ol>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">When to Call a Lab</h2>
      <p>If the drive itself is physically damaged (clicking, not detected), no software solution will work. Use our <Link href="/directory" className="text-primary-light hover:underline">Recovery Lab Directory</Link> to find a specialist. Many labs have experience with CCTV drive formats and can recover footage from physically damaged Hikvision drives in a cleanroom environment.</p>
    </div>
  );
}

function ArticleBodyGeneric({ title, description, tocItems }: { title: string; description: string; tocItems: string[] }) {
  return (
    <div className="prose-content text-slate-300 space-y-4">
      <p>{description} This guide covers everything you need to know, from diagnosing the problem to executing the correct recovery steps.</p>
      <p>Whether you&apos;re a technical professional or a first-time user, follow the steps below carefully. Acting quickly and correctly dramatically increases your chances of a full recovery.</p>

      {tocItems.map((section, i) => (
        <div key={i}>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">{section}</h2>
          {i === 0 && (
            <p>This is the most critical first step. Before taking any action, take a moment to assess the situation carefully. Rushing into recovery attempts without proper diagnosis is one of the most common causes of permanent data loss. Document what happened — when the problem started, any error messages shown, and any actions already taken.</p>
          )}
          {i === 1 && (
            <p>Once you understand the problem, follow the recommended procedure systematically. Make sure you have the right tools ready before you begin. Having a destination drive prepared in advance is essential — you will need somewhere to save recovered files that is separate from the source drive.</p>
          )}
          {i === 2 && (
            <p>DataGenius provides specialised tools for exactly this scenario. Download the relevant product from our <Link href="/download/data-recovery" className="text-primary-light hover:underline">downloads page</Link>, install it on a healthy drive (not the one you are recovering), and follow the guided recovery wizard. The free version allows you to scan and preview all recoverable files before purchasing.</p>
          )}
          {i === 3 && (
            <p>After recovery, verify your files are intact by opening a sample from each file type. Store the recovered data in at least two locations immediately — do not rely on a single destination. Update your backup strategy to prevent the same loss from occurring again.</p>
          )}
          {i >= 4 && (
            <p>Implementing this step ensures long-term data safety and reduces the risk of needing emergency recovery in the future. Follow our recommended best practices and check back regularly for updated guides as technology evolves.</p>
          )}
        </div>
      ))}

      <div className="bg-accent/10 border border-accent/20 rounded-xl p-5 my-6 not-prose">
        <p className="text-accent font-semibold mb-2 text-sm">💡 Pro Tip</p>
        <p className="text-slate-300 text-sm">Always recover data to a drive that is different from the source. Never install recovery software on the same drive you are recovering from. This is the single most important rule in data recovery.</p>
      </div>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Need Professional Help?</h2>
      <p>If software recovery does not resolve your issue, a certified data recovery lab may be able to help. Use our <Link href="/directory" className="text-primary-light hover:underline">Recovery Lab Directory</Link> to find a vetted professional near you. Most labs offer free diagnostics and a no-data, no-fee guarantee.</p>
    </div>
  );
}

/* ─── Article page component ────────────────────────────────────────────── */

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const relatedArticles = article.relatedSlugs
    .map((s) => articles.find((a) => a.slug === s))
    .filter(Boolean) as typeof articles;

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
            <span className="text-slate-400 truncate max-w-xs">{article.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="lg:grid lg:grid-cols-4 lg:gap-10">
          {/* Article */}
          <article className="lg:col-span-3">
            {/* Header */}
            <div className="mb-10">
              <span className="inline-block bg-blue-500/10 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">{article.category}</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">{article.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary-light font-bold text-xs">DG</div>
                  <div>
                    <span className="text-slate-300 font-medium">DataGenius Team</span>
                    <span className="block text-xs">Data Recovery Engineers</span>
                  </div>
                </div>
                <span>·</span>
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.readTime} read</span>
              </div>
              {/* Share buttons */}
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-500">Share:</span>
                {['Twitter', 'LinkedIn', 'WhatsApp', 'Copy Link'].map((s) => (
                  <button key={s} className="text-xs border border-surface-border rounded-full px-3 py-1.5 text-slate-400 hover:border-primary/40 hover:text-white transition-all">{s}</button>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="h-64 bg-gradient-to-br from-primary/30 to-accent/10 rounded-2xl flex items-center justify-center mb-10">
              <span className="text-8xl">{article.heroEmoji}</span>
            </div>

            {/* Article Body */}
            {article.slug === 'recover-data-dead-hard-drive' && <ArticleBodyDeadHDD />}
            {article.slug === 'hikvision-dvr-recovery-guide' && <ArticleBodyHikvision />}
            {article.slug !== 'recover-data-dead-hard-drive' && article.slug !== 'hikvision-dvr-recovery-guide' && (
              <ArticleBodyGeneric title={article.title} description={article.description} tocItems={article.tocItems} />
            )}

            {/* Newsletter CTA */}
            <div className="bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 rounded-2xl p-6 my-8">
              <p className="text-xs font-semibold text-primary-light uppercase tracking-wider mb-2">Data Pulse Newsletter</p>
              <h3 className="text-lg font-bold text-white mb-2">Get weekly recovery tips in your inbox</h3>
              <p className="text-slate-400 text-sm mb-4">Join 10,000+ subscribers. Every Thursday. Free forever.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="Your email..." className="flex-1 bg-surface-dark/50 border border-surface-border rounded-full px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none" />
                <button className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-5 py-2 rounded-full transition-all">Subscribe</button>
              </div>
            </div>

            {/* Related Posts */}
            {relatedArticles.length > 0 && (
              <div className="mt-12 border-t border-surface-border pt-10">
                <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
                <div className="grid sm:grid-cols-3 gap-5">
                  {relatedArticles.map((p) => (
                    <Link key={p.slug} href={`/blog/${p.slug}`} className="group glass-card rounded-xl p-5 hover:border-white/20 transition-all">
                      <span className="text-xs font-semibold text-accent">{p.category}</span>
                      <h4 className="text-sm font-semibold text-white mt-2 group-hover:text-primary-light transition-colors leading-snug">{p.title}</h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 glass-card rounded-2xl p-6">
              <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">On This Page</h3>
              <nav className="space-y-2">
                {article.tocItems.map((item) => (
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
