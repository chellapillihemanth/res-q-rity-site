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
  // Only active channels. Replace with the LinkedIn *company* page URL once it exists.
  socials: {
    linkedin: 'https://www.linkedin.com/in/res-q-rity-a-new-dimension-of-security-617ba5301/',
  },
  // Paste a Calendly / Google Calendar / Zoho Bookings link here and every "Book a free assessment" button opens it.
  bookingUrl: '',
  // WhatsApp Business number in international format without + or spaces (e.g. '919111668818'). Empty hides the link.
  whatsapp: '',
}

export const bookingLink = contact.bookingUrl ? { href: contact.bookingUrl, target: '_blank', rel: 'noreferrer' } : { to: '/contact#enquiry' }
export const whatsappHref = contact.whatsapp
  ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hi RES-Q-RITY, I would like to discuss a security assessment.')}`
  : ''

// Contact form delivery. Submissions are sent by Web3Forms to the inbox the access key was created for
// (tpagidipati@res-q-rity.com). The key is public by design; set it as WEB3FORMS_KEY (VITE_WEB3FORMS_KEY also works).
export const enquiryForm = {
  recipient: 'tpagidipati@res-q-rity.com',
  web3formsKey: import.meta.env.WEB3FORMS_KEY || import.meta.env.VITE_WEB3FORMS_KEY || '',
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Industries', to: '/industries' },
  // { label: 'Case studies', to: '/case-studies' }, // hidden for now
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
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
  short: 'T-Hub, Knowledge City',
  full: '2nd Floor, T-Hub, Plot No 1/C, Sy No 83/1, Raidurgam, Knowledge City, Serilingampally, Hyderabad, Telangana 500081',
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

// Case studies follow one shape: problem, scope, duration, result. Only fill in what the client has signed off.
// A field left as null is simply not shown, so nothing is ever invented on the page.
export const caseStudies = [
  {
    slug: 'quartic-ai',
    client: 'Quartic.ai',
    logo: 'quartic',
    sector: 'Industrial AI · Manufacturing',
    headline: 'ISO 27001-aligned controls and a passed ISO 9001 audit',
    problem: 'Quartic.ai needed its information security controls to meet ISO 27001 expectations, and had an ISO 9001 audit coming up that it could not afford to fail.',
    scope: ['Gap assessment against ISO 27001 controls', 'Remediation of the control gaps found', 'A formal change management process', 'Preparation and support for the ISO 9001 audit'],
    duration: null, // TODO: confirm engagement length with the client, e.g. '4 months'
    result: 'Control gaps closed, change management in place, and the ISO 9001 audit passed.',
    metrics: [], // TODO: add signed-off numbers, e.g. { value: '37', label: 'control gaps closed' }
    quote: {
      text: 'They guided us to meet ISO 27001 standards, finding gaps in our system and fixing them. They introduced better change management and helped us pass an important ISO 9001 audit.',
      name: 'Preyas Mistry',
      title: null, // TODO: job title, e.g. 'Head of Engineering'
      photo: '/people/preyas-mistry.jpg',
    },
  },
]

// Training and enablement work: real, but not a security programme, so it is listed separately.
export const otherWork = [
  { client: 'Great Learning', sector: 'EdTech', work: 'Designed and delivered a four-month cybersecurity course for professional learners.' },
  { client: 'Synergy Software Solutions', sector: 'Software, Malaysia', work: 'Built black-box security test environments for engineering teams.' },
  { client: 'Cigniti × herDigital Story', sector: 'Women in tech', work: 'Cybersecurity upskilling for women entering technology careers.' },
]

export const testimonials = [
  {
    quote: 'They guided us to meet ISO 27001 standards, finding gaps in our system and fixing them. They introduced better change management and helped us pass an important ISO 9001 audit. Their work made a big difference for us, making our systems stronger and more secure.',
    name: 'Preyas Mistry', org: 'Quartic.ai', photo: '/people/preyas-mistry.jpg',
  },
  {
    quote: 'RES-Q-RITY is a team I’d recommend for OT security. They bring strong technical knowledge, are flexible to work with, and deliver solid implementation.',
    name: 'Tanmay Agarwal', org: 'IIT Kanpur C3iHub', photo: '/people/tanmay-agarwal.jpg',
  },
  {
    quote: 'RES-Q-RITY took the time to understand how we work and found us the right fit of technology. It has helped us optimise our day-to-day work. I’d recommend them to any company looking for a security partner who matches the solution to the need.',
    name: 'Raghav', org: 'Bluecopa', photo: '/people/raghav-bluecopa.png',
  },
  {
    quote: 'RES-Q-RITY helped us build our security systems and processes and made us audit ready. I’d recommend them.',
    name: 'Venkat Maroju', org: 'SourceTrace', photo: '/people/venkat-maroju.png',
  },
]

export const recognition = [
  { title: 'Honoured by herDigital Story & Cigniti', text: 'Recognised as a notable female-led entrepreneurial venture.' },
  { title: 'Shecurity Global Summit', text: 'Guest speaker at the international summit on women in cybersecurity.' },
  { title: 'DSCI Member', text: 'Member of the Data Security Council of India since 2024.' },
  { title: 'IIM Bangalore NSRCEL', text: 'Incubated at a leading startup incubator.' },
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
    text: 'Patient and policyholder data carries the highest stakes. We assess controls against HIPAA and DPDPA, and harden the systems that hold that data.',
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
    a: 'ISO 27001/27002, SOC 1 and SOC 2, PCI DSS, HIPAA, HITRUST, NIST, SOX, Cyber Essentials, ISO 9001, ISO 42001 and 21 CFR Part 11, as well as regulations including DPDPA, SEBI, RBI and IRDAI.',
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
    q: 'Where are you based, and do you work with international clients?',
    a: 'Our office is at T-Hub, Knowledge City. We work with clients locally and internationally, including Synergy Software Solutions in Malaysia.',
  },
]

