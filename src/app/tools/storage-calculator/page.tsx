'use client';

import { useState } from 'react';
import type { Metadata } from 'next';

type Step = 1 | 2 | 3 | 4;

interface FormData {
  photos: number;
  photoSizeMB: number;
  videoHours: number;
  videoResolution: string;
  documents: number;
  emails: number;
  osSoftwareGB: number;
}

const resolutionSizes: Record<string, number> = {
  '480p': 0.5,
  '720p': 1.5,
  '1080p': 4,
  '4K': 15,
  '8K': 50,
};

function calculateStorage(data: FormData) {
  const photosGB = (data.photos * data.photoSizeMB) / 1024;
  const videosGB = data.videoHours * (resolutionSizes[data.videoResolution] || 4);
  const docsGB = (data.documents * 0.5) / 1024;
  const emailsGB = (data.emails * 0.1) / 1024;
  const osGB = data.osSoftwareGB;
  const totalGB = photosGB + videosGB + docsGB + emailsGB + osGB;
  return {
    photosGB: Math.round(photosGB * 10) / 10,
    videosGB: Math.round(videosGB * 10) / 10,
    docsGB: Math.round(docsGB * 10) / 10,
    emailsGB: Math.round(emailsGB * 10) / 10,
    osGB,
    totalGB: Math.round(totalGB),
    recommendedGB: Math.round(totalGB * 1.5),
    backupGB: Math.round(totalGB * 2),
  };
}

