'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Award, Mic, Trophy, GraduationCap } from 'lucide-react';
import type { Achievement } from '@/types';

interface AchievementsProps {
  achievements: Achievement[];
}

export function Achievements({ achievements }: AchievementsProps) {
  const getIcon = (type: Achievement['type']) => {
    switch (type) {
      case 'hki':
        return Award;
      case 'speaking':
        return Mic;
      case 'award':
        return Trophy;
      case 'certification':
        return GraduationCap;
      default:
        return Award;
    }
  };

  const getTypeColor = (type: Achievement['type']) => {
    switch (type) {
      case 'hki':
        return 'cosmic-purple';
      case 'speaking':
        return 'cosmic-pink';
      case 'award':
        return 'cosmic-blue';
      case 'certification':
        return 'green-500';
      default:
        return 'cosmic-purple';
    }
  };

  const getTypeLabel = (type: Achievement['type']) => {
    switch (type) {
      case 'hki':
        return 'HKI';
      case 'speaking':
        return 'Public Speaking';
      case 'award':
        return 'Award';
      case 'certification':
        return 'Certification';
      default:
        return type;
    }
  };

  return (
    <section className="py-20 px-4 bg-space-dark">
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
              Achievements
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recognition and milestones throughout my journey
          </p>
        </motion.div>

        {/* Achievements Timeline */}
        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = getIcon(achievement.type);
            const color = getTypeColor(achievement.type);

            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-8 last:mb-0"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-${color}/20 border border-${color}/30 flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${color}`} />
                  </div>

                  {/* Content */}
                  <Card className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                        </div>
                        <span className={`inline-block text-xs px-2 py-1 rounded bg-${color}/20 text-${color} border border-${color}/30`}>
                          {getTypeLabel(achievement.type)}
                        </span>
                      </div>
                      <span className="text-gray-400 text-sm md:text-right whitespace-nowrap">
                        {achievement.date}
                      </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{achievement.description}</p>
                  </Card>
                </div>

                {/* Connector Line */}
                {index < achievements.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-8 bg-gradient-to-b from-cosmic-purple/30 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'HKI Terdaftar', value: achievements.filter(a => a.type === 'hki').length },
            { label: 'Speaking Events', value: achievements.filter(a => a.type === 'speaking').length },
            { label: 'Awards', value: achievements.filter(a => a.type === 'award').length },
            { label: 'Certifications', value: achievements.filter(a => a.type === 'certification').length },
          ].map((stat, index) => (
            <Card key={stat.label} className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-cosmic-purple to-cosmic-pink bg-clip-text text-transparent mb-2">
                {stat.value}+
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
