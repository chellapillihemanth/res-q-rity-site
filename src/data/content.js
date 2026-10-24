import {
  ShieldCheck, KeyRound, Users, Network, Siren, Scale, Home, UserCog, Radar, FileCheck2,
  Cloud, Search, ClipboardCheck, Bug, GraduationCap, LifeBuoy, Target, Handshake,
} from 'lucide-react'

export const contact = {
  email: 'info@res-q-rity.com',
  phone: '+91 91116 68818',
  phoneHref: 'tel:+919111668818',
  address: "T-Hub, Knowledge City, Hyderabad, Telangana 500081",
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

export const address = {
  short: 'T-Hub, Knowledge City, Hyderabad',
  full: 'T-Hub, Plot No 1/C, Sy No 83/1, Raidurgam, Knowledge City, Serilingampally, Hyderabad, Telangana 500081',
  directions: 'https://www.google.com/maps/search/?api=1&query=T-Hub%2C%20Knowledge%20City%2C%20Hyderabad',
}

export const clientLogos = [
  { name: 'Paytm Money', file: 'paytm-money', aspect: 2.65 },
  { name: 'NIPRO', file: 'nipro', aspect: 4.09 },
  { name: 'ZebPay', file: 'zebpay', aspect: 4.37 },
  { name: 'Quartic.ai', file: 'quartic', aspect: 4.04 },
  { name: 'Great Learning', file: 'great-learning', aspect: 3.19 },
  { name: 'Bluecopa', file: 'bluecopa', aspect: 4.91 },
  { name: 'Synergy Software Solutions', file: 'synergy', aspect: 6.51 },
  { name: 'Freedom Health Insurance', file: 'freedom-health', aspect: 2.46 },
  { name: 'SourceTrace', file: 'sourcetrace', aspect: 5.72 },
  { name: 'Anion Healthcare', file: 'anion', aspect: 3.62 },
  { name: 'ANA Oils & Fats India', file: 'ana', aspect: 2.45 },
]

export const approach = [
  {
    name: 'Fortify',
    lede: 'Find the gaps before attackers do.',
    items: [
      { title: 'Precision risk evaluation', text: 'Deep-dive assessments of your IT ecosystem that become the blueprint for your security strategy.' },
      { title: 'Security awareness training', text: 'Turn your people into the first line of defence against phishing and social engineering.' },
      { title: 'Proactive defence', text: 'DLP, SIEM, threat intelligence and endpoint protection, deployed where they matter.' },
    ],
  },
  {
    name: 'Respond',
    lede: 'Contain incidents fast, with a plan.',
    items: [
      { title: 'Swift incident containment', text: 'Playbooks that confine the damage and stop an attack from spreading.' },
      { title: 'Real-time threat neutralisation', text: 'Threat intelligence used to read the attacker’s tactics as they unfold.' },
      { title: 'Unified response communication', text: 'One coordinated response across your teams, with clear updates throughout.' },
    ],
  },
  {
    name: 'Rise',
    lede: 'Come back stronger after every event.',
    items: [
      { title: 'Incident debrief & reporting', text: 'A full account of what happened and what it means for your defences.' },
      { title: 'Restoration & reinforcement', text: 'Recover compromised systems and data, then harden them.' },
      { title: 'Evolving through experience', text: 'Policies, protocols and controls refined after each encounter.' },
    ],
  },
]

export const engagementSteps = [
  { title: 'Complimentary technical assessment', text: 'A no-cost review that establishes your current security posture, with objective findings and constructive feedback.' },
  { title: 'Onboarding', text: 'We map your requirements, regulators and goals, and document the scope together.' },
  { title: 'Project initiation', text: 'A strategic kickoff, with immediate protective measures where risk is highest.' },
  { title: 'Customised security strategy', text: 'A plan built with your stakeholders to grow a lasting security culture.' },
  { title: 'Strategy implementation', text: 'Controls deployed proactively and tuned as new threats emerge.' },
  { title: 'Project closure', text: 'An in-depth evaluation and report measuring what changed and what comes next.' },
  { title: 'Continued support', text: 'Ongoing advisory so your defences keep pace with the threat landscape.' },
]

export const caseWork = [
  { client: 'Quartic.ai', sector: 'Industrial AI', work: 'Designed an ISO 27001 security roadmap, closed control gaps and supported a successful ISO 9001 audit.' },
  { client: 'Great Learning', sector: 'EdTech', work: 'Designed and delivered a four-month cybersecurity course for professional learners.' },
  { client: 'Synergy Software Solutions', sector: 'Software, Malaysia', work: 'Built black-box security test environments for their engineering teams.' },
]

export const testimonials = [
  {
    quote: 'They guided us to meet ISO 27001 standards, finding gaps in our system and fixing them. They introduced better change management and helped us pass an important ISO 9001 audit. Their work made a big difference for us, making our systems stronger and more secure.',
    name: 'Preyas Mistry', org: 'Quartic.ai', photo: '/people/preyas-mistry.jpg',
  },
  {
    quote: 'Cigniti is really happy to have worked with Res-Q-Rity on our project to help women learn about new tech. Together, we helped lots of women get into tech fields. They made a big difference.',
    name: 'Tanya Singh', org: 'Cigniti', photo: '/people/tanya-singh.jpg',
  },
  {
    quote: 'BlockVerse Institute is grateful to Res-Q-Rity for their outstanding contribution in teaching African students about cybersecurity. Our students learned a lot about keeping digital information safe.',
    name: 'Gaurav', org: 'BlockVerse Institute', photo: '/people/gaurav.jpg',
  },
]

export const recognition = [
  { title: 'Honoured by herDigital Story & Cigniti', text: 'Recognised as a notable female-led entrepreneurial venture.' },
  { title: 'Shecurity Global Summit', text: 'Guest speaker at the international summit on women in cybersecurity.' },
  { title: 'DSCI Member', text: 'Member of the Data Security Council of India since 2024.' },
  { title: 'IIM Bangalore NSRCEL', text: 'Incubated at one of India’s leading startup incubators.' },
]

export const frameworks = ['ISO 27001', 'SOC 2', 'PCI DSS', 'HIPAA', 'NIST', 'HITRUST', 'SOX', 'Cyber Essentials', 'ISO 42001', 'ISO 9001', '21 CFR Part 11', 'DPDPA', 'SEBI', 'RBI', 'IRDAI']

export const industries = [
  {
    name: 'Fintech & BFSI',
    text: 'Regulators expect board-level oversight, tested incident response and evidence on demand. We help you meet SEBI, RBI and IRDAI expectations without slowing product teams down.',
    frameworks: ['SEBI', 'RBI', 'IRDAI', 'PCI DSS', 'DPDPA', 'ISO 27001'],
    clients: ['paytm-money', 'zebpay', 'bluecopa'],
  },
  {
    name: 'Healthcare & insurance',
    text: 'Patient and policyholder data carries the highest stakes. We assess controls against HIPAA and Indian data protection law, and harden the systems that hold that data.',
    frameworks: ['HIPAA', 'HITRUST', 'IRDAI', 'DPDPA', '21 CFR Part 11'],
    clients: ['nipro', 'freedom-health', 'anion'],
  },
  {
    name: 'Manufacturing & industrial',
    text: 'Plants, OT networks and supply chains widen the attack surface. We bring ISO 27001 implementation experience and OT/IoT visibility through our partners.',
    frameworks: ['ISO 27001', 'ISO 9001', 'NIST', 'IEC 62443 via partners'],
    clients: ['quartic', 'ana'],
  },
  {
    name: 'SaaS & EdTech',
    text: 'Enterprise customers ask for SOC 2 and ISO 27001 before they sign. We get you audit-ready, and keep you there as you ship.',
    frameworks: ['SOC 2', 'ISO 27001', 'ISO 42001', 'GDPR', 'DPDPA'],
    clients: ['great-learning', 'sourcetrace', 'synergy'],
  },
]

export const assessmentDomains = [
  { name: 'Identity & access', score: 46, status: 'Needs attention' },
  { name: 'Endpoint protection', score: 72, status: 'Adequate' },
  { name: 'Cloud configuration', score: 38, status: 'Needs attention' },
  { name: 'Email & phishing resilience', score: 64, status: 'Adequate' },
  { name: 'Third-party risk', score: 29, status: 'High risk' },
  { name: 'Incident readiness', score: 55, status: 'Adequate' },
  { name: 'Compliance (ISO 27001)', score: 81, status: 'Strong' },
]

export const faqs = [
  {
    q: 'What does the free technical assessment include?',
    a: 'A no-cost review of your current security posture across identity, endpoints, cloud, email, third parties and compliance. You get objective findings and practical recommendations, with no obligation to continue.',
  },
  {
    q: 'Do you only consult, or can you also provide security products?',
    a: 'Both. We are a value-added channel partner to vendors including CrowdStrike, Proofpoint, Forcepoint, Securonix and Nozomi Networks, so we can recommend, source and deploy the right tool and then help you run it.',
  },
  {
    q: 'Which compliance frameworks can you help with?',
    a: 'ISO 27001/27002, SOC 1 and SOC 2, PCI DSS, HIPAA, HITRUST, NIST, SOX, Cyber Essentials, ISO 9001, ISO 42001 and 21 CFR Part 11, as well as Indian regulations including DPDPA, SEBI, RBI and IRDAI.',
  },
  {
    q: 'How is a virtual CISO different from hiring one?',
    a: 'You get executive-level security leadership backed by a cross-industry team, at a fraction of the cost of a full-time hire. It suits companies that need a security strategy, board reporting and audit ownership but not a permanent executive role.',
  },
  {
    q: 'Can you work alongside our existing IT or security team?',
    a: 'Yes. Most engagements work as an extension of your InfoSec and compliance teams. We train internal control owners so the program keeps running after we step back.',
  },
  {
    q: 'Where are you based, and do you work with clients outside India?',
    a: 'Our office is at T-Hub, Knowledge City, Hyderabad. We work with clients across India and internationally, including Synergy Software Solutions in Malaysia.',
  },
]