export const founderMessage = 'Our mantra is “Keep Cyber Simple.” Cybersecurity shouldn’t be complex, and we’re here to simplify it for the heart of our economy: small and medium-sized businesses. We understand the pitfalls of one-size-fits-all solutions and the power of strategic, tailored guidance. Let’s simplify cybersecurity together, and make it a seamless part of your business success.'

export const leadership = [
  {
    name: 'Tejasree A. Pagidipati',
    role: 'Founder & Chief Executive Officer',
    photo: '/people/tejasree-pagidipati.jpg',
    initials: 'TP',
    bio: 'Tejasree leads RES-Q-RITY with a career spanning cybersecurity strategy, training and security programs. She holds a Master’s in Information Security and has served as a Chief Information Security Officer, Cybersecurity Mentor and Program Lead, Cybersecurity Lead at EnerMech Ltd, and IT Security Lead at several organisations.',
    highlights: ['Former CISO', 'Master’s in Information Security', 'Cybersecurity Lead, EnerMech Ltd'],
  },
  {
    name: 'Alok Bhashyakarla',
    role: 'Chief Operating Officer',
    photo: null,
    initials: 'AB',
    bio: 'Alok brings over a decade of industry experience, with a foundation as an Automation Engineer and extensive experience in management roles. He blends technical insight with operational management to keep RES-Q-RITY’s delivery efficient, innovative and aligned with its strategy.',
    highlights: ['10+ years in industry', 'Automation engineering background', 'Operations & delivery'],
  },
]

