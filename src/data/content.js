import {
  ShieldCheck, KeyRound, Users, Network, Siren, Scale, Home, UserCog, Radar, FileCheck2,
  Cloud, Search, ClipboardCheck, Bug, GraduationCap, LifeBuoy, Target, Handshake,
} from 'lucide-react'

export const contact = {
  email: 'info@res-q-rity.com',
  phone: '+91 91116 68818',
  phoneHref: 'tel:+919111668818',
  address: 'Knowledge City, T-HUB, Hyderabad, India',
  website: 'www.res-q-rity.com',
  socials: {
    linkedin: 'https://www.linkedin.com/in/res-q-rity-a-new-dimension-of-security-617ba5301/',
    twitter: 'https://twitter.com/resqrity',
    instagram: 'https://www.instagram.com/resqrity/',
    facebook: 'https://www.facebook.com/profile.php?id=61557678493033',
  },
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Contact', to: '/contact' },
]

export const stats = [
  { value: 2022, label: 'Founded', plain: true },
  { value: 11, suffix: '+', label: 'Enterprise clients' },
  { value: 20, suffix: '+', label: 'Technology partners' },
  { value: 40, suffix: '%', label: 'Faster implementation' },
]

export const clients = [
  'Paytm Money', 'NIPRO', 'ZebPay', 'Quartic.ai', 'Great Learning', 'Bluecopa',
  'Synergy Software', 'Freedom Health Insurance', 'SourceTrace', 'Anion Healthcare', 'ANA Oils & Fats',
]

export const pillars = [
  { icon: ShieldCheck, title: 'Technical Safeguards', text: 'Securing applications, networks and cloud infrastructure.' },
  { icon: KeyRound, title: 'Access & Identity', text: 'Secure access and identity verification across the enterprise.' },
  { icon: Users, title: 'Insider Threat & Awareness', text: 'Educating employees and monitoring for internal threats.' },
  { icon: Network, title: 'Third-Party Risk', text: 'Managing risk from external vendors and APIs.' },
  { icon: Siren, title: 'Incident Response & Monitoring', text: 'Protocols for responding to and monitoring incidents.' },
  { icon: Scale, title: 'Compliance Safeguards', text: 'Adherence to regulatory standards, mapped and evidenced.' },
  { icon: Home, title: 'Proactive Resilience', text: 'Measures that keep you standing when threats land.' },
]

export const roadmap = [
  { title: 'CISO appointment & policy refresh', tag: 'Leadership and policy foundation' },
  { title: 'VAPT + API security audit', tag: 'Technical vulnerability assessment' },
  { title: 'SOC integration (SIEM, EDR, UBA)', tag: 'Enhanced threat detection' },
  { title: 'DPDPA & SEBI-aligned consent management', tag: 'Regulatory compliance' },
  { title: 'Employee SAT + phishing simulation', tag: 'Human-factor security' },
  { title: 'Regulatory gap analysis (SEBI, RBI, IRDAI)', tag: 'Compliance gap identification' },
  { title: 'Incident response simulation (ransomware)', tag: 'Preparedness for cyber incidents' },
]

export const serviceTracks = [
  {
    id: 'program',
    title: 'Build Your Own Security Program',
    blurb: 'A security function designed around your business, run by people who have done it before.',
    items: ['Virtual CISO', 'Incident Response Plan', 'Risk Assessment', 'Cloud Security Assessment', 'Gap Assessment', 'Tabletops', 'Vendor Risk Management', 'Vulnerability Management', 'Security Education & Awareness', 'DR & BCP'],
  },
  {
    id: 'audit',
    title: 'Audit & Compliance Services',
    blurb: 'From readiness to certification across the frameworks your customers and regulators ask for.',
    items: ['PCI DSS', 'HITRUST', 'Cyber Essentials', 'NIST', 'ISO 27001 / 27002', 'SOC 1 & SOC 2', 'SOX', 'HIPAA', 'ISO 9001', 'ISO 42001', '21 CFR Part 11'],
  },
  {
    id: 'ondemand',
    title: 'On-Demand Security Experts',
    blurb: 'Senior expertise exactly when you need it, without the overhead of a full-time hire.',
    items: ['Virtual CISO', 'Incident Response', 'SOC-as-a-Service'],
  },
]

