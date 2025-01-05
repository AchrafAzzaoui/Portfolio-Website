import { useState } from "react";
import { useEffect } from "react";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const variants = {
  hidden: { x: "-100%" }, // Slide in from left
  visible: { x: 0 },
  exit: { x: "-100%" },
};
const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className=" fixed top-0 left-0 right-0 z-50 backdrop-blur-sm  shadow-[0_4px_10px_rgba(0,0,0,0.3)] border-b transition-shadow duration-300 border-white/10 px-2 xl:px-10 py-5">
        <nav className="flex ">
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
                zIndex: 10, // Ensure proper layering
                border: "2px solid #8B5CF6", // Purple border
                position: "relative", // For proper positioning of pseudo-elements
                borderRadius: "0.275rem", // Match the border-radius
                overflow: "hidden", // Clip pseudo-element overflow
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
              onClick={() => setIsMenuOpen((prevMenuOpen) => !prevMenuOpen)}
              className="text-4xl text-dark-text-primary"
            >
              {isMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </nav>
        {/* Mobile navigation */}
        {createPortal(
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                key="mobileNav"
                className="fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-[#0A0E1C] text-white z-50 px-6 py-8"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={overlayVariants}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Menu Panel */}
                <motion.div
                  className="fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-[#0A0E1C] text-white z-50 flex flex-col px-6 py-8"
                  variants={menuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  transition={{ type: "tween", duration: 0.3 }}
                >
                  <div
                    className={`md:hidden ${
                      isMenuOpen ? "flex" : "hidden"
                    } absolute top-full left-0 w-full flex-col justify-between items-center z-50`}
                  >
                    <a
                      href="#about"
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full mt-2 py-2 text-center font-sans font-medium text-dark-text-primary text-lmd"
                    >
                      About
                    </a>
                    <a
                      href="#skills"
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full py-2 text-center font-sans font-medium text-dark-text-primary text-md"
                    >
                      Skills
                    </a>
                    <a
                      href="#projects"
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full py-2 text-center font-sans font-medium text-dark-text-primary text-md"
                    >
                      Projects
                    </a>
                    <div className="flex justify-center gap-3 items-center w-full mt-2">
                      <FaGithub className="text-3xl rounded-full text-dark-text-primary hover:text-dark-text-customcolor hover:scale-110" />
                      <RxLinkedinLogo className="text-3xl rounded-sm text-dark-text-primary hover:text-dark-text-customcolor hover:scale-110" />
                    </div>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      style={{
                        zIndex: 10, // Ensure proper layering
                        border: "2px solid #8B5CF6", // Purple border
                        position: "relative", // For proper positioning of pseudo-elements
                        borderRadius: "0rem", // Match the border-radius
                        overflow: "hidden", // Clip pseudo-element overflow
                      }}
                      className="
    mt-5 inline-block px-5 py-[0.4rem] font-bold font-display bg-transparent text-white group
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
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
      </header>
    </>
  );
}
