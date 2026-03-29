'use client';

import { useState } from 'react';

const sampleSmart = `Device Model: ST2000DM008-2FR102
Serial Number: ZFL0XXXX
Firmware Version: 0001
User Capacity: 2,000,398,934,016 bytes
ID# ATTRIBUTE_NAME          VALUE WORST THRESH TYPE      UPDATED  WHEN_FAILED RAW_VALUE
  1 Raw_Read_Error_Rate     117   099   006    Pre-fail  Always       -       158531624
  3 Spin_Up_Time            097   096   000    Old_age   Always       -       0
  4 Start_Stop_Count        100   100   020    Old_age   Always       -       22
  5 Reallocated_Sector_Ct   100   100   010    Pre-fail  Always       -       0
  7 Seek_Error_Rate         085   060   045    Pre-fail  Always       -       388471047
  9 Power_On_Hours          098   098   000    Old_age   Always       -       1842
 10 Spin_Retry_Count        100   100   097    Pre-fail  Always       -       0
 12 Power_Cycle_Count       100   100   020    Old_age   Always       -       22
183 Runtime_Bad_Block       100   100   000    Old_age   Always       -       0
184 End-to-End_Error        100   100   099    Pre-fail  Always       -       0
187 Reported_Uncorrect      100   100   000    Old_age   Always       -       0
188 Command_Timeout         100   100   000    Old_age   Always       -       0
189 High_Fly_Writes         100   100   000    Old_age   Always       -       0
190 Airflow_Temperature_Cel 072   053   045    Old_age   Always       -       28 (Min/Max 20/31)
191 G-Sense_Error_Rate      100   100   000    Old_age   Always       -       0
192 Power-Off_Retract_Count 100   100   000    Old_age   Always       -       0
193 Load_Cycle_Count        100   100   000    Old_age   Always       -       447
194 Temperature_Celsius     028   047   000    Old_age   Always       -       28
197 Current_Pending_Sector  100   100   000    Old_age   Always       -       0
198 Offline_Uncorrectable   100   100   000    Old_age   Always       -       0
199 UDMA_CRC_Error_Count    200   200   000    Old_age   Always       -       0
240 Head_Flying_Hours       097   097   000    Old_age   Always       -       1842 (185 20 0)
241 Total_LBAs_Written      099   099   000    Old_age   Always       -       6139959872
242 Total_LBAs_Read         099   099   000    Old_age   Always       -       49455736898`;

const analysisResult = {
  score: 87,
  status: 'Good',
  statusColor: 'text-accent',
  model: 'Seagate Barracuda 2TB (ST2000DM008)',
  powerOnHours: 1842,
  attributes: [
    { id: '1', name: 'Raw Read Error Rate', value: 117, threshold: 6, raw: '158531624', status: 'OK', note: 'High raw value is normal for Seagate — uses internal ECC.' },
    { id: '5', name: 'Reallocated Sectors', value: 100, threshold: 10, raw: '0', status: 'OK', note: 'No bad sectors remapped. Excellent.' },
    { id: '7', name: 'Seek Error Rate', value: 85, threshold: 45, raw: '388471047', status: 'OK', note: 'Normal for Seagate. Internal logarithmic scale.' },
    { id: '187', name: 'Reported Uncorrectable', value: 100, threshold: 0, raw: '0', status: 'OK', note: 'No uncorrectable errors. Good sign.' },
    { id: '190', name: 'Airflow Temperature', value: 72, threshold: 45, raw: '28°C', status: 'OK', note: 'Running cool at 28°C. Ideal range is 20–50°C.' },
    { id: '197', name: 'Current Pending Sectors', value: 100, threshold: 0, raw: '0', status: 'OK', note: 'No sectors waiting for reallocation.' },
    { id: '198', name: 'Offline Uncorrectable', value: 100, threshold: 0, raw: '0', status: 'OK', note: 'No uncorrectable offline errors.' },
    { id: '199', name: 'UDMA CRC Errors', value: 200, threshold: 0, raw: '0', status: 'OK', note: 'No interface/cable errors detected.' },
  ],
  recommendations: [
    'Drive health is good. Continue regular backups as standard practice.',
    'Power-on time of 1,842 hours (~77 days) — drive is relatively new.',
    'Temperature is within safe range. Ensure adequate case airflow.',
    'Consider a full SMART test every 3–6 months to monitor trends.',
  ],
  predictedLife: '4–6 years remaining (estimated)',
};

