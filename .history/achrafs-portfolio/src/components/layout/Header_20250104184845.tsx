import { useState, useEffect } from "react";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

// Animation variants
const menuVariants = {
  closed: { x: "-100%", opacity: 0 },
  open: { x: 0, opacity: 1 },
};

const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm shadow-[0_4px_10px_rgba(0,0,0,0.3)] border-b transition-shadow duration-300 border-white/10 px-2 xl:px-10 py-5">
        <nav className="flex">
          {/* Your existing nav content */}
          <div className="md:hidden basis-3/16 flex-auto flex justify-end px-8 items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-4xl text-dark-text-primary"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <motion.div
                animate={isMenuOpen ? "open" : "closed"}
                className="relative"
              >
                {isMenuOpen ? <HiX /> : <HiMenu />}
              </motion.div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Portal */}
      {createPortal(
        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black/60 z-40"
                variants={overlayVariants}
                initial="closed"
                animate="open"
                exit="closed"
                onClick={() => setIsMenuOpen(false)}
                transition={{ duration: 0.3 }}
              />

              {/* Menu Panel */}
              <motion.div
                className="fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-[#0A0E1C] text-white z-50 flex flex-col px-6 py-8"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                transition={{ type: "tween", duration: 0.3 }}
              >
                <div className="flex flex-col space-y-6">
                  <a
                    href="#about"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-medium text-white hover:text-purple-400 transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#skills"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-medium text-white hover:text-purple-400 transition-colors"
                  >
                    Skills
                  </a>
                  <a
                    href="#projects"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-medium text-white hover:text-purple-400 transition-colors"
                  >
                    Projects
                  </a>
                </div>

                <div className="mt-auto">
                  <div className="flex justify-center gap-6 mb-6">
                    <a
                      href="https://github.com/AchrafAzzaoui"
                      className="text-white hover:text-purple-400 transition-colors"
                    >
                      <FaGithub className="text-3xl" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/achraf-azzaoui-data-scientist"
                      className="text-white hover:text-purple-400 transition-colors"
                    >
                      <RxLinkedinLogo className="text-3xl" />
                    </a>
                  </div>

                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 transition-colors rounded text-white font-medium"
                  >
                    Contact
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
