export interface Project {
  id: string;
  title: string;
  description: string;
  image: string; // Main image (backward compatibility)
  images?: string[]; // Multiple screenshots untuk carousel
  tags: string[];
  category: 'web' | 'mobile' | 'ai';
  demoUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'ai' | 'database' | 'tools';
  level: number;
  icon?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'hki' | 'speaking' | 'award' | 'certification';
  image?: string;
}
