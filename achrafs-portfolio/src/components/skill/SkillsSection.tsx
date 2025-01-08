import { skills } from "../../data/skills";
import SkillCard from "./SkillCard";

export default function SkillsSection() {
  const sortedSkills = skills.sort((a, b) => b.skills.length - a.skills.length);
  return (
    <section
      className="flex flex-col items-center  gap-20 md:gap-20 mt-4 md:mt-36 py-6 md:py-12"
      id="skills"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-5xl font-semibold text-dark-text-primary text-center">
          Technical Skills
        </h2>
      </div>
      <section className="grid grid-cols-2 lg:grid-cols-3 grid-auto-rows-[minmax(auto, 1fr)] gap-8 mx-auto w-full max-w-7xl">
        {sortedSkills
          .filter((skill) => skill.category !== "other")
          .map((skill) => (
            <SkillCard category={skill.category} skills={skill.skills} />
          ))}
        {
          <SkillCard
            category="other"
            skills={
              sortedSkills.find((skill) => skill.category === "other")
                ?.skills || []
            }
          />
        }
      </section>
    </section>
  );
}