export default function StorageCalculatorPage() {
  const [step, setStep] = useState<Step>(1);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [data, setData] = useState<FormData>({
    photos: 5000,
    photoSizeMB: 5,
    videoHours: 20,
    videoResolution: '1080p',
    documents: 1000,
    emails: 5000,
    osSoftwareGB: 60,
  });

  const results = calculateStorage(data);
  const maxGB = Math.max(results.photosGB, results.videosGB, results.docsGB, results.emailsGB, results.osGB, 1);

  const update = (key: keyof FormData, value: number | string) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4">
            <span className="text-primary-light text-sm font-semibold">🗄️ Free Tool</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Storage Needs Calculator</h1>
          <p className="text-slate-400">Answer a few questions to find out exactly how much storage you need — with backup recommendations.</p>
        </div>

        {!showResults ? (
          <div className="glass-card rounded-2xl p-8">
            {/* Progress */}
            <div className="flex items-center gap-2 mb-8">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center gap-2 flex-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${step >= s ? 'bg-primary text-white' : 'bg-white/10 text-slate-400'}`}>
                    {s}
                  </div>
                  {s < 4 && <div className={`flex-1 h-0.5 ${step > s ? 'bg-primary' : 'bg-white/10'}`} />}
                </div>
              ))}
            </div>

            {step === 1 && (
              <div>
                <h2 className="text-xl font-bold text-white mb-6">Step 1: Photos</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">How many photos do you have?</label>
                    <input type="range" min={100} max={100000} step={100} value={data.photos} onChange={(e) => update('photos', +e.target.value)} className="w-full accent-primary" />
                    <div className="flex justify-between mt-1">
                      <span className="text-slate-500 text-xs">100</span>
                      <span className="text-primary-light font-semibold">{data.photos.toLocaleString()} photos</span>
                      <span className="text-slate-500 text-xs">100,000</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Average photo size</label>
                    <div className="flex flex-wrap gap-2">
                      {[1, 3, 5, 10, 25].map((size) => (
                        <button key={size} onClick={() => update('photoSizeMB', size)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${data.photoSizeMB === size ? 'bg-primary text-white' : 'border border-white/20 text-slate-300 hover:text-white'}`}>
                          {size} MB
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Smartphone: ~3–5 MB | DSLR RAW: ~25 MB</p>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-xl font-bold text-white mb-6">Step 2: Videos</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Total video footage</label>
                    <input type="range" min={0} max={500} step={1} value={data.videoHours} onChange={(e) => update('videoHours', +e.target.value)} className="w-full accent-primary" />
                    <div className="flex justify-between mt-1">
                      <span className="text-slate-500 text-xs">0 hrs</span>
                      <span className="text-primary-light font-semibold">{data.videoHours} hours</span>
                      <span className="text-slate-500 text-xs">500 hrs</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Primary resolution</label>
                    <div className="flex flex-wrap gap-2">
                      {Object.keys(resolutionSizes).map((res) => (
                        <button key={res} onClick={() => update('videoResolution', res)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${data.videoResolution === res ? 'bg-primary text-white' : 'border border-white/20 text-slate-300 hover:text-white'}`}>
                          {res}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-xl font-bold text-white mb-6">Step 3: Documents & Emails</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Number of documents</label>
                    <input type="range" min={0} max={50000} step={100} value={data.documents} onChange={(e) => update('documents', +e.target.value)} className="w-full accent-primary" />
                    <div className="flex justify-between mt-1">
                      <span className="text-slate-500 text-xs">0</span>
                      <span className="text-primary-light font-semibold">{data.documents.toLocaleString()} docs</span>
                      <span className="text-slate-500 text-xs">50,000</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Emails to archive</label>
                    <input type="range" min={0} max={100000} step={500} value={data.emails} onChange={(e) => update('emails', +e.target.value)} className="w-full accent-primary" />
                    <div className="flex justify-between mt-1">
                      <span className="text-slate-500 text-xs">0</span>
                      <span className="text-primary-light font-semibold">{data.emails.toLocaleString()} emails</span>
                      <span className="text-slate-500 text-xs">100,000</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 className="text-xl font-bold text-white mb-6">Step 4: OS & Software</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Space for OS and applications</label>
                    <div className="flex flex-wrap gap-2">
                      {[30, 60, 100, 200].map((gb) => (
                        <button key={gb} onClick={() => update('osSoftwareGB', gb)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${data.osSoftwareGB === gb ? 'bg-primary text-white' : 'border border-white/20 text-slate-300 hover:text-white'}`}>
                          {gb} GB
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Windows 11 + basic apps: ~60 GB | Power user with Adobe CC: ~200 GB</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              <button
                onClick={() => setStep((s) => Math.max(1, s - 1) as Step)}
                disabled={step === 1}
                className="px-6 py-2.5 border border-white/20 text-slate-300 hover:text-white rounded-full text-sm disabled:opacity-40 transition-all"
              >
                ← Back
              </button>
              {step < 4 ? (
                <button onClick={() => setStep((s) => Math.min(4, s + 1) as Step)} className="px-6 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-full text-sm transition-all">
                  Next →
                </button>
              ) : (
                <button onClick={() => setShowResults(true)} className="px-6 py-2.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full text-sm transition-all">
                  Calculate →
                </button>
              )}
            </div>
          </div>
        ) : (
          <div>
            <div className="glass-card rounded-2xl p-8 mb-6">
              <h2 className="text-2xl font-bold text-white mb-6">Your Storage Report</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-primary/20 border border-primary/30 rounded-xl p-5 text-center">
                  <p className="text-slate-400 text-sm mb-1">You Currently Need</p>
                  <p className="text-3xl font-bold text-white">{results.totalGB} GB</p>
                </div>
                <div className="bg-accent/20 border border-accent/30 rounded-xl p-5 text-center">
                  <p className="text-slate-400 text-sm mb-1">Recommended Storage</p>
                  <p className="text-3xl font-bold text-accent">{results.recommendedGB} GB</p>
                  <p className="text-xs text-slate-500">+50% headroom</p>
                </div>
                <div className="bg-amber/10 border border-amber/20 rounded-xl p-5 text-center">
                  <p className="text-slate-400 text-sm mb-1">Backup Drive Size</p>
                  <p className="text-3xl font-bold text-amber">{results.backupGB} GB</p>
                  <p className="text-xs text-slate-500">For 3-2-1 backup</p>
                </div>
              </div>

              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Storage Breakdown</h3>
              <div className="space-y-3">
                {[
                  { label: 'Photos', value: results.photosGB, color: 'bg-blue-500' },
                  { label: 'Videos', value: results.videosGB, color: 'bg-purple-500' },
                  { label: 'Documents', value: results.docsGB, color: 'bg-green-500' },
                  { label: 'Emails', value: results.emailsGB, color: 'bg-yellow-500' },
                  { label: 'OS & Apps', value: results.osGB, color: 'bg-slate-400' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-slate-400 text-sm w-24 flex-shrink-0">{item.label}</span>
                    <div className="flex-1 bg-white/5 rounded-full h-2">
                      <div className={`${item.color} rounded-full h-2 transition-all`} style={{ width: `${Math.min(100, (item.value / maxGB) * 100)}%` }} />
                    </div>
                    <span className="text-slate-300 text-sm w-16 text-right flex-shrink-0">{item.value} GB</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Backup Recommendations</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-accent mt-0.5">✓</span>
                  Keep <strong className="text-white">3 copies</strong> of your data (3-2-1 rule)
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-accent mt-0.5">✓</span>
                  Primary drive: {results.recommendedGB} GB SSD recommended
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-accent mt-0.5">✓</span>
                  External backup: {results.backupGB} GB external HDD
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-accent mt-0.5">✓</span>
                  Cloud backup: {Math.round(results.totalGB * 0.5)} GB cloud storage for critical files
                </li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Download Full Report</h3>
              <p className="text-slate-400 text-sm mb-4">Get a detailed PDF with product recommendations and shopping list.</p>
              <div className="flex gap-3">
                {emailSent ? (
                  <p className="text-accent text-sm">✓ Report will be sent to {email}</p>
                ) : (
                  <>
                    <input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary/50" />
                    <button onClick={() => email && setEmailSent(true)} className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all">
                      Send Report
                    </button>
                  </>
                )}
              </div>
            </div>

            <button onClick={() => setShowResults(false)} className="mt-4 text-slate-400 hover:text-white text-sm transition-colors">
              ← Recalculate
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
