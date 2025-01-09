import { Skill, skills } from "../../data/skills";
import { tagColorSystem } from "../../data/skills";
import SkillTag from "../skill/SkillTag";
import { Category } from "../../data/skills";
import { FiArrowRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { useState } from "react";
import { getImageUrl } from "../../utils/getImageUrl";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  projectSkills: Skill[];
  githubLink?: string;
  demoLink?: string;
}

export default function ProjectCard({
  image,
  title,
  description,
  projectSkills,
  githubLink,
  demoLink,
}: ProjectCardProps) {
  const seenNames = new Set<string>();
  const relevantSkills = new Set<Skill>();
  skills
    .flatMap((category) => category.skills)
    .forEach((skill) => {
      const isFound = projectSkills.some((ps) => ps.name === skill.name);
      const isDuplicate = seenNames.has(skill.name);
      if (isFound && !isDuplicate) {
        seenNames.add(skill.name);
        relevantSkills.add(skill);
      }
    });

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="card-gradient-hover aspect-[5/6] flex flex-col space-between rounded-[1.6rem] shadow-lg pb-4">
        <div className="aspect-video h-[40%] relative overflow-hidden rounded-t-[1.6rem]">
          <img
            src={getImageUrl(image)}
            alt={title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>
        <div className="px-6 py-3 flex-1 flex flex-col justify-between gap-4">
          <h3 className="text-3xl font-display text-dark-text-primary font-semibold mt-4 mb-6">
            {title}
          </h3>
          {/* <p className="text-md text-dark-text-secondary">{description}</p> */}

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            See more <FiArrowRight className="text-lg" />
          </button>
          <div className="flex flex-wrap gap-2">
            {Array.from(relevantSkills).map((skill) => (
              <SkillTag
                key={skill.name}
                bgColor={tagColorSystem[skill.category as Category].background}
                textColor={tagColorSystem[skill.category as Category].text}
              >
                {skill.name}
              </SkillTag>
            ))}
          </div>
          <div className="flex">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex basis-1/2 ml-2 items-center gap-4 text-purple-400 hover:text-purple-300 transition-colors text-lg font-display font-extralight"
              >
                <FaGithub className="text-xl" />
                <span>View Code</span>
              </a>
            )}
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex basis-1/2 justify-center items-center gap-4 text-purple-400 hover:text-purple-300 transition-colors text-lg font-display font-extralight"
              >
                <CiGlobe className="text-xl" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        projectSkills={projectSkills}
        githubLink={githubLink}
        demoLink={demoLink}
      />
    </>
  );
}
