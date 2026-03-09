export interface SkillCategory {
  icon: string
  title: string
  color: string
  tags: string[]
}

export interface Project {
  index: string
  title: string
  description: string
  tech: string[]
  role: string
  roleColor: 'accent' | 'accent2' | 'accent3'
  domain: string
}

export interface Responsibility {
  bold: string
  text: string
}

export const skillCategories: SkillCategory[] = [
  {
    icon: '⚛️',
    title: 'Frontend',
    color: 'rgba(79,255,176,0.1)',
    tags: [
      'React.js', 'Next.js', 'TypeScript', 'Redux', 'Zustand',
      'React Query', 'SCSS', 'Tailwind', 'Framer Motion',
      'HTML5', 'CSS3', 'Bootstrap',
    ],
  },
  {
    icon: '🔧',
    title: 'Backend',
    color: 'rgba(0,207,255,0.1)',
    tags: [
      'Node.js', 'Express.js', 'RESTful APIs',
      'JWT Auth', 'RBAC', 'SSO (Azure AD)',
      'BullMQ', 'Redis', 'Prisma ORM',
    ],
  },
  {
    icon: '🗄️',
    title: 'Database',
    color: 'rgba(181,123,255,0.1)',
    tags: ['MySQL', 'MongoDB', 'Indexing', 'Query Optimization', 'Data Modeling'],
  },
  {
    icon: '☁️',
    title: 'DevOps & Cloud',
    color: 'rgba(255,200,79,0.1)',
    tags: ['Docker', 'AWS EC2', 'AWS S3', 'AWS RDS', 'Linux (Ubuntu)', 'CI/CD', 'Kubernetes (basic)'],
  },
  {
    icon: '🏗️',
    title: 'Architecture & Design',
    color: 'rgba(79,255,176,0.1)',
    tags: ['Atomic Design', 'BEM', 'Component-Based', 'Microservices', 'Event-Driven', 'Background Jobs'],
  },
  {
    icon: '✅',
    title: 'Quality & Tooling',
    color: 'rgba(0,207,255,0.1)',
    tags: ['JEST', 'ESLint', 'Prettier', 'Stylelint', 'Husky', 'Git', 'Git-Gerrit', 'GitLab'],
  },
]

export const projects: Project[] = [
  {
    index: '01 / ENTERPRISE',
    title: 'Customer & Property Management Portal',
    description:
      'Enterprise-grade platform for customer and property management featuring multi-role authentication, real-time analytics dashboards, and integrated payment processing. Engineered for scale with event-driven background jobs and robust security controls.',
    tech: [
      'React + TypeScript', 'Node.js', 'Express', 'BullMQ + Redis',
      'Azure AD SSO', 'JWT + RBAC', 'Prisma ORM', 'Payment Gateways', 'SharePoint', 'MySQL',
    ],
    role: 'Full Stack Developer',
    roleColor: 'accent',
    domain: 'Real Estate/Construction',
  },
  {
    index: '02 / SAAS',
    title: 'Subscription Management System',
    description:
      'End-to-end subscription platform with automated billing, invoicing, and webhook-driven payment event handling. Complemented by a polished Next.js landing page and a lightweight CMS for content management.',
    tech: ['Next.js', 'TypeScript', 'SCSS', 'Framer Motion', 'Zustand', 'RESTful APIs', 'Webhooks', 'Payment Gateways'],
    role: 'Full Stack Developer',
    roleColor: 'accent',
    domain: 'Technology/SaaS',
  },
  {
    index: '03 / DESIGN SYSTEM',
    title: 'UI Component Library & Design System',
    description:
      'Established scalable frontend architecture across multiple projects using Atomic Design and BEM methodologies. Built a suite of reusable, performant, accessible React components with enforced code quality standards.',
    tech: ['React', 'TypeScript', 'Atomic Design', 'BEM', 'ESLint', 'Stylelint', 'Husky', 'JEST'],
    role: 'Senior Frontend Developer',
    roleColor: 'accent2',
    domain: 'Technology/R&D',
  },
  {
    index: '04 / COMPLIANCE',
    title: 'Healthcare Compliance Portal',
    description: 'Code health and compliance checking platform for healthcare systems, analyzing code quality, security protocols, regulatory compliance standards, and generating detailed audit reports.',
    tech: ['React', 'Node.js', 'TypeScript', 'MySQL', 'Docker', 'Code Analysis'],
    role: 'Frontend Developer',
    roleColor: 'accent3',
    domain: 'Healthcare',
  },
  {
    index: '05 / CORPORATE',
    title: 'Corporate Presence Platform',
    description: 'Professional corporate web presence and digital storefront showcasing company services, portfolio, and partnership opportunities.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'SEO Optimization'],
    role: 'Frontend Developer',
    roleColor: 'accent3',
    domain: 'IT/Corporate',
  },
  {
    index: '08 / CORPORATE WEBSITE',
    title: 'Enterprise Web Portal',
    description: 'Large-scale enterprise web portal delivering company information, team collaboration spaces, and digital services.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Performance Optimization'],
    role: 'Frontend Developer',
    roleColor: 'accent3',
    domain: 'IT/Corporate',
  },
  {
    index: '09 / MEDIA PLATFORM',
    title: 'Digital Advertisement Management System',
    description: 'Comprehensive platform for managing digital advertising campaigns, media operations, analytics, campaign management, and performance tracking.',
    tech: ['React + TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Chart.js'],
    role: 'Full Stack Developer',
    roleColor: 'accent',
    domain: 'Retail/Media',
  },
  {
    index: '10 / STREAMING',
    title: 'Digital Entertainment Platform',
    description: 'Streaming and entertainment web application featuring content management, user engagement tools, and real-time features.',
    tech: ['React', 'Node.js', 'Video.js', 'WebSockets', 'MongoDB', 'AWS S3'],
    role: 'Full Stack Developer',
    roleColor: 'accent',
    domain: 'Media/Entertainment',
  },
  {
    index: '11 / EDTECH',
    title: 'Learning & Assessment Platform',
    description: 'Educational technology platform offering computer-based testing, learning management, and student performance analytics.',
    tech: ['React + TypeScript', 'Node.js', 'Express', 'MySQL', 'Chart.js', 'Exam Engine'],
    role: 'Full Stack Developer',
    roleColor: 'accent',
    domain: 'Education/Testing',
  },
  {
    index: '12 / CONSTRUCTION TECH',
    title: 'Real Estate Operations Suite',
    description: 'Enterprise software suite for real estate and construction with project tracking, property management, and resource planning.',
    tech: ['React + TypeScript', 'Node.js', 'Express', 'BullMQ + Redis', 'MySQL', 'Mapping APIs'],
    role: 'Full Stack Developer',
    roleColor: 'accent',
    domain: 'Real Estate/Construction',
  },
  {
    index: '13 / FOOD SERVICE',
    title: 'Food Service Management Interface',
    description: 'Frontend solution for food and beverage operations including menu interfaces, ordering systems, and inventory management.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Redux', 'Payment Integration'],
    role: 'Frontend Developer',
    roleColor: 'accent3',
    domain: 'Food & Beverage',
  },
  {
    index: '14 / RESOURCE SYSTEM',
    title: 'Enterprise Resource Information System',
    description: 'Web portal frontend for manufacturing and chemical industry resource management integrating Python FIRST API. Converts invoice systems into interactive web portal with data visualization, comprehensive reporting, and live update capabilities.',
    tech: ['React', 'TypeScript', 'SCSS', 'Python FIRST API'],
    role: 'Frontend Developer',
    roleColor: 'accent3',
    domain: 'Manufacturing/Chemical',
  },
  {
    index: '15 / INNOVATION LAB',
    title: 'Technology Innovation Workspace',
    description: 'Collaborative full-stack platform for technology research, experimental development, and team-based innovation projects.',
    tech: ['React + TypeScript', 'Node.js', 'Express', 'MongoDB', 'Docker', 'Kubernetes'],
    role: 'Full Stack Developer',
    roleColor: 'accent',
    domain: 'Technology/R&D',
  },
]

