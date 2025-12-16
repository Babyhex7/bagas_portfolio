import { Skills } from '@/components/sections/Skills';
import { skills } from '@/data/skills';

export default function SkillsPage() {
  return (
    <div className="pt-20">
      <Skills skills={skills} />
    </div>
  );
}
