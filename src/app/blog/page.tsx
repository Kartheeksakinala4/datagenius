import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — Data Recovery Guides & Storage Tips | DataGenius',
  description: 'Expert data recovery guides, storage news, product reviews, and data protection tips. Learn how to recover deleted files, fix corrupted data, and prevent data loss.',
  openGraph: {
    title: 'DataGenius Blog — Data Recovery Knowledge Hub',
    description: 'Expert guides, tutorials, and recovery tips from India\'s leading data recovery platform.',
    url: 'https://datagenius.in/blog',
    siteName: 'DataGenius',
  },
};

const categories = ['All', 'Recovery Guides', 'CCTV Recovery', 'Product Reviews', 'Data Protection', 'Storage News', 'Industry Analysis'];

const posts = [
  { slug: 'recover-data-dead-hard-drive', title: 'How to Recover Data from a Dead Hard Drive', excerpt: 'Complete guide for diagnosing and recovering data from HDDs that won\'t spin up, click, or are undetected by your computer.', category: 'Recovery Guides', readTime: '8 min', date: 'Mar 15, 2026', featured: true },
  { slug: 'hikvision-dvr-recovery-guide', title: 'Hikvision DVR Recovery: Complete 2026 Guide', excerpt: 'Step-by-step guide to recovering surveillance footage from Hikvision DVR systems with corrupted or damaged hard drives.', category: 'CCTV Recovery', readTime: '12 min', date: 'Mar 10, 2026', featured: false },
  { slug: 'best-external-hard-drives-2026', title: 'Best External Hard Drives for Backup in 2026', excerpt: 'We tested 12 external hard drives. Here are the best options for backup at every price point, from ₹3,000 to ₹15,000.', category: 'Product Reviews', readTime: '6 min', date: 'Mar 5, 2026', featured: false },
  { slug: '3-2-1-backup-strategy', title: '3-2-1 Backup Strategy: The Only Guide You Need', excerpt: 'The 3-2-1 rule is the gold standard for data protection. Learn how to implement it on any budget and never lose data again.', category: 'Data Protection', readTime: '5 min', date: 'Feb 28, 2026', featured: false },
  { slug: 'smart-attributes-explained', title: 'SMART Attributes Explained: Know When Your Drive Is Dying', excerpt: 'A plain-English breakdown of every critical SMART attribute — what they mean, which ones to watch, and what values are dangerous.', category: 'Recovery Guides', readTime: '10 min', date: 'Feb 22, 2026', featured: false },
  { slug: 'recover-formatted-sd-card', title: 'How to Recover Data from a Formatted SD Card', excerpt: 'Accidentally formatted your SD card? Don\'t panic. Here\'s exactly what to do — and what NOT to do — in the first 30 minutes.', category: 'Recovery Guides', readTime: '7 min', date: 'Feb 17, 2026', featured: false },
  { slug: 'top-5-data-recovery-software-2026', title: 'Top 5 Data Recovery Software Compared (2026)', excerpt: 'We tested DataGenius, Recuva, Disk Drill, EaseUS, and TestDisk on identical failure scenarios. The results may surprise you.', category: 'Product Reviews', readTime: '14 min', date: 'Feb 10, 2026', featured: false },
  { slug: 'ransomware-recovery', title: 'Ransomware Recovery: What To Do When Files Are Encrypted', excerpt: 'Your files are encrypted and attackers want ransom. Here\'s the decision tree: pay vs. recover — and your realistic options.', category: 'Data Protection', readTime: '9 min', date: 'Feb 5, 2026', featured: false },
  { slug: 'dahua-nvr-recovery', title: 'Dahua NVR Data Recovery: Step-by-Step Guide', excerpt: 'How to recover footage from Dahua NVR systems using DHFS file system analysis. Covers XVR, NVR Lite, Pro, and Ultra models.', category: 'CCTV Recovery', readTime: '11 min', date: 'Jan 30, 2026', featured: false },
  { slug: 'ssd-vs-hdd-reliability-2026', title: 'SSD vs HDD: Which Is More Reliable in 2026?', excerpt: 'Backblaze\'s 2025 failure data + our own 3-year study. The answer is more nuanced than you think — it depends on workload.', category: 'Storage News', readTime: '8 min', date: 'Jan 25, 2026', featured: false },
  { slug: 'recover-corrupted-excel', title: 'How to Recover Corrupted Excel Files (5 Methods)', excerpt: 'Excel file won\'t open? Shows "file corrupted" error? Here are 5 methods ranked from free DIY to professional repair tools.', category: 'Recovery Guides', readTime: '6 min', date: 'Jan 20, 2026', featured: false },
  { slug: 'cp-plus-dvr-recovery', title: 'CP Plus DVR Recovery: Complete Guide', excerpt: 'India\'s most popular CCTV brand uses a proprietary file system. Here\'s how to recover footage from CP Plus Indigo and Cosmic series.', category: 'CCTV Recovery', readTime: '9 min', date: 'Jan 15, 2026', featured: false },
];

