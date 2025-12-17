'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import type { Skill } from '@/types';
import Image from 'next/image';

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  const categories = [
    { id: 'frontend', label: 'Frontend Development', color: 'cosmic-purple', icon: '💻' },
    { id: 'backend', label: 'Backend Development', color: 'cosmic-pink', icon: '⚙️' },
    { id: 'mobile', label: 'Mobile Development', color: 'cosmic-blue', icon: '📱' },
    { id: 'ai', label: 'AI & Machine Learning', color: 'green-500', icon: '🤖' },
    { id: 'database', label: 'Database', color: 'yellow-500', icon: '💾' },
    { id: 'tools', label: 'Tools & DevOps', color: 'purple-500', icon: '🛠️' },
  ];

  const getSkillsByCategory = (category: string) => {
    return skills.filter((skill) => skill.category === category);
  };

  // Tech stack icon mapping menggunakan Simple Icons CDN
  const getTechIcon = (skillName: string) => {
    const iconMap: { [key: string]: string } = {
      'React': 'https://cdn.simpleicons.org/react/61DAFB',
      'Next.js': 'https://cdn.simpleicons.org/nextdotjs/000000',
      'TypeScript': 'https://cdn.simpleicons.org/typescript/3178C6',
      'JavaScript': 'https://cdn.simpleicons.org/javascript/F7DF1E',
      'Tailwind CSS': 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
      'Vue.js': 'https://cdn.simpleicons.org/vuedotjs/4FC08D',
      'HTML5': 'https://cdn.simpleicons.org/html5/E34F26',
      'CSS3': 'https://cdn.simpleicons.org/css3/1572B6',
      
      'Node.js': 'https://cdn.simpleicons.org/nodedotjs/339933',
      'Express.js': 'https://cdn.simpleicons.org/express/000000',
      'Python': 'https://cdn.simpleicons.org/python/3776AB',
      'Golang': 'https://cdn.simpleicons.org/go/00ADD8',
      'FastAPI': 'https://cdn.simpleicons.org/fastapi/009688',
      'Laravel': 'https://cdn.simpleicons.org/laravel/FF2D20',
      'PHP': 'https://cdn.simpleicons.org/php/777BB4',
      
      'React Native': 'https://cdn.simpleicons.org/react/61DAFB',
      'Flutter': 'https://cdn.simpleicons.org/flutter/02569B',
      'Expo': 'https://cdn.simpleicons.org/expo/000020',
      
      'TensorFlow': 'https://cdn.simpleicons.org/tensorflow/FF6F00',
      'PyTorch': 'https://cdn.simpleicons.org/pytorch/EE4C2C',
      'Scikit-learn': 'https://cdn.simpleicons.org/scikitlearn/F7931E',
      'OpenCV': 'https://cdn.simpleicons.org/opencv/5C3EE8',
      
      'PostgreSQL': 'https://cdn.simpleicons.org/postgresql/4169E1',
      'MongoDB': 'https://cdn.simpleicons.org/mongodb/47A248',
      'MySQL': 'https://cdn.simpleicons.org/mysql/4479A1',
      'Redis': 'https://cdn.simpleicons.org/redis/DC382D',
      'Firebase': 'https://cdn.simpleicons.org/firebase/FFCA28',
      
      'Git': 'https://cdn.simpleicons.org/git/F05032',
      'GitHub': 'https://cdn.simpleicons.org/github/181717',
      'Docker': 'https://cdn.simpleicons.org/docker/2496ED',
      'VS Code': 'https://cdn.simpleicons.org/visualstudiocode/007ACC',
      'Figma': 'https://cdn.simpleicons.org/figma/F24E1E',
      'Postman': 'https://cdn.simpleicons.org/postman/FF6C37',
    };
    return iconMap[skillName] || 'https://cdn.simpleicons.org/code/8B5CF6';
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-space-dark to-space-light">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cosmic-purple to-cosmic-pink bg-clip-text text-transparent">
              Tech Stack & Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build amazing applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, catIndex) => {
            const categorySkills = getSkillsByCategory(category.id);
            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-cosmic-purple/20">
                    <span className="text-3xl">{category.icon}</span>
                    <h3 className="text-xl font-bold text-white">{category.label}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {categorySkills.map((skill) => (
                      <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        {/* Skill Header with Icon */}
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-white/10 p-1.5 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <img 
                              src={getTechIcon(skill.name)} 
                              alt={skill.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="flex-grow flex justify-between items-center">
                            <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                              {skill.name}
                            </span>
                            <span className="text-cosmic-purple text-xs font-semibold">
                              {skill.level}%
                            </span>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-2 bg-space-dark/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-cosmic-purple via-cosmic-pink to-cosmic-blue rounded-full relative"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse-slow" />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Logos Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-br from-space-light/50 to-space-dark/50">
            <h3 className="text-2xl font-bold text-center text-white mb-8">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {['React', 'Next.js', 'Node.js', 'Flutter', 'Golang', 'Python', 'MySQL', 'MongoDB', 'Docker', 'Firebase'].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-16 h-16 rounded-xl bg-white/5 border border-cosmic-purple/20 p-3 hover:border-cosmic-purple/50 transition-all cursor-pointer"
                >
                  <img 
                    src={getTechIcon(tech)} 
                    alt={tech}
                    className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
