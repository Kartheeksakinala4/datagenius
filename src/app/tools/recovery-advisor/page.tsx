'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const sampleConversation = [
  {
    role: 'assistant',
    text: "Hi! I'm the DataGenius AI Recovery Advisor. Describe your data loss situation and I'll help you recover your data step by step.",
  },
  {
    role: 'user',
    text: 'My external hard drive is not showing up on my laptop. I accidentally dropped it and now it makes a clicking noise.',
  },
  {
    role: 'assistant',
    text: `**Diagnosis: Physical Hard Drive Failure (Clicking = Mechanical Damage)**

⚠️ **CRITICAL — Stop using the drive immediately.** The clicking sound (known as the "click of death") indicates the read/write heads are physically damaged. Every additional spin increases the risk of permanent data loss.

**Recovery Difficulty: 🔴 Hard — Professional Assistance Recommended**

**What NOT to do:**
- Do NOT try to open the drive yourself
- Do NOT run chkdsk or format the drive
- Do NOT repeatedly plug/unplug the drive
- Do NOT freeze the drive (outdated myth that causes more damage)

**Your Step-by-Step Recovery Plan:**
1. **Stop immediately** — disconnect the drive and set it aside
2. **Do not attempt DIY software recovery** — software cannot fix physical head damage
3. **Find a clean-room data recovery lab** — use our [Recovery Lab Directory](/directory) to locate a certified lab near you
4. **Get a quote** — reputable labs offer free diagnostics. Budget ₹5,000–₹25,000 for professional recovery depending on severity
5. **Ask for a "no data, no fee" guarantee** before authorising any work

**If budget is a concern:** DataGenius Data Recovery software can attempt a read on physically marginal drives (with caution). [Download it here](/download/data-recovery) and run a scan — if the drive mounts briefly, you may be able to recover data yourself.`,
  },
];

export default function RecoveryAdvisorPage() {
  const [messages, setMessages] = useState(sampleConversation);
  const [input, setInput] = useState('');
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const aiResponses: Record<string, string> = {
    default: `**Analysing your situation...**

Based on what you've described, here's a recovery plan:

**Difficulty: 🟡 Medium**

**Recommended Steps:**
1. Stop using the affected drive/device immediately to prevent overwriting
2. Download DataGenius Data Recovery (free) and run a deep scan
3. Preview recoverable files before purchasing a license
4. Save recovered files to a **different** drive — never recover to the same drive

**Key Tools:**
- [DataGenius Data Recovery](/download/data-recovery) — for deleted/formatted files
- [DataGenius Repair Suite](/download/repair-suite) — for corrupted files you still have

Would you like more specific guidance? Describe the exact symptoms (any error messages, sounds, or what happened before the data loss).`,
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    setTimeout(() => {
      const aiMsg = { role: 'assistant', text: aiResponses.default };
      setMessages((prev) => [...prev, aiMsg]);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-surface-dark">
      {/* Hero */}
      <section className="border-b border-surface-border py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" /> Powered by Claude AI
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">AI Recovery Advisor</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Describe your data loss situation in plain English. Get an instant diagnosis, difficulty rating, and step-by-step recovery plan.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6 text-sm text-slate-400">
            {['Hard drive failure', 'Deleted files', 'Formatted drive', 'CCTV footage lost', 'Corrupted SD card', 'RAID failure'].map((q) => (
              <button key={q} onClick={() => setInput(q)} className="bg-white/5 border border-white/10 rounded-full px-3 py-1.5 hover:border-primary/40 hover:text-white transition-all text-xs">
                {q}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Messages */}
          <div className="space-y-6 mb-6">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div className="w-9 h-9 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-lg">🤖</span>
                  </div>
                )}
                <div className={`max-w-2xl rounded-2xl px-5 py-4 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-primary/20 border border-primary/30 text-white'
                    : 'glass-card text-slate-300'
                }`}>
                  {msg.text.split('\n').map((line, j) => {
                    if (line.startsWith('**') && line.endsWith('**')) {
                      return <p key={j} className="font-bold text-white mb-1">{line.replace(/\*\*/g, '')}</p>;
                    }
                    if (line.startsWith('- ') || line.match(/^\d+\./)) {
                      return <p key={j} className="ml-3 mb-0.5">{line}</p>;
                    }
                    if (line.startsWith('⚠️') || line.startsWith('**')) {
                      return <p key={j} className="font-semibold text-amber mb-1">{line.replace(/\*\*/g, '')}</p>;
                    }
                    return line ? <p key={j} className="mb-1">{line}</p> : <br key={j} />;
                  })}
                </div>
                {msg.role === 'user' && (
                  <div className="w-9 h-9 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm text-accent font-bold">U</span>
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="flex gap-4">
                <div className="w-9 h-9 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-lg">🤖</span>
                </div>
                <div className="glass-card rounded-2xl px-5 py-4">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="glass-card rounded-2xl p-4">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
              placeholder="Describe your data loss situation... (e.g. 'My laptop's SSD died after a power outage, I need to recover my project files')"
              rows={3}
              className="w-full bg-transparent text-white placeholder-slate-500 text-sm resize-none focus:outline-none mb-3"
            />
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-500">Press Enter to send · Shift+Enter for new line</p>
              <button
                onClick={handleSend}
                disabled={!input.trim() || loading}
                className="bg-accent hover:bg-accent-dark disabled:opacity-40 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all"
              >
                Send →
              </button>
            </div>
          </div>

          {/* Email plan */}
          <div className="mt-6 glass-card rounded-2xl p-5">
            <p className="text-sm font-semibold text-white mb-3">📧 Want this recovery plan emailed to you?</p>
            {emailSent ? (
              <p className="text-accent text-sm">✓ Sent! Check your inbox.</p>
            ) : (
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary/50"
                />
                <button
                  onClick={() => email && setEmailSent(true)}
                  className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2 rounded-full transition-all"
                >
                  Send Plan
                </button>
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-slate-600 text-center mt-6">
            AI responses are for guidance only. For critical data, always consult a certified recovery professional.{' '}
            <Link href="/directory" className="text-primary-light hover:underline">Find a lab near you →</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
