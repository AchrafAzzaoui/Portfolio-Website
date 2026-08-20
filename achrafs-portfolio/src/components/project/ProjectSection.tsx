import { useState } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const HIGHLIGHT_COUNT = 3;

export default function ProjectSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll
    ? projects
    : projects.slice(0, HIGHLIGHT_COUNT);
  const hiddenCount = projects.length - HIGHLIGHT_COUNT;

  return (
    <section
      className="flex flex-col items-center gap-12 mt-16 md:mt-36"
      id="projects"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-4 md:gap-6">
          <h2 className="text-5xl font-semibold text-fg mb-6 md:mb-12 text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-full max-w-7xl items-stretch">
            {visibleProjects.map((project) => (
              <ProjectCard
                {...project}
                projectSkills={project.skills}
                key={project.id}
              />
            ))}
          </div>
          {hiddenCount > 0 && (
            <div className="flex justify-center">
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className="text-accent-soft hover:text-accent-faint transition-colors font-medium py-2"
              >
                {showAll ? "Show less" : `Show all (${projects.length})`}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