export const programServices = [
  { icon: UserCog, title: 'Virtual CISO', points: ['Executive-level security expertise', 'Deep industry knowledge', 'Tailored to the specific needs of your business'] },
  { icon: Siren, title: 'Incident Response', points: ['Preparation is the foundation', 'Structured methodology for breaches and attacks', 'Preparedness through tabletop exercises and dry runs'] },
  { icon: Target, title: 'Risk Assessment', points: ['Understand the magnitude of potential threats', 'Decide the actions needed to mitigate risk', 'Essential for a robust cybersecurity strategy'] },
  { icon: Cloud, title: 'Cloud Security Assessment', points: ['Identify vulnerabilities and assess risk levels', 'Review architecture, access control and encryption', 'Recommendations aligned with regulation'] },
  { icon: Search, title: 'Gap Assessment', points: ['Critical analysis of technical gaps', 'Identify operational and process gaps', 'Prioritised remediation roadmap'] },
  { icon: Handshake, title: 'Vendor Risk Management', points: ['Identify and mitigate third-party risk', 'Prevent data breaches and financial loss', 'Continuous vendor monitoring'] },
  { icon: Bug, title: 'Vulnerability Management', points: ['Identify, classify, prioritise, remediate', 'Maintain integrity of IT infrastructure', 'Address weaknesses promptly'] },
  { icon: GraduationCap, title: 'Security Education & Awareness', points: ['Grow organisational threat knowledge', 'Phishing simulations based on real attacks', 'Foster a culture of security'] },
  { icon: LifeBuoy, title: 'Disaster Recovery & BCP', points: ['Minimise the impact of disasters', 'Quick recovery of data', 'Maintain business continuity'] },
]

export const isoPhases = [
  { title: 'ISMS Design & Implementation', points: ['Gap analysis against ISO/IEC 27001:2022 and Annex A', 'Risk assessment methodology setup', 'Scope definition, context and control mapping', 'ISMS architecture tailored to your size and structure'] },
  { title: 'Policy & Documentation', points: ['Security policies, SOPs and guidelines', 'Asset inventories', 'Risk registers and treatment plans', 'Templates aligned with ISO 27001 requirements'] },
  { title: 'Internal Audit Readiness', points: ['Mock audits to assess readiness', 'Evidence collection and audit trail review', 'Training for control owners', 'Corrective action planning and remediation'] },
  { title: 'External Audit Support', points: ['Liaison during certification audits', 'Responses to findings and non-conformities', 'Post-certification maintenance plan'] },
]

export const audits = [
  { icon: FileCheck2, title: 'SOC 1 & SOC 2', text: 'SOC 1 covers internal control over financial reporting. SOC 2 assesses security, availability, processing integrity, confidentiality and privacy controls.' },
  { icon: ShieldCheck, title: 'ISO 27001 / 27002', text: 'A framework for information security management systems that verifies the confidentiality, integrity and availability of your data.' },
  { icon: ClipboardCheck, title: 'PCI DSS', text: 'Essential for organisations handling card payments, protecting cardholder data and building customer trust.' },
  { icon: Scale, title: 'SOX', text: 'Assesses internal controls over financial reporting so statements are accurate and investors are protected.' },
  { icon: Radar, title: 'HIPAA', text: 'Comprehensive evaluations that ensure healthcare organisations meet the requirements of the HIPAA Act.' },
]

export const vcisoCompare = {
  ours: ['Transcends organisational boundaries', 'Wider pool of expertise', 'Proactive security roadmap', 'Radically lower cost', 'Agile security strategies', 'Wide range of compliance requirements', 'Cross-industry experience'],
  inHouse: [
    { text: 'Integrated within company culture', ok: true },
    { text: 'Deep organisational knowledge', ok: true },
    { text: 'High-priced in-house resource', ok: false },
    { text: 'Traditional security strategies', ok: false },
    { text: 'No cross-industry experience', ok: false },
    { text: 'Limited regulatory landscape', ok: false },
    { text: 'Slow to adopt new strategies', ok: false },
  ],
}

