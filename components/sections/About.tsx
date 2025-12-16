'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Code, Award, Users, Sparkles } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Code, label: 'Projects', value: '20+' },
    { icon: Award, label: 'HKI Terdaftar', value: '2' },
    { icon: Users, label: 'Public Speaking', value: '20+ Events' },
    { icon: Sparkles, label: 'Experience', value: '2+ Years' },
  ];

  const highlights = [
    {
      title: 'Web Development',
      description: 'Expertise in building modern, responsive web applications using React, Next.js, and TypeScript.',
    },
    {
      title: 'Mobile Development',
      description: 'Creating cross-platform mobile apps with React Native and Flutter for iOS and Android.',
    },
    {
      title: 'AI & Machine Learning',
      description: 'Developing intelligent applications with TensorFlow, PyTorch, and various AI frameworks.',
    },
    {
      title: 'Public Speaker',
      description: 'Active speaker at 20+ tech events, sharing knowledge about web development and AI.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-space-light to-space-dark">
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
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about creating innovative solutions and sharing knowledge
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-cosmic-purple" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                Saya adalah mahasiswa S1 Rekayasa Perangkat Lunak di Universitas Pendidikan Indonesia (UPI)
                dengan passion yang kuat di bidang Web & Mobile Development. Dengan pengalaman lebih dari 2 tahun,
                saya telah mengembangkan berbagai aplikasi inovatif yang menggabungkan teknologi web modern dengan
                kecerdasan buatan.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Sebagai seorang pembelajar yang antusias, saya aktif berkontribusi dalam komunitas teknologi
                sebagai Public Speaker di 20+ event dan telah berhasil mendaftarkan 2 Hak Kekayaan Intelektual (HKI)
                untuk aplikasi AI yang saya kembangkan. Saya percaya bahwa teknologi dapat membuat perbedaan
                positif dalam kehidupan masyarakat.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
