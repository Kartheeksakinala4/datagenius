export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  heroEmoji: string;
  tocItems: string[];
  relatedSlugs: string[];
}

export const articles: BlogArticle[] = [
  {
    slug: 'recover-data-dead-hard-drive',
    title: 'How to Recover Data from a Dead Hard Drive',
    description: 'Complete step-by-step guide to recovering data from a dead hard drive. Diagnose the failure type, choose the right recovery method, and get your files back.',
    category: 'Recovery Guides',
    date: 'March 15, 2026',
    readTime: '8 min',
    heroEmoji: '💾',
    tocItems: ['Step 1: Identify the Failure Type', 'Step 2: What NOT to Do', 'Step 3: Software Recovery', 'Step 4: Call a Professional', 'Prevention & Backups'],
    relatedSlugs: ['smart-attributes-explained', 'recover-formatted-sd-card', 'top-5-data-recovery-software-2026'],
  },
  {
    slug: 'hikvision-dvr-recovery-guide',
    title: 'Hikvision DVR Recovery: Complete 2026 Guide',
    description: 'Step-by-step guide to recovering footage from Hikvision DVRs and NVRs. Covers dead drives, overwritten footage, and using DataGenius CCTV Recovery module.',
    category: 'CCTV Recovery',
    date: 'March 10, 2026',
    readTime: '12 min',
    heroEmoji: '📷',
    tocItems: ['Understanding Hikvision Storage', 'Common Failure Scenarios', 'Using DataGenius CCTV Module', 'Manual Recovery Steps', 'When to Call a Lab'],
    relatedSlugs: ['dahua-nvr-recovery', 'cp-plus-dvr-recovery', 'recover-data-dead-hard-drive'],
  },
  {
    slug: 'best-external-hard-drives-2026',
    title: 'Best External Hard Drives for Backup in 2026',
    description: 'We tested 18 external drives over 6 months. Here are the best options for backup across every budget — from ₹2,000 to ₹25,000.',
    category: 'Product Reviews',
    date: 'March 5, 2026',
    readTime: '6 min',
    heroEmoji: '🗄️',
    tocItems: ['Our Testing Methodology', 'Best Budget Pick', 'Best Overall Pick', 'Best for Professionals', 'Buying Guide'],
    relatedSlugs: ['3-2-1-backup-strategy', 'ssd-vs-hdd-reliability-2026', 'smart-attributes-explained'],
  },
  {
    slug: '3-2-1-backup-strategy',
    title: '3-2-1 Backup Strategy: The Only Guide You Need',
    description: 'The 3-2-1 backup rule is the gold standard of data protection. Learn exactly how to implement it at home or in your business — for free or under ₹5,000.',
    category: 'Data Protection',
    date: 'February 28, 2026',
    readTime: '5 min',
    heroEmoji: '🔒',
    tocItems: ['What is 3-2-1?', 'Choosing Your 3 Copies', 'Choosing Your 2 Media Types', 'Setting Up Offsite Backup', 'Automating Your Backups'],
    relatedSlugs: ['best-external-hard-drives-2026', 'ssd-vs-hdd-reliability-2026', 'smart-attributes-explained'],
  },
  {
    slug: 'smart-attributes-explained',
    title: 'SMART Attributes Explained: Know When Your Drive Is Dying',
    description: 'Understand what SMART data means and which attributes matter most. Learn to read drive health reports and predict failure before it happens.',
    category: 'Recovery Guides',
    date: 'February 20, 2026',
    readTime: '7 min',
    heroEmoji: '🔬',
    tocItems: ['What is SMART?', 'The 5 Critical Attributes', 'Reading Your SMART Data', 'Warning Signs to Watch', 'What to Do When SMART Warns You'],
    relatedSlugs: ['recover-data-dead-hard-drive', 'ssd-vs-hdd-reliability-2026', '3-2-1-backup-strategy'],
  },
  {
    slug: 'recover-formatted-sd-card',
    title: 'How to Recover Data from a Formatted SD Card',
    description: 'Accidentally formatted your SD card? Don\'t panic. Here\'s a step-by-step guide to recovering photos and videos even after a full format.',
    category: 'Recovery Guides',
    date: 'February 12, 2026',
    readTime: '6 min',
    heroEmoji: '💳',
    tocItems: ['Stop Using the Card Immediately', 'Quick Format vs Full Format', 'Step-by-Step Software Recovery', 'Camera RAW File Recovery', 'Prevent Future Loss'],
    relatedSlugs: ['recover-data-dead-hard-drive', 'top-5-data-recovery-software-2026', 'recover-corrupted-excel'],
  },
  {
    slug: 'top-5-data-recovery-software-2026',
    title: 'Top 5 Data Recovery Software Compared (2026)',
    description: 'We put the 5 leading data recovery tools through rigorous real-world tests. See how DataGenius stacks up against Recuva, R-Studio, Disk Drill, and EaseUS.',
    category: 'Product Reviews',
    date: 'February 5, 2026',
    readTime: '10 min',
    heroEmoji: '🏆',
    tocItems: ['Testing Methodology', '#1 DataGenius', '#2 R-Studio', '#3 Disk Drill', '#4 EaseUS', '#5 Recuva', 'Final Verdict'],
    relatedSlugs: ['recover-data-dead-hard-drive', 'recover-formatted-sd-card', '3-2-1-backup-strategy'],
  },
  {
    slug: 'ransomware-recovery',
    title: 'Ransomware Attack: What to Do in the First 24 Hours',
    description: 'Your files are encrypted. The clock is ticking. Here\'s exactly what to do — and what NOT to do — in the critical first 24 hours after a ransomware attack.',
    category: 'Data Protection',
    date: 'January 28, 2026',
    readTime: '9 min',
    heroEmoji: '🚨',
    tocItems: ['Immediate Steps', 'Isolate the Infection', 'Identify the Ransomware Strain', 'Do Not Pay the Ransom', 'Recovery Options', 'Post-Recovery Hardening'],
    relatedSlugs: ['3-2-1-backup-strategy', 'recover-data-dead-hard-drive', 'top-5-data-recovery-software-2026'],
  },
  {
    slug: 'dahua-nvr-recovery',
    title: 'Dahua NVR Recovery: Recover Surveillance Footage Step by Step',
    description: 'Comprehensive guide to recovering video footage from Dahua NVR systems. Covers HDD failure, overwritten recordings, and accessing the proprietary file system.',
    category: 'CCTV Recovery',
    date: 'January 20, 2026',
    readTime: '10 min',
    heroEmoji: '🎥',
    tocItems: ['Dahua Storage Architecture', 'Failure Diagnosis', 'DataGenius CCTV Module Walkthrough', 'Exporting Recovered Footage', 'Dahua Cloud Backup Setup'],
    relatedSlugs: ['hikvision-dvr-recovery-guide', 'cp-plus-dvr-recovery', 'recover-data-dead-hard-drive'],
  },
  {
    slug: 'ssd-vs-hdd-reliability-2026',
    title: 'SSD vs HDD Reliability in 2026: The Data Tells a Different Story',
    description: 'We analyzed failure rates across 15,000 drives over 3 years. The winner may surprise you — especially for long-term storage.',
    category: 'Product Reviews',
    date: 'January 10, 2026',
    readTime: '8 min',
    heroEmoji: '📊',
    tocItems: ['Failure Rate Data', 'NAND Wear Limitations', 'HDD Mechanical Failure Patterns', 'Use Case Recommendations', 'The Verdict for 2026'],
    relatedSlugs: ['smart-attributes-explained', 'best-external-hard-drives-2026', '3-2-1-backup-strategy'],
  },
  {
    slug: 'recover-corrupted-excel',
    title: 'How to Recover a Corrupted Excel File (All Methods)',
    description: 'Excel file won\'t open? Shows "file is corrupt"? This guide covers every recovery method from Excel\'s built-in tools to professional repair software.',
    category: 'Recovery Guides',
    date: 'December 30, 2025',
    readTime: '7 min',
    heroEmoji: '📊',
    tocItems: ['Excel\'s Built-in Repair', 'Open and Repair Method', 'Using DataGenius Repair Suite', 'Recovering from AutoSave', 'Preventing Future Corruption'],
    relatedSlugs: ['top-5-data-recovery-software-2026', 'recover-formatted-sd-card', 'recover-data-dead-hard-drive'],
  },
  {
    slug: 'cp-plus-dvr-recovery',
    title: 'CP Plus DVR Recovery: Complete Guide for Indian Users',
    description: 'India\'s most popular CCTV brand, CP Plus, uses a proprietary storage format. Here\'s exactly how to recover footage from CP Plus DVRs using DataGenius.',
    category: 'CCTV Recovery',
    date: 'December 15, 2025',
    readTime: '11 min',
    heroEmoji: '🔐',
    tocItems: ['CP Plus Storage Format', 'Common DVR Failures', 'Recovery with DataGenius', 'Manual HDD Extraction', 'Backing Up CP Plus Footage'],
    relatedSlugs: ['hikvision-dvr-recovery-guide', 'dahua-nvr-recovery', 'recover-data-dead-hard-drive'],
  },
];

export function getArticle(slug: string): BlogArticle | undefined {
  return articles.find((a) => a.slug === slug);
}
