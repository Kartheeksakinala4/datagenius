'use client';

import { useState } from 'react';
import Link from 'next/link';

const categories = ['All', 'Data Recovery Tips', 'SSD Recovery', 'CCTV Recovery', 'Digital Forensics', 'Hardware Reviews', 'Storage Technologies'];

const categoryColors: Record<string, string> = {
  'Data Recovery Tips': '#2196f3',
  'SSD Recovery': '#7c3aed',
  'CCTV Recovery': '#059669',
  'Digital Forensics': '#d97706',
  'Hardware Reviews': '#dc2626',
  'Storage Technologies': '#0284c7',
};

const posts = [
  {
    slug: 'recover-data-dead-hard-drive',
    title: 'How to Recover Data from a Dead Hard Drive',
    excerpt: 'Complete guide for diagnosing and recovering data from HDDs that won\'t spin up, click, or are undetected. Step-by-step from triage to professional lab options.',
    category: 'Data Recovery Tips',
    author: 'Ravi Sharma',
    readTime: '8 min',
    date: 'Mar 15, 2026',
    featured: true,
  },
  {
    slug: 'hikvision-dvr-recovery-guide',
    title: 'Hikvision DVR Recovery: Complete 2026 Guide',
    excerpt: 'Step-by-step guide to recovering surveillance footage from Hikvision DVR systems with corrupted or damaged drives.',
    category: 'CCTV Recovery',
    author: 'Priya Nair',
    readTime: '12 min',
    date: 'Mar 10, 2026',
    featured: false,
  },
  {
    slug: 'ssd-recovery-techniques',
    title: 'Advanced SSD Recovery Techniques for 2026',
    excerpt: 'Deep dive into SSD architecture, FTL layer analysis, wear leveling, and step-by-step recovery from failed NVMe and SATA SSDs.',
    category: 'SSD Recovery',
    author: 'Arjun Mehta',
    readTime: '10 min',
    date: 'Mar 5, 2026',
    featured: false,
  },
  {
    slug: 'digital-forensics-best-practices',
    title: 'Digital Forensics Best Practices for 2026',
    excerpt: 'Chain of custody, forensic imaging standards, evidence documentation, and court-admissible recovery procedures.',
    category: 'Digital Forensics',
    author: 'Kavitha Reddy',
    readTime: '9 min',
    date: 'Feb 28, 2026',
    featured: false,
  },
  {
    slug: 'best-docking-stations-2026',
    title: 'Best Data Recovery Docking Stations in 2026',
    excerpt: 'We tested 8 professional docking stations on identical failure scenarios. Head-to-head comparison on speed, compatibility, and forensic features.',
    category: 'Hardware Reviews',
    author: 'Suresh Kumar',
    readTime: '11 min',
    date: 'Feb 22, 2026',
    featured: false,
  },
  {
    slug: 'nand-flash-storage-explained',
    title: 'NAND Flash Storage Explained: SLC, MLC, TLC & QLC',
    excerpt: 'A deep technical explainer on NAND cell types, their reliability trade-offs, and what this means for data recovery professionals.',
    category: 'Storage Technologies',
    author: 'Ravi Sharma',
    readTime: '7 min',
    date: 'Feb 17, 2026',
    featured: false,
  },
  {
    slug: 'raid-recovery-guide',
    title: 'RAID Recovery: Complete Step-by-Step Guide',
    excerpt: 'Recovering data from failed RAID 0, 1, 5, and 6 arrays. Stripe size detection, member disk ordering, and reconstruction techniques.',
    category: 'Data Recovery Tips',
    author: 'Arjun Mehta',
    readTime: '14 min',
    date: 'Feb 10, 2026',
    featured: false,
  },
  {
    slug: 'dahua-nvr-recovery',
    title: 'Dahua NVR Data Recovery: Step-by-Step',
    excerpt: 'How to recover footage from Dahua NVR systems using DHFS file system analysis. Covers XVR, NVR Lite, Pro, and Ultra models.',
    category: 'CCTV Recovery',
    author: 'Priya Nair',
    readTime: '11 min',
    date: 'Feb 5, 2026',
    featured: false,
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const featuredPost = posts.find((p) => p.featured)!;
  const filteredPosts = posts.filter((p) => {
    if (activeCategory === 'All') return !p.featured;
    return p.category === activeCategory && !p.featured;
  });

  return (
    <div style={{ backgroundColor: '#060f1f' }}>
      {/* Hero */}
      <section
        className="py-16"
        style={{
          background: 'linear-gradient(180deg, rgba(21, 101, 192, 0.12) 0%, rgba(6, 15, 31, 0) 100%)',
          borderBottom: '1px solid rgba(30, 58, 95, 0.6)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: 'rgba(21, 101, 192, 0.15)', border: '1px solid rgba(33, 150, 243, 0.25)', color: '#90caf9' }}
            >
              Knowledge Base
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Data Genius Blog</h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
              Expert guides, technical tutorials, and recovery tips for data recovery professionals, forensic investigators, and storage specialists.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  backgroundColor: activeCategory === cat ? '#1565c0' : 'rgba(13, 31, 60, 0.7)',
                  border: `1px solid ${activeCategory === cat ? '#1565c0' : 'rgba(30, 58, 95, 0.7)'}`,
                  color: activeCategory === cat ? 'white' : '#64748b',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">

          {/* Main column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured */}
            {activeCategory === 'All' && (
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group block rounded-3xl overflow-hidden transition-all"
                style={{
                  background: 'linear-gradient(135deg, rgba(13, 31, 60, 0.85) 0%, rgba(10, 22, 40, 0.9) 100%)',
                  border: '1px solid rgba(30, 58, 95, 0.8)',
                }}
              >
                <div className="flex flex-col sm:flex-row">
                  <div
                    className="sm:w-56 flex-shrink-0 flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(21, 101, 192, 0.25) 0%, rgba(13, 71, 161, 0.15) 100%)',
                      minHeight: '180px',
                    }}
                  >
                    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'rgba(66, 165, 245, 0.4)' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: 'rgba(21, 101, 192, 0.15)',
                          color: '#90caf9',
                          border: '1px solid rgba(33, 150, 243, 0.25)',
                        }}
                      >
                        Featured
                      </span>
                      <span className="text-xs font-semibold" style={{ color: categoryColors[featuredPost.category] }}>
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors leading-snug">
                      {featuredPost.title}
                    </h2>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748b' }}>{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: 'rgba(21, 101, 192, 0.2)', color: '#42a5f5' }}>
                          {featuredPost.author[0]}
                        </div>
                        <span className="text-xs" style={{ color: '#475569' }}>{featuredPost.author} • {featuredPost.date} • {featuredPost.readTime} read</span>
                      </div>
                      <span className="text-xs font-semibold flex items-center gap-1" style={{ color: '#42a5f5' }}>
                        Read More →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Post list */}
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col sm:flex-row rounded-3xl overflow-hidden transition-all"
                style={{
                  background: 'linear-gradient(135deg, rgba(13, 31, 60, 0.8) 0%, rgba(10, 22, 40, 0.85) 100%)',
                  border: '1px solid rgba(30, 58, 95, 0.7)',
                }}
              >
                <div
                  className="sm:w-48 flex-shrink-0 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${categoryColors[post.category] || '#2196f3'}15 0%, rgba(6, 15, 31, 0.3) 100%)`,
                    minHeight: '150px',
                  }}
                >
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: `${categoryColors[post.category] || '#42a5f5'}60` }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1 p-6">
                  <span className="text-xs font-semibold mb-2 block" style={{ color: categoryColors[post.category] || '#42a5f5' }}>
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748b' }}>{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: '#475569' }}>{post.author} • {post.date} • {post.readTime} read</span>
                    <span className="text-xs font-semibold hidden sm:block" style={{ color: '#42a5f5' }}>Read More →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="mt-12 lg:mt-0">
            <div className="sidebar-sticky space-y-6">

              {/* Newsletter */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(21, 101, 192, 0.12) 0%, rgba(13, 31, 60, 0.85) 100%)',
                  border: '1px solid rgba(33, 150, 243, 0.2)',
                }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(21, 101, 192, 0.2)', color: '#42a5f5' }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-sm mb-4" style={{ color: '#64748b' }}>
                  Weekly recovery tips, technical guides, and product updates delivered to your inbox.
                </p>
                {subscribed ? (
                  <div className="text-center py-3 rounded-xl text-sm font-medium" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    ✓ Subscribed! Welcome.
                  </div>
                ) : (
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-sm px-4 py-2.5 rounded-xl outline-none"
                      style={{ backgroundColor: 'rgba(6, 15, 31, 0.6)', border: '1px solid rgba(30, 58, 95, 0.7)', color: '#e2e8f0' }}
                    />
                    <button
                      onClick={() => email && setSubscribed(true)}
                      className="w-full text-sm font-semibold py-2.5 rounded-xl"
                      style={{ background: 'linear-gradient(135deg, #1565c0 0%, #1976d2 100%)', color: 'white' }}
                    >
                      Subscribe
                    </button>
                  </div>
                )}
              </div>

              {/* Recent Posts */}
              <div className="rounded-2xl p-6" style={{ background: 'rgba(13, 31, 60, 0.7)', border: '1px solid rgba(30, 58, 95, 0.7)' }}>
                <h3 className="text-base font-bold text-white mb-5">Recent Posts</h3>
                <div className="space-y-4">
                  {posts.slice(0, 5).map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="flex items-start gap-3 group">
                      <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: `${categoryColors[post.category] || '#2196f3'}15` }}>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: categoryColors[post.category] || '#42a5f5' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white group-hover:text-blue-300 transition-colors leading-snug mb-0.5">{post.title}</p>
                        <p className="text-xs" style={{ color: '#475569' }}>{post.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Articles */}
              <div className="rounded-2xl p-6" style={{ background: 'rgba(13, 31, 60, 0.7)', border: '1px solid rgba(30, 58, 95, 0.7)' }}>
                <h3 className="text-base font-bold text-white mb-5">Popular Articles</h3>
                <div className="space-y-3">
                  {posts.slice(2, 7).map((post, i) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="flex items-center gap-3 group">
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ backgroundColor: 'rgba(21, 101, 192, 0.15)', color: '#42a5f5' }}>
                        {i + 1}
                      </span>
                      <p className="text-xs font-medium text-white group-hover:text-blue-300 transition-colors leading-snug">{post.title}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="rounded-2xl p-6" style={{ background: 'rgba(13, 31, 60, 0.7)', border: '1px solid rgba(30, 58, 95, 0.7)' }}>
                <h3 className="text-base font-bold text-white mb-5">Categories</h3>
                <div className="space-y-2">
                  {categories.slice(1).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className="w-full flex items-center justify-between text-sm px-3 py-2 rounded-lg transition-all text-left"
                      style={{
                        backgroundColor: activeCategory === cat ? 'rgba(21, 101, 192, 0.15)' : 'transparent',
                        color: activeCategory === cat ? '#90caf9' : '#64748b',
                        border: `1px solid ${activeCategory === cat ? 'rgba(33, 150, 243, 0.25)' : 'transparent'}`,
                      }}
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: categoryColors[cat] || '#64748b' }} />
                        {cat}
                      </span>
                      <span className="text-xs" style={{ color: '#475569' }}>
                        {posts.filter((p) => p.category === cat).length}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
