import { Experience } from "../../data/experiences";
import { Category } from "../../data/skills";
import { tagColorSystem } from "../../data/skills";
import SkillTag from "../skill/SkillTag";
import { IoCalendarOutline } from "react-icons/io5";
import { motion } from "framer-motion";

interface ExperienceItemProps {
  experience: Experience;
}

// bg-gradient-to-tr from-[#1B2532] to-[#222E3C]

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex basis-1/2 flex-col gap-4 md:gap-6 px-8 py-6 rounded-lg
       bg-gradient-to-br from-slate-900 to-slate-800
        border-2 border-white/5
        hover:border-purple-500/40
        transition-all duration-300 ease-in-out
        hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/10"
    >
      <div className="flex flex-col justify-between">
        <div className="flex items-center justify-between w-full gap-2">
          <h4 className="text-2xl font-semibold text-white">
            {experience.title}
          </h4>
          <div className="flex items-center justify-end ml-auto text-right gap-2">
            <IoCalendarOutline className="hidden md:block text-xl text-teal-500 text-right" />
            <h4 className="text-gray-400 text-sm text-center md:text-right">
              {experience.period}
            </h4>
          </div>
        </div>
      </div>
      <p className="basis-1/3 text-sm  text-gray-300">{experience.company}</p>
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
    </motion.div>
  );
}
