import type { Skill } from '@/types';

export const skills: Skill[] = [
  // Frontend
  { id: '1', name: 'Next.js (TypeScript)', category: 'frontend', level: 95 },
  { id: '2', name: 'React.js', category: 'frontend', level: 95 },
  { id: '3', name: 'Tailwind CSS', category: 'frontend', level: 92 },
  { id: '4', name: 'Flutter (Dart)', category: 'frontend', level: 90 },

  // Backend
  { id: '5', name: 'Golang (Gin / Fiber)', category: 'backend', level: 96 },
  { id: '6', name: 'Node.js (NestJS/Express)', category: 'backend', level: 94 },
  { id: '7', name: 'Laravel', category: 'backend', level: 88 },
  { id: '8', name: 'Python (FastAPI)', category: 'backend', level: 88 },
  { id: '9', name: 'RESTful API Architecture', category: 'backend', level: 96 },

  // Mobile
  { id: '10', name: 'Flutter', category: 'mobile', level: 90 },
  { id: '11', name: 'Firebase / Push Services', category: 'mobile', level: 80 },

  // AI/ML
  { id: '12', name: 'RAG (LangChain)', category: 'ai', level: 88 },
  { id: '13', name: 'Vector Databases (pgvector)', category: 'ai', level: 85 },
  { id: '14', name: 'Multi-Agent Orchestration', category: 'ai', level: 82 },
  { id: '15', name: 'TensorFlow', category: 'ai', level: 78 },
  { id: '16', name: 'OpenAI API', category: 'ai', level: 88 },

  // Database
  { id: '17', name: 'PostgreSQL', category: 'database', level: 90 },
  { id: '18', name: 'MySQL', category: 'database', level: 92 },
  { id: '19', name: 'MongoDB', category: 'database', level: 82 },
  { id: '20', name: 'Query Optimization', category: 'database', level: 90 },

  // Tools & practices
  { id: '21', name: 'Docker', category: 'tools', level: 85 },
  { id: '22', name: 'Git & GitHub Actions', category: 'tools', level: 92 },
  { id: '23', name: 'JWT / RBAC Security', category: 'tools', level: 94 },
  { id: '24', name: 'Agile & Scrum', category: 'tools', level: 88 },
];
