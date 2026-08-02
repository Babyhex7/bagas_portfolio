import { Experience } from '@/components/sections/Experience';
import { experience } from '@/data/experience';

export default function ExperiencePage() {
  return (
    <div className="pt-20">
      <Experience experience={experience} />
    </div>
  );
}