export const partnerCategories = [
  {
    id: 'edr', title: 'Endpoint Detection & Response', short: 'EDR · XDR',
    partners: [
      { name: 'CrowdStrike', rating: '4.7', points: ['Agentic SOC transformation', 'Agentic SOAR', 'Cloud detection & response', 'Ransomware protection', 'Single lightweight sensor, 33 modules'] },
    ],
  },
  {
    id: 'ti', title: 'Threat Intelligence', short: 'Dark web · Brand',
    partners: [
      { name: 'KELA', points: ['Cybercrime threat intelligence', 'Fraud detection & law enforcement', 'Third-party intelligence', 'Attack surface visibility'] },
      { name: 'CloudSEK', points: ['Cyber risk quantification', 'Digital risk protection', 'Attack surface monitoring', 'Actionable intel'] },
      { name: 'UpGuard', points: ['Vendor risk', 'Breach risk', 'User risk', 'Risk posture management'] },
    ],
  },
  {
    id: 'dlp', title: 'Data Leak Prevention', short: 'DLP',
    partners: [
      { name: 'Forcepoint', points: ['Prevent data loss', 'Data security for AI', 'Protect data in ChatGPT', 'Secure Microsoft 365 & Copilot'] },
      { name: 'Zecurion', points: ['Document fingerprints', 'Linguistic & OCR analysis', 'Masked-text analysis', 'Quarantine-based inspection'] },
    ],
  },
  {
    id: 'ot', title: 'OT & IoT Security', short: 'Critical infra',
    partners: [
      { name: 'Nozomi Networks', rating: '4.9', points: ['AI-powered OT/IoT visibility', 'Asset inventory', 'Threat & anomaly detection', 'Vulnerability management'] },
    ],
  },
  {
    id: 'email', title: 'Email Security & Awareness', short: 'Email · SAT',
    partners: [
      { name: 'Proofpoint', rating: '4.6', points: ['Business email compromise', 'URL & malware protection', 'TOAD protection', 'ZenGuide SAT'] },
      { name: 'IRONSCALES', rating: '4.7', points: ['Cloud-native email security', 'Deepfake protection', 'Gen-AI threat protection', 'Adaptive training'] },
      { name: 'VIPRE', points: ['Built for SMEs', 'Inspired e-learning', 'Localised in 17 languages'] },
      { name: 'KnowBe4', rating: '4.6', points: ['Leader for SAT', 'AI-driven recommendations', '60+ built-in reports', 'SmartRisk scoring'] },
    ],
  },
  {
    id: 'bas', title: 'Breach & Attack Simulation', short: 'Validation',
    partners: [
      { name: 'SafeBreach', rating: '4.7', points: ['Breach & attack simulation', 'No-code red team platform', 'RansomwareRx assessment'] },
    ],
  },
  {
    id: 'code', title: 'Code Security', short: 'AppSec · SCA',
    partners: [
      { name: 'Flyingduck', points: ['SBOM & compliance', 'SCA & licence scanning', 'Commit-level analysis', 'AI-guided remediation'] },
    ],
  },
  {
    id: 'siem', title: 'SIEM', short: 'Detect · Respond',
    partners: [
      { name: 'Graylog', points: ['Log everything, pay for what you use', 'UEBA anomaly detection', 'Cloud, on-prem or hybrid', 'Integrated AI assistance'] },
      { name: 'Securonix', rating: '4.7', points: ['Unified defense SIEM', 'Built-in SOAR', 'Agentic AI', '365 days of search data'] },
    ],
  },
  {
    id: 'grc', title: 'GRC Platforms', short: 'Risk · Compliance',
    partners: [
      { name: 'SecurityScorecard', rating: '4.5', points: ['External attack surface management', 'Supply chain cyber risk', 'Cyber insurance'] },
      { name: 'Archer', rating: '4.6', points: ['Audit management', 'Enterprise & operational risk', 'Third-party governance'] },
      { name: 'Scrut Automation', points: ['60+ frameworks out of the box', 'Streamlined audits', 'Third-party risk'] },
    ],
  },
  {
    id: 'mdm', title: 'Mobile Device Management', short: 'UEM · Zero Trust',
    partners: [
      { name: 'IBM MaaS360', points: ['Unified endpoint management', 'AI insights with Watson', 'Secure containerisation'] },
      { name: 'Trio', points: ['Zero Trust built in', 'Automated patch management', 'QR-based bulk enrolment'] },
    ],
  },
]

export const allPartners = partnerCategories.flatMap((c) => c.partners.map((p) => p.name))
