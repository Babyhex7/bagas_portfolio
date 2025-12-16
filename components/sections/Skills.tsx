'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import type { Skill } from '@/types';

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  const categories = [
    { id: 'frontend', label: 'Frontend', color: 'cosmic-purple' },
    { id: 'backend', label: 'Backend', color: 'cosmic-pink' },
    { id: 'mobile', label: 'Mobile', color: 'cosmic-blue' },
    { id: 'ai', label: 'AI/ML', color: 'cosmic-purple' },
    { id: 'database', label: 'Database', color: 'cosmic-pink' },
    { id: 'tools', label: 'Tools', color: 'cosmic-blue' },
  ];

  const getSkillsByCategory = (category: string) => {
    return skills.filter((skill) => skill.category === category);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-space-dark to-space-light">
      <div className="container mx-auto">
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
              Tech Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
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
                <Card>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <span className={`w-3 h-3 rounded-full bg-${category.color} mr-2`}></span>
                    {category.label}
                  </h3>
                  <div className="space-y-4">
                    {categorySkills.map((skill) => (
                      <div key={skill.id}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                          <span className="text-cosmic-purple text-xs">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-space-light rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r from-cosmic-purple to-cosmic-pink rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
