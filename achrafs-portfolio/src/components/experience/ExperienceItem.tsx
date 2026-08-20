import { Experience } from "../../data/experiences";
import { Category } from "../../data/skills";
import { tagColorSystem } from "../../data/skills";
import SkillTag from "../skill/SkillTag";
import { IoCalendarOutline } from "react-icons/io5";
import { motion } from "framer-motion";

interface ExperienceItemProps {
  experience: Experience;
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex basis-1/2 flex-col gap-4 md:gap-6 px-8 py-6 card-surface"
    >
      <div className="flex flex-col justify-between">
        <div className="flex items-center justify-between w-full gap-2">
          <h4 className="text-2xl font-semibold text-fg">
            {experience.title}
          </h4>
          <div className="flex items-center justify-end ml-auto text-right gap-2">
            <IoCalendarOutline className="hidden md:block text-xl text-fg-muted text-right" />
            <h4 className="text-fg-muted text-sm text-center md:text-right">
              {experience.period}
            </h4>
          </div>
        </div>
      </div>
      <p className="basis-1/3 text-sm text-fg-secondary">{experience.company}</p>
      <p className="text-fg-secondary text-sm">
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
    </motion.div>
  );
}