export const responsibilities: Responsibility[] = [
  { bold: 'Full-Stack Architecture', text: 'Designed and delivered scalable web applications using React, Next.js, Node.js, Express, and TypeScript across the entire stack.' },
  { bold: 'Frontend Engineering', text: 'Built reusable, performant, accessible UI components. Managed global state with Redux and Zustand. Applied Atomic Design and BEM for maintainable architecture.' },
  { bold: 'Backend & API Design', text: 'Engineered secure RESTful APIs. Implemented JWT, RBAC, and SSO with Azure AD (MSAL) for enterprise authentication flows.' },
  { bold: 'Database Architecture', text: 'Designed relational and NoSQL schemas. Optimized queries, indexing strategies, and data integrity using MySQL (Prisma) and MongoDB.' },
  { bold: 'Event-Driven Processing', text: 'Implemented async job queues and background processing with BullMQ and Redis for automation and system scalability.' },
  { bold: 'System Integration', text: 'Connected payment gateways, email/SMS services, Azure/SharePoint, and external webhook systems.' },
  { bold: 'DevOps & Deployment', text: 'Containerized apps with Docker, deployed on AWS (EC2, S3, RDS), and supported CI/CD pipelines and production monitoring.' },
  { bold: 'Cross-Functional Leadership', text: 'Collaborated with Japanese & Philippine teams in agile environments. Led code reviews and mentored junior developers.' },
  { bold: 'AI-Assisted Development', text: 'Leveraged AI tools (GitHub Copilot, Claude) to accelerate development productivity, generate code templates, and improve code quality through intelligent suggestions.' },
  { bold: 'Code Generation & Security Review', text: 'Utilized AI-powered code generation to expedite development while maintaining rigorous review standards—conducting comprehensive security audits, analyzing side effects, and validating logic to ensure production-ready quality.' },
  { bold: 'AI-Driven Problem Solving', text: 'Worked collaboratively with AI tools to research architectural patterns, debug complex issues, and optimize performance. Applied critical thinking to validate AI-generated solutions against requirements and best practices.' },
]

export const contactLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/mrshaikat',
    icon: `<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/mrshaikat',
    icon: `<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`,
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/mrshaikat',
    icon: `<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>`,
  },
  {
    label: '+880 1919-430500',
    href: 'tel:+8801919430500',
    icon: `<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`,
  },
]
