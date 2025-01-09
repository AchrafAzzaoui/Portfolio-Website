import { skills } from "../../data/skills";
import SkillCard from "./SkillCard";
export default function SkillsSection() {
  const sortedSkills = skills.sort((a, b) => b.skills.length - a.skills.length);
  return (
    <section
      className="flex flex-col items-center gap-12 mt-16 md:mt-36"
      id="skills"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-5xl font-semibold text-dark-text-primary text-center">
          Technical Skills
        </h2>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-full max-w-7xl">
        {sortedSkills
          .filter((skill) => skill.category !== "other")
          .map((skill) => (
            <SkillCard
              key={skill.category}
              category={skill.category}
              skills={skill.skills}
            />
          ))}
        <SkillCard
          key="other"
          category="other"
          skills={
            sortedSkills.find((skill) => skill.category === "other")?.skills ||
            []
          }
        />
      </section>
    </section>
  );
}
