import { Achievements } from '@/components/sections/Achievements';
import { achievements } from '@/data/achievements';

export default function AchievementsPage() {
  return (
    <div className="pt-20">
      <Achievements achievements={achievements} />
    </div>
  );
}
