export interface ExperienceItem {
  year: string
  role: string
  company: string
  tags: { icon: string; label: string }[]
  bullets: string[]
  achievement: string
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    year: '2023 → Now',
    role: 'Senior Frontend Developer',
    company: 'TRANSBORDER SAS',
    tags: [
      { icon: 'angular', label: 'Angular' },
      { icon: 'nodedotjs', label: 'Node.js' },
      { icon: 'n8n', label: 'n8n' },
      { icon: 'openai', label: 'RAG' },
    ],
    bullets: [
      'Manage microservices architecture and workflows by customizing Node.js nodes to optimize complex business logic.',
      'Design and build UI components in Angular to enhance system scalability and performance.',
      'Automate critical business processes by integrating REST APIs and backend services via n8n to reduce manual intervention.',
    ],
    achievement:
      'Implemented a RAG-based AI agent ecosystem using OpenAI and Ollama with PostgreSQL as a vector store, automating legal and technical data extraction and reducing document processing time by 40%.',
  },
  {
    year: '2022 — 2023',
    role: 'Full Stack Developer',
    company: 'Get Global Enterprise',
    tags: [
      { icon: 'openjdk', label: 'Java' },
      { icon: 'spring', label: 'Spring' },
      { icon: 'react', label: 'React Native' },
      { icon: 'mysql', label: 'MySQL' },
    ],
    bullets: [
      'Develop and maintain robust backend services using Java and Spring Boot to ensure high application availability.',
      'Optimize web and mobile applications using React and React Native to unify the user experience across multiple platforms.',
      'Administer MySQL database schemas to ensure data integrity and high-speed access.',
    ],
    achievement:
      'Optimized critical queries and indexing structures in MySQL, resulting in a 25% improvement in response speed for the mobile applications under my responsibility.',
  },
  {
    year: '2020 — 2022',
    role: 'Development Analyst',
    company: 'Grupo MOK',
    tags: [
      { icon: 'angular', label: 'Angular' },
      { icon: 'react', label: 'React' },
      { icon: 'dotnet', label: '.NET' },
    ],
    bullets: [
      'Construct dynamic interfaces using Angular and React to improve the interactivity of internal tools.',
      'Implement server-side functionalities in .NET Framework to strengthen transaction processing.',
    ],
    achievement:
      'Refactored legacy .NET modules and updated frontend components, increasing system stability and decreasing technical error reports by 30%.',
  },
  {
    year: '2018',
    role: 'Software Developer',
    company: 'ZTE Colombia S.A.S',
    tags: [
      { icon: 'html5', label: 'HTML' },
      { icon: 'css3', label: 'CSS' },
      { icon: 'javascript', label: 'JS' },
      { icon: 'php', label: 'PHP' },
    ],
    bullets: [
      'Develop web visualization modules using HTML, CSS, and VanillaJS for infrastructure monitoring.',
      'Build server-side logic using PHP for efficient inventory management and reporting.',
    ],
    achievement:
      'Designed a database management module that centralized version control, improving code change traceability by 50% compared to the previous manual process.',
  },
]
