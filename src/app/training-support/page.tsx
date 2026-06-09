'use client';

import { useState } from 'react';
import Link from 'next/link';

const beginnerCourses = [
  { title: 'Storage Fundamentals', desc: 'Understand HDDs, SSDs, NAND flash, and storage protocols from first principles.', duration: '3 days', level: 'Beginner' },
  { title: 'File Systems', desc: 'Deep dive into NTFS, FAT32, exFAT, EXT4, and APFS — structures, metadata, and recovery implications.', duration: '2 days', level: 'Beginner' },
  { title: 'Recovery Basics', desc: 'Introduction to data recovery workflows, triage protocols, and tool selection.', duration: '4 days', level: 'Beginner' },
  { title: 'Data Triage & Imaging', desc: 'Learn industry-standard imaging tools, write blockers, and forensic acquisition methods.', duration: '2 days', level: 'Beginner' },
];

const advancedCourses = [
  { title: 'SSD Recovery', desc: 'NAND flash architecture, FTL layer, wear leveling, and advanced SSD recovery techniques.', duration: '5 days', level: 'Advanced' },
  { title: 'RAID Recovery', desc: 'RAID 0/1/5/6/10 reconstruction, stripe size identification, and multi-drive recovery.', duration: '5 days', level: 'Advanced' },
  { title: 'CCTV Recovery', desc: 'Proprietary DVR/NVR file systems — Hikvision, Dahua, CP Plus extraction and analysis.', duration: '4 days', level: 'Advanced' },
  { title: 'Flash Media Recovery', desc: 'Chip-off techniques, NAND reading, controller bypass for SD, USB, and eMMC.', duration: '5 days', level: 'Advanced' },
];

const certifications = [
  {
    title: 'Certified Data Recovery Specialist',
    acronym: 'CDRS',
    duration: '4 weeks',
    includes: ['Beginner + Advanced curriculum', 'Hands-on lab sessions', 'Case studies & assessments', 'Industry-recognized certificate', '1 year post-certification support'],
    color: '#2196f3',
  },
  {
    title: 'Certified Forensic Recovery Expert',
    acronym: 'CFRE',
    duration: '6 weeks',
    includes: ['Full CDRS curriculum', 'Forensic imaging & chain of custody', 'Court-ready evidence reports', 'Law enforcement procedures', 'Expert witness preparation'],
    color: '#7c3aed',
    featured: true,
  },
  {
    title: 'Certified Recovery Lab Manager',
    acronym: 'CRLM',
    duration: '5 weeks',
    includes: ['Lab setup & equipment', 'Business operations & CRM', 'Quality management system', 'Client communication protocols', 'Pricing strategy & quoting'],
    color: '#059669',
  },
];

const supportServices = [
  { icon: '🛠️', title: 'Product Support', desc: 'Technical guidance for all Data Genius hardware and software products.' },
  { icon: '🖥️', title: 'Remote Assistance', desc: 'Screen-share sessions with certified engineers for complex recovery cases.' },
  { icon: '🔧', title: 'Hardware Troubleshooting', desc: 'Diagnosis and repair guidance for docking stations, enclosures, and monitors.' },
  { icon: '💾', title: 'Firmware Diagnostics', desc: 'Drive firmware analysis, SA zone repair guidance, and PCB-level support.' },
  { icon: '🔬', title: 'Recovery Consultation', desc: 'Expert consultation for difficult cases including RAID, NAS, and server recovery.' },
  { icon: '📚', title: 'Knowledge Base Access', desc: 'Unlimited access to our database of 10,000+ technical articles and guides.' },
];

