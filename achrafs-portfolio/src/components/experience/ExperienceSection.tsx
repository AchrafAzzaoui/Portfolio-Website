import ExperienceItem from "./ExperienceItem";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Experience, experiences } from "../../data/experiences";
import { useState } from "react";

const ITEMS_PER_PAGE = 2;

export default function ExperienceSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(experiences.length / ITEMS_PER_PAGE);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentExperiences = experiences.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <div className="flex flex-col gap-4 md:gap-6 align-middle" id="experience">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          <h2 className="text-5xl font-semibold text-dark-text-primary font-sans text-center mb-12">
            Experience
          </h2>
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6">
            {currentExperiences?.map((experience) => (
              <ExperienceItem key={experience.id} experience={experience} />
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
  );
}