export default function SmartCheckerPage() {
  const [smartData, setSmartData] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = () => {
    if (!smartData.trim()) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setShowResult(true); }, 1500);
  };

  const loadSample = () => setSmartData(sampleSmart);

  const scoreColor = analysisResult.score >= 80 ? 'text-accent' : analysisResult.score >= 60 ? 'text-amber' : 'text-red-400';
  const scoreBg = analysisResult.score >= 80 ? 'bg-accent' : analysisResult.score >= 60 ? 'bg-amber' : 'bg-red-400';

  return (
    <div className="min-h-screen bg-surface-dark">
      {/* Hero */}
      <section className="border-b border-surface-border py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-primary/10 text-primary-light rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-4">
            Free Drive Health Analysis
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">SMART Health Checker</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Paste your drive&apos;s SMART attributes (from CrystalDiskInfo, smartmontools, or macOS Disk Utility) and get a plain-English health report with failure risk assessment.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-slate-400">
            {[
              { tool: 'CrystalDiskInfo', os: 'Windows', desc: 'Open → select drive → copy all text' },
              { tool: 'smartmontools', os: 'Linux/Mac', desc: 'Run: sudo smartctl -a /dev/sda' },
              { tool: 'Disk Utility', os: 'macOS', desc: 'View → Show SMART Data' },
            ].map((t) => (
              <div key={t.tool} className="glass-card rounded-xl px-4 py-3 text-left">
                <p className="font-semibold text-white text-xs">{t.tool} <span className="text-slate-500 font-normal">({t.os})</span></p>
                <p className="text-xs text-slate-500 mt-0.5">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Input */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-white">Paste SMART Data</label>
              <button onClick={loadSample} className="text-xs text-primary-light hover:text-white border border-primary/30 rounded-full px-3 py-1 transition-colors">
                Load Sample Data
              </button>
            </div>
            <textarea
              value={smartData}
              onChange={(e) => setSmartData(e.target.value)}
              placeholder="Paste your SMART output here..."
              rows={10}
              className="w-full bg-surface-dark/50 border border-surface-border rounded-xl px-4 py-3 text-xs text-slate-300 font-mono placeholder-slate-600 focus:outline-none focus:border-primary/50 resize-none"
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={handleAnalyze}
                disabled={!smartData.trim() || loading}
                className="bg-accent hover:bg-accent-dark disabled:opacity-40 text-white font-semibold px-8 py-3 rounded-full transition-all flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Analysing...
                  </>
                ) : 'Analyse Drive Health →'}
              </button>
            </div>
          </div>

          {/* Results */}
          {showResult && (
            <div className="space-y-6">
              {/* Score */}
              <div className="glass-card rounded-2xl p-8">
                <div className="flex flex-col sm:flex-row items-center gap-8">
                  {/* Gauge */}
                  <div className="relative flex-shrink-0">
                    <svg className="w-36 h-36" viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r="52" fill="none" stroke="#1E293B" strokeWidth="12" />
                      <circle cx="60" cy="60" r="52" fill="none" stroke={analysisResult.score >= 80 ? '#10B981' : '#F59E0B'} strokeWidth="12"
                        strokeDasharray={`${(analysisResult.score / 100) * 326.7} 326.7`}
                        strokeLinecap="round"
                        transform="rotate(-90 60 60)" />
                      <text x="60" y="58" textAnchor="middle" className="fill-white" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                        {analysisResult.score}
                      </text>
                      <text x="60" y="75" textAnchor="middle" fill="#64748B" style={{ fontSize: '11px' }}>
                        / 100
                      </text>
                    </svg>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className={`text-2xl font-bold ${scoreColor} mb-1`}>{analysisResult.status} Health</div>
                    <div className="text-white font-semibold mb-1">{analysisResult.model}</div>
                    <div className="text-slate-400 text-sm mb-3">Power-on: {analysisResult.powerOnHours.toLocaleString()} hours · {analysisResult.predictedLife}</div>
                    <div className="flex flex-wrap gap-2">
                      {analysisResult.recommendations.map((r, i) => (
                        <p key={i} className="text-xs text-slate-400 flex items-start gap-1.5">
                          <span className="text-accent mt-0.5">✓</span>{r}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Attributes Table */}
              <div className="glass-card rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b border-surface-border">
                  <h3 className="font-semibold text-white">SMART Attribute Analysis</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-surface-card/50 text-slate-400 text-xs uppercase tracking-wider">
                        <th className="text-left px-6 py-3">ID</th>
                        <th className="text-left px-6 py-3">Attribute</th>
                        <th className="text-center px-4 py-3">Value</th>
                        <th className="text-center px-4 py-3">Threshold</th>
                        <th className="text-left px-4 py-3">Raw</th>
                        <th className="text-center px-4 py-3">Status</th>
                        <th className="text-left px-6 py-3 hidden lg:table-cell">Note</th>
                      </tr>
                    </thead>
                    <tbody>
                      {analysisResult.attributes.map((attr, i) => (
                        <tr key={attr.id} className={`border-t border-surface-border/50 ${i % 2 === 0 ? 'bg-surface-dark/30' : ''}`}>
                          <td className="px-6 py-3 text-slate-500 font-mono text-xs">{attr.id}</td>
                          <td className="px-6 py-3 text-slate-300 font-medium">{attr.name}</td>
                          <td className="px-4 py-3 text-center text-white">{attr.value}</td>
                          <td className="px-4 py-3 text-center text-slate-400">{attr.threshold}</td>
                          <td className="px-4 py-3 text-slate-400 font-mono text-xs">{attr.raw}</td>
                          <td className="px-4 py-3 text-center">
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                              attr.status === 'OK' ? 'bg-accent/10 text-accent' :
                              attr.status === 'Warning' ? 'bg-amber/10 text-amber' :
                              'bg-red-500/10 text-red-400'
                            }`}>{attr.status}</span>
                          </td>
                          <td className="px-6 py-3 text-slate-500 text-xs hidden lg:table-cell">{attr.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Email CTA */}
              <div className="glass-card rounded-2xl p-6 text-center">
                <h3 className="font-semibold text-white mb-2">Get Monthly Health Reports</h3>
                <p className="text-slate-400 text-sm mb-4">We&apos;ll remind you to check your drive health every 3 months and alert you to critical changes.</p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
                  <input type="email" placeholder="Enter your email..." className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary/50" />
                  <button className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2 rounded-full transition-all">Get Reports</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
