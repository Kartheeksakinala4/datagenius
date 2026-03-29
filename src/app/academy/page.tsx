import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DataGenius Academy — Data Recovery Courses & Certification',
  description: 'Master data recovery with expert-led courses. Earn the DataGenius Certified Recovery Technician credential. Courses from ₹999 to ₹9,999.',
};

const courses = [
  { id: 1, title: 'Data Recovery Fundamentals', lessons: 20, duration: '6 hours', level: 'Beginner', price: '₹1,999', rating: 4.8, students: 2341, icon: '💾', desc: 'Master the foundations of data recovery — file systems, partition tables, scan techniques, and software tools. Perfect starting point for anyone new to data recovery.' },
  { id: 2, title: 'Understanding SMART Data & Drive Health', lessons: 10, duration: '3 hours', level: 'Beginner', price: '₹999', rating: 4.9, students: 3120, icon: '🩺', desc: 'Learn to read and interpret every SMART attribute. Know when a drive is about to fail before it does. Includes the SMART Checker tool walkthrough.' },
  { id: 3, title: 'CCTV Forensics & DVR Recovery', lessons: 15, duration: '5 hours', level: 'Intermediate', price: '₹2,999', rating: 4.7, students: 892, icon: '📷', desc: 'The only course dedicated to recovering Hikvision, Dahua, and CP Plus DVR footage. Covers proprietary file systems, footage extraction, and legal considerations.' },
  { id: 4, title: 'Building a Data Recovery Business', lessons: 12, duration: '4 hours', level: 'Intermediate', price: '₹1,999', rating: 4.6, students: 1205, icon: '🏢', desc: 'Everything you need to start and scale a data recovery business in India. Pricing, equipment, marketing, and managing clients using DataGenius Recovery CRM.' },
  { id: 5, title: 'DataGenius Certified Recovery Technician', lessons: 52, duration: '18 hours', level: 'Advanced', price: '₹9,999', rating: 4.9, students: 456, icon: '🏆', desc: 'The comprehensive certification program. Covers all recovery scenarios, hardware tools, clean-room procedures, and business operations. Includes written exam and certificate.' },
];

const levelColors: Record<string, string> = {
  Beginner: 'bg-accent/10 text-accent',
  Intermediate: 'bg-amber/10 text-amber',
  Advanced: 'bg-purple-500/10 text-purple-400',
};

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-surface-dark">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-surface-border py-20 px-4">
        <div className="absolute inset-0 hero-mesh-bg opacity-40" />
        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block bg-primary/10 text-primary-light rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-4">DataGenius Academy</span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">Master Data Recovery</h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-8">
            From beginner fundamentals to advanced certification. Expert-led courses built by practising data recovery engineers.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            {[['5', 'Courses'], ['108', 'Total lessons'], ['8,014', 'Students enrolled'], ['4.8★', 'Avg. rating']].map(([val, label]) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-bold gradient-text">{val}</p>
                <p className="text-xs text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">All Courses</h2>
          <div className="space-y-5">
            {courses.map((course) => (
              <div key={course.id} className="glass-card rounded-2xl p-7 flex flex-col lg:flex-row gap-6 hover:border-white/20 transition-all">
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-4xl">
                  {course.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${levelColors[course.level]}`}>{course.level}</span>
                    {course.id === 5 && <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber/10 text-amber">🏆 Certification</span>}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{course.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">{course.desc}</p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                    <span>📹 {course.lessons} lessons</span>
                    <span>⏱️ {course.duration}</span>
                    <span>⭐ {course.rating} ({course.students.toLocaleString()} students)</span>
                  </div>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center lg:items-end justify-between gap-4">
                  <p className="text-2xl font-bold text-white">{course.price}</p>
                  <div className="flex flex-col gap-2 w-full lg:w-auto">
                    <button className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all whitespace-nowrap">
                      Enrol Now
                    </button>
                    <button className="border border-surface-border hover:border-primary/40 text-slate-400 hover:text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all whitespace-nowrap">
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-16 px-4 bg-surface-card border-y border-surface-border">
        <div className="max-w-5xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <span className="inline-block bg-amber/10 text-amber rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-4">Industry Credential</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">DataGenius Certified Recovery Technician</h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                The DCRT credential is recognised by recovery labs across India. Demonstrate your expertise, command higher rates, and build trust with clients who need to know their data is in qualified hands.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  '52 lessons across hardware, software, and business modules',
                  'Online proctored written exam (pass mark: 75%)',
                  'Digital certificate with verification URL',
                  'Listed in the DataGenius Certified Technician directory',
                  'Annual renewal with continuing education',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-accent mt-0.5 flex-shrink-0">✓</span>{item}
                  </li>
                ))}
              </ul>
              <Link href="#" className="inline-flex items-center gap-2 bg-amber/10 hover:bg-amber/20 text-amber border border-amber/20 font-semibold px-6 py-3 rounded-full transition-all text-sm">
                🏆 Enrol in DCRT Program — ₹9,999
              </Link>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="glass-card rounded-2xl p-8 text-center border-amber/20">
                <div className="text-7xl mb-4">🏅</div>
                <h3 className="text-xl font-bold text-white mb-2">DataGenius Certified</h3>
                <p className="text-amber font-semibold mb-1">Recovery Technician</p>
                <p className="text-slate-500 text-sm mb-6">datagenius.in · Certified 2026</p>
                <div className="bg-surface-dark rounded-xl p-4 text-xs text-slate-400 font-mono break-all">
                  Verify: datagenius.in/verify/DCRT-XXXX-XXXX
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
