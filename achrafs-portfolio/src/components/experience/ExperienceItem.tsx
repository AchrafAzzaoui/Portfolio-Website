import { Experience } from "../../data/experiences";
import SkillTag from "../skill/SkillTag";
import { IoCalendarOutline } from "react-icons/io5";

interface ExperienceItemProps {
  experience: Experience;
}
type Category = "frontend" | "backend" | "database" | "devops" | "ml";

const tagColorSystem: Record<Category, { background: string; text: string }> = {
  frontend: {
    background: "bg-emerald-400/20",
    text: "text-emerald-300",
  },
  backend: {
    background: "bg-sky-400/20",
    text: "text-sky-300",
  },
  database: {
    background: "bg-fuchsia-400/20",
    text: "text-fuchsia-300",
  },
  devops: {
    // lowercase to match data
    background: "bg-amber-400/20",
    text: "text-amber-300",
  },
  ml: {
    background: "bg-rose-400/20",
    text: "text-rose-300",
  },
};

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div
      className="flex flex-col gap-4 md:gap-6 px-4 py-4 rounded-lg
      bg-gradient-to-tr from-[#1B2532] to-[#222E3C]
      border-2 border-white/5 hover:border-purple-500/40
      transition-all duration-300 ease-in-out
      hover:scale-[1.01] hover:shadow-lg hover:shadow-purple-500/10"
    >
      <div className="flex justify-between gap-2">
        <div className="flex justify-start basis-1/3 gap-2 md:gap-2 text-sm font-semibold text-dark-text-primary text-center ">
          <IoCalendarOutline className="text-xl inline-block text-teal-500" />
          <h4 className="">{experience.period}</h4>
        </div>
        <h4 className="basis-1/3 text-sm font-semibold text-dark-text-primary text-center">
          {experience.title}
        </h4>
        <h4 className="basis-1/3 text-sm font-semibold text-dark-text-primary text-center">
          {experience.company}
        </h4>
      </div>
      <p className="text-dark-text-secondary text-sm">
        {experience.description}
      </p>
      <div className="inline-flex flex-wrap gap-2">
        {Array.from(experience.skills.entries()).map(([skill, category]) => (
          <SkillTag
            key={skill}
            bgColor={tagColorSystem[category as Category].background}
            textColor={tagColorSystem[category as Category].text}
            className="w-fit"
          >
            {skill}
          </SkillTag>
        ))}
      </div>
    </div>
  );
}
