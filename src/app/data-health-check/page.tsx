'use client';
import { useState } from 'react';
import Link from 'next/link';

const questions = [
  {
    id: 'backup',
    question: 'Do you have an automatic backup running right now?',
    options: [
      { label: 'Yes — automated and tested', score: 0 },
      { label: "Yes — but I haven't tested it", score: 1 },
      { label: 'Manual backups occasionally', score: 2 },
      { label: 'No backup at all', score: 3 },
    ],
  },
  {
    id: 'age',
    question: 'How old are the hard drives in your main computer?',
    options: [
      { label: 'Less than 2 years old', score: 0 },
      { label: '2–4 years old', score: 1 },
      { label: '4–6 years old', score: 2 },
      { label: "I don't know / over 6 years", score: 3 },
    ],
  },
  {
    id: 'symptoms',
    question: 'Have you noticed any of these recently?',
    options: [
      { label: 'No issues at all', score: 0 },
      { label: 'Slower than usual', score: 1 },
      { label: 'Strange sounds or long load times', score: 2 },
      { label: 'Files missing or drive not detected', score: 3 },
    ],
  },
  {
    id: 'copies',
    question: 'How many copies of your important data exist?',
    options: [
      { label: '3+ copies in different locations', score: 0 },
      { label: '2 copies (e.g., external + laptop)', score: 1 },
      { label: 'Only on my main device', score: 2 },
      { label: "I'm honestly not sure", score: 3 },
    ],
  },
  {
    id: 'last',
    question: 'When did you last successfully restore a file from backup?',
    options: [
      { label: 'In the last 3 months', score: 0 },
      { label: 'In the last year', score: 1 },
      { label: 'Never tested it', score: 2 },
      { label: "I don't have a backup to test", score: 3 },
    ],
  },
];

function getRisk(total: number) {
  if (total <= 2)  return { label: 'Low Risk', color: '#059669', bg: '#D1FAE5', desc: 'Your data is well-protected. Keep it up and consider a maintenance plan to stay ahead.' };
  if (total <= 6)  return { label: 'Moderate Risk', color: '#D97706', bg: '#FEF3C7', desc: 'There are some gaps in your protection. A few changes could significantly reduce your risk.' };
  if (total <= 10) return { label: 'High Risk', color: '#DC2626', bg: '#FEE2E2', desc: 'Your data is at serious risk. We strongly recommend a professional assessment before anything goes wrong.' };
  return { label: 'Critical Risk', color: '#7F1D1D', bg: '#FCA5A5', desc: 'Immediate attention needed. Contact us today — your data may already be at risk.' };
}

export default function DataHealthCheckPage() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const answered = Object.keys(answers).length;
  const risk = getRisk(totalScore);

  return (
    <>
      <section className="bg-hero section-pad">
        <div className="container-xl">
          <div className="max-w-2xl mx-auto text-center">
            <span className="badge badge-blue mb-5">Free Assessment</span>
            <h1 className="display-1 text-ink-900 mb-6">
              How safe is your data{' '}
              <span className="gradient-text">right now?</span>
            </h1>
            <p className="lead mb-4">
              Answer 5 quick questions to get your personal data risk score. Takes about 2 minutes.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl">
          <div className="max-w-2xl mx-auto">
            {!submitted ? (
              <>
                <div className="mb-8 flex items-center gap-3">
                  <div className="flex-1 h-2 rounded-full bg-surface-muted overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${(answered / questions.length) * 100}%`, background: 'linear-gradient(90deg,#1E40AF,#3B82F6)' }}
                    />
                  </div>
                  <span className="text-sm text-ink-400 font-medium">{answered}/{questions.length}</span>
                </div>

                <div className="space-y-8">
                  {questions.map((q, qi) => (
                    <div key={q.id} className="card p-8">
                      <p className="font-semibold text-ink-900 mb-5 text-lg">
                        <span className="text-brand-600 mr-2">{qi + 1}.</span>
                        {q.question}
                      </p>
                      <div className="space-y-3">
                        {q.options.map((o) => (
                          <button
                            key={o.label}
                            onClick={() => setAnswers(prev => ({ ...prev, [q.id]: o.score }))}
                            className={`w-full text-left px-5 py-4 rounded-xl border-2 text-sm font-medium transition-all ${
                              answers[q.id] === o.score
                                ? 'border-brand-600 bg-brand-50 text-brand-800'
                                : 'border-surface-border text-ink-500 hover:border-brand-300 hover:bg-surface-soft'
                            }`}
                          >
                            {o.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <button
                    onClick={() => answered === questions.length && setSubmitted(true)}
                    className={`btn btn-primary btn-lg ${answered < questions.length ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={answered < questions.length}
                  >
                    See My Risk Score
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </button>
                  {answered < questions.length && (
                    <p className="text-sm text-ink-400 mt-3">Please answer all {questions.length} questions to continue</p>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="rounded-3xl p-10 mb-8" style={{ background: risk.bg, border: `2px solid ${risk.color}` }}>
                  <p className="text-sm font-semibold mb-3" style={{ color: risk.color }}>Your Data Risk Score</p>
                  <p className="text-7xl font-extrabold mb-3" style={{ color: risk.color }}>{totalScore}</p>
                  <p className="text-3xl font-bold mb-4" style={{ color: risk.color }}>{risk.label}</p>
                  <p className="text-base" style={{ color: risk.color }}>{risk.desc}</p>
                </div>

                <div className="card p-8 text-left mb-6">
                  <h3 className="font-bold text-ink-900 text-lg mb-4">What this means for you:</h3>
                  <ul className="space-y-3">
                    {questions.map(q => {
                      const chosen = q.options.find(o => o.score === answers[q.id]);
                      return (
                        <li key={q.id} className="flex gap-3 items-start text-sm">
                          <span className={`w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center text-white text-xs font-bold ${answers[q.id] === 0 ? 'bg-green-500' : answers[q.id] === 1 ? 'bg-yellow-500' : 'bg-red-500'}`}>
                            {answers[q.id] === 0 ? '✓' : '!'}
                          </span>
                          <div>
                            <p className="text-ink-400 text-xs mb-0.5">{q.question}</p>
                            <p className="text-ink-700 font-medium">{chosen?.label}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn btn-primary btn-lg">Get Professional Assessment</Link>
                  <button onClick={() => { setAnswers({}); setSubmitted(false); }} className="btn btn-outline btn-lg">Retake Quiz</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-blue-deep section-pad">
        <div className="container-xl text-center">
          <h2 className="display-2 text-white mb-4">Want a real professional assessment?</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">Our technicians can run a full S.M.A.R.T. scan, backup audit, and vulnerability assessment — for free.</p>
          <Link href="/contact" className="btn btn-ghost btn-lg">Book Your Free Assessment</Link>
        </div>
      </section>
    </>
  );
}
