interface SkillCardProps {
  skillName: string;
  level: string;
  category: string;
}

export default function SkillCard({ skillName, level, category }: SkillCardProps) {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
        {category}
      </span>
      <h4 className="text-lg font-bold mt-2 text-gray-800">{skillName}</h4>
      <p className="text-sm text-gray-600 mt-1">Proficiency: {level}</p>
    </div>
  );
}