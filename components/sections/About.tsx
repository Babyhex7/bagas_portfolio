'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Code, Award, Users, Sparkles, Briefcase, GraduationCap } from 'lucide-react';
import Image from 'next/image';

export function About() {
  const stats = [
    { icon: Code, label: 'Projects', value: '15+', color: 'cosmic-purple' },
    { icon: Award, label: 'HKI Terdaftar', value: '2', color: 'cosmic-pink' },
    { icon: Users, label: 'Public Speaking', value: '25+', color: 'cosmic-blue' },
    { icon: Briefcase, label: 'Tech Events', value: '30+', color: 'green-500' },
  ];

  const expertise = [
    { title: 'Fullstack Development', tech: 'React.js, Node.js, Flutter, Golang' },
    { title: 'Database Management', tech: 'MySQL, PostgreSQL, MongoDB, Firebase' },
    { title: 'AI & Machine Learning', tech: 'Python, TensorFlow, OpenAI API' },
    { title: 'Cloud & DevOps', tech: 'REST API, Docker, Microservices' },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-space-light to-space-dark">
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
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Fullstack Developer & AI Enthusiast dari Universitas Pendidikan Indonesia
          </p>
        </motion.div>

        {/* Main Content: Photo Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cosmic-purple to-cosmic-pink rounded-2xl blur-2xl opacity-20 animate-pulse-slow" />
              
              {/* Photo Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-cosmic-purple/30 bg-gradient-to-br from-space-light to-space-dark">
                {/* Placeholder for your photo */}
                <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-cosmic-purple/10 to-cosmic-pink/10">
                  <div className="text-center p-8">
                    <GraduationCap className="w-32 h-32 mx-auto mb-4 text-cosmic-purple opacity-50" />
                    <p className="text-gray-400 text-sm">
                      Letakkan foto Anda di:<br />
                      <code className="text-cosmic-purple text-xs">
                        /public/assets/images/profile.jpg
                      </code>
                    </p>
                  </div>
                </div>
                {/* Uncomment dan ganti path setelah foto diupload */}
                {/* <Image
                  src="/assets/images/profile.jpg"
                  alt="Bagas Adhi Nugraha"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                  priority
                /> */}
              </div>

              {/* Floating Decoration */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cosmic-pink/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-cosmic-blue/20 rounded-full blur-3xl" />
            </div>
          </motion.div>

          {/* Right: Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">Bagas Adhi Nugraha</h3>
              <p className="text-xl text-cosmic-purple font-semibold mb-4">
                Fullstack Developer & AI Enthusiast
              </p>
              <div className="flex items-center gap-2 text-gray-400 mb-6">
                <GraduationCap className="w-5 h-5" />
                <span>S1 Rekayasa Perangkat Lunak - UPI</span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed">
                Mahasiswa S1 Rekayasa Perangkat Lunak, Universitas Pendidikan Indonesia (UPI) dengan keahlian 
                di bidang <span className="text-cosmic-purple font-semibold">Web dan Mobile Development</span> berbasis 
                Fullstack Architecture.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Menguasai teknologi <span className="text-cosmic-pink font-semibold">Javascript, React.js, Node.js, 
                Flutter, Golang, Python, MySQL</span>, serta berpengalaman dalam penerapan AI dan sistem backend kompleks.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Terbukti melalui berbagai proyek bersertifikat HKI, aplikasi berbasis AI, serta sistem digital berbasis 
                REST API dan arsitektur cloud. Memiliki kemampuan project management, problem solving, debugging, 
                dan komunikasi tim lintas bidang.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Aktif dalam organisasi, public speaking, serta kerap menjadi <span className="text-cosmic-blue font-semibold">
                pembicara dan moderator di lebih dari 25+ kegiatan kampus</span>.
              </p>
            </div>
          </motion.div>
        </div>

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
              <Card className="text-center hover:scale-105 transition-transform">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-${stat.color}/20 flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cosmic-purple to-cosmic-pink bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Expertise Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Expertise & Technologies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-cosmic-purple mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.tech}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
