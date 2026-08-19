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
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FocusTrap>
            <div className="flex items-center justify-center min-h-screen px-4 text-center">
              <div
                className="fixed inset-0 bg-overlay/60 backdrop-blur-sm"
                onClick={onClose}
              />

              <div
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title"
                className="card-surface w-[90%] max-w-2xl rounded-card shadow-lg relative"
              >
                <div className="p-8 flex flex-col gap-6">
                  <div className="flex justify-between items-start">
                    <h3
                      id="project-modal-title"
                      className="text-3xl font-display text-fg font-semibold"
                    >
                      {title}
                    </h3>
                    <button
                      type="button"
                      aria-label="Close"
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
              </div>
            </div>
          </FocusTrap>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