export default function TrainingSupportPage() {
  const [ticketForm, setTicketForm] = useState({ name: '', email: '', subject: '', priority: 'Normal', message: '' });
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ backgroundColor: '#060f1f' }}>
      {/* Hero */}
      <section
        className="py-20"
        style={{
          background: 'linear-gradient(180deg, rgba(21, 101, 192, 0.15) 0%, rgba(6, 15, 31, 0) 100%)',
          borderBottom: '1px solid rgba(30, 58, 95, 0.6)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: 'rgba(21, 101, 192, 0.15)', border: '1px solid rgba(33, 150, 243, 0.25)', color: '#90caf9' }}
          >
            Training & Support
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Data Recovery Training &amp; Support
          </h1>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#94a3b8' }}>
            Industry-recognized certification programs and expert technical support. Certify your team, expand your expertise, and get help when you need it most.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a href="#training" className="btn-primary inline-flex items-center gap-2 text-sm">View Training Programs</a>
            <a href="#support" className="btn-outline inline-flex items-center gap-2 text-sm">Get Support Now</a>
          </div>
        </div>
      </section>

      {/* ===== TRAINING SECTION ===== */}
      <section id="training" className="scroll-mt-24 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Data Recovery Training</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748b' }}>
              Structured learning paths from beginner fundamentals to expert-level certifications. All courses include hands-on lab practice.
            </p>
          </div>

          {/* Beginner */}
          <div id="beginner" className="scroll-mt-24 mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div
                className="px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider"
                style={{ backgroundColor: 'rgba(33, 150, 243, 0.15)', color: '#90caf9', border: '1px solid rgba(33, 150, 243, 0.25)' }}
              >
                Beginner
              </div>
              <div style={{ flex: 1, height: '1px', background: 'rgba(30, 58, 95, 0.6)' }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {beginnerCourses.map((course) => (
                <div
                  key={course.title}
                  className="rounded-2xl p-5 transition-all"
                  style={{
                    background: 'linear-gradient(135deg, rgba(13, 31, 60, 0.8) 0%, rgba(10, 22, 40, 0.9) 100%)',
                    border: '1px solid rgba(30, 58, 95, 0.7)',
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(33, 150, 243, 0.3)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(30, 58, 95, 0.7)')}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: 'rgba(33, 150, 243, 0.1)', color: '#42a5f5', border: '1px solid rgba(33, 150, 243, 0.2)' }}
                    >
                      {course.level}
                    </span>
                    <span className="text-xs" style={{ color: '#475569' }}>{course.duration}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">{course.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{course.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced */}
          <div id="advanced" className="scroll-mt-24 mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div
                className="px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider"
                style={{ backgroundColor: 'rgba(124, 58, 237, 0.15)', color: '#a78bfa', border: '1px solid rgba(124, 58, 237, 0.25)' }}
              >
                Advanced
              </div>
              <div style={{ flex: 1, height: '1px', background: 'rgba(30, 58, 95, 0.6)' }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {advancedCourses.map((course) => (
                <div
                  key={course.title}
                  className="rounded-2xl p-5 transition-all"
                  style={{
                    background: 'linear-gradient(135deg, rgba(13, 31, 60, 0.8) 0%, rgba(10, 22, 40, 0.9) 100%)',
                    border: '1px solid rgba(30, 58, 95, 0.7)',
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(124, 58, 237, 0.3)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(30, 58, 95, 0.7)')}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: 'rgba(124, 58, 237, 0.1)', color: '#a78bfa', border: '1px solid rgba(124, 58, 237, 0.2)' }}
                    >
                      {course.level}
                    </span>
                    <span className="text-xs" style={{ color: '#475569' }}>{course.duration}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">{course.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{course.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div id="certifications" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-8">
              <div
                className="px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider"
                style={{ backgroundColor: 'rgba(5, 150, 105, 0.15)', color: '#34d399', border: '1px solid rgba(5, 150, 105, 0.25)' }}
              >
                Professional Certifications
              </div>
              <div style={{ flex: 1, height: '1px', background: 'rgba(30, 58, 95, 0.6)' }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.acronym}
                  className="rounded-2xl p-6 relative"
                  style={{
                    background: 'linear-gradient(135deg, rgba(13, 31, 60, 0.85) 0%, rgba(10, 22, 40, 0.9) 100%)',
                    border: `1px solid ${cert.featured ? `${cert.color}40` : 'rgba(30, 58, 95, 0.7)'}`,
                    boxShadow: cert.featured ? `0 0 30px ${cert.color}15` : 'none',
                  }}
                >
                  {cert.featured && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full"
                      style={{ backgroundColor: cert.color, color: 'white' }}
                    >
                      Most Popular
                    </div>
                  )}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-xl font-black"
                    style={{ backgroundColor: `${cert.color}15`, color: cert.color, border: `1px solid ${cert.color}25` }}
                  >
                    {cert.acronym}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                  <p className="text-sm mb-5" style={{ color: '#64748b' }}>Duration: {cert.duration}</p>
                  <ul className="space-y-2.5 mb-6">
                    {cert.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#94a3b8' }}>
                        <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: cert.color }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/contact"
                      className="text-sm font-semibold text-center py-2.5 rounded-full transition-all"
                      style={{
                        background: `linear-gradient(135deg, ${cert.color} 0%, ${cert.color}cc 100%)`,
                        color: 'white',
                      }}
                    >
                      Register Now
                    </Link>
                    <button
                      className="text-sm font-medium text-center py-2.5 rounded-full transition-all"
                      style={{
                        backgroundColor: 'transparent',
                        border: `1px solid ${cert.color}30`,
                        color: cert.color,
                      }}
                    >
                      View Curriculum
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(30, 58, 95, 0.8), transparent)', margin: '0 2rem' }} />

      {/* ===== SUPPORT SECTION ===== */}
      <section id="support" className="scroll-mt-24 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Technical Support</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748b' }}>
              Expert assistance from our certified engineers. Available via ticket, email, phone, and remote session.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left — Support services + contact info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Support Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {supportServices.map((service) => (
                  <div
                    key={service.title}
                    className="rounded-xl p-4 transition-all"
                    style={{
                      background: 'rgba(13, 31, 60, 0.7)',
                      border: '1px solid rgba(30, 58, 95, 0.7)',
                    }}
                  >
                    <span className="text-2xl block mb-2">{service.icon}</span>
                    <h4 className="text-sm font-semibold text-white mb-1">{service.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{service.desc}</p>
                  </div>
                ))}
              </div>

              {/* Contact channels */}
              <h3 className="text-xl font-bold text-white mb-5">Contact Channels</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: 'Email Support',
                    value: 'support@datagenius.in',
                    response: 'Response within 4 hours',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    label: 'Phone Support',
                    value: '+91 40 1234 5678',
                    response: 'Mon–Sat 9:00–18:00 IST',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: 'Remote Assistance',
                    value: 'Schedule a session',
                    response: 'Same-day available',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    ),
                    label: 'Knowledge Base',
                    value: '10,000+ articles available',
                    response: '24/7 self-service access',
                  },
                ].map((channel) => (
                  <div
                    key={channel.label}
                    className="flex items-start gap-4 p-4 rounded-xl"
                    style={{ backgroundColor: 'rgba(13, 31, 60, 0.6)', border: '1px solid rgba(30, 58, 95, 0.6)' }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(21, 101, 192, 0.15)', color: '#42a5f5' }}
                    >
                      {channel.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{channel.label}</p>
                      <p className="text-sm" style={{ color: '#42a5f5' }}>{channel.value}</p>
                      <p className="text-xs mt-0.5" style={{ color: '#475569' }}>{channel.response}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Ticket form */}
            <div>
              <div
                className="rounded-2xl p-8"
                style={{
                  background: 'linear-gradient(135deg, rgba(13, 31, 60, 0.85) 0%, rgba(10, 22, 40, 0.9) 100%)',
                  border: '1px solid rgba(30, 58, 95, 0.8)',
                }}
              >
                <h3 className="text-xl font-bold text-white mb-6">Submit a Support Ticket</h3>
                {submitted ? (
                  <div
                    className="text-center py-12 rounded-xl"
                    style={{ backgroundColor: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.2)' }}
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)' }}>
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#34d399' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Ticket Submitted!</h4>
                    <p className="text-sm" style={{ color: '#64748b' }}>We&apos;ll respond within 4 business hours.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#64748b' }}>Full Name</label>
                        <input
                          type="text"
                          placeholder="John Smith"
                          value={ticketForm.name}
                          onChange={(e) => setTicketForm({ ...ticketForm, name: e.target.value })}
                          className="w-full text-sm px-4 py-3 rounded-xl outline-none transition-all"
                          style={{
                            backgroundColor: 'rgba(6, 15, 31, 0.6)',
                            border: '1px solid rgba(30, 58, 95, 0.7)',
                            color: '#e2e8f0',
                          }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(33, 150, 243, 0.5)')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(30, 58, 95, 0.7)')}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#64748b' }}>Email</label>
                        <input
                          type="email"
                          placeholder="you@company.com"
                          value={ticketForm.email}
                          onChange={(e) => setTicketForm({ ...ticketForm, email: e.target.value })}
                          className="w-full text-sm px-4 py-3 rounded-xl outline-none transition-all"
                          style={{
                            backgroundColor: 'rgba(6, 15, 31, 0.6)',
                            border: '1px solid rgba(30, 58, 95, 0.7)',
                            color: '#e2e8f0',
                          }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(33, 150, 243, 0.5)')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(30, 58, 95, 0.7)')}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#64748b' }}>Subject</label>
                      <input
                        type="text"
                        placeholder="Brief description of your issue"
                        value={ticketForm.subject}
                        onChange={(e) => setTicketForm({ ...ticketForm, subject: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-xl outline-none transition-all"
                        style={{
                          backgroundColor: 'rgba(6, 15, 31, 0.6)',
                          border: '1px solid rgba(30, 58, 95, 0.7)',
                          color: '#e2e8f0',
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(33, 150, 243, 0.5)')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(30, 58, 95, 0.7)')}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#64748b' }}>Priority</label>
                      <select
                        value={ticketForm.priority}
                        onChange={(e) => setTicketForm({ ...ticketForm, priority: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-xl outline-none transition-all"
                        style={{
                          backgroundColor: 'rgba(6, 15, 31, 0.6)',
                          border: '1px solid rgba(30, 58, 95, 0.7)',
                          color: '#e2e8f0',
                        }}
                      >
                        <option value="Low">Low — General inquiry</option>
                        <option value="Normal">Normal — Standard support</option>
                        <option value="High">High — Business impacted</option>
                        <option value="Critical">Critical — Data at risk</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#64748b' }}>Message</label>
                      <textarea
                        rows={5}
                        placeholder="Describe your issue in detail. Include device type, symptoms, and steps already taken..."
                        value={ticketForm.message}
                        onChange={(e) => setTicketForm({ ...ticketForm, message: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-xl outline-none transition-all resize-none"
                        style={{
                          backgroundColor: 'rgba(6, 15, 31, 0.6)',
                          border: '1px solid rgba(30, 58, 95, 0.7)',
                          color: '#e2e8f0',
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(33, 150, 243, 0.5)')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(30, 58, 95, 0.7)')}
                      />
                    </div>
                    <button
                      onClick={() => {
                        if (ticketForm.name && ticketForm.email && ticketForm.message) {
                          setSubmitted(true);
                        }
                      }}
                      className="w-full text-sm font-semibold py-3 rounded-xl transition-all"
                      style={{
                        background: 'linear-gradient(135deg, #1565c0 0%, #1976d2 100%)',
                        color: 'white',
                        boxShadow: '0 4px 14px rgba(21, 101, 192, 0.4)',
                      }}
                    >
                      Submit Support Ticket
                    </button>
                    <p className="text-xs text-center" style={{ color: '#475569' }}>
                      Average response time: 4 business hours • Priority tickets: 1 hour
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
