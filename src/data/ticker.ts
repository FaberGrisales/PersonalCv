export const TICKER_ITEMS: { slug: string; label: string }[] = [
  { slug: 'angular', label: 'Angular' },
  { slug: 'react', label: 'React' },
  { slug: 'nodedotjs', label: 'Node.js' },
  { slug: 'openjdk', label: 'Java' },
  { slug: 'spring', label: 'Spring Boot' },
  { slug: 'dotnet', label: '.NET' },
  { slug: 'typescript', label: 'TypeScript' },
  { slug: 'python', label: 'Python' },
  { slug: 'django', label: 'Django' },
  { slug: 'n8n', label: 'n8n' },
  { slug: 'openai', label: 'OpenAI' },
  { slug: 'ollama', label: 'Ollama' },
  { slug: 'googlegemini', label: 'Google AI' },
  { slug: 'postgresql', label: 'PostgreSQL' },
  { slug: 'mysql', label: 'MySQL' },
  { slug: 'mongodb', label: 'MongoDB' },
  { slug: 'docker', label: 'Docker' },
  { slug: 'kubernetes', label: 'Kubernetes' },
  { slug: 'amazonwebservices', label: 'AWS' },
  { slug: 'microsoftazure', label: 'Azure' },
  { slug: 'git', label: 'Git' },
  { slug: 'github', label: 'GitHub' },
]

export function iconUrl(slug: string) {
  return `https://cdn.jsdelivr.net/npm/simple-icons@13/icons/${slug}.svg`
}
