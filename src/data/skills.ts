export interface SkillItem {
  icon: string
  label: string
  primary: boolean
}

export interface SkillCategory {
  id: string
  title: string
  count: number
  items: SkillItem[]
}

export const SKILLS: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    count: 8,
    items: [
      { icon: 'angular', label: 'Angular', primary: true },
      { icon: 'react', label: 'React', primary: true },
      { icon: 'react', label: 'React Native', primary: false },
      { icon: 'ionic', label: 'Ionic', primary: false },
      { icon: 'typescript', label: 'TypeScript', primary: false },
      { icon: 'javascript', label: 'JavaScript', primary: false },
      { icon: 'html5', label: 'HTML', primary: false },
      { icon: 'bootstrap', label: 'Bootstrap', primary: false },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    count: 6,
    items: [
      { icon: 'openjdk', label: 'Java', primary: true },
      { icon: 'spring', label: 'Spring Boot', primary: true },
      { icon: 'dotnet', label: '.NET / ASP.NET', primary: false },
      { icon: 'nodedotjs', label: 'Node.js', primary: false },
      { icon: 'python', label: 'Python / Django', primary: false },
      { icon: 'php', label: 'PHP', primary: false },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    count: 7,
    items: [
      { icon: 'n8n', label: 'n8n', primary: true },
      { icon: 'openai', label: 'RAG Agents', primary: true },
      { icon: 'openai', label: 'OpenAI', primary: false },
      { icon: 'googlegemini', label: 'Google AI', primary: false },
      { icon: 'ollama', label: 'Ollama', primary: false },
      { icon: 'postgresql', label: 'pgvector', primary: false },
      { icon: 'supabase', label: 'Supabase', primary: false },
    ],
  },
  {
    id: 'cloud',
    title: 'Data & Cloud',
    count: 9,
    items: [
      { icon: 'postgresql', label: 'PostgreSQL', primary: true },
      { icon: 'mysql', label: 'MySQL', primary: false },
      { icon: 'mongodb', label: 'MongoDB', primary: false },
      { icon: 'microsoftsqlserver', label: 'SQL Server', primary: false },
      { icon: 'amazonwebservices', label: 'AWS', primary: false },
      { icon: 'microsoftazure', label: 'Azure', primary: false },
      { icon: 'docker', label: 'Docker', primary: false },
      { icon: 'kubernetes', label: 'Kubernetes', primary: false },
      { icon: 'githubactions', label: 'CI/CD', primary: false },
    ],
  },
]
