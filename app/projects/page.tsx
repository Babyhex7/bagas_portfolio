import { Projects } from '@/components/sections/Projects';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <Projects projects={projects} />
    </div>
  );
}
