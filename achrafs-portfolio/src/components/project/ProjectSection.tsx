import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const updateItemsPerPage = () => {
    if (window.innerWidth < 768) {
      setItemsPerPage(1);
    } else if (window.innerWidth < 1024) {
      setItemsPerPage(2);
    } else {
      setItemsPerPage(3);
    }
  };
  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentProjects = projects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section
      className="flex flex-col items-center gap-12 mt-16 md:mt-36"
      id="projects"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div
          className="flex flex-col gap-4 md:gap-6 align-middle"
          id="projects"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <h2 className="text-5xl font-semibold text-dark-text-primary mb-12 text-center">
                Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-auto-rows-[minmax(auto, 1fr)] gap-8 mx-auto w-full max-w-7xl items-stretch">
                {currentProjects?.map((project) => (
                  <ProjectCard
                    {...project}
                    projectSkills={project.skills}
                    key={project.id}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center items-center space-x-8">
            <button
              onClick={prevPage}
              className="p-2 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-6 h-6 text-gray-400" />
            </button>

            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentPage === idx ? "bg-blue-500" : "bg-gray-600"
                  }`}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              className="p-2 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
              aria-label="Next page"
            >
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
