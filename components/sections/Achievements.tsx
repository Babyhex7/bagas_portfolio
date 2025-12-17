'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Award, Mic, Trophy, GraduationCap } from 'lucide-react';
import type { Achievement } from '@/types';
import { useRef } from 'react';

interface AchievementsProps {
  achievements: Achievement[];
}

export function Achievements({ achievements }: AchievementsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress for animated timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Transform scroll progress to timeline height (0 to 100%)
  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
    <section id="achievements" className="py-20 px-4 bg-space-dark">
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

        {/* Achievements Timeline - Zigzag Layout */}
        <div ref={containerRef} className="max-w-6xl mx-auto relative">
          {/* Static Background Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-800/50 rounded-full -translate-x-1/2" />
          
          {/* Animated Progress Line - Dynamic Following Scroll */}
          <motion.div 
            className="hidden md:block absolute left-1/2 top-0 w-1 bg-gradient-to-b from-cosmic-purple via-cosmic-pink to-cosmic-blue rounded-full -translate-x-1/2 origin-top"
            style={{ height: timelineHeight }}
          />

          {achievements.map((achievement, index) => {
            const Icon = getIcon(achievement.type);
            const color = getTypeColor(achievement.type);
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-50px" }}
                className={`relative mb-12 md:mb-16 ${isLeft ? 'md:pr-[52%] md:pl-0' : 'md:pl-[52%] md:pr-0'}`}
              >
                {/* Center Icon Circle - Desktop Only */}
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1 + 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  className="hidden md:flex absolute top-6 left-1/2 -ml-6 w-12 h-12 rounded-full bg-gradient-to-br from-cosmic-purple to-cosmic-purple/70 border-4 border-space-dark items-center justify-center shadow-xl shadow-cosmic-purple/50 z-10"
                >
                  <Icon className="w-6 h-6 text-white drop-shadow-lg" />
                </motion.div>

                {/* Connector Line to Center */}
                <div className={`hidden md:block absolute top-12 ${isLeft ? 'left-1/2 ml-6' : 'right-1/2 mr-6'} ${isLeft ? 'w-16' : 'w-16'} h-0.5`}>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className={`h-full bg-gradient-to-${isLeft ? 'l' : 'r'} from-cosmic-purple/70 to-transparent ${isLeft ? 'origin-right' : 'origin-left'}`}
                  />
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.03, y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className={`relative overflow-hidden ${isLeft ? 'md:mr-0' : 'md:ml-0'}`}>
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-${color}/5 to-transparent pointer-events-none`} />
                    
                    {/* Mobile Icon */}
                    <div className="md:hidden flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cosmic-purple to-cosmic-purple/70 border-2 border-cosmic-purple/30 flex items-center justify-center mb-4 shadow-lg shadow-cosmic-purple/30">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex flex-col gap-2 relative z-10">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                          <span className={`inline-block text-xs px-3 py-1.5 rounded-full bg-${color}/20 text-${color} border border-${color}/40 font-semibold backdrop-blur-sm`}>
                            {getTypeLabel(achievement.type)}
                          </span>
                        </div>
                        <span className={`text-sm font-bold px-4 py-1.5 rounded-lg bg-gradient-to-br from-${color}/20 to-${color}/10 text-${color} border border-${color}/30 whitespace-nowrap`}>
                          {achievement.date}
                        </span>
                      </div>
                      <p className="text-gray-400 leading-relaxed mt-2">{achievement.description}</p>
                    </div>
                  </Card>
                </motion.div>
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
