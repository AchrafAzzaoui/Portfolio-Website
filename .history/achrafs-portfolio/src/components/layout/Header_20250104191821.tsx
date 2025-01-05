import { useState, useEffect } from "react";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const menuVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
  exit: { x: "-100%" },
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

  // Handle scroll lock
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
          <div className="basis-3/16 flex-auto flex justify-start pl-4 md:pl-0 md:justify-center items-center font-display font-bold text-dark-text-primary">
            <a href="#home">
              <h2 className="text-[1.4rem] md:text-2xl transition-transform duration-300 hover:-translate-y-0.5">
                Achraf Azzaoui
              </h2>
            </a>
          </div>
          <div className="hidden md:flex basis-7/16 flex-auto flex justify-evenly items-center">
            <a
              href="#about"
              className="font-sans font-medium text-dark-text-primary text-lg transition-transform duration-300 hover:-translate-y-0.5"
            >
              About
            </a>
            <a
              href="#skills"
              className="font-sans font-medium text-dark-text-primary text-lg transition-transform duration-300 hover:-translate-y-0.5"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="font-sans font-medium text-dark-text-primary text-lg transition-transform duration-300 hover:-translate-y-0.5"
            >
              Projects
            </a>
          </div>
          <div className="hidden md:flex basis-6/16 flex-auto justify-evenly items-center">
            <a href="https://www.linkedin.com/in/achraf-azzaoui-data-scientist">
              <RxLinkedinLogo className="text-3xl rounded-sm text-dark-text-primary hover:text-dark-text-customcolor hover:scale-110" />
            </a>
            <a href="https://github.com/AchrafAzzaoui">
              <FaGithub className="text-3xl rounded-full text-dark-text-primary hover:text-dark-text-customcolor hover:scale-110" />
            </a>
            <button
              style={{
                zIndex: 10,
                border: "2px solid #8B5CF6",
                position: "relative",
                borderRadius: "0.275rem",
                overflow: "hidden",
              }}
              className="
                inline-block px-7 py-2 font-semibold font-display bg-transparent text-white group
                hover:border-purple-500
                before:absolute before:content-[''] before:inset-0
                before:-translate-x-full before:bg-gradient-to-r before:from-purple-600
                before:to-purple-800 before:z-0
                before:transition-transform before:duration-300 before:ease-out
                hover:before:translate-x-0
              "
            >
              <span className="relative z-10 text-lg">Contact</span>
            </button>
          </div>
          <div className="md:hidden basis-3/16 flex-auto flex justify-end px-8 items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-4xl text-dark-text-primary relative z-50"
            >
              {isMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </nav>
      </header>

      {createPortal(
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black/60 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Menu Panel */}

              <motion.div
                className="
    fixed top-0 left-0 
    w-3/4 sm:w-1/2 
    h-full bg-[#0A0E1C] text-white z-50
    flex flex-col overflow-y-auto
  "
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Use smaller, or breakpoint-based, padding */}
                <div className="flex flex-col h-full px-4 py-10">
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

                  {/* Push icons/buttons to the bottom but ensure there's scrolling if needed */}
                  <div className="mt-auto flex flex-col">
                    <div className="flex justify-center gap-6 mb-8">
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
                      className="
          w-full py-3 bg-purple-600 
          hover:bg-purple-700 transition-colors
          rounded text-white font-medium
        "
                    >
                      Contact
                    </button>
                  </div>
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
