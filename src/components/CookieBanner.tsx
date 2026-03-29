'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('datagenius-cookies');
    if (!accepted) {
      setTimeout(() => setVisible(true), 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('datagenius-cookies', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-3xl mx-auto bg-surface-card border border-surface-border rounded-2xl p-5 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-sm text-slate-300">
            We use cookies to improve your experience. By continuing, you agree to our{' '}
            <Link href="/privacy" className="text-primary-light hover:underline">Privacy Policy</Link>.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={() => setVisible(false)}
            className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-1"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="text-sm bg-primary hover:bg-primary-dark text-white font-semibold px-4 py-2 rounded-full transition-all"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
