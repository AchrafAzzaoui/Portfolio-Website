// Header.tsx
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

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
      <header
        className={`sticky top-0 left-0 right-0 z-40 shadow-header border-b transition-all duration-300 border-line/10 px-2 xl:px-10 py-5 ${
          isScrolled ? "bg-page" : "bg-transparent"
        }`}
      >
        <nav className="flex">
          <div className="basis-3/16 flex-auto flex justify-start pl-4 md:pl-0 md:justify-center items-center font-display font-bold text-fg">
            <a href="#home">
              <h2 className="text-brand md:text-2xl transition-transform duration-300 hover:-translate-y-0.5">
                Achraf Azzaoui
              </h2>
            </a>
          </div>
          <div className="hidden md:flex basis-7/16 flex-auto flex justify-evenly items-center">
            <a
              href="#about"
              className="font-sans font-medium text-fg text-lg transition-transform duration-300 hover:-translate-y-0.5"
            >
              About
            </a>
            <a
              href="#experience"
              className="font-sans font-medium text-fg text-lg transition-transform duration-300 hover:-translate-y-0.5"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="font-sans font-medium text-fg text-lg transition-transform duration-300 hover:-translate-y-0.5"
            >
              Projects
            </a>
          </div>
          <div className="hidden md:flex basis-6/16 flex-auto justify-evenly items-center">
            <a href="https://www.linkedin.com/in/achraf-azzaoui-data-scientist">
              <RxLinkedinLogo className="text-3xl rounded-sm text-fg hover:text-accent hover:scale-110" />
            </a>
            <a href="https://github.com/AchrafAzzaoui">
              <FaGithub className="text-3xl rounded-full text-fg hover:text-accent hover:scale-110" />
            </a>
            <a
              href="#contact"
              className="group relative z-10 inline-block overflow-hidden rounded-[0.275rem] border-2 [border-color:rgb(var(--color-accent))] bg-transparent px-7 py-2 font-display font-semibold text-fg before:absolute before:inset-0 before:z-0 before:content-[''] before:-translate-x-full before:bg-gradient-to-r before:from-accent-strong before:to-accent-deep before:transition-transform before:duration-300 before:ease-out hover:before:translate-x-0"
            >
              <span className="relative z-10 text-lg">Contact</span>
            </a>
          </div>
          <div className="md:hidden basis-3/16 flex-auto flex justify-end px-8 items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-4xl text-fg relative z-50"
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
              <motion.div
                className="fixed inset-0 bg-page z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
              />

              <motion.div
                className="fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-page text-fg z-50 flex flex-col"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="flex flex-col px-6 py-20">
                  <div className="flex flex-col space-y-6">
                    <a
                      href="#about"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-xl font-medium text-fg hover:text-accent-soft transition-colors"
                    >
                      About
                    </a>
                    <a
                      href="#skills"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-xl font-medium text-fg hover:text-accent-soft transition-colors"
                    >
                      Skills
                    </a>
                    <a
                      href="#projects"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-xl font-medium text-fg hover:text-accent-soft transition-colors"
                    >
                      Projects
                    </a>
                  </div>

                  <div className="mt-auto py-40">
                    <div className="flex justify-center gap-6 mb-8">
                      <a
                        href="https://github.com/AchrafAzzaoui"
                        className="text-fg hover:text-accent transition-colors hover:scale-110"
                      >
                        <FaGithub className="text-3xl" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/achraf-azzaoui-data-scientist"
                        className="text-fg hover:text-accent transition-colors hover:scale-110"
                      >
                        <RxLinkedinLogo className="text-3xl" />
                      </a>
                    </div>
                    <a
                      href="#contact"
                      className="no-underline"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      <button
                        onClick={() => setIsMenuOpen(false)}
                        className="w-full py-3 bg-accent-strong hover:bg-accent-deep transition-colors rounded text-fg font-medium"
                      >
                        Contact
                      </button>
                    </a>
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
