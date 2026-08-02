export interface Project {
  id: string;
  /** Product name as shipped, e.g. "Markin" */
  name: string;
  /** Client or product suite, e.g. "Duluin" */
  client: string;
  title: string;
  description: string;
  image: string; // Main image (backward compatibility)
  images?: string[]; // Full screenshot set for the viewer
  tags: string[];
  category: 'platform' | 'corporate' | 'commerce' | 'health' | 'education';
  liveUrl: string;
  year: string;
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