const categoryColors: Record<string, string> = {
  'Recovery Guides': 'bg-blue-500/10 text-blue-400',
  'CCTV Recovery': 'bg-purple-500/10 text-purple-400',
  'Product Reviews': 'bg-amber/10 text-amber',
  'Data Protection': 'bg-red-500/10 text-red-400',
  'Storage News': 'bg-accent/10 text-accent',
  'Industry Analysis': 'bg-slate-500/10 text-slate-400',
};

export default function BlogPage() {
  const featuredPost = posts.find((p) => p.featured)!;
  const otherPosts = posts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-surface-dark">
      {/* Hero */}
      <section className="border-b border-surface-border py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-primary/10 text-primary-light rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-4">
              Knowledge Hub
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">Data Recovery Blog</h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Expert guides, storage news, product reviews, and recovery tips. Updated every week by data recovery professionals.
            </p>
          </div>
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button key={cat} className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                cat === 'All'
                  ? 'bg-primary text-white border-primary'
                  : 'border-surface-border text-slate-400 hover:border-primary/40 hover:text-white'
              }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="lg:grid lg:grid-cols-3 lg:gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Post */}
            <Link href={`/blog/${featuredPost.slug}`} className="group block glass-card rounded-2xl overflow-hidden hover:border-white/20 transition-all mb-8">
              <div className="h-52 bg-gradient-to-br from-primary/40 to-accent/20 flex items-center justify-center relative">
                <span className="text-7xl">💾</span>
                <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">Featured</span>
              </div>
              <div className="p-6">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryColors[featuredPost.category]}`}>{featuredPost.category}</span>
                <h2 className="text-xl font-bold text-white mt-3 mb-2 group-hover:text-primary-light transition-colors">{featuredPost.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{featuredPost.date}</span>
                  <span>{featuredPost.readTime} read</span>
                </div>
              </div>
            </Link>

            {/* Posts Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {otherPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group glass-card rounded-2xl overflow-hidden hover:border-white/20 transition-all hover:-translate-y-1">
                  <div className="h-36 bg-gradient-to-br from-surface-card to-surface-dark flex items-center justify-center text-4xl">
                    {post.category === 'CCTV Recovery' ? '📷' : post.category === 'Product Reviews' ? '⭐' : post.category === 'Data Protection' ? '🛡️' : post.category === 'Storage News' ? '📰' : '🔍'}
                  </div>
                  <div className="p-5">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[post.category] || 'bg-slate-500/10 text-slate-400'}`}>{post.category}</span>
                    <h3 className="text-sm font-bold text-white mt-2 mb-2 leading-snug group-hover:text-primary-light transition-colors">{post.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-slate-600">
                      <span>{post.date}</span>
                      <span>{post.readTime} read</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="mt-10 lg:mt-0 space-y-6">
            {/* Newsletter */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-bold text-white mb-2">📬 Data Pulse Newsletter</h3>
              <p className="text-slate-400 text-sm mb-4">Weekly recovery tips & storage news. Join 10,000+ subscribers.</p>
              <input type="email" placeholder="Your email..." className="w-full bg-surface-dark/50 border border-surface-border rounded-full px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 mb-3" />
              <button className="w-full bg-accent hover:bg-accent-dark text-white text-sm font-semibold py-2.5 rounded-full transition-all">Subscribe Free</button>
            </div>

            {/* Popular Posts */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-bold text-white mb-4">🔥 Most Popular</h3>
              <div className="space-y-4">
                {posts.slice(0, 5).map((p, i) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="flex gap-3 group">
                    <span className="text-2xl font-bold text-surface-border flex-shrink-0 leading-none mt-0.5">0{i + 1}</span>
                    <div>
                      <p className="text-sm text-slate-300 group-hover:text-white transition-colors leading-snug">{p.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{p.readTime} read</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-bold text-white mb-4">📂 Categories</h3>
              <div className="space-y-2">
                {categories.filter(c => c !== 'All').map((cat) => (
                  <button key={cat} className="flex items-center justify-between w-full text-sm text-slate-400 hover:text-white transition-colors py-1 border-b border-surface-border/30 last:border-0">
                    <span>{cat}</span>
                    <span className="text-xs text-slate-600">{posts.filter(p => p.category === cat).length} posts</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
