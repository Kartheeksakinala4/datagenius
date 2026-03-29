import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl mb-6">💾</div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          <span className="gradient-text">404</span> — Page Not Found
        </h1>
        <p className="text-slate-400 text-lg mb-3">
          Uh oh — this page has gone missing!
        </p>
        <p className="text-slate-500 text-sm mb-10">
          Unlike data loss, this one&apos;s easy to fix. Use the links below to get back on track.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { href: '/', label: '🏠 Home' },
            { href: '/products/data-recovery', label: '💾 Data Recovery' },
            { href: '/blog', label: '📖 Blog' },
            { href: '/tools/recovery-advisor', label: '🤖 AI Advisor' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="glass-card rounded-xl px-4 py-3 text-sm text-slate-300 hover:text-white hover:border-primary/40 transition-all text-center"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="/" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3 rounded-full transition-all text-sm">
          ← Back to DataGenius
        </Link>
      </div>
    </div>
  );
}
