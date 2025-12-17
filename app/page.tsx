import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Achievements } from '@/components/sections/Achievements';
import { Contact } from '@/components/sections/Contact';
import { projects } from '@/data/projects';
import { skills } from '@/data/skills';
import { achievements } from '@/data/achievements';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Achievements achievements={achievements} />
      <Contact />
    </>
  );
}
