import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import FocusTrap from "focus-trap-react";
import { IoClose } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { Skill, tagColorSystem } from "../../data/skills";
import SkillTag from "../skill/SkillTag";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  projectSkills: Skill[];
  githubLink?: string;
  demoLink?: string;
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  projectSkills,
  githubLink,
  demoLink,
}: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return createPortal(
    <FocusTrap>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-overlay/60 backdrop-blur-sm"
                onClick={onClose}
              />

              <motion.div
                ref={modalRef}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="card-surface w-[90%] max-w-2xl rounded-card shadow-lg relative"
              >
                <div className="p-8 flex flex-col gap-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-3xl font-display text-fg font-semibold">
                      {title}
                    </h3>
                    <button
                      onClick={onClose}
                      className="text-fg-secondary hover:text-fg transition-colors"
                    >
                      <IoClose className="text-2xl" />
                    </button>
                  </div>

                  <p className="text-fg-secondary">{description}</p>

                  <div className="flex flex-wrap gap-2">
                    {projectSkills.map((skill) => (
                      <SkillTag
                        key={skill.name}
                        bgColor={tagColorSystem[skill.category].background}
                        textColor={tagColorSystem[skill.category].text}
                      >
                        {skill.name}
                      </SkillTag>
                    ))}
                  </div>

                  <div className="flex mt-auto">
                    {githubLink && (
                      <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex basis-1/2 items-center gap-4 text-accent-soft hover:text-accent-faint transition-colors text-lg font-display font-extralight"
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
                        className="flex basis-1/2 justify-center items-center gap-4 text-accent-soft hover:text-accent-faint transition-colors text-lg font-display font-extralight"
                      >
                        <CiGlobe className="text-xl" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </FocusTrap>,
    document.body
  );
}
