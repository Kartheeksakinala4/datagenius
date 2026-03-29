import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface-dark border-t border-surface-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="6" fill="#1565C0" fillOpacity="0.15" />
                <circle cx="14" cy="14" r="3" fill="#10B981" />
                <circle cx="7" cy="7" r="2" fill="#1565C0" />
                <circle cx="21" cy="7" r="2" fill="#1565C0" />
                <circle cx="7" cy="21" r="2" fill="#1565C0" />
                <circle cx="21" cy="21" r="2" fill="#1565C0" />
                <line x1="7" y1="7" x2="14" y2="14" stroke="#1565C0" strokeWidth="1" strokeOpacity="0.6" />
                <line x1="21" y1="7" x2="14" y2="14" stroke="#1565C0" strokeWidth="1" strokeOpacity="0.6" />
                <line x1="7" y1="21" x2="14" y2="14" stroke="#1565C0" strokeWidth="1" strokeOpacity="0.6" />
                <line x1="21" y1="21" x2="14" y2="14" stroke="#1565C0" strokeWidth="1" strokeOpacity="0.6" />
              </svg>
              <span className="text-lg font-bold text-white">
                Data<span className="text-primary-light">Genius</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your Data. Recovered. Protected. Mastered. India&apos;s leading data recovery software and tools platform.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com/datagenius_in" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitter/X">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/datagenius-in" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://youtube.com/@datagenius" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://github.com/datagenius-in" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Products</h3>
            <ul className="space-y-3">
              {[
                { name: 'Data Recovery', href: '/products/data-recovery' },
                { name: 'Repair Suite', href: '/products/repair-suite' },
                { name: 'Recovery CRM', href: '/products/recovery-crm' },
                { name: 'CCTV Recovery', href: '/products/cctv-recovery' },
                { name: 'Pricing', href: '/pricing' },
                { name: 'Download', href: '/download/data-recovery' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              {[
                { name: 'Blog', href: '/blog' },
                { name: 'Newsletter', href: '/newsletter' },
                { name: 'Academy', href: '/academy' },
                { name: 'Storage Calculator', href: '/tools/storage-calculator' },
                { name: 'AI Recovery Advisor', href: '/tools/recovery-advisor' },
                { name: 'SMART Checker', href: '/tools/smart-checker' },
                { name: 'Support', href: '/support' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Contact', href: '/contact' },
                { name: 'Directory', href: '/directory' },
                { name: 'List Your Lab', href: '/directory/submit' },
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © 2026 DataGenius. All rights reserved. | Made with ❤️ in India
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500">We accept:</span>
            <div className="flex items-center gap-2">
              {['UPI', 'Razorpay', 'Visa', 'MC', 'Stripe'].map((payment) => (
                <span
                  key={payment}
                  className="text-xs bg-surface-card border border-surface-border text-slate-400 px-2 py-1 rounded font-mono"
                >
                  {payment}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