/* ---------------------------------------------------------------------------------------------
   Solutions page: written as the problem a buyer has, then how we solve it. The vendors are the
   means, not the message, so they appear last and small.
--------------------------------------------------------------------------------------------- */
export const solutionProblems = [
  {
    id: 'ransomware',
    short: 'Ransomware & endpoint attacks',
    problem: 'One ransomware attack could stop the business for weeks.',
    signs: ['Antivirus is the only thing on your laptops and servers', 'Nobody would notice an attacker moving between machines at 2 a.m.', 'You have never tested how fast you could recover'],
    solution: 'We deploy endpoint detection and response on every device, tune it to your environment, and connect it to monitoring so suspicious behaviour is contained before it spreads.',
    outcome: 'Attacks caught at the first machine, not the hundredth.',
    tools: ['CrowdStrike'],
  },
  {
    id: 'visibility',
    short: 'No one watching the logs',
    problem: 'You have logs everywhere and nobody watching them.',
    signs: ['Firewall, cloud and application logs sit in separate consoles', 'Alerts go to an inbox no one owns', 'An auditor asked for incident evidence and you had to dig for it'],
    solution: 'We centralise your logs in a SIEM, write detections for the threats that matter to your sector, and set up SOC-as-a-Service so alerts are triaged by analysts, not ignored.',
    outcome: 'One place to see what is happening, and people who act on it.',
    tools: ['Securonix', 'Graylog'],
  },
  {
    id: 'data-loss',
    short: 'Data leaking out',
    problem: 'Sensitive data is leaving through email, USB drives and AI tools.',
    signs: ['Staff paste customer data into ChatGPT or Copilot', 'There is no record of what leaves on USB or personal email', 'DPDPA asks you to show how personal data is protected'],
    solution: 'We classify your sensitive data, then put data loss prevention policies on endpoints, email, cloud apps and AI tools, starting in monitor mode so the business is not disrupted.',
    outcome: 'You know where your data goes, and the risky paths are closed.',
    tools: ['Forcepoint', 'Zecurion'],
  },
  {
    id: 'phishing',
    short: 'Phishing that gets through',
    problem: 'Phishing emails keep getting through, and people keep clicking.',
    signs: ['Fake invoices and CEO emails reach finance', 'Awareness training is a yearly slide deck', 'You cannot say which teams are most at risk'],
    solution: 'We add a dedicated email security layer on top of Microsoft 365 or Google Workspace, then run phishing simulations and short training based on what your staff actually fall for.',
    outcome: 'Fewer malicious emails delivered, and a measurable drop in click rates.',
    tools: ['Proofpoint', 'IRONSCALES', 'KnowBe4', 'VIPRE'],
  },
  {
    id: 'exposure',
    short: 'Unknown exposure & vendor risk',
    problem: 'You do not know what attackers can see about you, or what your vendors expose.',
    signs: ['Leaked credentials or forgotten subdomains you have never checked', 'Vendors with access to your data have never been assessed', 'Customers send you security questionnaires about your supply chain'],
    solution: 'We monitor the dark web, your external attack surface and your brand, and score your third parties so you know which vendors need attention first.',
    outcome: 'Early warning on leaks, and a vendor risk register you can show an auditor.',
    tools: ['KELA', 'CloudSEK', 'UpGuard', 'SecurityScorecard'],
  },
  {
    id: 'validation',
    short: 'Unproven defences',
    problem: 'You have bought security tools but cannot prove they would stop a real attack.',
    signs: ['The board asks “are we protected?” and the answer is a list of products', 'Controls were configured once and never tested', 'A penetration test happens once a year at most'],
    solution: 'We run safe, continuous breach and attack simulations against your own controls, show you which attacks get through, and fix the configuration gaps.',
    outcome: 'Evidence, not assumptions, about what your defences stop.',
    tools: ['SafeBreach'],
  },
  {
    id: 'ot',
    short: 'OT & plant blind spots',
    problem: 'Your plant or OT network is a blind spot.',
    signs: ['No inventory of PLCs, sensors and controllers', 'IT and OT networks are connected but nobody monitors the link', 'Patching OT is not possible, so risk just accumulates'],
    solution: 'We deploy passive OT and IoT monitoring that builds an asset inventory, flags vulnerabilities and detects anomalies without touching production.',
    outcome: 'Full visibility of the plant floor, with no downtime.',
    tools: ['Nozomi Networks'],
  },
  {
    id: 'audits',
    short: 'Audits run on spreadsheets',
    problem: 'Every audit means months of spreadsheets and chasing evidence.',
    signs: ['ISO 27001 or SOC 2 evidence lives in shared folders', 'Risks are tracked in Excel and go stale', 'Each new framework feels like starting from zero'],
    solution: 'We set up a GRC platform, map your controls once across frameworks, and automate evidence collection so audits become a review, not a project.',
    outcome: 'Audit-ready all year, and new frameworks added in weeks.',
    tools: ['Scrut Automation', 'Archer'],
  },
  {
    id: 'code',
    short: 'Unchecked open-source code',
    problem: 'Your developers ship open-source code nobody has checked.',
    signs: ['No software bill of materials for your product', 'Enterprise customers ask about licence and dependency risk', 'Vulnerable libraries are found after release, not before'],
    solution: 'We add software composition analysis and SBOM generation to your pipeline, with remediation guidance developers can act on at commit time.',
    outcome: 'Known vulnerabilities blocked before they reach production.',
    tools: ['Flyingduck'],
  },
  {
    id: 'devices',
    short: 'Unmanaged devices',
    problem: 'Company data lives on phones and laptops you do not manage.',
    signs: ['Staff use personal phones for email and WhatsApp', 'A lost laptop means a lost dataset', 'Patches depend on people clicking “update”'],
    solution: 'We roll out unified endpoint management with zero-trust access, separate work data from personal data, and automate patching.',
    outcome: 'Lost devices wiped remotely, and every device patched on schedule.',
    tools: ['IBM MaaS360', 'Trio'],
  },
]

