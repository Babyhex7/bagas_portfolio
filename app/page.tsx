import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { Achievements } from '@/components/sections/Achievements';
import { Contact } from '@/components/sections/Contact';
import { projects } from '@/data/projects';
import { experience } from '@/data/experience';
import { skills } from '@/data/skills';
import { achievements } from '@/data/achievements';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects projects={projects} />
      <Experience experience={experience} />
      <Skills skills={skills} />
      <Achievements achievements={achievements} />
      <Contact />
    </>
  );
}
