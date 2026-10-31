import SkillCard from '@/components/SkillCard';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 mb-8">
        This about page shares more information about my background and work as a developer.
      </p>

      <h3 className="text-2xl font-bold mb-4">My Technical Skills</h3>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <SkillCard skillName="Next.js" level="Intermediate" category="Framework" />
        <SkillCard skillName="React" level="Advanced" category="Library" />
        <SkillCard skillName="Tailwind CSS" level="Advanced" category="Styling" />
      </div>
    </main>
  );
}